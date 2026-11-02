/* ============================================
   Admin Terminal Dashboard
   ============================================
   Terminal-inspired command center with:
   - Message Inbox (real-time from Firestore)
   - Admin actions (mark read, delete)
   ============================================ */

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  collection,
  query,
  orderBy,
  onSnapshot,
  doc,
  updateDoc,
  deleteDoc,
  type Timestamp,
} from "firebase/firestore";
import { db } from "../../config/firebase";
import { useAuth } from "../../providers/auth-context";
import { useToast } from "../../components/Toast";
import "./AdminDashboard.css";

/* ---- Types ---- */
interface Message {
  id: string;
  senderEmail: string;
  subject: string;
  message: string;
  timestamp: Timestamp | null;
  status: "unread" | "read";
}

/* ---- Stagger variants ---- */
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05, delayChildren: 0.1 },
  },
};

const staggerItem = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.25 } },
};

/* ============ MAIN DASHBOARD ============ */
export default function AdminDashboard() {
  const { user, signOut } = useAuth();
  const { addToast } = useToast();
  const [messages, setMessages] = useState<Message[]>([]);
  const [loadingMessages, setLoadingMessages] = useState(true);
  const [selectedMsg, setSelectedMsg] = useState<Message | null>(null);

  /* Real-time Firestore listener for messages */
  useEffect(() => {
    const q = query(collection(db, "messages"), orderBy("timestamp", "desc"));
    const unsub = onSnapshot(
      q,
      (snapshot) => {
        const msgs = snapshot.docs.map((d) => ({
          id: d.id,
          ...d.data(),
        })) as Message[];
        setMessages(msgs);
        setLoadingMessages(false);
      },
      (error) => {
        console.error("Firestore listener error:", error);
        setLoadingMessages(false);
        addToast({ type: "error", title: "Failed to load messages" });
      },
    );
    return unsub;
  }, [addToast]);

  const openMessage = (msg: Message) => {
    setSelectedMsg(msg);
    if (msg.status === "unread") markAsRead(msg);
  };

  const markAsRead = async (msg: Message) => {
    try {
      await updateDoc(doc(db, "messages", msg.id), { status: "read" });
      addToast({ type: "info", title: "Marked as read" });
    } catch {
      addToast({ type: "error", title: "Failed to update" });
    }
  };

  const deleteMessage = async (msgId: string) => {
    try {
      await deleteDoc(doc(db, "messages", msgId));
      if (selectedMsg?.id === msgId) setSelectedMsg(null);
      addToast({ type: "info", title: "Message deleted" });
    } catch {
      addToast({ type: "error", title: "Failed to delete" });
    }
  };

  const unreadCount = messages.filter((m) => m.status === "unread").length;

  return (
    <div className="admin-dashboard">
      {/* ---- Terminal Header ---- */}
      <header className="admin-header glass-panel">
        <div className="admin-header__left">
          <div className="admin-header__dots" aria-hidden="true">
            <span className="admin-header__dot admin-header__dot--red" />
            <span className="admin-header__dot admin-header__dot--yellow" />
            <span className="admin-header__dot admin-header__dot--green" />
          </div>
          <span className="admin-header__title">
            <span className="admin-header__badge">root</span>
            admin — inbox
          </span>
        </div>
        <div className="admin-header__right">
          {user?.photoURL && (
            <img
              src={user.photoURL}
              alt=""
              className="admin-header__avatar"
              referrerPolicy="no-referrer"
            />
          )}
          <button className="admin-header__exit" onClick={signOut}>
            exit
          </button>
        </div>
      </header>

      {/* ---- Content ---- */}
      <motion.div
        className="admin-panel"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.25 }}
      >
        {/* Status bar */}
        <div className="admin-status-bar">
          <span className="admin-status-bar__item">
            <span className="admin-status-bar__dot admin-status-bar__dot--live" />
            Live — {messages.length} total messages
          </span>
          <span className="admin-status-bar__item">
            {unreadCount} unread
          </span>
        </div>

        {loadingMessages ? (
          <div
            className="admin-skeleton-list"
            aria-label="Loading messages"
          >
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="admin-skeleton-item shimmer" />
            ))}
          </div>
        ) : messages.length === 0 ? (
          <div className="admin-empty">
            <span className="admin-empty__icon">✉</span>
            <h4>No messages yet</h4>
            <p>
              Messages from the public contact form will appear here in
              real-time.
            </p>
          </div>
        ) : (
          <div className="admin-inbox">
            {/* Message list */}
            <div className="admin-inbox__list">
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
              >
                {messages.map((msg) => (
                  <motion.div
                    key={msg.id}
                    variants={staggerItem}
                    className={`admin-msg-row ${msg.status === "unread" ? "admin-msg-row--unread" : ""} ${selectedMsg?.id === msg.id ? "admin-msg-row--selected" : ""}`}
                    role="button"
                    tabIndex={0}
                    onClick={() => openMessage(msg)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") openMessage(msg);
                    }}
                  >
                    <div className="admin-msg-row__indicator">
                      {msg.status === "unread" && (
                        <span className="admin-msg-row__dot" />
                      )}
                    </div>
                    <div className="admin-msg-row__content">
                      <span className="admin-msg-row__email">
                        {msg.senderEmail}
                      </span>
                      <span className="admin-msg-row__subject">
                        {msg.subject}
                      </span>
                    </div>
                    <span className="admin-msg-row__time">
                      {msg.timestamp?.toDate?.()
                        ? msg.timestamp
                            .toDate()
                            .toLocaleDateString([], {
                              month: "short",
                              day: "numeric",
                            })
                        : "…"}
                    </span>
                    <button
                      className="admin-msg-row__delete"
                      onClick={(e) => {
                        e.stopPropagation();
                        deleteMessage(msg.id);
                      }}
                      title="Delete"
                      aria-label={`Delete message from ${msg.senderEmail}`}
                    >
                      ✕
                    </button>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Message detail pane */}
            <div className="admin-inbox__detail">
              {selectedMsg ? (
                <motion.div
                  key={selectedMsg.id}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.25 }}
                  className="admin-msg-detail"
                >
                  <div className="admin-msg-detail__header">
                    <h4>{selectedMsg.subject}</h4>
                    <span className="admin-msg-detail__from">
                      from: <strong>{selectedMsg.senderEmail}</strong>
                    </span>
                    <span className="admin-msg-detail__date">
                      {selectedMsg.timestamp?.toDate?.()
                        ? selectedMsg.timestamp.toDate().toLocaleString()
                        : "…"}
                    </span>
                  </div>
                  <div className="admin-msg-detail__body">
                    <p>{selectedMsg.message}</p>
                  </div>
                  <div className="admin-msg-detail__actions">
                    <a
                      href={`mailto:${selectedMsg.senderEmail}?subject=${encodeURIComponent(`Re: ${selectedMsg.subject}`)}`}
                      className="btn btn--solid btn--sm"
                    >
                      Reply via Email
                    </a>
                    <button
                      className="btn btn--ghost btn--sm"
                      onClick={() => deleteMessage(selectedMsg.id)}
                    >
                      Delete
                    </button>
                  </div>
                </motion.div>
              ) : (
                <div className="admin-msg-detail admin-msg-detail--empty">
                  <span className="admin-msg-detail__empty-icon">◈</span>
                  <p>Select a message to view</p>
                </div>
              )}
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
}

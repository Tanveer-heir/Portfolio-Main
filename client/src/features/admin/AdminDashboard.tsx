/* ============================================
   Admin Terminal Dashboard
   ============================================
   Terminal-inspired command center with:
   - Message Inbox (real-time from Firestore)
   - Traffic/Analytics dashboard (mock data)
   - Admin actions (mark read, delete)
   ============================================ */

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
import { useAuth } from "../../providers/AuthProvider";
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

/* ---- Mock analytics data ---- */
const MOCK_ANALYTICS = {
  totalVisitors: 2847,
  pageViews: 12540,
  avgSessionDuration: "3m 42s",
  bounceRate: "34.2%",
  topPages: [
    { path: "/projects", views: 3420, trend: "+12%" },
    { path: "/hackathons", views: 2180, trend: "+28%" },
    { path: "/research", views: 1950, trend: "+8%" },
    { path: "/hobby", views: 1340, trend: "+45%" },
    { path: "/about", views: 980, trend: "+5%" },
  ],
  topProjects: [
    { name: "Drug Access Dashboard", clicks: 340 },
    { name: "Building Heat Risk API", clicks: 280 },
    { name: "Custom Sensor Network PCB", clicks: 215 },
    { name: "Dharwad Land Degradation Mapper", clicks: 190 },
  ],
};

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

/* ============ STAT CARD ============ */
function StatCard({
  label,
  value,
  icon,
  accent,
}: {
  label: string;
  value: string | number;
  icon: string;
  accent?: string;
}) {
  return (
    <motion.div className="admin-stat" variants={staggerItem}>
      <span className="admin-stat__icon" style={{ color: accent }}>
        {icon}
      </span>
      <div className="admin-stat__content">
        <span className="admin-stat__value">
          {typeof value === "number" ? value.toLocaleString() : value}
        </span>
        <span className="admin-stat__label">{label}</span>
      </div>
    </motion.div>
  );
}

/* ============ MAIN DASHBOARD ============ */
export default function AdminDashboard() {
  const { user, signOut } = useAuth();
  const { addToast } = useToast();
  const [messages, setMessages] = useState<Message[]>([]);
  const [loadingMessages, setLoadingMessages] = useState(true);
  const [selectedMsg, setSelectedMsg] = useState<Message | null>(null);
  const [activeTab, setActiveTab] = useState<"inbox" | "analytics">("inbox");

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
  const now = new Date();
  const timeStr = now.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

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
            admin@ts.dev — command center
          </span>
        </div>
        <div className="admin-header__right">
          <span className="admin-header__time">{timeStr}</span>
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

      {/* ---- Tab Navigation ---- */}
      <nav className="admin-tabs">
        <button
          className={`admin-tab ${activeTab === "inbox" ? "admin-tab--active" : ""}`}
          onClick={() => setActiveTab("inbox")}
        >
          <span className="admin-tab__icon">✉</span>
          Inbox
          {unreadCount > 0 && (
            <span className="admin-tab__badge">{unreadCount}</span>
          )}
        </button>
        <button
          className={`admin-tab ${activeTab === "analytics" ? "admin-tab--active" : ""}`}
          onClick={() => setActiveTab("analytics")}
        >
          <span className="admin-tab__icon">◈</span>
          Analytics
        </button>
      </nav>

      {/* ---- Content ---- */}
      <AnimatePresence mode="wait">
        {activeTab === "inbox" ? (
          <motion.div
            key="inbox"
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
                        onClick={() => {
                          setSelectedMsg(msg);
                          if (msg.status === "unread") markAsRead(msg);
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
                          href={`mailto:${selectedMsg.senderEmail}?subject=Re: ${selectedMsg.subject}`}
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
        ) : (
          <motion.div
            key="analytics"
            className="admin-panel"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
          >
            {/* Analytics header */}
            <div className="admin-status-bar">
              <span className="admin-status-bar__item">
                <span className="admin-status-bar__dot admin-status-bar__dot--live" />
                Simulated data — connect analytics API for live data
              </span>
            </div>

            {/* Stat cards */}
            <motion.div
              className="admin-stats-grid"
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              <StatCard
                label="Total Visitors"
                value={MOCK_ANALYTICS.totalVisitors}
                icon="👤"
                accent="var(--color-accent-primary)"
              />
              <StatCard
                label="Page Views"
                value={MOCK_ANALYTICS.pageViews}
                icon="◈"
                accent="var(--color-violet)"
              />
              <StatCard
                label="Avg. Session"
                value={MOCK_ANALYTICS.avgSessionDuration}
                icon="⏱"
                accent="var(--color-success)"
              />
              <StatCard
                label="Bounce Rate"
                value={MOCK_ANALYTICS.bounceRate}
                icon="↩"
                accent="var(--color-warning)"
              />
            </motion.div>

            {/* Tables row */}
            <div className="admin-tables-row">
              {/* Top Pages */}
              <div className="admin-table-card glass">
                <h5 className="admin-table-card__title">Top Pages</h5>
                <table className="admin-table">
                  <thead>
                    <tr>
                      <th>Path</th>
                      <th>Views</th>
                      <th>Trend</th>
                    </tr>
                  </thead>
                  <tbody>
                    {MOCK_ANALYTICS.topPages.map((page) => (
                      <tr key={page.path}>
                        <td className="admin-table__path">{page.path}</td>
                        <td>{page.views.toLocaleString()}</td>
                        <td className="admin-table__trend">{page.trend}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Top Projects */}
              <div className="admin-table-card glass">
                <h5 className="admin-table-card__title">
                  Top Projects by Clicks
                </h5>
                <table className="admin-table">
                  <thead>
                    <tr>
                      <th>Project</th>
                      <th>Clicks</th>
                    </tr>
                  </thead>
                  <tbody>
                    {MOCK_ANALYTICS.topProjects.map((proj) => (
                      <tr key={proj.name}>
                        <td>{proj.name}</td>
                        <td>{proj.clicks}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

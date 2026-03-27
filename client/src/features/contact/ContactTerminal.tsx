/* ============================================
   Contact Terminal — Dual Interface
   ============================================
   Admin login  → Full command terminal with all messages
   Visitor login → Clean messaging interface
   ============================================ */

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  collection,
  addDoc,
  query,
  orderBy,
  onSnapshot,
  serverTimestamp,
  deleteDoc,
  doc,
  type Timestamp,
} from 'firebase/firestore';
import { db } from '../../config/firebase';
import { useAuth } from '../../providers/AuthProvider';
import { SectionHeading } from '../../components/SectionHeading';
import { Button } from '../../components/Button';
import './ContactTerminal.css';

/* ---- Types ---- */
interface ChatMessage {
  id: string;
  uid: string;
  displayName: string;
  photoURL: string | null;
  text: string;
  createdAt: Timestamp | null;
  isAdminReply?: boolean;
  replyToName?: string | null;
}

/* ---- Framer Motion Variants ---- */
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.2 },
  },
};

const messageVariants = {
  hidden: { opacity: 0, y: 16, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] as const },
  },
};

/* ============ AUTH GATE ============ */
function AuthGate() {
  const { signInWithGoogle } = useAuth();
  const [error, setError] = useState('');

  const handleSignIn = async () => {
    setError('');
    try {
      await signInWithGoogle();
    } catch {
      setError('Sign-in failed. Please allow popups and try again.');
    }
  };

  return (
    <motion.div
      className="contact-gate"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="contact-gate__card glass">
        {/* Scan line effect */}
        <div className="contact-gate__scanline" aria-hidden="true" />

        <div className="contact-gate__icon" aria-hidden="true">
          <span className="contact-gate__lock">◈</span>
        </div>

        <h3 className="contact-gate__title">Authentication Required</h3>
        <p className="contact-gate__subtitle">
          Sign in to access the messaging channel. Admin and visitors get different terminals.
        </p>

        <div className="contact-gate__terminal-line" aria-hidden="true">
          <span className="contact-gate__prompt">$</span>
          <span className="contact-gate__cmd">authenticate --provider google</span>
          <span className="contact-gate__cursor" />
        </div>

        {error && <p className="contact-gate__error">{error}</p>}

        <button
          className="btn btn--google btn--lg contact-gate__btn"
          onClick={handleSignIn}
          id="contact-google-signin"
        >
          <svg className="btn__google-icon" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
          </svg>
          <span className="btn__label">Sign in with Google</span>
        </button>
      </div>
    </motion.div>
  );
}

/* ============ VISITOR TERMINAL ============ */
function VisitorTerminal() {
  const { user, signOut } = useAuth();
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [sending, setSending] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  /* Listen to only THIS visitor's messages */
  useEffect(() => {
    if (!user) return;
    const q = query(
      collection(db, 'contact_messages'),
      orderBy('createdAt', 'asc'),
    );
    const unsub = onSnapshot(q, (snapshot) => {
      const msgs = snapshot.docs
        .map((d) => ({ id: d.id, ...d.data() } as ChatMessage))
        .filter((m) => m.uid === user.uid);
      setMessages(msgs);
    }, (err) => {
      console.error('Firestore listen error:', err);
    });
    return unsub;
  }, [user]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || !user || sending) return;

    const text = input.trim();
    setInput('');
    setSending(true);

    try {
      await addDoc(collection(db, 'contact_messages'), {
        uid: user.uid,
        displayName: user.displayName || 'Anonymous',
        photoURL: user.photoURL,
        email: user.email,
        text,
        createdAt: serverTimestamp(),
        isAdminReply: false,
      });
    } catch (error) {
      console.error('Failed to send message:', error);
      setInput(text);
    } finally {
      setSending(false);
      inputRef.current?.focus();
    }
  };

  return (
    <motion.div
      className="chat chat--visitor"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Header */}
      <div className="chat__header glass-panel">
        <div className="chat__header-dots" aria-hidden="true">
          <span className="chat__dot chat__dot--red" />
          <span className="chat__dot chat__dot--yellow" />
          <span className="chat__dot chat__dot--green" />
        </div>
        <span className="chat__header-title">
          <span className="chat__header-badge chat__header-badge--visitor">visitor</span>
          terminal — message@ts.dev
        </span>
        <div className="chat__header-user">
          {user?.photoURL && (
            <img src={user.photoURL} alt="" className="chat__header-avatar" referrerPolicy="no-referrer" />
          )}
          <span className="chat__header-name">{user?.displayName}</span>
          <button className="chat__header-signout" onClick={signOut} aria-label="Sign out">exit</button>
        </div>
      </div>

      {/* Messages */}
      <div className="chat__messages">
        <div className="chat__system-msg">
          <span className="chat__system-icon" aria-hidden="true">◈</span>
          <span>Welcome, <strong>{user?.displayName}</strong>. Leave a message and T.S. will reply.</span>
        </div>

        <AnimatePresence>
          <motion.div variants={containerVariants} initial="hidden" animate="visible">
            {messages.map((msg) => (
              <motion.div
                key={msg.id}
                variants={messageVariants}
                className={`chat__bubble ${msg.isAdminReply ? 'chat__bubble--admin-reply' : 'chat__bubble--own'}`}
              >
                <div className="chat__bubble-content">
                  {msg.isAdminReply && <span className="chat__bubble-name">T.S. (Admin)</span>}
                  <p className="chat__bubble-text">{msg.text}</p>
                  <span className="chat__bubble-time">
                    {msg.createdAt?.toDate?.()
                      ? msg.createdAt.toDate().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
                      : '…'}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <form className="chat__input-bar glass-panel" onSubmit={handleSend}>
        <span className="chat__prompt" aria-hidden="true">❯</span>
        <input
          ref={inputRef}
          type="text"
          className="chat__input"
          placeholder="Type your message…"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          disabled={sending}
          id="contact-visitor-input"
          autoComplete="off"
        />
        <Button variant="solid" size="sm" type="submit" disabled={!input.trim() || sending} isLoading={sending}>
          Send
        </Button>
      </form>
    </motion.div>
  );
}

/* ============ ADMIN TERMINAL ============ */
function AdminTerminal() {
  const { user, signOut } = useAuth();
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [sending, setSending] = useState(false);
  const [replyTarget, setReplyTarget] = useState<ChatMessage | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  /* Listen to ALL messages */
  useEffect(() => {
    const q = query(
      collection(db, 'contact_messages'),
      orderBy('createdAt', 'asc'),
    );
    const unsub = onSnapshot(q, (snapshot) => {
      const msgs = snapshot.docs.map((d) => ({ id: d.id, ...d.data() } as ChatMessage));
      setMessages(msgs);
    }, (err) => {
      console.error('Firestore listen error:', err);
    });
    return unsub;
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || !user || sending) return;

    const text = input.trim();
    setInput('');
    setSending(true);

    try {
      await addDoc(collection(db, 'contact_messages'), {
        uid: replyTarget ? replyTarget.uid : user.uid,
        displayName: user.displayName || 'Admin',
        photoURL: user.photoURL,
        email: user.email,
        text,
        createdAt: serverTimestamp(),
        isAdminReply: true,
        replyToName: replyTarget?.displayName || null,
      });
      setReplyTarget(null);
    } catch (error) {
      console.error('Failed to send reply:', error);
      setInput(text);
    } finally {
      setSending(false);
      inputRef.current?.focus();
    }
  };

  const handleDelete = async (msgId: string) => {
    try {
      await deleteDoc(doc(db, 'contact_messages', msgId));
    } catch (error) {
      console.error('Failed to delete message:', error);
    }
  };

  /* Group messages by user */
  const uniqueSenders = [...new Map(
    messages.filter((m) => !m.isAdminReply).map((m) => [m.uid, m])
  ).values()];

  return (
    <motion.div
      className="chat chat--admin"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Header */}
      <div className="chat__header glass-panel chat__header--admin">
        <div className="chat__header-dots" aria-hidden="true">
          <span className="chat__dot chat__dot--red" />
          <span className="chat__dot chat__dot--yellow" />
          <span className="chat__dot chat__dot--green" />
        </div>
        <span className="chat__header-title">
          <span className="chat__header-badge chat__header-badge--admin">admin</span>
          root@ts.dev — all channels
        </span>
        <div className="chat__header-user">
          {user?.photoURL && (
            <img src={user.photoURL} alt="" className="chat__header-avatar" referrerPolicy="no-referrer" />
          )}
          <span className="chat__header-name">{user?.displayName}</span>
          <button className="chat__header-signout" onClick={signOut} aria-label="Sign out">exit</button>
        </div>
      </div>

      {/* Sender tags */}
      {uniqueSenders.length > 0 && (
        <div className="chat__sender-bar">
          <span className="chat__sender-label">Active senders:</span>
          {uniqueSenders.map((sender) => (
            <button
              key={sender.uid}
              className={`chat__sender-tag ${replyTarget?.uid === sender.uid ? 'chat__sender-tag--active' : ''}`}
              onClick={() => setReplyTarget(replyTarget?.uid === sender.uid ? null : sender)}
            >
              {sender.displayName}
            </button>
          ))}
          {replyTarget && (
            <button className="chat__sender-clear" onClick={() => setReplyTarget(null)}>
              ✕ clear filter
            </button>
          )}
        </div>
      )}

      {/* Messages */}
      <div className="chat__messages">
        <div className="chat__system-msg chat__system-msg--admin">
          <span className="chat__system-icon" aria-hidden="true">⚡</span>
          <span><strong>Admin Mode</strong> — All visitor messages visible. Click a sender to filter. Reply will be linked to their thread.</span>
        </div>

        <AnimatePresence>
          <motion.div variants={containerVariants} initial="hidden" animate="visible">
            {messages
              .filter((m) => !replyTarget || m.uid === replyTarget.uid)
              .map((msg) => {
                const isAdminMsg = msg.isAdminReply;
                return (
                  <motion.div
                    key={msg.id}
                    variants={messageVariants}
                    className={`chat__bubble ${isAdminMsg ? 'chat__bubble--own' : 'chat__bubble--other'}`}
                  >
                    {!isAdminMsg && (
                      <div className="chat__bubble-avatar">
                        {msg.photoURL ? (
                          <img src={msg.photoURL} alt="" referrerPolicy="no-referrer" />
                        ) : (
                          <span>{msg.displayName[0]}</span>
                        )}
                      </div>
                    )}
                    <div className="chat__bubble-content">
                      {!isAdminMsg && (
                        <span className="chat__bubble-name">
                          {msg.displayName}
                          <button
                            className="chat__bubble-reply-btn"
                            onClick={() => setReplyTarget(msg)}
                            title={`Reply to ${msg.displayName}`}
                          >
                            ↩
                          </button>
                        </span>
                      )}
                      <p className="chat__bubble-text">{msg.text}</p>
                      <div className="chat__bubble-meta">
                        <span className="chat__bubble-time">
                          {msg.createdAt?.toDate?.()
                            ? msg.createdAt.toDate().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
                            : '…'}
                        </span>
                        <button
                          className="chat__bubble-delete"
                          onClick={() => handleDelete(msg.id)}
                          title="Delete message"
                        >
                          ✕
                        </button>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
          </motion.div>
        </AnimatePresence>
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <form className="chat__input-bar glass-panel" onSubmit={handleSend}>
        {replyTarget && (
          <span className="chat__reply-indicator">
            ↩ replying to <strong>{replyTarget.displayName}</strong>
          </span>
        )}
        <span className="chat__prompt chat__prompt--admin" aria-hidden="true">#</span>
        <input
          ref={inputRef}
          type="text"
          className="chat__input"
          placeholder={replyTarget ? `Reply to ${replyTarget.displayName}…` : 'Type admin message…'}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          disabled={sending}
          id="contact-admin-input"
          autoComplete="off"
        />
        <Button variant="solid" size="sm" type="submit" disabled={!input.trim() || sending} isLoading={sending}>
          Send
        </Button>
      </form>
    </motion.div>
  );
}

/* ============ MAIN EXPORT ============ */
export default function ContactTerminal() {
  const { user, loading, isAdmin } = useAuth();

  return (
    <section className="contact-terminal section" id="contact-terminal-section">
      <div className="container">
        <SectionHeading
          label="◈"
          title="Contact Terminal"
          subtitle={
            user
              ? isAdmin
                ? 'Admin mode — all channels visible.'
                : 'Leave a message. T.S. will reply.'
              : 'Authenticated messaging channel. Sign in to transmit.'
          }
          align="center"
        />

        {loading ? (
          <div className="contact-terminal__loader">
            <div className="contact-terminal__spinner" />
            <span>Initializing secure channel…</span>
          </div>
        ) : !user ? (
          <AuthGate />
        ) : isAdmin ? (
          <AdminTerminal />
        ) : (
          <VisitorTerminal />
        )}
      </div>
    </section>
  );
}

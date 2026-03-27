/* ============================================
   Toast Notification Component
   ============================================
   Per react-ui-patterns: always surface errors.
   Provides success/error/info feedback to user.
   ============================================ */

import { useState, useEffect, useCallback, createContext, useContext, type ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Toast.css';

/* ---- Types ---- */
type ToastType = 'success' | 'error' | 'info';

interface Toast {
  id: string;
  type: ToastType;
  title: string;
  message?: string;
  duration?: number;
}

interface ToastContextValue {
  addToast: (toast: Omit<Toast, 'id'>) => void;
}

/* ---- Context ---- */
const ToastContext = createContext<ToastContextValue | undefined>(undefined);

/* ---- Provider ---- */
export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const addToast = useCallback((toast: Omit<Toast, 'id'>) => {
    const id = Date.now().toString(36) + Math.random().toString(36).slice(2);
    setToasts((prev) => [...prev, { ...toast, id }]);
  }, []);

  const removeToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ addToast }}>
      {children}
      <div className="toast-container" aria-live="polite">
        <AnimatePresence>
          {toasts.map((toast) => (
            <ToastItem key={toast.id} toast={toast} onDismiss={removeToast} />
          ))}
        </AnimatePresence>
      </div>
    </ToastContext.Provider>
  );
}

/* ---- Toast Item ---- */
function ToastItem({ toast, onDismiss }: { toast: Toast; onDismiss: (id: string) => void }) {
  useEffect(() => {
    const timer = setTimeout(() => onDismiss(toast.id), toast.duration || 4000);
    return () => clearTimeout(timer);
  }, [toast, onDismiss]);

  const ICONS: Record<ToastType, string> = {
    success: '✓',
    error: '✕',
    info: '◈',
  };

  return (
    <motion.div
      className={`toast toast--${toast.type}`}
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -20, scale: 0.95 }}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
    >
      <span className="toast__icon">{ICONS[toast.type]}</span>
      <div className="toast__content">
        <span className="toast__title">{toast.title}</span>
        {toast.message && <span className="toast__message">{toast.message}</span>}
      </div>
      <button className="toast__close" onClick={() => onDismiss(toast.id)} aria-label="Dismiss">✕</button>
    </motion.div>
  );
}

/* ---- Hook ---- */
export function useToast() {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error('useToast must be used within a ToastProvider');
  return ctx;
}

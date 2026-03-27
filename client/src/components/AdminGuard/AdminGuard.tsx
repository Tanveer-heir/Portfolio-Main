/* ============================================
   AdminGuard — Role-Based Access Control
   ============================================
   Wraps admin routes. Redirects non-admin users
   to homepage. Shows login gate for unauthenticated.
   ============================================ */

import { Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAuth } from '../../providers/AuthProvider';
import './AdminGuard.css';

interface AdminGuardProps {
  children: React.ReactNode;
}

export default function AdminGuard({ children }: AdminGuardProps) {
  const { user, loading, isAdmin, signInWithGoogle } = useAuth();

  /* Still loading auth state */
  if (loading) {
    return (
      <div className="admin-guard__loader">
        <div className="admin-guard__spinner" />
        <span>Verifying credentials…</span>
      </div>
    );
  }

  /* Not logged in — show login prompt */
  if (!user) {
    return (
      <motion.div
        className="admin-guard"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="admin-guard__card glass">
          <div className="admin-guard__scanline" aria-hidden="true" />
          <span className="admin-guard__icon">⚡</span>
          <h3 className="admin-guard__title">Admin Access Only</h3>
          <p className="admin-guard__subtitle">
            This area requires administrator authentication.
          </p>
          <div className="admin-guard__terminal-line">
            <span className="admin-guard__prompt">#</span>
            <span className="admin-guard__cmd">sudo authenticate --level admin</span>
            <span className="admin-guard__cursor" />
          </div>
          <button
            className="btn btn--google btn--lg admin-guard__btn"
            onClick={signInWithGoogle}
          >
            <svg className="btn__google-icon" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            Sign in with Google
          </button>
        </div>
      </motion.div>
    );
  }

  /* Logged in but NOT admin — redirect home */
  if (!isAdmin) {
    return <Navigate to="/" replace />;
  }

  /* Admin — render protected content */
  return <>{children}</>;
}

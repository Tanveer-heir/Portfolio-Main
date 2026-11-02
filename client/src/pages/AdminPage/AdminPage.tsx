import { lazy, Suspense } from 'react';
import { Link } from 'react-router-dom';

/* Firebase is only downloaded by visitors who open this page */
const AdminApp = lazy(() => import('./AdminApp'));

export default function AdminPage() {
  if (!import.meta.env.VITE_FIREBASE_API_KEY) {
    return (
      <div className="admin-guard__loader">
        <span>Admin is unavailable: Firebase settings are missing.</span>
        <Link to="/">Back to Home</Link>
      </div>
    );
  }

  return (
    <Suspense fallback={<div className="admin-guard__loader">Loading…</div>}>
      <AdminApp />
    </Suspense>
  );
}

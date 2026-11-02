import { AdminGuard } from '../../components/AdminGuard';
import { AdminDashboard } from '../../features/admin';
import { AuthProvider } from '../../providers/AuthProvider';

export default function AdminApp() {
  return (
    <AuthProvider>
      <AdminGuard>
        <AdminDashboard />
      </AdminGuard>
    </AuthProvider>
  );
}

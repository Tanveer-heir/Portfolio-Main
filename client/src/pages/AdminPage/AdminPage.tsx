import { AdminGuard } from '../../components/AdminGuard';
import { AdminDashboard } from '../../features/admin';

export default function AdminPage() {
  return (
    <AdminGuard>
      <AdminDashboard />
    </AdminGuard>
  );
}

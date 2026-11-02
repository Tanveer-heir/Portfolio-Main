import { Button } from '../../components/Button';
import './NotFoundPage.css';

export default function NotFoundPage() {
  return (
    <section className="not-found section">
      <div className="container">
        <span className="not-found__code">404</span>
        <h1 className="not-found__title">Page not found</h1>
        <p className="not-found__text">This page does not exist or has moved.</p>
        <Button variant="solid" size="lg" to="/">
          Back to Home
        </Button>
      </div>
    </section>
  );
}

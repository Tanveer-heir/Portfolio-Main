import { useState, useEffect, type MouseEvent as ReactMouseEvent } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { NAV_ITEMS } from "../../config/navigation";
import "./Navbar.css";

function MagneticLink({
  to,
  id,
  className,
  children,
}: {
  to: string;
  id?: string;
  className: string;
  children: string;
}) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 260, damping: 22, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 260, damping: 22, mass: 0.4 });

  const handleMove = (event: ReactMouseEvent<HTMLAnchorElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const offsetX = event.clientX - rect.left - rect.width / 2;
    const offsetY = event.clientY - rect.top - rect.height / 2;

    x.set(offsetX * 0.2);
    y.set(offsetY * 0.2);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      className="navbar__link-wrap"
      style={{ x: springX, y: springY }}
    >
      <Link
        to={to}
        id={id}
        className={className}
        onMouseMove={handleMove}
        onMouseLeave={reset}
      >
        {children}
      </Link>
    </motion.div>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Close mobile nav on route change */
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <nav
      className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="navbar__inner container">
        {/* Logo */}
        <Link to="/" className="navbar__logo" id="nav-logo">
          <span className="navbar__logo-dot" aria-hidden="true" />
          <span className="navbar__logo-text">Portfolio</span>
        </Link>

        {/* Desktop links */}
        <ul className="navbar__links" role="list">
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <MagneticLink
                to={item.href}
                id={item.id}
                className={`navbar__link ${location.pathname === item.href ? "navbar__link--active" : ""}`}
              >
                {item.label}
              </MagneticLink>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          className={`navbar__hamburger ${mobileOpen ? "navbar__hamburger--open" : ""}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-expanded={mobileOpen}
          aria-label="Toggle navigation menu"
          id="nav-hamburger"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={`navbar__mobile ${mobileOpen ? "navbar__mobile--open" : ""}`}
      >
        <ul className="navbar__mobile-links" role="list">
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <Link
                to={item.href}
                className={`navbar__mobile-link ${location.pathname === item.href ? "navbar__mobile-link--active" : ""}`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

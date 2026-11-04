import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import type { Variants } from "framer-motion";
import { NAV_ITEMS, SOCIAL_LINKS, site } from "../../config/content";
import { assetUrl } from "../../utils/assets";
import { FooterSystemLog } from "../effects";
import "./Footer.css";

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.04, delayChildren: 0.1 },
  },
};

const staggerItem: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  },
};

const magneticHover = {
  whileHover: { scale: 1.15, y: -3 },
  whileTap: { scale: 0.92 },
  transition: { type: "spring" as const, stiffness: 400, damping: 15 },
};

const SOCIAL_ICONS: Record<string, string> = {
  GitHub: "⟨/⟩",
  LinkedIn: "in",
  Instagram: "◎",
  Gmail: "G",
  Outlook: "O",
};

const affiliationLogo = assetUrl(site.affiliation?.image);

export default function Footer() {
  const year = new Date().getFullYear();
  const shouldReduceMotion = useReducedMotion();

  return (
    <footer className="footer footer--glass" role="contentinfo">
      {/* Neon gradient top border */}
      <div className="footer__glow-border" aria-hidden="true" />

      {/* Ambient glow orb */}
      <div className="footer__ambient-glow" aria-hidden="true" />

      <div className="footer__inner container">
        {/* Top: brand + nav + social */}
        <div className="footer__top">
          {/* Brand column */}
          <div className="footer__brand">
            <Link to="/" className="footer__logo">
              <span className="footer__logo-dot" aria-hidden="true" />
              <span>{site.name}</span>
            </Link>
            <p className="footer__tagline">{site.tagline}</p>
            <p className="footer__tagline-sub">{site.taglineDetail}</p>

            <div className="footer__brand-meta">
              {affiliationLogo && (
                <figure className="footer__brand-logo-slot">
                  <img
                    src={affiliationLogo}
                    alt={site.affiliation?.alt}
                    className="footer__brand-logo-image"
                    loading="lazy"
                  />
                </figure>
              )}

              <div className="footer__brand-pills" aria-label="Core domains">
                {site.footer.domains.map((pill) => (
                  <span key={pill.label} className="footer__brand-pill">
                    <span
                      className="footer__brand-pill-icon"
                      aria-hidden="true"
                    >
                      {pill.icon}
                    </span>
                    <span>{pill.label}</span>
                  </span>
                ))}
              </div>

              {site.footer.quote && (
                <blockquote className="footer__brand-quote">
                  {site.footer.quote}
                </blockquote>
              )}
            </div>
          </div>

          {/* Nav links — staggered reveal */}
          <motion.nav
            className="footer__nav"
            aria-label="Footer navigation"
            variants={shouldReduceMotion ? undefined : staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <span className="footer__nav-heading">Navigate</span>
            <ul className="footer__nav-list">
              {NAV_ITEMS.map((item) => (
                <motion.li
                  key={item.id}
                  variants={shouldReduceMotion ? undefined : staggerItem}
                >
                  <Link to={item.href} className="footer__nav-link">
                    <span
                      className="footer__nav-link-indicator"
                      aria-hidden="true"
                    />
                    {item.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.nav>

          {/* Social icons — magnetic hover */}
          <div className="footer__social-column">
            <span className="footer__nav-heading">Connect</span>
            <div className="footer__social">
              {SOCIAL_LINKS.map((link) => (
                <motion.a
                  key={link.platform}
                  href={link.url}
                  className="footer__social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.platform}
                  {...(shouldReduceMotion ? {} : magneticHover)}
                >
                  <span className="footer__social-icon">
                    {SOCIAL_ICONS[link.platform] || link.platform[0]}
                  </span>
                  <span className="footer__social-label">{link.platform}</span>
                </motion.a>
              ))}
            </div>
            <div className="footer__log-wrap">
              <FooterSystemLog />
            </div>
          </div>
        </div>

        {/* Divider — animated gradient line */}
        <div className="footer__divider" aria-hidden="true">
          <div className="footer__divider-line" />
        </div>

        {/* Bottom: copyright + hidden admin link */}
        <div className="footer__bottom">
          <p className="footer__copyright">
            &copy; {year} {site.name}
          </p>
          {site.footer.techStack && (
            <p className="footer__tech-stack">{site.footer.techStack}</p>
          )}
          <Link
            to="/admin"
            className="footer__admin-link"
            aria-label="Admin Portal"
            title="Admin Terminal"
          >
            ◈
          </Link>
        </div>
      </div>
    </footer>
  );
}

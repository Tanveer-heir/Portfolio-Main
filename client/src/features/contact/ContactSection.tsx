import { motion } from 'framer-motion';
import { SectionHeading } from '../../components/SectionHeading';
import { Button } from '../../components/Button';
import { sectionMeta } from '../../data/portfolio-data';
import { fadeInUp } from '../../utils/motion';
import './ContactSection.css';

export default function ContactSection() {
  const meta = sectionMeta.contact;

  return (
    <section className="contact section" id="contact-section">
      <div className="container">
        <SectionHeading
          label={meta.label}
          title={meta.title}
          subtitle={meta.subtitle}
          align={meta.align}
        />

        <motion.div
          className="contact__content"
          {...fadeInUp}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <form className="contact__form" onSubmit={(e) => e.preventDefault()}>
            <div className="contact__row">
              <div className="contact__field">
                <label htmlFor="contact-name" className="contact__label">Name</label>
                <input
                  type="text"
                  id="contact-name"
                  className="contact__input"
                  placeholder="Your name"
                />
              </div>
              <div className="contact__field">
                <label htmlFor="contact-email" className="contact__label">Email</label>
                <input
                  type="email"
                  id="contact-email"
                  className="contact__input"
                  placeholder="you@example.com"
                />
              </div>
            </div>
            <div className="contact__field">
              <label htmlFor="contact-subject" className="contact__label">Subject</label>
              <input
                type="text"
                id="contact-subject"
                className="contact__input"
                placeholder="What's this about?"
              />
            </div>
            <div className="contact__field">
              <label htmlFor="contact-message" className="contact__label">Message</label>
              <textarea
                id="contact-message"
                className="contact__textarea"
                placeholder="Your message..."
                rows={6}
              />
            </div>
            <div className="contact__actions">
              <Button variant="solid" size="lg" type="submit">
                Send Message
              </Button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}

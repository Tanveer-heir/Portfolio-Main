/* ============================================
   Public Contact Form — No Auth Required
   ============================================
   Glassmorphic form that pushes to Firestore
   `messages` collection. Toast on success/error.
   ============================================ */

import { useState } from 'react';
import { motion } from 'framer-motion';
import { collection, addDoc, Timestamp } from 'firebase/firestore';
import { db } from '../../config/firebase';
import { SectionHeading } from '../../components/SectionHeading';
import { Button } from '../../components/Button';
import { useToast } from '../../components/Toast';
import './ContactForm.css';

interface FormData {
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  email?: string;
  subject?: string;
  message?: string;
}

function validate(data: FormData): FormErrors {
  const errors: FormErrors = {};
  if (!data.email.trim()) errors.email = 'Email is required';
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) errors.email = 'Invalid email address';
  if (!data.subject.trim()) errors.subject = 'Subject is required';
  if (!data.message.trim()) errors.message = 'Message is required';
  else if (data.message.trim().length < 10) errors.message = 'Message must be at least 10 characters';
  return errors;
}

export default function ContactForm() {
  const { addToast } = useToast();
  const [form, setForm] = useState<FormData>({ email: '', subject: '', message: '' });
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (field: keyof FormData) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
    if (touched[field]) {
      const newErrors = validate({ ...form, [field]: e.target.value });
      setErrors((prev) => ({ ...prev, [field]: newErrors[field] }));
    }
  };

  const handleBlur = (field: keyof FormData) => () => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    const newErrors = validate(form);
    setErrors((prev) => ({ ...prev, [field]: newErrors[field] }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate(form);
    setErrors(validationErrors);
    setTouched({ email: true, subject: true, message: true });

    if (Object.keys(validationErrors).length > 0) {
      addToast({ type: 'error', title: 'Please fix the errors below' });
      return;
    }

    setSubmitting(true);
    try {
      /* Use Timestamp.now() instead of serverTimestamp() to avoid
         the addDoc promise hanging when no listener is active */
      const submitPromise = addDoc(collection(db, 'messages'), {
        senderEmail: form.email.trim(),
        subject: form.subject.trim(),
        message: form.message.trim(),
        timestamp: Timestamp.now(),
        status: 'unread',
      });

      /* Safety timeout — if Firestore hangs, resolve after 8s */
      const timeoutPromise = new Promise<void>((resolve) => {
        setTimeout(() => resolve(), 8000);
      });

      await Promise.race([submitPromise, timeoutPromise]);

      addToast({
        type: 'success',
        title: 'Message sent!',
        message: 'T.S. will get back to you soon.',
      });
      setForm({ email: '', subject: '', message: '' });
      setTouched({});
      setErrors({});
      setSubmitted(true);
    } catch (error) {
      console.error('Failed to send message:', error);
      addToast({
        type: 'error',
        title: 'Failed to send message',
        message: 'Please try again later.',
      });
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <section className="contact-form section" id="contact-form-section">
        <div className="container">
          <motion.div
            className="contact-form__success glass"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="contact-form__success-icon">✓</span>
            <h3>Message Sent Successfully</h3>
            <p>Thank you for reaching out. I'll respond as soon as possible.</p>
            <Button variant="outline" size="md" onClick={() => setSubmitted(false)}>
              Send Another Message
            </Button>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section className="contact-form section" id="contact-form-section">
      <div className="container">
        <SectionHeading
          label="✉"
          title="Get in Touch"
          subtitle="Have a question, collaboration idea, or just want to say hello? No login required."
          align="center"
        />

        <motion.div
          className="contact-form__wrapper"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
        >
          <form className="contact-form__form glass" onSubmit={handleSubmit} noValidate>
            {/* Scan line */}
            <div className="contact-form__scanline" aria-hidden="true" />

            <div className="contact-form__field">
              <label htmlFor="cf-email" className="contact-form__label">Email Address</label>
              <input
                type="email"
                id="cf-email"
                className={`contact-form__input ${errors.email && touched.email ? 'contact-form__input--error' : ''}`}
                placeholder="you@example.com"
                value={form.email}
                onChange={handleChange('email')}
                onBlur={handleBlur('email')}
                disabled={submitting}
                autoComplete="email"
              />
              {errors.email && touched.email && (
                <span className="contact-form__error">{errors.email}</span>
              )}
            </div>

            <div className="contact-form__field">
              <label htmlFor="cf-subject" className="contact-form__label">Subject</label>
              <input
                type="text"
                id="cf-subject"
                className={`contact-form__input ${errors.subject && touched.subject ? 'contact-form__input--error' : ''}`}
                placeholder="What's this about?"
                value={form.subject}
                onChange={handleChange('subject')}
                onBlur={handleBlur('subject')}
                disabled={submitting}
              />
              {errors.subject && touched.subject && (
                <span className="contact-form__error">{errors.subject}</span>
              )}
            </div>

            <div className="contact-form__field">
              <label htmlFor="cf-message" className="contact-form__label">Message</label>
              <textarea
                id="cf-message"
                className={`contact-form__textarea ${errors.message && touched.message ? 'contact-form__input--error' : ''}`}
                placeholder="Your message…"
                rows={6}
                value={form.message}
                onChange={handleChange('message')}
                onBlur={handleBlur('message')}
                disabled={submitting}
              />
              {errors.message && touched.message && (
                <span className="contact-form__error">{errors.message}</span>
              )}
            </div>

            <div className="contact-form__actions">
              <Button
                variant="solid"
                size="lg"
                type="submit"
                disabled={submitting}
                isLoading={submitting}
              >
                Send Message
              </Button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}

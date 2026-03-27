import { motion } from 'framer-motion';
import { SectionHeading } from '../../components/SectionHeading';
import { Card, CardBody } from '../../components/Card';
import { about, sectionMeta } from '../../data/portfolio-data';
import { staggerContainer, staggerItem, fadeInLeft, fadeInUp } from '../../utils/motion';
import './AboutSection.css';

export default function AboutSection() {
  const meta = sectionMeta.about;

  return (
    <section className="about section" id="about-section">
      <div className="container">
        <SectionHeading
          label={meta.label}
          title={meta.title}
          subtitle={meta.subtitle}
        />

        <div className="about__grid">
          {/* Portrait / visual area */}
          <motion.div
            className="about__portrait"
            {...fadeInLeft}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="about__portrait-frame">
              <div className="about__portrait-placeholder" aria-label="Profile portrait">
                <span className="about__portrait-initials">{about.initials}</span>
              </div>
              <div className="about__portrait-accent" aria-hidden="true" />
            </div>
          </motion.div>

          {/* Bio content */}
          <motion.div
            className="about__content"
            {...fadeInUp}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <p
              className="about__lead"
              dangerouslySetInnerHTML={{ __html: about.lead }}
            />
            {about.body.map((paragraph, i) => (
              <p key={i} className="about__body">{paragraph}</p>
            ))}
          </motion.div>
        </div>

        {/* Stats strip */}
        <motion.div
          className="about__stats"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {about.stats.map((stat) => (
            <motion.div key={stat.label} variants={staggerItem}>
              <Card variant="glass" hoverEffect={false}>
                <CardBody>
                  <span className="about__stat-value">{stat.value}</span>
                  <span className="about__stat-label">{stat.label}</span>
                </CardBody>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

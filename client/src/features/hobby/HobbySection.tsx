import { motion } from 'framer-motion';
import { SectionHeading } from '../../components/SectionHeading';
import { Card, CardBody } from '../../components/Card';
import { SkillBadge } from '../../components/SkillBadge';
import { hobbies, sectionMeta } from '../../config/content';
import { assetUrl } from '../../utils/assets';
import { staggerContainer, staggerItem } from '../../utils/motion';
import './HobbySection.css';

const CATEGORY_ICONS: Record<string, string> = {
  build: '🔧',
  experiment: '🔬',
  craft: '✂️',
  exploration: '🧭',
  reading: '📚',
};

export default function HobbySection() {
  const meta = sectionMeta.hobby;

  return (
    <section className="hobby section" id="hobby-section">
      <div className="container">
        <SectionHeading
          label={meta.label}
          title={meta.title}
          subtitle={meta.subtitle}
        />

        {/* Masonry-style gallery */}
        <motion.div
          className="hobby__gallery"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {hobbies.map((hobby) => (
            <motion.div
              key={hobby.id}
              variants={staggerItem}
              className="hobby__item"
            >
              <Card variant="glass" hoverEffect className="hobby__card">
                <div className={`hobby__image-area ${hobby.image ? '' : 'hobby__image-area--empty'}`}>
                  {hobby.image ? (
                    <img
                      src={assetUrl(hobby.image)}
                      alt={hobby.title}
                      className="hobby__image"
                      loading="lazy"
                    />
                  ) : (
                    <div className="hobby__image-placeholder">
                      <span className="hobby__image-icon" aria-hidden="true">
                        {CATEGORY_ICONS[hobby.category]}
                      </span>
                    </div>
                  )}
                  <span className="hobby__category-badge">{hobby.category}</span>
                </div>

                <CardBody>
                  <h3 className="hobby__title">{hobby.title}</h3>
                  <p className="hobby__description">{hobby.description}</p>

                  {/* Materials list */}
                  {hobby.materials.length > 0 && (
                    <div className="hobby__materials">
                      <span className="hobby__materials-label">Materials:</span>
                      <span className="hobby__materials-list">
                        {hobby.materials.join(' · ')}
                      </span>
                    </div>
                  )}

                  {/* Build metadata */}
                  {(hobby.difficulty || hobby.buildTime) && (
                    <div className="hobby__meta">
                      {hobby.difficulty && (
                        <span className="hobby__meta-item">◈ {hobby.difficulty}</span>
                      )}
                      {hobby.buildTime && (
                        <span className="hobby__meta-item">⏱ {hobby.buildTime}</span>
                      )}
                    </div>
                  )}

                  <div className="hobby__tags">
                    {hobby.tags.map((tag) => (
                      <SkillBadge key={tag} name={tag} variant="warm" />
                    ))}
                  </div>
                </CardBody>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

import { motion } from 'framer-motion';
import { SectionHeading } from '../../components/SectionHeading';
import { Card, CardBody } from '../../components/Card';
import { SkillBadge } from '../../components/SkillBadge';
import { skills, sectionMeta } from '../../data/portfolio-data';
import { staggerContainer, staggerItem } from '../../utils/motion';
import './SkillsSection.css';

export default function SkillsSection() {
  const meta = sectionMeta.skills;

  return (
    <section className="skills-section section" id="skills-section">
      <div className="container">
        <SectionHeading
          label={meta.label}
          title={meta.title}
          subtitle={meta.subtitle}
        />

        <motion.div
          className="skills-section__grid"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {skills.map((category) => (
            <motion.div key={category.name} variants={staggerItem}>
              <Card variant="glass" hoverEffect className="skills-section__category-card">
                <CardBody>
                  <div className="skills-section__category-header">
                    <span className="skills-section__category-icon" aria-hidden="true">{category.icon}</span>
                    <h3 className="skills-section__category-name">{category.name}</h3>
                  </div>
                  <div className="skills-section__badges">
                    {category.skills.map((skill) => (
                      <SkillBadge
                        key={skill.name}
                        name={skill.name}
                        level={skill.level}
                        variant={skill.category === 'hardware' ? 'warm' : 'accent'}
                      />
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

import { motion } from 'framer-motion';
import { SectionHeading } from '../../components/SectionHeading';
import { Card, CardBody } from '../../components/Card';
import { SkillBadge } from '../../components/SkillBadge';
import { education, sectionMeta } from '../../config/content';
import { assetUrl } from '../../utils/assets';
import { staggerContainer, staggerItem } from '../../utils/motion';
import './EducationSection.css';

export default function EducationSection() {
  const meta = sectionMeta.education;

  return (
    <section className="education section" id="education-section">
      <div className="container">
        <SectionHeading
          label={meta.label}
          title={meta.title}
          subtitle={meta.subtitle}
        />

        <motion.div
          className="education__cards"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {education.map((edu) => (
            <motion.div key={edu.id} variants={staggerItem}>
              <Card
                variant="outlined"
                hoverEffect
                accentBorder={!edu.endYear}
                className="education__card"
              >
                <CardBody>
                  <div className="education__card-header">
                    <div>
                      <span className="education__years">
                        {edu.startYear} — {edu.endYear ?? edu.endLabel ?? 'Present'}
                      </span>
                      {!edu.endYear && (
                        <SkillBadge name="Current" variant="accent" />
                      )}
                    </div>
                  </div>

                  {edu.logo && (
                    <img
                      src={assetUrl(edu.logo)}
                      alt=""
                      className="education__logo"
                      loading="lazy"
                    />
                  )}
                  <h3 className="education__institution">{edu.institution}</h3>
                  <p className="education__degree">
                    {edu.degree} — {edu.field}
                  </p>
                  {edu.grade && (
                    <span className="education__gpa">{edu.grade}</span>
                  )}

                  <ul className="education__highlights">
                    {edu.highlights.map((h) => (
                      <li key={h} className="education__highlight">{h}</li>
                    ))}
                  </ul>
                </CardBody>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

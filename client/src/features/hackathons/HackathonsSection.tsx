import { motion } from 'framer-motion';
import { SectionHeading } from '../../components/SectionHeading';
import { Card, CardHeader, CardBody, CardFooter } from '../../components/Card';
import { SkillBadge } from '../../components/SkillBadge';
import { Button } from '../../components/Button';
import { hackathons, sectionMeta } from '../../data/portfolio-data';
import { staggerContainer, staggerItem } from '../../utils/motion';
import './HackathonsSection.css';

export default function HackathonsSection() {
  const meta = sectionMeta.hackathons;

  return (
    <section className="hackathons section" id="hackathons-section">
      <div className="container">
        <SectionHeading
          label={meta.label}
          title={meta.title}
          subtitle={meta.subtitle}
        />

        <motion.div
          className="hackathons__grid"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {hackathons.map((hack) => (
            <motion.div key={hack.id} variants={staggerItem}>
              <Card variant="outlined" hoverEffect accentBorder className="hackathons__card">
                <CardHeader>
                  <div className="hackathons__card-meta">
                    <span className="hackathons__event-name">{hack.name}</span>
                    <span className="hackathons__date">{hack.date}</span>
                  </div>
                  {hack.award && <span className="hackathons__award">{hack.award}</span>}
                  <h3 className="hackathons__project-title">{hack.projectTitle}</h3>
                  <p className="hackathons__theme">{hack.theme}</p>
                </CardHeader>
                <CardBody>
                  <p className="hackathons__description">{hack.description}</p>
                  <div className="hackathons__details">
                    <span className="hackathons__detail">
                      <span className="hackathons__detail-icon" aria-hidden="true">⏱</span>
                      {hack.duration}
                    </span>
                    <span className="hackathons__detail">
                      <span className="hackathons__detail-icon" aria-hidden="true">💰</span>
                      {hack.budget}
                    </span>
                  </div>
                  <div className="hackathons__tags">
                    {hack.tags.map((tag) => (
                      <SkillBadge key={tag} name={tag} variant="accent" />
                    ))}
                  </div>
                </CardBody>
                <CardFooter>
                  <Button variant="ghost" size="sm">View Details</Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

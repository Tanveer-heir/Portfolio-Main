import { motion } from 'framer-motion';
import { SectionHeading } from '../../components/SectionHeading';
import { ProjectCard } from '../../components/ProjectCard';
import { projects, sectionMeta } from '../../data/portfolio-data';
import { staggerContainer, staggerItem } from '../../utils/motion';
import './ProjectsSection.css';

const FILTER_CATEGORIES = ['all', 'software', 'hardware', 'research', 'design'] as const;

export default function ProjectsSection() {
  const meta = sectionMeta.projects;

  return (
    <section className="projects section" id="projects-section">
      <div className="container">
        <SectionHeading
          label={meta.label}
          title={meta.title}
          subtitle={meta.subtitle}
        />

        {/* Filter bar */}
        <div className="projects__filters">
          {FILTER_CATEGORIES.map((cat) => (
            <button
              key={cat}
              className="projects__filter-btn projects__filter-btn--active"
              data-category={cat}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery grid */}
        <motion.div
          className="projects__gallery"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {projects.map((project) => (
            <motion.div key={project.id} variants={staggerItem}>
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

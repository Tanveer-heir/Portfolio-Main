import { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../../components/SectionHeading';
import { ProjectCard } from '../../components/ProjectCard';
import { projects, sectionMeta } from '../../config/content';
import { staggerContainer, staggerItem } from '../../utils/motion';
import './ProjectsSection.css';

const FILTER_CATEGORIES = ['all', ...new Set(projects.map((project) => project.category))];

export default function ProjectsSection() {
  const meta = sectionMeta.projects;
  const [activeCategory, setActiveCategory] = useState('all');
  const visibleProjects = projects.filter(
    (project) => activeCategory === 'all' || project.category === activeCategory,
  );

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
              className={`projects__filter-btn ${cat === activeCategory ? 'projects__filter-btn--active' : ''}`}
              aria-pressed={cat === activeCategory}
              onClick={() => setActiveCategory(cat)}
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
          {visibleProjects.map((project) => (
            <motion.div key={project.id} variants={staggerItem}>
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

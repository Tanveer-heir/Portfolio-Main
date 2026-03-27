import { motion } from 'framer-motion';
import { SectionHeading } from '../../components/SectionHeading';
import { Card, CardBody } from '../../components/Card';
import { SkillBadge } from '../../components/SkillBadge';
import { articles, sectionMeta } from '../../data/portfolio-data';
import { staggerContainer, staggerItem } from '../../utils/motion';
import './ArticlesSection.css';

export default function ArticlesSection() {
  const meta = sectionMeta.articles;

  return (
    <section className="articles section" id="articles-section">
      <div className="container">
        <SectionHeading
          label={meta.label}
          title={meta.title}
          subtitle={meta.subtitle}
        />

        <motion.div
          className="articles__feed"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {articles.map((article) => (
            <motion.div key={article.id} variants={staggerItem}>
              <Card variant="glass" hoverEffect className="articles__card">
                <CardBody>
                  <div className="articles__meta">
                    <span className="articles__date">{article.publishedAt}</span>
                    <span className="articles__dot" aria-hidden="true">·</span>
                    <span className="articles__reading-time">{article.readingTime} min read</span>
                  </div>
                  <h3 className="articles__title">{article.title}</h3>
                  <p className="articles__excerpt">{article.excerpt}</p>
                  <div className="articles__tags">
                    {article.tags.map((tag) => (
                      <SkillBadge key={tag} name={tag} />
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

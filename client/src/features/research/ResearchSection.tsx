import { motion } from "framer-motion";
import { SectionHeading } from "../../components/SectionHeading";
import { Card, CardHeader, CardBody, CardFooter } from "../../components/Card";
import { SkillBadge } from "../../components/SkillBadge";
import { Button } from "../../components/Button";
import { SpotlightCard } from "../../components/effects";
import { research, sectionMeta } from "../../data/portfolio-data";
import { staggerContainer, staggerItem } from "../../utils/motion";
import "./ResearchSection.css";

export default function ResearchSection() {
  const meta = sectionMeta.research;

  return (
    <section className="research section" id="research-section">
      <div className="container">
        <SectionHeading
          label={meta.label}
          title={meta.title}
          subtitle={meta.subtitle}
        />

        <motion.div
          className="research__grid"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {research.map((paper) => (
            <motion.div key={paper.id} variants={staggerItem}>
              <SpotlightCard>
                <Card
                  variant="outlined"
                  hoverEffect
                  accentBorder
                  spotlightBorder
                >
                  <CardHeader>
                    <div className="research__header-row">
                      <span className="research__year">
                        {paper.publicationDate}
                      </span>
                      {paper.status && (
                        <span className="research__status">{paper.status}</span>
                      )}
                    </div>
                    <h3 className="research__title">{paper.title}</h3>
                    <p className="research__authors">
                      {paper.authors.join(", ")}
                    </p>
                  </CardHeader>
                  <CardBody>
                    <p className="research__abstract">{paper.abstract}</p>
                    <div className="research__tags">
                      {paper.tags.map((tag) => (
                        <SkillBadge key={tag} name={tag} variant="accent" />
                      ))}
                    </div>
                  </CardBody>
                  <CardFooter>
                    <Button variant="outline" size="sm">
                      Read Paper
                    </Button>
                    <Button variant="ghost" size="sm">
                      Download PDF
                    </Button>
                  </CardFooter>
                </Card>
              </SpotlightCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

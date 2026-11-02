import { useRef } from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "../../components/SectionHeading";
import { Card, CardHeader, CardBody, CardFooter } from "../../components/Card";
import { SkillBadge } from "../../components/SkillBadge";
import { Button } from "../../components/Button";
import { LogicTrace, SpotlightCard } from "../../components/effects";
import { hackathons, sectionMeta } from "../../config/content";
import { assetUrl } from "../../utils/assets";
import { staggerContainer, staggerItem } from "../../utils/motion";
import "./HackathonsSection.css";

export default function HackathonsSection() {
  const meta = sectionMeta.hackathons;
  const timelineRef = useRef<HTMLDivElement>(null);

  return (
    <section className="hackathons section" id="hackathons-section">
      <div className="container">
        <SectionHeading
          label={meta.label}
          title={meta.title}
          subtitle={meta.subtitle}
        />

        <motion.div
          className="hackathons__bento"
          ref={timelineRef}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <LogicTrace
            containerRef={timelineRef}
            nodeSelector=".hackathons__node"
          />

          {hackathons.map((hack) => (
            <motion.div
              key={hack.id}
              variants={staggerItem}
              className="hackathons__bento-item"
            >
              <span className="hackathons__node" aria-hidden="true" />

              <SpotlightCard className="hackathons__spotlight">
                <Card
                  variant="outlined"
                  hoverEffect
                  accentBorder
                  className="hackathons__card"
                  spotlightBorder
                >
                  {hack.image && (
                    <img
                      src={assetUrl(hack.image)}
                      alt={hack.projectTitle}
                      className="hackathons__image"
                      loading="lazy"
                    />
                  )}
                  <CardHeader>
                    <div className="hackathons__card-meta">
                      <span className="hackathons__event-name">
                        {hack.name}
                      </span>
                      <span className="hackathons__date">{hack.date}</span>
                    </div>
                    {hack.award && (
                      <span className="hackathons__award">{hack.award}</span>
                    )}
                    <h3 className="hackathons__project-title">
                      {hack.projectTitle}
                    </h3>
                    <p className="hackathons__theme">{hack.theme}</p>
                  </CardHeader>
                  <CardBody>
                    <p className="hackathons__description">
                      {hack.description}
                    </p>
                    <div className="hackathons__details">
                      {hack.duration && (
                        <span className="hackathons__detail">
                          <span
                            className="hackathons__detail-icon"
                            aria-hidden="true"
                          >
                            ⏱
                          </span>
                          {hack.duration}
                        </span>
                      )}
                      {hack.budget && (
                        <span className="hackathons__detail">
                          <span
                            className="hackathons__detail-icon"
                            aria-hidden="true"
                          >
                            💰
                          </span>
                          {hack.budget}
                        </span>
                      )}
                    </div>
                    <div className="hackathons__tags">
                      {hack.tags.map((tag) => (
                        <SkillBadge key={tag} name={tag} variant="accent" />
                      ))}
                    </div>
                  </CardBody>
                  {(hack.url || hack.demoUrl || hack.repoUrl) && (
                    <CardFooter>
                      {hack.url && (
                        <Button variant="outline" size="sm" href={hack.url}>
                          View Details
                        </Button>
                      )}
                      {hack.demoUrl && (
                        <Button variant="ghost" size="sm" href={hack.demoUrl}>
                          Live Demo
                        </Button>
                      )}
                      {hack.repoUrl && (
                        <Button variant="ghost" size="sm" href={hack.repoUrl}>
                          Source
                        </Button>
                      )}
                    </CardFooter>
                  )}
                </Card>
              </SpotlightCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

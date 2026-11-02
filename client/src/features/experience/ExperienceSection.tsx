import { useRef } from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "../../components/SectionHeading";
import { TimelineItem } from "../../components/TimelineItem";
import { SkillBadge } from "../../components/SkillBadge";
import { LogicTrace } from "../../components/effects";
import { experience, sectionMeta } from "../../config/content";
import { fadeInLeft } from "../../utils/motion";
import "./ExperienceSection.css";

export default function ExperienceSection() {
  const meta = sectionMeta.experience;
  const timelineRef = useRef<HTMLDivElement>(null);

  // Build display year from startDate / endDate
  const displayYear = (exp: (typeof experience)[number]) => {
    if (!exp.endDate) return `${exp.startDate} — Present`;
    if (exp.startDate === exp.endDate) return exp.startDate;
    return `${exp.startDate} — ${exp.endDate}`;
  };

  return (
    <section className="experience section" id="experience-section">
      <div className="container">
        <SectionHeading
          label={meta.label}
          title={meta.title}
          subtitle={meta.subtitle}
        />

        <div className="experience__timeline-shell" ref={timelineRef}>
          <LogicTrace
            containerRef={timelineRef}
            nodeSelector=".timeline-item__dot"
            className="experience__logic-trace"
          />

          <div className="experience__timeline">
            {experience.map((exp, i) => (
              <motion.div
                key={exp.id}
                {...fadeInLeft}
                transition={{
                  duration: 0.5,
                  delay: i * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <TimelineItem
                  year={displayYear(exp)}
                  title={exp.role}
                  subtitle={exp.organization}
                  subtitleUrl={exp.url}
                  accent={exp.accent}
                >
                  <p>{exp.description}</p>
                  <div className="experience__tags">
                    {exp.tags.map((tag) => (
                      <SkillBadge key={tag} name={tag} variant="default" />
                    ))}
                  </div>
                </TimelineItem>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import { Card, CardHeader, CardBody, CardFooter } from "../Card";
import { SkillBadge } from "../SkillBadge";
import { Button } from "../Button";
import type { Project } from "../../types";
import "./ProjectCard.css";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const categoryIcons: Record<Project["category"], string> = {
    software: "⌘",
    hardware: "⚡",
    research: "◈",
    design: "◐",
  };

  return (
    <Card
      variant="outlined"
      hoverEffect
      accentBorder={project.featured}
      spotlightBorder
      className="project-card"
    >
      {/* Image placeholder area */}
      <div className="project-card__image">
        <span className="project-card__category-icon" aria-hidden="true">
          {categoryIcons[project.category]}
        </span>
        {project.featured && (
          <span className="project-card__featured-badge">Featured</span>
        )}
      </div>

      <CardHeader>
        <h3 className="project-card__title">{project.title}</h3>
      </CardHeader>

      <CardBody>
        <p className="project-card__description">{project.description}</p>
        <div className="project-card__tags">
          {project.tags.map((tag) => (
            <SkillBadge key={tag} name={tag} variant="default" />
          ))}
        </div>
      </CardBody>

      <CardFooter>
        {project.liveUrl && (
          <Button variant="outline" size="sm">
            Live Demo
          </Button>
        )}
        {project.repoUrl && (
          <Button variant="ghost" size="sm">
            Source
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}

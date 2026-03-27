import './SkillBadge.css';

interface SkillBadgeProps {
  name: string;
  level?: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  variant?: 'default' | 'accent' | 'warm';
}

export default function SkillBadge({ name, level, variant = 'default' }: SkillBadgeProps) {
  return (
    <span className={`skill-badge skill-badge--${variant}`} title={level}>
      {name}
      {level && <span className={`skill-badge__dot skill-badge__dot--${level}`} aria-hidden="true" />}
    </span>
  );
}

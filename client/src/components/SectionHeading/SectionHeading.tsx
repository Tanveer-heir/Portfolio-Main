import './SectionHeading.css';

interface SectionHeadingProps {
  label: string;            /* Small overline text e.g. "01" or "Projects" */
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
}

export default function SectionHeading({
  label,
  title,
  subtitle,
  align = 'left',
  className = '',
}: SectionHeadingProps) {
  return (
    <header className={`section-heading section-heading--${align} ${className}`}>
      <span className="section-heading__label">{label}</span>
      <h2 className="section-heading__title">{title}</h2>
      {subtitle && <p className="section-heading__subtitle">{subtitle}</p>}
    </header>
  );
}

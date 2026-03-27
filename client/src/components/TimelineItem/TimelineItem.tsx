import { type ReactNode } from 'react';
import './TimelineItem.css';

interface TimelineItemProps {
  year: string;
  title: string;
  subtitle?: string;
  children?: ReactNode;
  accent?: boolean;
}

export default function TimelineItem({ year, title, subtitle, children, accent = false }: TimelineItemProps) {
  return (
    <div className={`timeline-item ${accent ? 'timeline-item--accent' : ''}`}>
      <div className="timeline-item__marker">
        <span className="timeline-item__dot" aria-hidden="true" />
        <span className="timeline-item__line" aria-hidden="true" />
      </div>
      <div className="timeline-item__content">
        <span className="timeline-item__year">{year}</span>
        <h3 className="timeline-item__title">{title}</h3>
        {subtitle && <p className="timeline-item__subtitle">{subtitle}</p>}
        {children && <div className="timeline-item__body">{children}</div>}
      </div>
    </div>
  );
}

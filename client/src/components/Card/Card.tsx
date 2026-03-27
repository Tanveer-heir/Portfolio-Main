import { type ReactNode } from 'react';
import './Card.css';

type CardVariant = 'elevated' | 'outlined' | 'filled' | 'glass';

interface CardProps {
  variant?: CardVariant;
  hoverEffect?: boolean;
  accentBorder?: boolean;
  className?: string;
  children: ReactNode;
  onClick?: () => void;
}

export default function Card({
  variant = 'elevated',
  hoverEffect = true,
  accentBorder = false,
  className = '',
  children,
  onClick,
}: CardProps) {
  const Tag = onClick ? 'button' : 'div';

  return (
    <Tag
      className={`card card--${variant} ${hoverEffect ? 'card--hover' : ''} ${accentBorder ? 'card--accent-border' : ''} ${className}`}
      onClick={onClick}
      tabIndex={onClick ? 0 : undefined}
    >
      {children}
    </Tag>
  );
}

export function CardHeader({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`card__header ${className}`}>{children}</div>;
}

export function CardBody({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`card__body ${className}`}>{children}</div>;
}

export function CardFooter({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`card__footer ${className}`}>{children}</div>;
}

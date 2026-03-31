import { type MouseEvent, type ReactNode } from "react";
import "./Card.css";

type CardVariant = "elevated" | "outlined" | "filled" | "glass";

interface CardProps {
  variant?: CardVariant;
  hoverEffect?: boolean;
  accentBorder?: boolean;
  tiltEffect?: boolean;
  spotlightBorder?: boolean;
  className?: string;
  children: ReactNode;
  onClick?: () => void;
}

export default function Card({
  variant = "elevated",
  hoverEffect = true,
  accentBorder = false,
  tiltEffect = true,
  spotlightBorder = false,
  className = "",
  children,
  onClick,
}: CardProps) {
  const Tag = onClick ? "button" : "div";

  const handlePointerMove = (
    event: MouseEvent<HTMLButtonElement | HTMLDivElement>,
  ) => {
    if (!tiltEffect || !hoverEffect) {
      return;
    }

    const rect = event.currentTarget.getBoundingClientRect();
    const px = ((event.clientX - rect.left) / rect.width) * 100;
    const py = ((event.clientY - rect.top) / rect.height) * 100;
    const rotateY = ((px - 50) / 50) * 6;
    const rotateX = ((50 - py) / 50) * 6;

    event.currentTarget.style.setProperty("--card-mx", `${px}%`);
    event.currentTarget.style.setProperty("--card-my", `${py}%`);
    event.currentTarget.style.setProperty(
      "--card-rx",
      `${rotateX.toFixed(2)}deg`,
    );
    event.currentTarget.style.setProperty(
      "--card-ry",
      `${rotateY.toFixed(2)}deg`,
    );
  };

  const handlePointerLeave = (
    event: MouseEvent<HTMLButtonElement | HTMLDivElement>,
  ) => {
    event.currentTarget.style.setProperty("--card-rx", "0deg");
    event.currentTarget.style.setProperty("--card-ry", "0deg");
  };

  return (
    <Tag
      className={`card card--${variant} ${hoverEffect ? "card--hover" : ""} ${accentBorder ? "card--accent-border" : ""} ${tiltEffect ? "card--tilt" : ""} ${spotlightBorder ? "card--spotlight" : ""} ${className}`}
      onClick={onClick}
      onMouseMove={handlePointerMove}
      onMouseLeave={handlePointerLeave}
      tabIndex={onClick ? 0 : undefined}
    >
      {children}
    </Tag>
  );
}

export function CardHeader({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={`card__header ${className}`}>{children}</div>;
}

export function CardBody({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={`card__body ${className}`}>{children}</div>;
}

export function CardFooter({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={`card__footer ${className}`}>{children}</div>;
}

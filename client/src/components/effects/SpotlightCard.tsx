import { type MouseEvent, type ReactNode } from "react";
import "./SpotlightCard.css";

interface SpotlightCardProps {
  children: ReactNode;
  className?: string;
}

export default function SpotlightCard({
  children,
  className = "",
}: SpotlightCardProps) {
  const onPointerMove = (event: MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;

    event.currentTarget.style.setProperty("--spot-x", `${x}%`);
    event.currentTarget.style.setProperty("--spot-y", `${y}%`);
  };

  return (
    <div className={`spotlight-card ${className}`} onMouseMove={onPointerMove}>
      {children}
    </div>
  );
}

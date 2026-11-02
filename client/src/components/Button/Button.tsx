import { type ButtonHTMLAttributes, type ReactNode } from 'react';
import { Link } from 'react-router-dom';
import './Button.css';

type ButtonVariant = 'solid' | 'outline' | 'ghost' | 'link';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  /** Page inside this site: renders a link instead of a button */
  to?: string;
  /** Web address or file: renders a link that opens in a new tab */
  href?: string;
  children: ReactNode;
}

export default function Button({
  variant = 'solid',
  size = 'md',
  isLoading = false,
  leftIcon,
  rightIcon,
  to,
  href,
  children,
  disabled,
  className = '',
  ...rest
}: ButtonProps) {
  const classes = `btn btn--${variant} btn--${size} ${className}`;
  const content = (
    <>
      {isLoading && <span className="btn__spinner" aria-hidden="true" />}
      {!isLoading && leftIcon && <span className="btn__icon">{leftIcon}</span>}
      <span className="btn__label">{children}</span>
      {!isLoading && rightIcon && <span className="btn__icon">{rightIcon}</span>}
    </>
  );

  if (to) {
    return <Link to={to} className={classes}>{content}</Link>;
  }

  if (href) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }

  return (
    <button className={classes} disabled={disabled || isLoading} {...rest}>
      {content}
    </button>
  );
}

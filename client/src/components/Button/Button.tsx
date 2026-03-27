import { type ButtonHTMLAttributes, type ReactNode } from 'react';
import './Button.css';

type ButtonVariant = 'solid' | 'outline' | 'ghost' | 'link';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  children: ReactNode;
}

export default function Button({
  variant = 'solid',
  size = 'md',
  isLoading = false,
  leftIcon,
  rightIcon,
  children,
  disabled,
  className = '',
  ...rest
}: ButtonProps) {
  return (
    <button
      className={`btn btn--${variant} btn--${size} ${className}`}
      disabled={disabled || isLoading}
      {...rest}
    >
      {isLoading && <span className="btn__spinner" aria-hidden="true" />}
      {!isLoading && leftIcon && <span className="btn__icon">{leftIcon}</span>}
      <span className="btn__label">{children}</span>
      {!isLoading && rightIcon && <span className="btn__icon">{rightIcon}</span>}
    </button>
  );
}

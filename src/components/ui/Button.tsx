import React from 'react';
import { twMerge } from 'tailwind-merge';

type ButtonVariant = 'default' | 'outline' | 'secondary';
type ButtonSize = 'default' | 'sm' | 'lg';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  className = '',
  variant = 'default',
  size = 'default',
  href,
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";
  
  const variants = {
    default: "bg-blue-600 text-white hover:bg-blue-700",
    outline: "bg-transparent border border-white text-white hover:bg-white/10",
    secondary: "bg-purple-600 text-white hover:bg-purple-700"
  };
  
  const sizes = {
    default: "h-10 py-2 px-4 text-sm",
    sm: "h-8 px-3 text-xs",
    lg: "h-12 px-6 text-base"
  };
  
  const classes = twMerge(
    baseStyles,
    variants[variant],
    sizes[size],
    className
  );

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }
  
  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};

export default Button;
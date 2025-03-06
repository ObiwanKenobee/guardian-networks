
import React from 'react';
import { cn } from '@/lib/utils';

interface PillProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'outline' | 'muted';
}

const Pill = ({
  children,
  className,
  variant = 'default',
}: PillProps) => {
  const variantClasses = {
    default: 'bg-primary text-primary-foreground',
    outline: 'border border-primary text-primary bg-transparent',
    muted: 'bg-muted text-muted-foreground',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center px-3 py-1 text-xs font-medium rounded-full',
        variantClasses[variant],
        className
      )}
    >
      {children}
    </span>
  );
};

export default Pill;

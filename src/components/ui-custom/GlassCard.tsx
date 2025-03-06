
import React from 'react';
import { cn } from '@/lib/utils';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

const GlassCard = ({ children, className, hoverEffect = false }: GlassCardProps) => {
  return (
    <div
      className={cn(
        'glass rounded-lg p-6 shadow-sm',
        hoverEffect && 'transition-all duration-300 hover:shadow-md hover:translate-y-[-4px]',
        className
      )}
    >
      {children}
    </div>
  );
};

export default GlassCard;

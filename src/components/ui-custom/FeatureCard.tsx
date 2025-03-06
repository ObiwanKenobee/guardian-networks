
import React from 'react';
import { cn } from '@/lib/utils';
import GlassCard from './GlassCard';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
  iconClassName?: string;
}

const FeatureCard = ({
  icon,
  title,
  description,
  className,
  iconClassName,
}: FeatureCardProps) => {
  return (
    <GlassCard 
      hoverEffect 
      className={cn('flex flex-col items-start space-y-4 h-full', className)}
    >
      <div className={cn(
        'w-12 h-12 rounded-full flex items-center justify-center bg-primary/10 text-primary',
        iconClassName
      )}>
        {icon}
      </div>
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </GlassCard>
  );
};

export default FeatureCard;

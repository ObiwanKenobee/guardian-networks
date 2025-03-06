
import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedImageProps {
  src: string;
  alt: string;
  className?: string;
  animation?: 'fade-in' | 'slide-up' | 'zoom-in' | 'float';
  threshold?: number;
  delay?: number;
}

const AnimatedImage = ({
  src,
  alt,
  className,
  animation = 'fade-in',
  threshold = 0.1,
  delay = 0,
}: AnimatedImageProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
          if (imgRef.current) {
            observer.unobserve(imgRef.current);
          }
        }
      },
      { threshold }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      if (imgRef.current) {
        observer.unobserve(imgRef.current);
      }
    };
  }, [threshold, delay]);

  const animationClasses = {
    'fade-in': 'opacity-0 transition-opacity duration-1000',
    'slide-up': 'opacity-0 translate-y-8 transition-all duration-1000',
    'zoom-in': 'opacity-0 scale-95 transition-all duration-1000',
    'float': 'animate-float',
  };

  const visibleClasses = {
    'fade-in': 'opacity-100',
    'slide-up': 'opacity-100 translate-y-0',
    'zoom-in': 'opacity-100 scale-100',
    'float': '',
  };

  return (
    <div className="overflow-hidden relative">
      {!isLoaded && (
        <div className="absolute inset-0 bg-muted/30 animate-pulse rounded-md"></div>
      )}
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        onLoad={() => setIsLoaded(true)}
        className={cn(
          'w-full h-auto transition-all duration-500',
          animationClasses[animation],
          isVisible && visibleClasses[animation],
          !isLoaded && 'blur-sm',
          className
        )}
      />
    </div>
  );
};

export default AnimatedImage;

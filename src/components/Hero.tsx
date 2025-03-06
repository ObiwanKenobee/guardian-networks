
import React, { useEffect, useRef } from 'react';
import { Button } from './ui/button';
import Pill from './ui-custom/Pill';
import { ArrowRight, Shield, Zap } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const { clientX, clientY } = e;
      const rect = heroRef.current.getBoundingClientRect();
      
      const x = (clientX - rect.left) / rect.width;
      const y = (clientY - rect.top) / rect.height;
      
      heroRef.current.style.setProperty('--mouse-x', `${x}`);
      heroRef.current.style.setProperty('--mouse-y', `${y}`);
    };

    const heroElement = heroRef.current;
    if (heroElement) {
      heroElement.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      if (heroElement) {
        heroElement.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  return (
    <div 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      style={{'--mouse-x': '0.5', '--mouse-y': '0.5'} as React.CSSProperties}
    >
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-radial from-primary/5 to-transparent" />
      
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern bg-[length:40px_40px]" />

      {/* Animated circles */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary/5 animate-pulse-slow blur-xl" />
      <div className="absolute bottom-1/3 right-1/3 w-96 h-96 rounded-full bg-primary/10 animate-pulse-slow blur-3xl" />
      
      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 py-20 md:py-32 flex flex-col items-center text-center">
        <Pill className="mb-6 animate-fade-in">Revolutionizing Crisis Supply Chains</Pill>
        
        <h1 className="headline max-w-4xl mb-6 animate-slide-up">
          Decentralized AI-Driven Supply Chain
          <span className="text-primary"> For Crisis Zones</span>
        </h1>
        
        <p className="subheadline max-w-2xl mb-12 animate-slide-up" style={{ animationDelay: '100ms' }}>
          Secure, resilient, and transparent resource distribution in war zones, 
          disaster-stricken regions, and politically unstable areas.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 mb-16 animate-slide-up" style={{ animationDelay: '200ms' }}>
          <Button size="lg" className="group">
            Get Started
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button size="lg" variant="outline">
            Learn More
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl animate-slide-up" style={{ animationDelay: '300ms' }}>
          <div className="flex items-center justify-center p-6 bg-white/50 backdrop-blur-sm rounded-lg shadow-sm">
            <Shield className="text-primary mr-3 h-5 w-5" />
            <span className="font-medium">Blockchain Security</span>
          </div>
          <div className="flex items-center justify-center p-6 bg-white/50 backdrop-blur-sm rounded-lg shadow-sm">
            <Zap className="text-primary mr-3 h-5 w-5" />
            <span className="font-medium">AI-Powered Logistics</span>
          </div>
          <div className="flex items-center justify-center p-6 bg-white/50 backdrop-blur-sm rounded-lg shadow-sm">
            <svg className="text-primary mr-3 h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
            <span className="font-medium">Decentralized Network</span>
          </div>
        </div>
      </div>

      {/* Mouse-following gradient */}
      <div 
        className="absolute pointer-events-none w-[800px] h-[800px] rounded-full opacity-30 blur-3xl"
        style={{
          background: 'radial-gradient(circle, rgba(0,122,255,0.3) 0%, rgba(0,0,0,0) 70%)',
          top: 'calc(var(--mouse-y) * 100%)',
          left: 'calc(var(--mouse-x) * 100%)',
          transform: 'translate(-50%, -50%)',
        }}
      />
    </div>
  );
};

export default Hero;

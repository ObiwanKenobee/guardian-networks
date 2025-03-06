
import React, { useRef, useEffect } from 'react';
import { Button } from './ui/button';
import Pill from './ui-custom/Pill';
import GlassCard from './ui-custom/GlassCard';
import { ArrowRight } from 'lucide-react';

const Vision = () => {
  const visionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (visionRef.current) {
      observer.observe(visionRef.current);
    }

    return () => {
      if (visionRef.current) {
        observer.unobserve(visionRef.current);
      }
    };
  }, []);
  
  return (
    <section 
      id="vision" 
      className="py-20 md:py-32 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-radial from-primary/5 to-transparent opacity-70" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div 
          ref={visionRef}
          className="max-w-4xl mx-auto text-center opacity-0"
        >
          <Pill className="mb-6">Our Vision</Pill>
          <h2 className="section-title mb-8">
            The Future of Ethical Supply Chains
          </h2>
          <GlassCard className="mb-12 p-8 md:p-12">
            <p className="text-lg md:text-xl mb-8 leading-relaxed">
              Guardian-IO is more than just a logistics platform—it's a paradigm shift in how 
              we deliver aid, restore economies, and safeguard communities in crisis zones. 
              By harnessing decentralization, AI, and blockchain, Guardian-IO ensures that 
              life-saving resources are never withheld, stolen, or lost.
            </p>
            <p className="text-lg md:text-xl font-medium">
              This is the Zero-to-One innovation that redefines humanitarian logistics for the future.
            </p>
          </GlassCard>
          
          <Button size="lg" className="group">
            Join Our Mission
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Vision;

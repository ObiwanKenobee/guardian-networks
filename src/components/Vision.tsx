
import React, { useRef, useEffect } from 'react';
import { Button } from './ui/button';
import Pill from './ui-custom/Pill';
import GlassCard from './ui-custom/GlassCard';
import { ArrowRight, Sun, Heart, Globe } from 'lucide-react';

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
          <Pill className="mb-6">Our Utopian Vision</Pill>
          <h2 className="section-title mb-8">
            Creating a World of Abundance and Connection
          </h2>
          <GlassCard className="mb-12 p-8 md:p-12">
            <p className="text-lg md:text-xl mb-8 leading-relaxed">
              Guardian-IO represents our collective journey toward a future where scarcity is obsolete and communities flourish through cooperation. 
              Our platform transcends traditional supply chains to create networks of mutual aid, shared prosperity, and 
              environmental regeneration—where the free flow of resources matches human needs in perfect harmony.
            </p>
            <p className="text-lg md:text-xl font-medium">
              Through radical transparency and decentralized cooperation, we're building the foundations for a post-scarcity world.
            </p>
          </GlassCard>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="flex flex-col items-center p-6 bg-white/30 backdrop-blur-sm rounded-lg">
              <Sun className="text-primary mb-4 h-10 w-10" />
              <h3 className="font-medium text-lg mb-2">Abundant Resources</h3>
              <p className="text-center text-muted-foreground">Systems designed for plenty rather than artificial scarcity</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-white/30 backdrop-blur-sm rounded-lg">
              <Heart className="text-primary mb-4 h-10 w-10" />
              <h3 className="font-medium text-lg mb-2">Universal Care</h3>
              <p className="text-center text-muted-foreground">Ensuring everyone's needs are met with dignity and respect</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-white/30 backdrop-blur-sm rounded-lg">
              <Globe className="text-primary mb-4 h-10 w-10" />
              <h3 className="font-medium text-lg mb-2">Global Harmony</h3>
              <p className="text-center text-muted-foreground">Transcending borders to create a unified world community</p>
            </div>
          </div>
          
          <Button size="lg" className="group">
            Join Our Movement
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Vision;

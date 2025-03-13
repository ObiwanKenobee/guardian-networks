
import React, { useRef, useEffect } from 'react';
import FeatureCard from './ui-custom/FeatureCard';
import Pill from './ui-custom/Pill';
import { 
  Sparkles,
  Shield,
  Globe,
  Users
} from 'lucide-react';

const Features = () => {
  const featuresRef = useRef<HTMLDivElement>(null);
  
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

    const features = featuresRef.current?.querySelectorAll('.feature-card');
    features?.forEach((feature) => {
      observer.observe(feature);
    });

    return () => {
      features?.forEach((feature) => {
        observer.unobserve(feature);
      });
    };
  }, []);

  return (
    <section 
      id="features"
      ref={featuresRef}
      className="py-20 md:py-32 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-radial from-primary/5 to-transparent opacity-50" />
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Pill className="mb-4">Core Capabilities</Pill>
          <h2 className="section-title mb-4">
            Key Platform Features
          </h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Discover how our technology enables new possibilities for collaboration
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="feature-card opacity-0" style={{ transitionDelay: '0ms' }}>
            <FeatureCard
              icon={<Sparkles className="h-6 w-6" />}
              title="Advanced Analytics"
              description="Data-driven insights to optimize resource allocation and distribution."
            />
          </div>

          <div className="feature-card opacity-0" style={{ transitionDelay: '100ms' }}>
            <FeatureCard
              icon={<Shield className="h-6 w-6" />}
              title="Secure Infrastructure"
              description="Enterprise-grade security protocols to protect sensitive information."
            />
          </div>

          <div className="feature-card opacity-0" style={{ transitionDelay: '200ms' }}>
            <FeatureCard
              icon={<Globe className="h-6 w-6" />}
              title="Global Connectivity"
              description="Connect organizations and communities across geographical boundaries."
            />
          </div>

          <div className="feature-card opacity-0" style={{ transitionDelay: '300ms' }}>
            <FeatureCard
              icon={<Users className="h-6 w-6" />}
              title="Multi-stakeholder Collaboration"
              description="Purpose-built tools for different organizational roles and needs."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;

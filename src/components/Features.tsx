
import React, { useRef, useEffect } from 'react';
import FeatureCard from './ui-custom/FeatureCard';
import Pill from './ui-custom/Pill';
import { 
  Sun,
  Heart, 
  Globe, 
  Sparkles,
  Leaf,
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
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-radial from-primary/5 to-transparent opacity-50" />
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Pill className="mb-4">Core Principles</Pill>
          <h2 className="section-title mb-4">
            Building Utopian Resource Networks
          </h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Our platform transcends traditional economic structures to create a new paradigm of 
            resource sharing and cooperation for a world of abundance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="feature-card opacity-0" style={{ transitionDelay: '0ms' }}>
            <FeatureCard
              icon={<Sun className="h-6 w-6" />}
              title="Collective Intelligence Networks"
              description="Community-guided algorithms that create optimal resource allocation by connecting human needs with available resources."
            />
          </div>

          <div className="feature-card opacity-0" style={{ transitionDelay: '100ms' }}>
            <FeatureCard
              icon={<Heart className="h-6 w-6" />}
              title="Universal Care Systems"
              description="Ensures every community's essential needs are met through autonomous supply networks that transcend traditional markets."
            />
          </div>

          <div className="feature-card opacity-0" style={{ transitionDelay: '200ms' }}>
            <FeatureCard
              icon={<Globe className="h-6 w-6" />}
              title="Borderless Cooperation"
              description="Transparent global sharing protocols that dissolve artificial barriers between communities while respecting local autonomy."
            />
          </div>

          <div className="feature-card opacity-0" style={{ transitionDelay: '300ms' }}>
            <FeatureCard
              icon={<Sparkles className="h-6 w-6" />}
              title="Post-Scarcity Logistics"
              description="Advanced production and distribution systems that create abundance rather than managing scarcity."
            />
          </div>

          <div className="feature-card opacity-0" style={{ transitionDelay: '400ms' }}>
            <FeatureCard
              icon={<Leaf className="h-6 w-6" />}
              title="Regenerative Resource Cycles"
              description="Circular economy principles ensure that all materials flow in continuous cycles of use and renewal."
            />
          </div>

          <div className="feature-card opacity-0" style={{ transitionDelay: '500ms' }}>
            <FeatureCard
              icon={<Users className="h-6 w-6" />}
              title="Democratic Commons Network"
              description="Community-governed platforms where decisions about resource flows are made by those affected, not distant authorities."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;

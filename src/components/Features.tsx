
import React, { useRef, useEffect } from 'react';
import FeatureCard from './ui-custom/FeatureCard';
import Pill from './ui-custom/Pill';
import { 
  Brain, 
  LayoutGrid, 
  Link, 
  Plane, 
  Store,
  Shield 
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
          <Pill className="mb-4">Key Features</Pill>
          <h2 className="section-title mb-4">
            Redefining Supply Chain Resilience
          </h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Our integrated approach combines cutting-edge technologies to ensure secure and 
            efficient resource distribution in the most challenging environments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="feature-card opacity-0" style={{ transitionDelay: '0ms' }}>
            <FeatureCard
              icon={<Brain className="h-6 w-6" />}
              title="AI-Powered Crisis Supply Intelligence"
              description="Predicts shortages and supply chain disruptions in real time while identifying optimal supply routes in conflict zones."
            />
          </div>

          <div className="feature-card opacity-0" style={{ transitionDelay: '100ms' }}>
            <FeatureCard
              icon={<LayoutGrid className="h-6 w-6" />}
              title="Decentralized Micro-Distribution Hubs"
              description="Eliminates reliance on vulnerable warehouse locations with mobile, solar-powered supply stations that shift dynamically."
            />
          </div>

          <div className="feature-card opacity-0" style={{ transitionDelay: '200ms' }}>
            <FeatureCard
              icon={<Link className="h-6 w-6" />}
              title="Blockchain-Based Secure Transactions"
              description="Smart contracts ensure corruption-proof supply chain agreements with end-to-end traceability and cryptographic security."
            />
          </div>

          <div className="feature-card opacity-0" style={{ transitionDelay: '300ms' }}>
            <FeatureCard
              icon={<Plane className="h-6 w-6" />}
              title="Autonomous & Alternative Delivery"
              description="Drone-powered networks enable rapid transport while AI-coordinated self-driving convoys dynamically reroute in real time."
            />
          </div>

          <div className="feature-card opacity-0" style={{ transitionDelay: '400ms' }}>
            <FeatureCard
              icon={<Store className="h-6 w-6" />}
              title="Guardian-IO B2B/B2G Marketplace"
              description="Directly connects businesses & NGOs with crisis regions for secure supply transactions while empowering local economies."
            />
          </div>

          <div className="feature-card opacity-0" style={{ transitionDelay: '500ms' }}>
            <FeatureCard
              icon={<Shield className="h-6 w-6" />}
              title="Ethical Trade System"
              description="Smart contract-enforced ethical trade ensures compliance and transparency throughout the entire supply chain process."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;

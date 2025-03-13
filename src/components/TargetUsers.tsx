
import React, { useRef, useEffect } from 'react';
import GlassCard from './ui-custom/GlassCard';
import Pill from './ui-custom/Pill';
import { Check, Users, Globe, Sparkles, Leaf } from 'lucide-react';

const TargetUsers = () => {
  const usersRef = useRef<HTMLDivElement>(null);
  
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

    const userCards = usersRef.current?.querySelectorAll('.user-card');
    userCards?.forEach((card) => {
      observer.observe(card);
    });

    return () => {
      userCards?.forEach((card) => {
        observer.unobserve(card);
      });
    };
  }, []);

  return (
    <section 
      id="users"
      ref={usersRef}
      className="py-20 md:py-32 bg-muted/30 relative overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Pill className="mb-4">Community Participants</Pill>
          <h2 className="section-title mb-4">
            Who Contributes to Our Shared Vision
          </h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Guardian-IO brings together diverse stakeholders in a cooperative network focused 
            on creating abundance and mutual flourishing rather than competition.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="user-card opacity-0" style={{ transitionDelay: '0ms' }}>
            <GlassCard className="h-full" hoverEffect>
              <div className="flex items-start">
                <div className="mr-4 p-3 rounded-full bg-primary/10">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Local Communities</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Democratic governance over local resource flows</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Self-determination of needs and contributions</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Cultural autonomy with global solidarity</span>
                    </li>
                  </ul>
                </div>
              </div>
            </GlassCard>
          </div>

          <div className="user-card opacity-0" style={{ transitionDelay: '100ms' }}>
            <GlassCard className="h-full" hoverEffect>
              <div className="flex items-start">
                <div className="mr-4 p-3 rounded-full bg-primary/10">
                  <Globe className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Global Coordination Networks</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Facilitation of resource-sharing across regions</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Transparent tracking of global flows and needs</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Cross-cultural cooperation and knowledge sharing</span>
                    </li>
                  </ul>
                </div>
              </div>
            </GlassCard>
          </div>

          <div className="user-card opacity-0" style={{ transitionDelay: '200ms' }}>
            <GlassCard className="h-full" hoverEffect>
              <div className="flex items-start">
                <div className="mr-4 p-3 rounded-full bg-primary/10">
                  <Sparkles className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Knowledge Commoners</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Open-source innovation and technology sharing</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Democratic development of collective intelligence</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Bridging traditional and cutting-edge wisdom</span>
                    </li>
                  </ul>
                </div>
              </div>
            </GlassCard>
          </div>

          <div className="user-card opacity-0" style={{ transitionDelay: '300ms' }}>
            <GlassCard className="h-full" hoverEffect>
              <div className="flex items-start">
                <div className="mr-4 p-3 rounded-full bg-primary/10">
                  <Leaf className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Ecological Stewards</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Integration of human systems with natural cycles</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Regenerative resource management protocols</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Guardianship of biodiversity and ecosystems</span>
                    </li>
                  </ul>
                </div>
              </div>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TargetUsers;

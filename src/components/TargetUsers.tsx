
import React, { useRef, useEffect } from 'react';
import GlassCard from './ui-custom/GlassCard';
import Pill from './ui-custom/Pill';
import { Check, Building, Heart, ShoppingBag, Government } from 'lucide-react';

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
          <Pill className="mb-4">Target Users & Benefits</Pill>
          <h2 className="section-title mb-4">
            Who Benefits from Guardian-IO
          </h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Our platform serves diverse stakeholders in the crisis management ecosystem, 
            providing tailored solutions for each group's unique challenges.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="user-card opacity-0" style={{ transitionDelay: '0ms' }}>
            <GlassCard className="h-full" hoverEffect>
              <div className="flex items-start">
                <div className="mr-4 p-3 rounded-full bg-primary/10">
                  <Building className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">For Businesses</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Secure and risk-free resource distribution to crisis zones</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Prevent corruption and ensure supply chain integrity</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Reduce operational risks in unstable regions</span>
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
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">For NGOs</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Verifiable humanitarian aid deliveries with real-time tracking</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Enhanced transparency and accountability to donors</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Improved efficiency in resource allocation</span>
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
                  <ShoppingBag className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">For Local Suppliers</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Safe access to a global network of partners</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Guaranteed fair trade and payment practices</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Integration into sophisticated supply chain systems</span>
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
                  <Government className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">For Governments</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Predictive intelligence for resource planning</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Crisis response tools for effective emergency management</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>Enhanced coordination with international aid organizations</span>
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

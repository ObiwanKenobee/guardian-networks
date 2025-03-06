
import React, { useRef, useEffect } from 'react';
import GlassCard from './ui-custom/GlassCard';
import Pill from './ui-custom/Pill';

const TechStack = () => {
  const techRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slide-up');
          }
        });
      },
      { threshold: 0.1 }
    );

    const techElements = techRef.current?.querySelectorAll('.tech-element');
    techElements?.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      techElements?.forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, []);

  return (
    <section 
      id="technology"
      ref={techRef}
      className="py-20 md:py-32 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute right-0 top-0 w-1/2 h-1/2 bg-gradient-radial from-primary/5 to-transparent opacity-60 blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <Pill className="mb-4">Technology Stack</Pill>
          <h2 className="section-title mb-4">
            Powered by Advanced Technologies
          </h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Our platform leverages cutting-edge technologies to deliver a robust, 
            secure, and scalable solution for crisis supply chains.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="tech-element opacity-0" style={{ transitionDelay: '0ms' }}>
            <GlassCard className="h-full flex flex-col items-center text-center p-8" hoverEffect>
              <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <svg className="h-8 w-8 text-primary" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2L4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5l-8-3z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M16 8l-5 5-3-3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Frontend</h3>
              <p className="text-muted-foreground mb-4">Fast, modular, and scalable UI</p>
              <div className="flex flex-wrap gap-2 justify-center">
                <Pill variant="muted">Vite</Pill>
                <Pill variant="muted">React</Pill>
                <Pill variant="muted">TypeScript</Pill>
              </div>
            </GlassCard>
          </div>

          <div className="tech-element opacity-0" style={{ transitionDelay: '100ms' }}>
            <GlassCard className="h-full flex flex-col items-center text-center p-8" hoverEffect>
              <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <svg className="h-8 w-8 text-primary" viewBox="0 0 24 24" fill="none">
                  <path d="M20 4L3 11l8 2M20 4l-9 9M20 4v12l-3 3M3 11v8l8-8M11 13l9 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Backend</h3>
              <p className="text-muted-foreground mb-4">Real-time data capabilities</p>
              <div className="flex flex-wrap gap-2 justify-center">
                <Pill variant="muted">Node.js</Pill>
                <Pill variant="muted">NestJS</Pill>
                <Pill variant="muted">GraphQL</Pill>
              </div>
            </GlassCard>
          </div>

          <div className="tech-element opacity-0" style={{ transitionDelay: '200ms' }}>
            <GlassCard className="h-full flex flex-col items-center text-center p-8" hoverEffect>
              <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <svg className="h-8 w-8 text-primary" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2v8m0 4v8M2 12h8m4 0h8M4.93 4.93l5.66 5.66m2.83 2.83l5.66 5.66M4.93 19.07l5.66-5.66m2.83-2.83l5.66-5.66" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">AI/ML</h3>
              <p className="text-muted-foreground mb-4">Predictive analytics & optimization</p>
              <div className="flex flex-wrap gap-2 justify-center">
                <Pill variant="muted">Python</Pill>
                <Pill variant="muted">TensorFlow</Pill>
                <Pill variant="muted">Data Science</Pill>
              </div>
            </GlassCard>
          </div>

          <div className="tech-element opacity-0" style={{ transitionDelay: '300ms' }}>
            <GlassCard className="h-full flex flex-col items-center text-center p-8" hoverEffect>
              <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <svg className="h-8 w-8 text-primary" viewBox="0 0 24 24" fill="none">
                  <path d="M2 22l2-2m0 0l4-4m-4 4l-4-4m4 4l2 2M22 6l-2-2m0 0l-4-4m4 4l4 4m-4-4l-2-2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <rect x="7" y="7" width="10" height="10" rx="2" stroke="currentColor" strokeWidth="2" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Blockchain</h3>
              <p className="text-muted-foreground mb-4">Smart contracts & verification</p>
              <div className="flex flex-wrap gap-2 justify-center">
                <Pill variant="muted">Ethereum</Pill>
                <Pill variant="muted">Polygon</Pill>
                <Pill variant="muted">Smart Contracts</Pill>
              </div>
            </GlassCard>
          </div>

          <div className="tech-element opacity-0" style={{ transitionDelay: '400ms' }}>
            <GlassCard className="h-full flex flex-col items-center text-center p-8" hoverEffect>
              <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <svg className="h-8 w-8 text-primary" viewBox="0 0 24 24" fill="none">
                  <path d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M3 9v10a2 2 0 002 2h4m-6-12h18M9 21h10a2 2 0 002-2V9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <path d="M12 12a3 3 0 100 6 3 3 0 000-6z" stroke="currentColor" strokeWidth="2" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Edge Computing</h3>
              <p className="text-muted-foreground mb-4">Decentralized infrastructure</p>
              <div className="flex flex-wrap gap-2 justify-center">
                <Pill variant="muted">AWS Lambda</Pill>
                <Pill variant="muted">Cloudflare Workers</Pill>
                <Pill variant="muted">Edge Services</Pill>
              </div>
            </GlassCard>
          </div>

          <div className="tech-element opacity-0" style={{ transitionDelay: '500ms' }}>
            <GlassCard className="h-full flex flex-col items-center text-center p-8" hoverEffect>
              <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <svg className="h-8 w-8 text-primary" viewBox="0 0 24 24" fill="none">
                  <path d="M20 3h-1V2a1 1 0 00-2 0v1H7V2a1 1 0 00-2 0v1H4a2 2 0 00-2 2v16a2 2 0 002 2h16a2 2 0 002-2V5a2 2 0 00-2-2z" stroke="currentColor" strokeWidth="2" />
                  <path d="M16 13l-2 2-4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Database</h3>
              <p className="text-muted-foreground mb-4">Scalable data storage</p>
              <div className="flex flex-wrap gap-2 justify-center">
                <Pill variant="muted">PostgreSQL</Pill>
                <Pill variant="muted">Firebase</Pill>
                <Pill variant="muted">Data Caching</Pill>
              </div>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;

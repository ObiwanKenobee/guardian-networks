
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import TargetUsers from '@/components/TargetUsers';
import TechStack from '@/components/TechStack';
import Vision from '@/components/Vision';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < window.innerHeight * 0.75) {
          section.classList.add('animate-fade-in');
        }
      });
    };

    // Smooth scroll to sections
    const handleNavClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a');
      
      if (link && link.hash) {
        e.preventDefault();
        const targetElement = document.querySelector(link.hash);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.getBoundingClientRect().top + window.scrollY - 100,
            behavior: 'smooth'
          });
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('click', handleNavClick);
    
    // Trigger initial animation
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('click', handleNavClick);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <Header />
      <main>
        <Hero />
        <Features />
        <TargetUsers />
        <TechStack />
        <Vision />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

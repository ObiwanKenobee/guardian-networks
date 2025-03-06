
import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { Button } from './ui/button';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import UserButton from './auth/UserButton';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300',
        isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
            <span className="text-white font-bold text-xl">G</span>
          </div>
          <span className="font-bold text-xl">Guardian-IO</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-foreground/80 hover:text-foreground transition-colors">
            Features
          </a>
          <a href="#users" className="text-foreground/80 hover:text-foreground transition-colors">
            Users
          </a>
          <a href="#technology" className="text-foreground/80 hover:text-foreground transition-colors">
            Technology
          </a>
          <a href="#vision" className="text-foreground/80 hover:text-foreground transition-colors">
            Vision
          </a>
          <Link to="/dashboard">
            <Button variant="outline">Dashboard</Button>
          </Link>
          <UserButton />
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          'md:hidden fixed inset-0 bg-white z-40 pt-20 px-6 transition-transform duration-300 ease-in-out',
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <nav className="flex flex-col space-y-6 items-center">
          <a 
            href="#features" 
            className="text-foreground text-lg"
            onClick={() => setIsMenuOpen(false)}
          >
            Features
          </a>
          <a 
            href="#users" 
            className="text-foreground text-lg"
            onClick={() => setIsMenuOpen(false)}
          >
            Users
          </a>
          <a 
            href="#technology" 
            className="text-foreground text-lg"
            onClick={() => setIsMenuOpen(false)}
          >
            Technology
          </a>
          <a 
            href="#vision" 
            className="text-foreground text-lg"
            onClick={() => setIsMenuOpen(false)}
          >
            Vision
          </a>
          <Link 
            to="/dashboard" 
            className="text-foreground text-lg"
            onClick={() => setIsMenuOpen(false)}
          >
            Dashboard
          </Link>
          <div className="pt-4">
            <UserButton />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;

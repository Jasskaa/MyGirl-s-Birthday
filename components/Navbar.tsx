import React, { useState, useEffect } from 'react';
import { Heart, Menu, X } from 'lucide-react';

interface NavbarProps {
  onNavigate: (section: 'home' | 'gallery' | 'timeline' | 'quiz' | 'wishes') => void;
  activeSection: string;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', id: 'home' as const },
    { name: 'Gallery', id: 'gallery' as const },
    { name: 'Timeline', id: 'timeline' as const },
    { name: 'Quiz', id: 'quiz' as const },
    { name: 'Wishes', id: 'wishes' as const },
  ];

  const handleNavClick = (id: 'home' | 'gallery' | 'timeline' | 'quiz' | 'wishes') => {
    onNavigate(id);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isDark = activeSection === 'home' && !isScrolled;

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isScrolled || isMobileMenuOpen || activeSection !== 'home' 
          ? 'bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm' 
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
        {/* Logo */}
        <button onClick={() => handleNavClick('home')} className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 shadow-sm">
            <Heart className="h-5 w-5 text-primary fill-current" />
          </div>
          <span className={`text-lg font-bold tracking-tight hidden sm:block ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Jas & Mahi
          </span>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className={`text-sm font-medium transition-colors duration-200 ${
                activeSection === link.id 
                  ? 'text-primary' 
                  : isDark ? 'text-white/80 hover:text-white' : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              {link.name}
            </button>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className={`md:hidden flex h-10 w-10 items-center justify-center rounded-full transition-colors ${
            isDark ? 'bg-white/20 text-white' : 'bg-gray-100 text-slate-900'
          }`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-white border-t border-gray-100 p-6 flex flex-col gap-4 animate-fade-in-up shadow-xl">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className={`text-lg font-medium py-3 border-b border-gray-50 text-left ${
                activeSection === link.id ? 'text-primary' : 'text-slate-600'
              }`}
            >
              {link.name}
            </button>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;
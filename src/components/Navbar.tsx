
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Bronzen Beelden', path: '/bronzen-beelden' },
    { name: 'Buitenbeelden', path: '/buitenbeelden' },
    { name: 'Schilderijen', path: '/schilderijen' },
    { name: 'Over Jan', path: '/over-jan' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 shadow-md backdrop-blur-sm' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-bronze-dark font-serif text-2xl font-semibold">
            Jan Voorendt
          </Link>
          
          {/* Desktop menu */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`nav-link text-sm font-medium tracking-wide transition-colors hover:text-bronze ${
                  isActive(link.path) ? 'text-bronze font-semibold' : 'text-gray-800'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden text-gray-800 focus:outline-none" 
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile menu sidebar */}
      <div 
        className={`
          md:hidden fixed top-0 right-0 h-full w-80 max-w-[85vw] z-50 
          bg-white shadow-2xl transform transition-transform duration-300 ease-out
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-bronze/10">
          <Link 
            to="/" 
            className="text-bronze-dark font-serif text-lg font-semibold"
            onClick={() => setIsOpen(false)}
          >
            Jan Voorendt
          </Link>
          <button 
            className="text-gray-600 hover:text-bronze transition-colors focus:outline-none" 
            onClick={toggleMenu}
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>
        
        {/* Navigation */}
        <nav className="p-6">
          <div className="space-y-1">
            {navLinks.map((link, index) => (
              <Link
                key={link.path}
                to={link.path}
                className={`
                  block px-4 py-3 rounded-lg text-base font-medium tracking-wide 
                  transition-all duration-200 hover:bg-bronze/5 hover:text-bronze
                  ${isActive(link.path) 
                    ? 'text-bronze bg-bronze/10 font-semibold' 
                    : 'text-gray-700'
                  }
                `}
                onClick={() => setIsOpen(false)}
                style={{
                  animationDelay: `${index * 50}ms`,
                  animation: isOpen ? 'fade-in 0.3s ease-out forwards' : 'none'
                }}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </nav>
        
        {/* Footer */}
        <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-bronze/10 bg-cream/50">
          <div className="text-center">
            <p className="text-sm text-gray-600 mb-2">Contact</p>
            <a 
              href="mailto:voorever12@gmail.com"
              className="text-bronze hover:text-bronze-dark transition-colors text-sm"
            >
              voorever12@gmail.com
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

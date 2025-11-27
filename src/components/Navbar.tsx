import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const isDarkHeaderPage = 
    (location.pathname.startsWith('/blog/') && location.pathname !== '/blog') ||
    (location.pathname.startsWith('/projects/') && location.pathname !== '/projects') ||
    (location.pathname.startsWith('/services/') && location.pathname !== '/services');

  const isTransparent = !scrolled && !isOpen;
  const shouldUseWhiteText = isTransparent && isDarkHeaderPage;

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-400 ${
        !isTransparent ? 'bg-white/70 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center group">
            <span className={`font-mono font-black text-3xl tracking-tighter transition-colors ${
              shouldUseWhiteText ? 'text-white group-hover:text-blue-300' : 'text-gray-900 group-hover:text-blue-600'
            }`}>
              Intellize<span className={shouldUseWhiteText ? 'text-blue-300' : 'text-blue-600'}>;</span>
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            <NavLink to="/" whiteText={shouldUseWhiteText}>Start</NavLink>
            <NavLink to="/services" whiteText={shouldUseWhiteText}>Services</NavLink>
            <NavLink to="/projects" whiteText={shouldUseWhiteText}>Projekte</NavLink>
            <NavLink to="/blog" whiteText={shouldUseWhiteText}>Blog</NavLink>
            <Link 
              to="/contact" 
              className={`px-5 py-2.5 rounded-full font-medium transition-all hover:scale-105 active:scale-95 text-sm ${
                shouldUseWhiteText 
                  ? 'bg-white text-black hover:bg-gray-100' 
                  : 'bg-black text-white hover:bg-gray-800'
              }`}
            >
              Kontakt aufnehmen
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className={`focus:outline-none p-2 transition-colors ${
                shouldUseWhiteText ? 'text-white' : 'text-gray-900'
              }`}
              aria-label="Menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-gray-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-8 space-y-2 flex flex-col">
              <MobileNavLink to="/">Start</MobileNavLink>
              <MobileNavLink to="/services">Services</MobileNavLink>
              <MobileNavLink to="/projects">Projekte</MobileNavLink>
              <MobileNavLink to="/blog">Blog</MobileNavLink>
              <Link 
                to="/contact" 
                className="mt-4 block w-full text-center bg-black text-white px-5 py-3 rounded-lg font-medium"
              >
                Kontakt
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const NavLink: React.FC<{ to: string; children: React.ReactNode; whiteText?: boolean }> = ({ to, children, whiteText }) => {
  const location = useLocation();
  const isActive = location.pathname === to || (to !== '/' && location.pathname.startsWith(to));
  
  let textColorClass = '';
  if (whiteText) {
    textColorClass = isActive ? 'text-white' : 'text-white/70 hover:text-white';
  } else {
    textColorClass = isActive ? 'text-black' : 'text-gray-500 hover:text-black';
  }

  return (
    <Link 
      to={to} 
      className={`text-sm font-medium transition-colors ${textColorClass}`}
    >
      {children}
    </Link>
  );
};

const MobileNavLink: React.FC<{ to: string; children: React.ReactNode }> = ({ to, children }) => (
  <Link 
    to={to} 
    className="block px-3 py-4 text-base font-medium text-gray-900 hover:bg-gray-50 rounded-md"
  >
    {children}
  </Link>
);

export default Navbar;
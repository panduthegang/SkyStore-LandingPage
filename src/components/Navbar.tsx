import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      // Update navbar background
      setIsScrolled(window.scrollY > 50);

      // Update active section
      const sections = ['home', 'features', 'dashboard', 'stats', 'team', 'pricing', 'testimonials', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Features', href: '#features' },
    { name: 'Dashboard', href: '#dashboard' },
    { name: 'Stats', href: '#stats' },
    { name: 'Team', href: '#team' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.slice(1));
    if (element) {
      const navHeight = 64; // height of navbar
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset - navHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 safe-top safe-left safe-right ${
        isScrolled 
          ? 'bg-gray-900/95 backdrop-blur-lg shadow-lg' 
          : 'bg-black/50 backdrop-blur-md border-b border-white/10'
      }`}
    >
      <div className="container mx-auto px-4 safe-area-inset-top">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.a
            href="#home"
            className="flex items-center space-x-2 relative z-10"
            whileHover={{ scale: 1.05 }}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('#home');
            }}
          >
            <h1 className={`text-xl font-bold transition-all ${
              activeSection === 'home'
                ? 'text-white drop-shadow-[0_1px_2px_rgba(255,255,255,0.5)]'
                : 'bg-gradient-to-r from-[#FA7275] to-pink-500 bg-clip-text text-transparent drop-shadow-[0_1px_2px_rgba(250,114,117,0.5)]'
            } hover:drop-shadow-[0_2px_4px_rgba(250,114,117,0.7)]`}>
              SkyStore
            </h1>
          </motion.a>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-white" />
              ) : (
                <Menu className="w-6 h-6 text-white" />
              )}
            </motion.button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                className={`relative px-2 py-1 text-sm font-medium ${
                  activeSection === item.href.slice(1)
                    ? 'text-white'
                    : 'text-white/90 hover:text-white'
                } transition-colors`}
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
              >
                {item.name}
                {activeSection === item.href.slice(1) && (
                  <motion.div
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#FA7275]"
                    layoutId="activeSection"
                  />
                )}
              </motion.a>
            ))}
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <motion.div
          initial={false}
          animate={{
            height: isMenuOpen ? 'auto' : 0,
            opacity: isMenuOpen ? 1 : 0
          }}
          className={`md:hidden overflow-hidden bg-gray-900/95 backdrop-blur-lg rounded-b-2xl shadow-lg ${
            isMenuOpen ? 'border-t border-white/10' : ''
          }`}
        >
          <div className="px-4 py-4 space-y-3">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                className={`block px-4 py-2 text-base font-medium rounded-lg ${
                  activeSection === item.href.slice(1)
                    ? 'text-white bg-white/10'
                    : 'text-white/90 hover:bg-white/5'
                } transition-colors`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
              >
                {item.name}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
}

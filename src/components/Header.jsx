
    import React, { useState, useEffect } from 'react';
    import { Link, NavLink } from 'react-router-dom';
    import { motion } from 'framer-motion';
    import { Button } from '@/components/ui/button';
    import { Menu, X, Code as CodeXml } from 'lucide-react';

    const navLinks = [
      { to: '/', label: 'Home' },
      { to: '/about', label: 'About' },
      { to: '/portfolio', label: 'Portfolio' },
      { to: '/services', label: 'Services' },
      { to: '/testimonials', label: 'Testimonials' },
      { to: '/contact', label: 'Contact' },
    ];

    const Header = () => {
      const [isOpen, setIsOpen] = useState(false);
      const [isScrolled, setIsScrolled] = useState(false);

      useEffect(() => {
        const handleScroll = () => {
          setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      }, []);

      const toggleMenu = () => setIsOpen(!isOpen);

      const NavItem = ({ to, label, onClick }) => (
        <NavLink
          to={to}
          onClick={onClick}
          className={({ isActive }) =>
            `px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ease-in-out
            ${isActive ? 'text-secondary' : 'text-foreground hover:text-secondary/80'}`
          }
        >
          {label}
        </NavLink>
      );

      return (
        <motion.header
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out 
            ${isScrolled || isOpen ? 'bg-background/95 shadow-lg backdrop-blur-md' : 'bg-transparent'}`}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-20">
              <Link to="/" className="flex items-center space-x-2">
                <CodeXml className="h-8 w-8 text-secondary" />
                <span className="text-2xl font-bold text-foreground">Ryan Parry <span className="gradient-text">Designs</span></span>
              </Link>
              <nav className="hidden md:flex space-x-2">
                {navLinks.map((link) => (
                  <NavItem key={link.to} to={link.to} label={link.label} />
                ))}
              </nav>
              <div className="md:hidden">
                <Button variant="ghost" size="icon" onClick={toggleMenu}>
                  {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </Button>
              </div>
            </div>
          </div>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="md:hidden bg-background/95 shadow-lg backdrop-blur-md"
            >
              <nav className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col items-center">
                {navLinks.map((link) => (
                  <NavItem key={link.to} to={link.to} label={link.label} onClick={() => setIsOpen(false)} />
                ))}
              </nav>
            </motion.div>
          )}
        </motion.header>
      );
    };

    export default Header;
  
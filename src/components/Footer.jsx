
import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Twitter, Code as CodeXml } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-card text-foreground py-12 mt-16 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div className="flex flex-col items-center md:items-start">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <CodeXml className="h-8 w-8 text-secondary" />
              <span className="text-xl font-bold">Ryan Parry Designs</span>
            </Link>
            <p className="text-sm text-muted-foreground text-center md:text-left">
              Crafting modern websites with purpose.
              <br />
              Chard, Somerset, UK.
            </p>
          </div>

          <div className="text-center">
            <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="hover:text-secondary transition-colors">About Us</Link></li>
              <li><Link to="/portfolio" className="hover:text-secondary transition-colors">Portfolio</Link></li>
              <li><Link to="/services" className="hover:text-secondary transition-colors">Services</Link></li>
              <li><Link to="/contact" className="hover:text-secondary transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <h3 className="text-lg font-semibold mb-3">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="https://github.com/ryan-parry" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-secondary transition-colors">
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/in/ryanparryuk/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-secondary transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="https://x.com/RyanParryUK" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-secondary transition-colors">
                <Twitter size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-10 pt-8 border-t border-border/50 text-center text-sm text-muted-foreground">
          <p>&copy; {currentYear} Ryan Parry Designs. All rights reserved.</p>
          <p className="mt-1">Designed & Developed by Hostinger Horizons AI</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

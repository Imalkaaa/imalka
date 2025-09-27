import React from 'react';
import { Heart, Linkedin, Github, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-bg-primary border-t border-accent/20 text-text-primary py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center animate-fade-in">
          <div className="flex justify-center gap-6 mb-8">
            <a
              href="https://linkedin.com/in/imalka-dhananja-89b4b4250"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-accent transition-all duration-300 hover:scale-110"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://github.com/Imalkaaa"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-accent transition-all duration-300 hover:scale-110"
            >
              <Github size={24} />
            </a>
            <a
              href="mailto:imalkadhananja28@gmail.com"
              className="text-text-secondary hover:text-accent transition-all duration-300 hover:scale-110"
            >
              <Mail size={24} />
            </a>
          </div>
          
          <p className="text-text-secondary mb-4">
            © 2025 Imalka Dhananja. All rights reserved.
          </p>
          
          <p className="text-text-secondary flex items-center justify-center gap-1">
            Made with <Heart size={16} className="text-accent animate-pulse" /> and lots of coffee
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
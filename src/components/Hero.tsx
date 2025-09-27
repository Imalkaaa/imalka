import React from 'react';
import { Phone, Mail, MapPin, Linkedin, Github, BookOpen } from 'lucide-react';
import profile from '../assect/profile.jpg';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-bg-primary via-bg-primary to-accent/10 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Tech grid background */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px] animate-pulse-grid opacity-30"></div>
        {/* Falling code particles */}
        <div className="absolute top-0 left-10 w-2 h-2 bg-accent/50 rounded-sm animate-fall-1"></div>
        <div className="absolute top-0 left-1/4 w-3 h-3 bg-text-secondary/40 rounded-sm animate-fall-2 delay-500"></div>
        <div className="absolute top-0 right-1/3 w-2 h-2 bg-accent/60 rounded-sm animate-fall-3 delay-1000"></div>
        <div className="absolute top-0 right-10 w-3 h-3 bg-text-primary/50 rounded-sm animate-fall-4 delay-1500"></div>
      </div>
      
      <style jsx>{`
        @keyframes pulse-grid {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.5; }
        }
        @keyframes fall-1 {
          0% { transform: translateY(-20px); opacity: 0.5; }
          100% { transform: translateY(100vh); opacity: 0; }
        }
        @keyframes fall-2 {
          0% { transform: translateY(-20px); opacity: 0.4; }
          100% { transform: translateY(100vh); opacity: 0; }
        }
        @keyframes fall-3 {
          0% { transform: translateY(-20px); opacity: 0.6; }
          100% { transform: translateY(100vh); opacity: 0; }
        }
        @keyframes fall-4 {
          0% { transform: translateY(-20px); opacity: 0.5; }
          100% { transform: translateY(100vh); opacity: 0; }
        }
        .animate-pulse-grid {
          animation: pulse-grid 6s ease-in-out infinite;
        }
        .animate-fall-1 {
          animation: fall-1 5s linear infinite;
        }
        .animate-fall-2 {
          animation: fall-2 4s linear infinite;
        }
        .animate-fall-3 {
          animation: fall-3 6s linear infinite;
        }
        .animate-fall-4 {
          animation: fall-4 5.5s linear infinite;
        }
      `}</style>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center relative z-10">
          <div className="mb-8 animate-fade-in">
            <img
              src={profile}
              alt="Imalka Dhananja"
              className="w-40 h-40 rounded-full mx-auto mb-6 object-contain border-4 border-accent shadow-2xl hover:scale-110 transition-transform duration-500"
              style={{ imageRendering: 'auto' }}
            />
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-text-primary mb-4 animate-slide-up">
            Imalka Dhananja
          </h1>
          
          <p className="text-xl md:text-2xl text-text-secondary mb-8 max-w-4xl mx-auto animate-slide-up" style={{animationDelay: '0.2s'}}>
            Software Engineer | Cloud Technologies | Docker | GitHub Actions | TypeScript | React | Node.js | Python | AWS | Data Engineering
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 mb-12 animate-slide-up" style={{animationDelay: '0.4s'}}>
            <div className="flex items-center gap-2 text-text-secondary hover:text-accent transition-colors duration-300">
              <Phone size={20} className="text-accent" />
              <span>+94 762844732</span>
            </div>
            <div className="flex items-center gap-2 text-text-secondary hover:text-accent transition-colors duration-300">
              <Mail size={20} className="text-accent" />
              <span>imalkadhananja28@gmail.com</span>
            </div>
            <div className="flex items-center gap-2 text-text-secondary hover:text-accent transition-colors duration-300">
              <MapPin size={20} className="text-accent" />
              <span>Nugegoda, Sri Lanka</span>
            </div>
          </div>
          
          <div className="flex justify-center gap-6 animate-slide-up" style={{animationDelay: '0.6s'}}>
            <a
              href="https://www.linkedin.com/in/imalka-dhananja-89b4b4250"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent hover:bg-accent/80 text-bg-primary px-6 py-3 rounded-lg flex items-center gap-2 transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              <Linkedin size={20} />
              LinkedIn
            </a>
            <a
              href="https://github.com/Imalkaaa"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-text-primary hover:bg-text-primary/80 text-bg-primary px-6 py-3 rounded-lg flex items-center gap-2 transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              <Github size={20} />
              GitHub
            </a>
            <a
              href="https://medium.com/@imalka_dhananja"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-accent text-accent hover:bg-accent hover:text-bg-primary px-6 py-3 rounded-lg flex items-center gap-2 transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              <BookOpen size={20} />
              Medium
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
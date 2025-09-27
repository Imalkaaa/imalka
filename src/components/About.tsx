import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-text-primary mb-4">About Me</h2>
          <div className="w-24 h-1 bg-accent mx-auto"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-accent/10 to-accent/5 rounded-2xl p-8 md:p-12 border border-accent/20 hover:border-accent/40 transition-all duration-500 animate-slide-up">
            <p className="text-lg text-text-secondary leading-relaxed text-center">
              A self-motivated and fast-learning undergraduate in Computer Science at the University of Colombo School of Computing. 
              Passionate about software engineering, cloud-native development, and modern DevOps practices. 
              Always eager to explore new technologies and contribute to impactful projects.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
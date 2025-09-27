import React from 'react';
import { Award } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    "AWS Educate Cloud 101",
    "Intro to Data Science (CISCO)",
    "Oracle Certified Foundations Associate",
    "Python Programming (UOM, HackerRank)",
    "Docker & Kubernetes (IBM)",
    "CI/CD (IBM)"
  ];

  return (
    <section id="certifications" className="py-20 bg-bg-primary/95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-text-primary mb-4">Certifications</h2>
          <div className="w-24 h-1 bg-accent mx-auto"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-accent/5 border border-accent/20 rounded-xl shadow-lg p-6 hover:shadow-xl hover:border-accent/40 hover:scale-105 transition-all duration-300 animate-slide-up" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="flex items-center gap-4">
                  <div className="bg-accent/20 p-3 rounded-full">
                    <Award className="text-accent" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-text-primary">{cert}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
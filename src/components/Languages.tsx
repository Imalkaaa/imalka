import React from 'react';
import { Globe } from 'lucide-react';

const Languages = () => {
  const languages = [
    { name: "English", level: "Proficient" },
    { name: "Sinhala", level: "Proficient" }
  ];

  return (
    <section id="languages" className="py-20 bg-bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-text-primary mb-4">Languages</h2>
          <div className="w-24 h-1 bg-accent mx-auto"></div>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {languages.map((language, index) => (
              <div key={index} className="bg-gradient-to-r from-accent/10 to-accent/5 border border-accent/20 rounded-xl p-6 text-center hover:border-accent/40 hover:scale-105 transition-all duration-300 animate-slide-up" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="flex flex-col items-center">
                  <div className="bg-accent p-3 rounded-full mb-4">
                    <Globe className="text-bg-primary" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-text-primary mb-2">{language.name}</h3>
                  <span className="text-accent font-medium">{language.level}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Languages;
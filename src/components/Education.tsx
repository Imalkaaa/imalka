import React from 'react';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: "B.Sc. Computer Science",
      institution: "University of Colombo School of Computing",
      period: "2020–2024",
      location: "Colombo, Sri Lanka",
      type: "undergraduate"
    },
    {
      degree: "G.C.E. A/L",
      institution: "Walasmulla National School",
      period: "2018–2020",
      location: "Sri Lanka",
      type: "secondary"
    }
  ];

  return (
    <section id="education" className="py-20 bg-bg-primary/95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-text-primary mb-4">Education</h2>
          <div className="w-24 h-1 bg-accent mx-auto"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            {education.map((edu, index) => (
              <div key={index} className="bg-accent/5 border border-accent/20 rounded-xl shadow-lg p-6 hover:shadow-xl hover:border-accent/40 transition-all duration-300 animate-slide-up" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="flex items-start gap-4">
                  <div className="bg-accent/20 p-3 rounded-full">
                    <GraduationCap className="text-accent" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-text-primary mb-2">{edu.degree}</h3>
                    <p className="text-lg text-accent mb-3">{edu.institution}</p>
                    <div className="flex flex-wrap gap-4 text-sm text-text-secondary">
                      <div className="flex items-center gap-1">
                        <Calendar size={16} />
                        <span>{edu.period}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin size={16} />
                        <span>{edu.location}</span>
                      </div>
                    </div>
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

export default Education;
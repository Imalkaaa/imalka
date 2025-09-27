import React from 'react';
import { Code, Monitor, Server, Database, Cloud, Smartphone } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      icon: Code,
      skills: ["Java", "TypeScript", "C", "Python", "JavaScript", "PHP", "Scala"],
      color: "blue"
    },
    {
      title: "Frontend",
      icon: Monitor,
      skills: ["React.js", "Next.js", "Vite", "Tailwind CSS", "HTML", "CSS" ],
      color: "green"
    },
    {
      title: "Backend",
      icon: Server,
      skills: ["Node.js", "Express.js", "Spring Boot", "PHP", "Ballerina","Laravel",".NET"],
      color: "purple"
    },
    {
      title: "Databases",
      icon: Database,
      skills: ["MySQL", "MongoDB", "Firebase", "DynamoDB"],
      color: "orange"
    },
    {
      title: "Cloud & DevOps",
      icon: Cloud,
      skills: ["AWS", "Docker", "GitHub Actions", "CI/CD", "Linux", "Vercel","Kubernetes"],
      color: "indigo"
    },
    {
      title: "Mobile & Tools",
      icon: Smartphone,
      skills: ["Flutter", "Git", "Firebase", "Daily.co","Jira"],
      color: "pink"
    }
  ];

  const colorClasses = {
    blue: "bg-accent/10 text-accent border-accent/30",
    green: "bg-accent/10 text-accent border-accent/30",
    purple: "bg-accent/10 text-accent border-accent/30",
    orange: "bg-accent/10 text-accent border-accent/30",
    indigo: "bg-accent/10 text-accent border-accent/30",
    pink: "bg-accent/10 text-accent border-accent/30"
  };

  return (
    <section id="skills" className="py-20 bg-bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-text-primary mb-4">Technical Skills</h2>
          <div className="w-24 h-1 bg-accent mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div key={index} className="bg-accent/5 border border-accent/20 rounded-xl p-6 hover:shadow-lg hover:border-accent/40 hover:scale-105 transition-all duration-300 animate-slide-up" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-accent">
                    <IconComponent className="text-bg-primary" size={20} />
                  </div>
                  <h3 className="text-xl font-semibold text-text-primary">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 rounded-full text-sm font-medium border bg-accent/10 text-accent border-accent/30 hover:bg-accent/20 transition-colors duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
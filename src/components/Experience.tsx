import React from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
{
  title: "Full Stack Developer",
  company: "SchoolShopOnline",
  period: "Jan 2025 – Present",
  location: "Melbourne, Australia",
description: [
  "Designed and developed cloud-native features using Node.js, TypeScript, AWS CDK, and Domain-Driven Design (DDD) principles",
  "Implemented secure authentication and authorization with AWS Cognito and IAM",
  "Built scalable data models and APIs backed by DynamoDB",
  "Developed serverless workflows and backend logic with AWS Lambda",
  "Integrated S3 for file storage and management",
  "Containerized services with Docker for local development and deployment consistency",
  "Built unit, integration, and E2E tests using Jest and Playwright",
  "Maintained CI/CD pipelines with GitHub Actions and enforced code quality with SonarLint",
  "Collaborated in an Agile environment using Scrum and Kanban methodologies"
]

}
,{
  title: "Software Engineer (Part-Time)",
  company: "Lunor Labs",
  period: "Present",
  location: "Remote",
  description: [
    "Delivered client projects using React, Vite, Tailwind CSS, Node.js, and Firebase",
    "Implemented authentication and user management with Firebase Authentication",
    "Built serverless backend features using Firebase Functions",
    "Deployed and managed applications on Vercel with GitHub-based CI/CD workflows",
    "Collaborated in an agile team environment ensuring scalable and maintainable solutions"
  ]
}
,
    {
      title: "Technical Writer",
      company: "Zaplabs",
      period: "2025–Present",
      location: "Remote",
      description: [
        "Published technical articles simplifying complex engineering concepts"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-text-primary mb-4">Experience</h2>
          <div className="w-24 h-1 bg-accent mx-auto"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="bg-gradient-to-r from-accent/10 to-accent/5 border border-accent/20 rounded-xl p-6 hover:shadow-lg hover:border-accent/40 transition-all duration-300 animate-slide-up" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="flex items-start gap-4">
                  <div className="bg-accent p-3 rounded-full">
                    <Briefcase className="text-bg-primary" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-text-primary mb-1">{exp.title}</h3>
                    <p className="text-lg text-accent font-medium mb-3">{exp.company}</p>
                    <div className="flex flex-wrap gap-4 text-sm text-text-secondary mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar size={16} />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin size={16} />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                    <ul className="space-y-2">
                      {exp.description.map((item, idx) => (
                        <li key={idx} className="text-text-secondary flex items-start gap-2">
                          <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
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

export default Experience;
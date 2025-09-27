import React from 'react';
import { ExternalLink, Github, Globe } from 'lucide-react';

const Projects = () => {
  const projects = [

    {
      title: "EasySchool",
      description: "A comprehensive school management system built as a monorepo, leveraging cloud-native architecture to streamline educational operations with scalable microservices and real-time data synchronization. Implements Domain-Driven Design (DDD) and clean architecture principles.",
      tech: ["TypeScript", "React", "Vite", "Node.js", "AWS CDK", "Jest", "Playwright", "DynamoDB", "GitHub Actions", "AntD","Playwright","S3","Cognito","IAM","Lambda","Docker"],
      // github: "https://github.com/Imalkaaa/EasySchool",
      // url: "https://easyschool.com",
      featured: true,
      image: "https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop"
    },
    {
      title: "Highlight",
      description: "A mobile-responsive task management platform with Google Calendar integration and real-time collaboration. Utilizes a Machine Learning module with XGBoost for predictive task duration analytics, enhancing project planning efficiency via RESTful APIs.",
      tech: ["Next.js", "Ballerina", "FastAPI", "XGBoost", "MySQL", "Docker", "Azure", "GitHub Actions", "Tailwind CSS","WebSockets","Google Calendar API",],
      github: "https://github.com/ashen92/Highlights",
      // url: "https://highlight.app",
      featured: true,
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop"
    },
    {
      title: "Guru Mithuru",
      description: "A multi-language platform for Sri Lankan teachers to find mutual transfer partners. Features include user authentication, profile management, smart matching algorithms, WhatsApp integration, and an admin dashboard for oversight, built with a performant frontend stack.",
      tech: ["React 18", "TypeScript", "Tailwind CSS", "Firebase Auth", "Firestore", "Vite", "GitHub Actions"],
      // github: "https://github.com/Imalkaaa/Guru-Mithuru",
      url: "https://www.gurumithuru.lk/",
      featured: true,
      image: "https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop"
    },
    {
      title: "CI/CD Pipeline",
      description: "An automated CI/CD pipeline utilizing GitHub Actions to build and push custom Docker images to a Docker Registry, ensuring consistent deployments and streamlined container orchestration for scalable applications.",
      tech: ["Docker", "GitHub Actions", "CI/CD"],
      github: "https://github.com/Imalkaaa/CI-CD",
      featured: false,
      image: "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop"
    },
    {
      title: "Movie Review Application",
      description: "A web application enabling users to browse, review, and rate movies. Built with a microservices architecture, it integrates RESTful APIs for seamless frontend-backend communication and community-driven insights, leveraging MongoDB for flexible data storage.",
      tech: ["React.js", "TypeScript", "Spring Boot", "MongoDB"],
      github: "https://github.com/Imalkaaa/movie_backend",
      // url: "https://moviereview.app",
      featured: false,
      image: "https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop"
    },
    {
      title: "Class Management System",
      description: "A student management system with CRUD functionalities to manage student records efficiently. Implements a scalable Express.js backend with MongoDB for robust data handling and a responsive React frontend.",
      tech: ["React.js", "Express.js", "MongoDB"],
      github: "https://github.com/Imalkaaa/Class-Mangement-System",
      // url: "https://classmanagement.app",
      featured: false,
      image: "https://images.pexels.com/photos/5212703/pexels-photo-5212703.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop"
    },
    {
      title: "EasyFarm",
      description: "A buy-and-sell platform for farmers, built with an MVC architecture to facilitate seamless transactions and inventory management for agricultural products, ensuring scalability and ease of use.",
      tech: ["PHP", "MySQL", "MVC", "HTML", "CSS",'JavaScript','Bootstrap','jQuery','Ajax','PayHere',],
      github: "https://github.com/Imalkaaa/Easyfarm-1-",
      featured: false,
      image: "https://images.pexels.com/photos/2132227/pexels-photo-2132227.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop"
    },
    {
      title: "Kalm.lk",
      description: "A therapy and counseling platform with video call integration via Daily.co and secure payment processing using PayHere. Built with a modern frontend stack for optimal user experience and scalable Firebase backend.",
      tech: ["React", "TypeScript", "Vite", "Tailwind CSS", "Firebase", "Daily.co", "PayHere", "GitHub Actions",'Git','firebase functions','Firebase Auth','Firestore','Vercel'],
      // github: "https://github.com/Imalkaaa/Kalm-lk",
      // url: "https://kalm.lk",
      featured: true,
      image: "https://images.pexels.com/photos/6787202/pexels-photo-6787202.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop"
    },
        {
      title: "Data Engineering Pipeline",
      description: "A comprehensive end-to-end data engineering pipeline that ingests random user data from the randomuser.me API, orchestrates workflows using Apache Airflow, streams data with Apache Kafka and Zookeeper, processes it with Apache Spark, and stores results in Cassandra and PostgreSQL. Fully containerized using Docker for scalability and ease of deployment.",
      tech: ["Apache Airflow", "Python", "Apache Kafka", "Apache Zookeeper", "Apache Spark", "Cassandra", "PostgreSQL", "Docker"],
      github: "https://github.com/Imalkaaa/data-engineering",
      // url: "https://dataengineeringpipeline.com",
      featured: true,
      image: "https://images.pexels.com/photos/1181359/pexels-photo-1181359.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop"
    },
  ];

  return (
    <section id="projects" className="py-20 bg-bg-primary/95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-text-primary mb-4">Projects</h2>
          <div className="w-24 h-1 bg-accent mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className={`bg-accent/5 border border-accent/20 rounded-xl shadow-lg overflow-hidden hover:shadow-xl hover:border-accent/40 transition-all duration-300 hover:-translate-y-2 animate-slide-up ${project.featured ? 'border-t-4 border-accent' : ''}`} style={{animationDelay: `${index * 0.1}s`}}>
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover hover:scale-110 transition-transform duration-500"
                />
                {project.featured && (
                  <div className="absolute top-4 right-4">
                    <span className="bg-accent text-bg-primary text-xs px-2 py-1 rounded-full font-medium">
                      Featured
                    </span>
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold text-text-primary">{project.title}</h3>
                </div>
                
                <p className="text-text-secondary mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="bg-accent/10 text-accent px-2 py-1 rounded text-sm border border-accent/20">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-text-secondary hover:text-accent transition-colors duration-200"
                    >
                      <Github size={16} />
                      <span className="text-sm">Code</span>
                    </a>
                  )}
                  {project.url && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-text-secondary hover:text-accent transition-colors duration-200"
                    >
                      <Globe size={16} />
                      <span className="text-sm">Visit Site</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
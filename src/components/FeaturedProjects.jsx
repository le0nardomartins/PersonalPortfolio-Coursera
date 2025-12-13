import React from 'react'
import './FeaturedProjects.css'

const FeaturedProjects = () => {
  const projects = [
    {
      id: 1,
      title: 'VIGIL-IA',
      description: 'Application for monitoring and alerting natural disasters with a modern interface and real-time notification system. Every second, a new life.',
      image: '/assets/exemple_1.png',
      link: 'https://github.com/le0nardomartins',
      technologies: ['React', 'TypeScript', 'Vite', 'Monitoring']
    },
    {
      id: 2,
      title: 'Blue Systems',
      description: 'Marine life monitoring system to identify dangers, oil spills and animals that need help.',
      image: '/assets/exemple_2.png',
      link: 'https://github.com/le0nardomartins',
      technologies: ['Monitoring', 'Marine Life', 'AI', 'Conservation']
    },
    {
      id: 3,
      title: 'Green Wave',
      description: 'Sustainable and automatic modular hydroponics project that plants, waters, harvests and adjusts temperature and nutrients.',
      image: '/assets/exemple_3.png',
      link: 'https://github.com/le0nardomartins',
      technologies: ['Hydroponics', 'Automation', 'Sustainability', 'IoT']
    },
    {
      id: 4,
      title: 'Alon: MindForge',
      description: 'Bullet hell roguelike at the end of the galaxy. Fight, fall, rise — keep humanity\'s last flame alive.',
      image: '/assets/exemple_4.png',
      link: 'https://github.com/le0nardomartins',
      technologies: ['Game', 'Bullet Hell', 'Roguelike', 'Top-Down']
    }
  ]

  return (
    <section id="projects" className="featured-projects">
      <div className="projects-container">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          {projects.map(project => (
            <div key={project.id} className="project-card">
              <div className="card-image">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="card-content">
                <h3 className="card-title">{project.title}</h3>
                <p className="card-description">{project.description}</p>
                {project.technologies && (
                  <div className="card-technologies">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                )}
                {project.link && (
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="card-link"
                  >
                    View Project →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturedProjects


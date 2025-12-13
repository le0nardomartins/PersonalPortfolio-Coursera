import React from 'react'
import './FeaturedProjects.css'

const FeaturedProjects = () => {
  const projects = [
    {
      id: 1,
      title: 'Projeto 1',
      description: 'Uma aplicação web moderna desenvolvida com React e Node.js, oferecendo uma experiência de usuário fluida e intuitiva.',
      image: 'https://via.placeholder.com/400x250',
      link: 'https://github.com'
    },
    {
      id: 2,
      title: 'Projeto 2',
      description: 'Sistema de gerenciamento completo com dashboard interativo, autenticação segura e integração com APIs externas.',
      image: 'https://via.placeholder.com/400x250',
      link: 'https://github.com'
    },
    {
      id: 3,
      title: 'Projeto 3',
      description: 'Plataforma e-commerce responsiva com carrinho de compras, sistema de pagamento e painel administrativo.',
      image: 'https://via.placeholder.com/400x250',
      link: 'https://github.com'
    },
    {
      id: 4,
      title: 'Projeto 4',
      description: 'Aplicativo mobile híbrido desenvolvido com React Native, oferecendo performance nativa e design elegante.',
      image: 'https://via.placeholder.com/400x250',
      link: 'https://github.com'
    }
  ]

  return (
    <section id="projects" className="featured-projects">
      <div className="projects-container">
        <h2 className="section-title">Projetos em Destaque</h2>
        <div className="projects-grid">
          {projects.map(project => (
            <div key={project.id} className="project-card">
              <div className="card-image">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="card-content">
                <h3 className="card-title">{project.title}</h3>
                <p className="card-description">{project.description}</p>
                {project.link && (
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="card-link"
                  >
                    Ver Projeto →
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


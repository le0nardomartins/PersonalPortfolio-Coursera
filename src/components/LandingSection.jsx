import React from 'react'
import './LandingSection.css'

const LandingSection = () => {
  return (
    <section id="home" className="landing-section">
      <div className="landing-container">
        <div className="avatar-container">
          <img 
            src="https://via.placeholder.com/200" 
            alt="Avatar" 
            className="avatar"
          />
        </div>
        <h1 className="name">Seu Nome</h1>
        <p className="bio">
          Desenvolvedor apaixonado por criar soluções inovadoras e experiências 
          digitais excepcionais. Especializado em React, JavaScript e tecnologias modernas.
        </p>
      </div>
    </section>
  )
}

export default LandingSection


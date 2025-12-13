import React from 'react'
import './LandingSection.css'

const LandingSection = () => {
  return (
    <section id="home" className="landing-section">
      <div className="landing-container">
        <div className="avatar-container">
          <img 
            src="/assets/1.png" 
            alt="Leonardo Martins" 
            className="avatar"
          />
        </div>
        <h1 className="name">Leonardo Martins</h1>
        <p className="bio">
          Full Stack Developer passionate about creating innovative solutions and exceptional 
          digital experiences. Specialized in React, JavaScript, TypeScript and modern technologies.
          Mechatronics Engineering student at FIAP, focused on hardware, software and automation.
        </p>
        <a 
          href="https://www.leonardomartins.dev/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="portfolio-link"
        >
          Visit My Official Portfolio →
        </a>
      </div>
    </section>
  )
}

export default LandingSection


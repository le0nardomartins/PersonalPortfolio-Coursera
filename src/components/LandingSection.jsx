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
        <h1 className="greeting">Hello, I am Pete!</h1>
        <p className="bio">
          A frontend developer specialised in React
        </p>
      </div>
    </section>
  )
}

export default LandingSection


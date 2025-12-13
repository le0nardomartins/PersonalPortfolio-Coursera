import React from 'react'
import Header from './components/Header'
import LandingSection from './components/LandingSection'
import FeaturedProjects from './components/FeaturedProjects'
import ContactMe from './components/ContactMe'
import './App.css'

function App() {
  return (
    <div className="App">
      <Header />
      <LandingSection />
      <FeaturedProjects />
      <ContactMe />
    </div>
  )
}

export default App


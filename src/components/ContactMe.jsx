import React, { useState } from 'react'
import './ContactMe.css'

const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: ''
  })

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const validateForm = () => {
    const newErrors = {
      name: '',
      email: '',
      message: ''
    }

    let isValid = true

    // Validate name
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
      isValid = false
    }

    // Validate email
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
      isValid = false
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Invalid email'
      isValid = false
    }

    // Validate message
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
      isValid = false
    }

    setErrors(newErrors)
    return isValid
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (validateForm()) {
      // Here you can add the logic to send the form
      console.log('Form submitted:', formData)
      alert('Message sent successfully!')
      
      // Clear form
      setFormData({
        name: '',
        email: '',
        message: ''
      })
    }
  }

  return (
    <section id="contact" className="contact-me">
      <div className="contact-container">
        <h2 className="section-title">Contact Me</h2>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={errors.name ? 'error' : ''}
              placeholder="Your full name"
            />
            {errors.name && <span className="error-message">{errors.name}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="email">Email *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={errors.email ? 'error' : ''}
              placeholder="your@email.com"
            />
            {errors.email && <span className="error-message">{errors.email}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="message">Message *</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className={errors.message ? 'error' : ''}
              placeholder="Your message here..."
              rows="6"
            />
            {errors.message && <span className="error-message">{errors.message}</span>}
          </div>

          <button type="submit" className="submit-button">
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}

export default ContactMe


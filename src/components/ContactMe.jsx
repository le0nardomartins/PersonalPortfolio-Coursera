import React, { useState } from 'react'
import './ContactMe.css'

const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    enquiryType: '',
    message: ''
  })

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    enquiryType: '',
    message: ''
  })

  const [isLoading, setIsLoading] = useState(false)
  const [alert, setAlert] = useState(null)

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

    // Clear alert when user starts typing
    if (alert) {
      setAlert(null)
    }
  }

  const validateForm = () => {
    const newErrors = {
      name: '',
      email: '',
      enquiryType: '',
      message: ''
    }

    let isValid = true

    // Validate name
    if (!formData.name.trim()) {
      newErrors.name = 'Required'
      isValid = false
    }

    // Validate email
    if (!formData.email.trim()) {
      newErrors.email = 'Required'
      isValid = false
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Invalid email address'
      isValid = false
    }

    // Validate enquiry type
    if (!formData.enquiryType) {
      newErrors.enquiryType = 'Required'
      isValid = false
    }

    // Validate message
    if (!formData.message.trim()) {
      newErrors.message = 'Required'
      isValid = false
    } else if (formData.message.trim().length < 25) {
      newErrors.message = 'Must be at least 25 characters'
      isValid = false
    }

    setErrors(newErrors)
    return isValid
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }

    setIsLoading(true)
    setAlert(null)

    // Simulate API call with 50% success rate
    try {
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      const isSuccess = Math.random() > 0.5

      if (isSuccess) {
        setAlert({
          type: 'success',
          title: 'All good!',
          message: `Thanks for your submission ${formData.name}, we will get back to you shortly!`
        })
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          enquiryType: '',
          message: ''
        })
        setErrors({
          name: '',
          email: '',
          enquiryType: '',
          message: ''
        })
      } else {
        setAlert({
          type: 'error',
          title: 'Oops',
          message: 'Something went wrong, please try again later'
        })
      }
    } catch (error) {
      setAlert({
        type: 'error',
        title: 'Oops',
        message: 'Something went wrong, please try again later'
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section id="contact" className="contact-me">
      <div className="contact-container">
        <h2 className="section-title">Contact Me</h2>
        <form className="contact-form" onSubmit={handleSubmit}>
          {alert && (
            <div className={`alert alert-${alert.type}`}>
              <h3>{alert.title}</h3>
              <p>{alert.message}</p>
            </div>
          )}

          <div className="form-group">
            <label htmlFor="name">Name *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={errors.name ? 'error' : ''}
              placeholder="Your first name"
            />
            {errors.name && <span className="error-message">{errors.name}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address *</label>
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
            <label htmlFor="enquiryType">Type of enquiry *</label>
            <select
              id="enquiryType"
              name="enquiryType"
              value={formData.enquiryType}
              onChange={handleChange}
              className={errors.enquiryType ? 'error' : ''}
            >
              <option value="">Select an option</option>
              <option value="hire">Hire me</option>
              <option value="collaboration">Collaboration</option>
              <option value="question">Question</option>
              <option value="other">Other</option>
            </select>
            {errors.enquiryType && <span className="error-message">{errors.enquiryType}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="message">Your Message *</label>
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

          <button type="submit" className="submit-button" disabled={isLoading}>
            {isLoading ? (
              <span className="spinner-container">
                <span className="spinner"></span>
                Submitting...
              </span>
            ) : (
              'Submit'
            )}
          </button>
        </form>
      </div>
    </section>
  )
}

export default ContactMe

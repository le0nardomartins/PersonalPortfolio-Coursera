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
    
    // Limpar erro quando o usuário começar a digitar
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

    // Validar nome
    if (!formData.name.trim()) {
      newErrors.name = 'Nome é obrigatório'
      isValid = false
    }

    // Validar email
    if (!formData.email.trim()) {
      newErrors.email = 'Email é obrigatório'
      isValid = false
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Email inválido'
      isValid = false
    }

    // Validar mensagem
    if (!formData.message.trim()) {
      newErrors.message = 'Mensagem é obrigatória'
      isValid = false
    }

    setErrors(newErrors)
    return isValid
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (validateForm()) {
      // Aqui você pode adicionar a lógica para enviar o formulário
      console.log('Formulário enviado:', formData)
      alert('Mensagem enviada com sucesso!')
      
      // Limpar formulário
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
        <h2 className="section-title">Entre em Contato</h2>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Nome *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={errors.name ? 'error' : ''}
              placeholder="Seu nome completo"
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
              placeholder="seu@email.com"
            />
            {errors.email && <span className="error-message">{errors.email}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="message">Mensagem *</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className={errors.message ? 'error' : ''}
              placeholder="Sua mensagem aqui..."
              rows="6"
            />
            {errors.message && <span className="error-message">{errors.message}</span>}
          </div>

          <button type="submit" className="submit-button">
            Enviar Mensagem
          </button>
        </form>
      </div>
    </section>
  )
}

export default ContactMe


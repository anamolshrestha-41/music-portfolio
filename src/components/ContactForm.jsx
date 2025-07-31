import { useState } from 'react'
import { motion } from 'framer-motion'
import { slideUp } from '../utils/animations'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    reason: '',
    message: ''
  })
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const reasons = [
    { value: '', label: 'Select a reason' },
    { value: 'feedback', label: 'Feedback' },
    { value: 'collaboration', label: 'Collaboration' },
    { value: 'voice-request', label: 'Voice Request' }
  ]

  const validateForm = () => {
    const newErrors = {}
    
    if (!formData.name.trim()) newErrors.name = 'Name is required'
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid'
    }
    if (!formData.reason) newErrors.reason = 'Please select a reason'
    if (!formData.message.trim()) newErrors.message = 'Message is required'
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (validateForm()) {
      setIsSubmitting(true)
      setSubmitStatus(null)
      
      try {
        const response = await fetch('http://localhost:5000/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        })
        
        if (response.ok) {
          setSubmitStatus('success')
          setFormData({ name: '', email: '', reason: '', message: '' })
        } else {
          setSubmitStatus('error')
        }
      } catch (error) {
        setSubmitStatus('error')
      } finally {
        setIsSubmitting(false)
      }
    }
  }

  return (
    <motion.form 
      className="space-y-4 sm:space-y-6"
      onSubmit={handleSubmit}
      variants={slideUp}
    >
      <motion.div variants={slideUp}>
        <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
          Your Name *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your full name"
          required
          aria-describedby={errors.name ? 'name-error' : undefined}
          className={`w-full p-3 sm:p-4 bg-gray-800 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-400 text-sm sm:text-base ${
            errors.name ? 'border-red-500' : 'border-gray-700'
          }`}
        />
        {errors.name && <p id="name-error" className="text-red-400 text-xs mt-1" role="alert">{errors.name}</p>}
      </motion.div>

      <motion.div variants={slideUp}>
        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
          Your Email *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email address"
          required
          aria-describedby={errors.email ? 'email-error' : undefined}
          className={`w-full p-3 sm:p-4 bg-gray-800 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-400 text-sm sm:text-base ${
            errors.email ? 'border-red-500' : 'border-gray-700'
          }`}
        />
        {errors.email && <p id="email-error" className="text-red-400 text-xs mt-1" role="alert">{errors.email}</p>}
      </motion.div>

      <motion.div variants={slideUp}>
        <label htmlFor="reason" className="block text-sm font-medium text-gray-300 mb-2">
          Reason for Contact *
        </label>
        <select
          id="reason"
          name="reason"
          value={formData.reason}
          onChange={handleChange}
          required
          aria-describedby={errors.reason ? 'reason-error' : undefined}
          className={`w-full p-3 sm:p-4 bg-gray-800 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white text-sm sm:text-base ${
            errors.reason ? 'border-red-500' : 'border-gray-700'
          }`}
        >
          {reasons.map(reason => (
            <option key={reason.value} value={reason.value} className="bg-gray-800">
              {reason.label}
            </option>
          ))}
        </select>
        {errors.reason && <p id="reason-error" className="text-red-400 text-xs mt-1" role="alert">{errors.reason}</p>}
      </motion.div>

      <motion.div variants={slideUp}>
        <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
          Your Message *
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows="4"
          placeholder="Tell me about your project or inquiry"
          required
          aria-describedby={errors.message ? 'message-error' : undefined}
          className={`w-full p-3 sm:p-4 bg-gray-800 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-400 resize-none text-sm sm:text-base ${
            errors.message ? 'border-red-500' : 'border-gray-700'
          }`}
        />
        {errors.message && <p id="message-error" className="text-red-400 text-xs mt-1" role="alert">{errors.message}</p>}
      </motion.div>

      {submitStatus === 'success' && (
        <motion.div 
          className="p-4 bg-green-600 text-white rounded-lg text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Message sent successfully! 🎉
        </motion.div>
      )}
      
      {submitStatus === 'error' && (
        <motion.div 
          className="p-4 bg-red-600 text-white rounded-lg text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Failed to send message. Please try again.
        </motion.div>
      )}

      <motion.button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 sm:py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-colors text-sm sm:text-base disabled:opacity-50 disabled:cursor-not-allowed"
        variants={slideUp}
        whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
        whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </motion.button>
    </motion.form>
  )
}

export default ContactForm
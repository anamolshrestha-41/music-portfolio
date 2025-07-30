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

  const handleSubmit = (e) => {
    e.preventDefault()
    if (validateForm()) {
      console.log('Form submitted:', formData)
      // Handle form submission here
      setFormData({ name: '', email: '', reason: '', message: '' })
    }
  }

  return (
    <motion.form 
      className="space-y-4 sm:space-y-6"
      onSubmit={handleSubmit}
      variants={slideUp}
    >
      <motion.div variants={slideUp}>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}

          placeholder="Your Name"
          className={`w-full p-3 sm:p-4 bg-gray-800 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-400 text-sm sm:text-base ${
            errors.name ? 'border-red-500' : 'border-gray-700'
          }`}
        />
        {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
      </motion.div>

      <motion.div variants={slideUp}>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}

          placeholder="Your Email"
          className={`w-full p-3 sm:p-4 bg-gray-800 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-400 text-sm sm:text-base ${
            errors.email ? 'border-red-500' : 'border-gray-700'
          }`}
        />
        {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
      </motion.div>

      <motion.div variants={slideUp}>
        <select
          name="reason"
          value={formData.reason}
          onChange={handleChange}
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
        {errors.reason && <p className="text-red-400 text-xs mt-1">{errors.reason}</p>}
      </motion.div>

      <motion.div variants={slideUp}>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows="4"
          placeholder="Your Message"
          className={`w-full p-3 sm:p-4 bg-gray-800 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-400 resize-none text-sm sm:text-base ${
            errors.message ? 'border-red-500' : 'border-gray-700'
          }`}
        />
        {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
      </motion.div>

      <motion.button
        type="submit"
        className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 sm:py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-colors text-sm sm:text-base"
        variants={slideUp}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        Send Message
      </motion.button>
    </motion.form>
  )
}

export default ContactForm
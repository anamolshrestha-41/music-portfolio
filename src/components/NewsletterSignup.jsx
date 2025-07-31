import { useState } from 'react'
import { motion } from 'framer-motion'
import { slideUp } from '../utils/animations'

const NewsletterSignup = () => {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!email) return

    setLoading(true)
    
    // Simulate API call
    setTimeout(() => {
      const subscribers = JSON.parse(localStorage.getItem('newsletterSubscribers') || '[]')
      if (!subscribers.includes(email)) {
        subscribers.push(email)
        localStorage.setItem('newsletterSubscribers', JSON.stringify(subscribers))
      }
      
      setSubscribed(true)
      setLoading(false)
      setEmail('')
    }, 1000)
  }

  if (subscribed) {
    return (
      <motion.div 
        className="bg-gradient-to-r from-green-500 to-blue-500 text-white p-6 rounded-lg text-center"
        variants={slideUp}
      >
        <h3 className="text-xl font-bold mb-2">🎉 Welcome to the Family!</h3>
        <p className="mb-4">You'll be the first to know about new releases, exclusive content, and special offers!</p>
        <div className="flex justify-center space-x-4 text-sm">
          <span>🎵 New releases</span>
          <span>🎤 Behind-the-scenes</span>
          <span>💰 Exclusive deals</span>
        </div>
      </motion.div>
    )
  }

  return (
    <motion.div 
      className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-6 rounded-lg"
      variants={slideUp}
    >
      <h3 className="text-xl font-bold mb-2">📧 Stay in the Loop</h3>
      <p className="mb-4 text-purple-100">
        Get exclusive access to new releases, behind-the-scenes content, and special offers!
      </p>
      
      <form onSubmit={handleSubmit} className="flex gap-3">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email..."
          className="flex-1 p-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
          required
        />
        <button
          type="submit"
          disabled={loading}
          className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 disabled:opacity-50"
        >
          {loading ? '...' : 'Subscribe'}
        </button>
      </form>
      
      <div className="flex justify-center space-x-6 mt-4 text-sm text-purple-200">
        <span>✨ Exclusive content</span>
        <span>🎁 Special offers</span>
        <span>📱 Mobile-friendly</span>
      </div>
    </motion.div>
  )
}

export default NewsletterSignup
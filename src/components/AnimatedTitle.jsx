import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

const AnimatedTitle = ({ text, effect = 'typewriter', className = '' }) => {
  const [displayText, setDisplayText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (effect === 'typewriter') {
      if (currentIndex < text.length) {
        const timeout = setTimeout(() => {
          setDisplayText(prev => prev + text[currentIndex])
          setCurrentIndex(prev => prev + 1)
        }, 100)
        return () => clearTimeout(timeout)
      }
    } else {
      setDisplayText(text)
    }
  }, [currentIndex, text, effect])

  if (effect === 'typewriter') {
    return (
      <h1 className={className}>
        {displayText}
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.8, repeat: Infinity }}
          className="inline-block"
        >
          |
        </motion.span>
      </h1>
    )
  }

  return (
    <motion.h1 
      className={className}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {text}
    </motion.h1>
  )
}

export default AnimatedTitle
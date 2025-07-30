import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

const AnimatedTitle = ({ text = "Welcome to Anamol's Music World", effect = "typewriter", className = "" }) => {
  const [displayText, setDisplayText] = useState('')

  useEffect(() => {
    if (effect === 'typewriter') {
      let index = 0
      const timer = setInterval(() => {
        setDisplayText(text.slice(0, index + 1))
        index++
        if (index >= text.length) {
          clearInterval(timer)
        }
      }, 100)
      return () => clearInterval(timer)
    }
  }, [text, effect])

  const slideVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 1, ease: "easeOut" }
    }
  }

  const typewriterVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.5 }
    }
  }

  if (effect === 'typewriter') {
    return (
      <motion.h1
        className={`font-bold ${className}`}
        variants={typewriterVariants}
        initial="hidden"
        animate="visible"
      >
        {displayText}
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
        >
          |
        </motion.span>
      </motion.h1>
    )
  }

  return (
    <motion.h1
      className={`font-bold ${className}`}
      variants={slideVariants}
      initial="hidden"
      animate="visible"
    >
      {text}
    </motion.h1>
  )
}

export default AnimatedTitle
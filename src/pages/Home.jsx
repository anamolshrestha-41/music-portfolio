import { motion } from 'framer-motion'
import { useState } from 'react'
import AnimatedTitle from '../components/AnimatedTitle'
import AudioPlayer from '../components/AudioPlayer'
import VoiceSampleGrid from '../components/VoiceSampleGrid'
import ContactForm from '../components/ContactForm'
import HexGrid from '../components/HexGrid'
import { trackData } from '../data/trackData'
import { voiceSamples } from '../data/voiceSamples'
import { fadeIn, slideUp, hoverScale, staggerContainer } from '../utils/animations'

const Home = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    })
  }

  const scrollToMusic = () => {
    const musicSection = document.querySelector('#featured-track')
    musicSection?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section with Animation */}
      <motion.section 
        className="relative min-h-screen flex items-center justify-center bg-gray-900 overflow-hidden"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        onMouseMove={handleMouseMove}
      >
        <HexGrid />
        
        {/* Floating Particles */}
        {Array.from({ length: 50 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-60"
            animate={{
              y: [-20, -100],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
        
        {/* Enhanced hover effect */}
        <motion.div
          className="absolute pointer-events-none z-5"
          animate={{
            x: mousePosition.x - 200,
            y: mousePosition.y - 200,
          }}
          transition={{
            type: "spring",
            damping: 20,
            stiffness: 300,
            mass: 0.3
          }}
        >
          <div className="w-96 h-96 rounded-full" style={{
            background: 'radial-gradient(circle, rgba(147, 51, 234, 0.3) 0%, rgba(59, 130, 246, 0.2) 30%, rgba(34, 197, 94, 0.1) 60%, transparent 80%)',
            filter: 'blur(1px)'
          }} />
        </motion.div>
        
        <motion.div
          className="absolute w-64 h-64 rounded-full pointer-events-none z-6"
          animate={{
            x: mousePosition.x - 128,
            y: mousePosition.y - 128,
          }}
          transition={{
            type: "spring",
            damping: 30,
            stiffness: 500,
            mass: 0.2
          }}
          style={{
            background: 'radial-gradient(circle, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.1) 50%, transparent 70%)',
            filter: 'blur(0.5px)'
          }}
        />
        {/* Animated Background Overlay */}
        <motion.div 
          className="absolute inset-0"
          animate={{
            background: [
              'radial-gradient(circle at 20% 50%, rgba(147, 51, 234, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(59, 130, 246, 0.1) 0%, transparent 50%), radial-gradient(circle at 40% 80%, rgba(34, 197, 94, 0.1) 0%, transparent 50%)',
              'radial-gradient(circle at 80% 20%, rgba(147, 51, 234, 0.1) 0%, transparent 50%), radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.1) 0%, transparent 50%), radial-gradient(circle at 60% 40%, rgba(34, 197, 94, 0.1) 0%, transparent 50%)',
              'radial-gradient(circle at 40% 80%, rgba(147, 51, 234, 0.1) 0%, transparent 50%), radial-gradient(circle at 60% 40%, rgba(59, 130, 246, 0.1) 0%, transparent 50%), radial-gradient(circle at 20% 50%, rgba(34, 197, 94, 0.1) 0%, transparent 50%)'
            ]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <div className="absolute inset-0 bg-black opacity-70"></div>
        <div className="relative z-10 text-center text-white px-4 py-8">
          <motion.div 
            className="flex items-center justify-center mb-6"
            variants={slideUp}
          >
            <motion.div 
              className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 rounded-full border-4 border-white flex items-center justify-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl relative overflow-hidden"
              animate={{
                boxShadow: [
                  '0 0 20px rgba(251, 191, 36, 0.5), 0 0 40px rgba(251, 191, 36, 0.3), 0 0 60px rgba(251, 191, 36, 0.1)',
                  '0 0 30px rgba(147, 51, 234, 0.5), 0 0 50px rgba(147, 51, 234, 0.3), 0 0 70px rgba(147, 51, 234, 0.1)',
                  '0 0 25px rgba(59, 130, 246, 0.5), 0 0 45px rgba(59, 130, 246, 0.3), 0 0 65px rgba(59, 130, 246, 0.1)',
                  '0 0 20px rgba(251, 191, 36, 0.5), 0 0 40px rgba(251, 191, 36, 0.3), 0 0 60px rgba(251, 191, 36, 0.1)'
                ],
                background: [
                  'linear-gradient(45deg, #fbbf24, #f59e0b)',
                  'linear-gradient(45deg, #9333ea, #7c3aed)',
                  'linear-gradient(45deg, #3b82f6, #2563eb)',
                  'linear-gradient(45deg, #fbbf24, #f59e0b)'
                ]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              whileHover={{
                scale: 1.1,
                rotate: 360
              }}
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                🎵
              </motion.div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 -skew-x-12 animate-pulse" />
            </motion.div>
          </motion.div>
          <AnimatedTitle 
            text="Welcome to Anamol's Music World"
            effect="typewriter"
            className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl mb-4 sm:mb-6"
          />
          <motion.p 
            className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 max-w-2xl mx-auto"
            variants={slideUp}
          >
            Crafting melodies that touch the soul
          </motion.p>
          <motion.button 
            onClick={scrollToMusic}
            className="relative bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full text-base sm:text-lg font-semibold overflow-hidden group cursor-pointer"
            variants={slideUp}
            whileHover={{
              scale: 1.05,
              boxShadow: '0 0 30px rgba(147, 51, 234, 0.5)'
            }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100"
              transition={{ duration: 0.3 }}
            />
            <span className="relative z-10">🎶 Explore My Music</span>
            <motion.div
              className="absolute inset-0 bg-white opacity-20"
              animate={{
                x: ['-100%', '100%']
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          </motion.button>
        </div>
        {/* Animated Sound Waves */}
        <div className="absolute bottom-0 left-0 w-full h-24 overflow-hidden">
          <svg className="w-full h-full" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <motion.path
              d="M0,60 Q150,20 300,60 T600,60 T900,60 T1200,60 V120 H0 Z"
              fill="url(#waveGradient)"
              animate={{
                d: [
                  "M0,60 Q150,20 300,60 T600,60 T900,60 T1200,60 V120 H0 Z",
                  "M0,60 Q150,100 300,60 T600,60 T900,60 T1200,60 V120 H0 Z",
                  "M0,60 Q150,20 300,60 T600,60 T900,60 T1200,60 V120 H0 Z"
                ]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.path
              d="M0,80 Q200,40 400,80 T800,80 T1200,80 V120 H0 Z"
              fill="url(#waveGradient2)"
              animate={{
                d: [
                  "M0,80 Q200,40 400,80 T800,80 T1200,80 V120 H0 Z",
                  "M0,80 Q200,120 400,80 T800,80 T1200,80 V120 H0 Z",
                  "M0,80 Q200,40 400,80 T800,80 T1200,80 V120 H0 Z"
                ]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5
              }}
            />
            <defs>
              <linearGradient id="waveGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="rgba(147, 51, 234, 0.8)" />
                <stop offset="100%" stopColor="rgba(59, 130, 246, 0.4)" />
              </linearGradient>
              <linearGradient id="waveGradient2" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="rgba(34, 197, 94, 0.6)" />
                <stop offset="100%" stopColor="rgba(251, 191, 36, 0.3)" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </motion.section>

      {/* Featured Track Player */}
      <motion.section 
        id="featured-track"
        className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-blue-50 via-white to-purple-50 dark:from-gray-800 dark:via-gray-800 dark:to-gray-900"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeIn}
      >
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8 sm:mb-12 text-gray-900 dark:text-white"
            variants={slideUp}
          >
            Featured Track
          </motion.h2>
          <motion.div variants={slideUp}>
            <AudioPlayer 
              playlist={trackData}
              currentTrackIndex={0}
              onTrackChange={(index) => console.log('Track changed to:', index)}
            />
          </motion.div>
        </div>
      </motion.section>

      {/* Voice Showcase Grid */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8 sm:mb-12 text-gray-900 dark:text-white"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideUp}
          >
            Voice Showcase
          </motion.h2>
          <VoiceSampleGrid samples={voiceSamples} />
        </div>
      </section>

      {/* Contact Form */}
      <motion.section 
        className="py-12 sm:py-16 lg:py-20 bg-gray-900 text-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeIn}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <motion.h2 
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8 sm:mb-12"
              variants={slideUp}
            >
              Get In Touch
            </motion.h2>
            <ContactForm />
          </div>
        </div>
      </motion.section>
    </div>
  )
}

export default Home
import { motion } from 'framer-motion'
import SEOHead from '../components/SEOHead'
import { fadeIn, slideUp } from '../utils/animations'

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-16">
      <SEOHead 
        title="About - Anamol Shrestha"
        description="Learn about Anamol Shrestha, professional musician and composer. Discover the story behind the music and artistic journey."
        url="/about"
      />
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          variants={fadeIn}
          initial="hidden"
          animate="visible"
        >
          <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            About Me
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Professional musician and voice artist
          </p>
        </motion.div>

        <motion.div 
          className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8"
          variants={slideUp}
          initial="hidden"
          animate="visible"
        >
          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
            Welcome to my musical journey. I'm a passionate musician dedicated to creating 
            melodies that touch the soul and connect with audiences worldwide.
          </p>
        </motion.div>
      </div>
    </div>
  )
}

export default About
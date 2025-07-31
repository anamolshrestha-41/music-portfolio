import { motion } from 'framer-motion'
import { fadeIn, slideUp } from '../utils/animations'

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-16">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          variants={fadeIn}
          initial="hidden"
          animate="visible"
        >
          <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Portfolio
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            My musical creations and projects
          </p>
        </motion.div>

        <motion.div 
          className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8"
          variants={slideUp}
          initial="hidden"
          animate="visible"
        >
          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
            Explore my collection of musical works, collaborations, and creative projects.
          </p>
        </motion.div>
      </div>
    </div>
  )
}

export default Portfolio
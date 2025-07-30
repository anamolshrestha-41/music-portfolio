import { motion } from 'framer-motion'
import AnimatedTitle from '../components/AnimatedTitle'
import { fadeIn, slideUp } from '../utils/animations'

const About = () => {
  return (
    <motion.div 
      className="container mx-auto px-4 py-6 sm:py-8 lg:py-12"
      initial="hidden"
      animate="visible"
      variants={fadeIn}
    >
      <AnimatedTitle 
        text="About Anamol"
        effect="slide"
        className="text-2xl sm:text-3xl mb-4 sm:mb-6"
      />
      <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">My Story</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            I'm a passionate musician with over 10 years of experience in creating and performing music.
            My journey started with classical piano and evolved into electronic music production.
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            I specialize in ambient, electronic, and experimental music, always pushing the boundaries
            of sound and creativity.
          </p>
        </div>
        <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Skills</h3>
          <ul className="space-y-2 mb-6">
            <li className="flex justify-between">
              <span className="text-gray-700 dark:text-gray-300">Piano</span>
              <span className="text-blue-600">Expert</span>
            </li>
            <li className="flex justify-between">
              <span className="text-gray-700 dark:text-gray-300">Music Production</span>
              <span className="text-blue-600">Advanced</span>
            </li>
            <li className="flex justify-between">
              <span className="text-gray-700 dark:text-gray-300">Sound Design</span>
              <span className="text-blue-600">Advanced</span>
            </li>
          </ul>
          <a 
            href="/AnamolResume.docx" 
            download="AnamolResume.docx"
            className="inline-flex items-center gap-2 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors text-sm font-medium"
          >
            📄 Download Resume
          </a>
        </div>
      </div>
    </motion.div>
  )
}

export default About
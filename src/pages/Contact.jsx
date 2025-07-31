import { motion } from 'framer-motion'
import ContactForm from '../components/ContactForm'
import SEOHead from '../components/SEOHead'
import { fadeIn, slideUp } from '../utils/animations'

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-16">
      <SEOHead 
        title="Contact - Anamol Shrestha"
        description="Get in touch with Anamol Shrestha for collaborations, music licensing, or general inquiries. Let's create something amazing together."
        url="/contact"
      />
      <div className="container mx-auto px-4 max-w-2xl">
        <motion.div 
          className="text-center mb-12"
          variants={fadeIn}
          initial="hidden"
          animate="visible"
        >
          <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Contact Me
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Let's collaborate and create something amazing together
          </p>
        </motion.div>

        <motion.div 
          variants={slideUp}
          initial="hidden"
          animate="visible"
        >
          <ContactForm />
        </motion.div>
      </div>
    </div>
  )
}

export default Contact
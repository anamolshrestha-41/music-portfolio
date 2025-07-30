import { motion } from 'framer-motion'
import ContactForm from '../components/ContactForm'
import { fadeIn, slideUp } from '../utils/animations'

const Contact = () => {
  return (
    <motion.div 
      className="container mx-auto px-4 py-6 sm:py-8 lg:py-12"
      initial="hidden"
      animate="visible"
      variants={fadeIn}
    >
      <motion.h1 
        className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6"
        variants={slideUp}
      >
        Contact Me
      </motion.h1>
      <div className="max-w-2xl mx-auto bg-gray-900 p-6 sm:p-8 rounded-lg">
        <ContactForm />
      </div>
    </motion.div>
  )
}

export default Contact
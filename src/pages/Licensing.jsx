import { motion } from 'framer-motion'
import LicenseTiers from '../components/LicenseTiers'
import LicenseTerms from '../components/LicenseTerms'
import SEOHead from '../components/SEOHead'
import { fadeIn, slideUp, staggerContainer } from '../utils/animations'

const Licensing = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <SEOHead 
        title="Music Licensing - Anamol Shrestha"
        description="License Anamol Shrestha's music for your commercial projects. Choose from Free, Commercial, or Exclusive licensing options."
        url="/licensing"
      />
      <motion.div 
        className="container mx-auto px-4 py-16"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <motion.div 
          className="text-center mb-12"
          variants={slideUp}
        >
          <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            📄 Music & Voice Licensing
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            License my music and voice for your commercial projects. Choose the plan that fits your needs.
          </p>
        </motion.div>

        <LicenseTiers />
        <LicenseTerms />
      </motion.div>
    </div>
  )
}

export default Licensing
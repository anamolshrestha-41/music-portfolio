import { motion } from 'framer-motion'
import VoiceSampleGrid from '../components/VoiceSampleGrid'
import TrackShowcase from '../components/TrackShowcase'
import { voiceSamples } from '../data/voiceSamples'
import { trackData } from '../data/trackData'
import { fadeIn, slideUp } from '../utils/animations'

const Portfolio = () => {
  return (
    <motion.div 
      className="min-h-screen bg-gray-50"
      initial="hidden"
      animate="visible"
      variants={fadeIn}
    >
      <div className="container mx-auto px-4 py-12">
        <motion.h1 
          className="text-4xl font-bold text-center mb-4"
          variants={slideUp}
        >
          My Portfolio
        </motion.h1>
        <motion.p 
          className="text-xl text-gray-600 text-center mb-12"
          variants={slideUp}
        >
          Explore my collection of voice samples and musical performances
        </motion.p>
        
        <motion.h2 
          className="text-3xl font-bold mb-8"
          variants={slideUp}
        >
          Music Tracks
        </motion.h2>
        <TrackShowcase tracks={trackData} />
        
        <motion.h2 
          className="text-3xl font-bold mb-8 mt-16"
          variants={slideUp}
        >
          Voice Samples
        </motion.h2>
        <VoiceSampleGrid samples={voiceSamples} />
      </div>
    </motion.div>
  )
}

export default Portfolio
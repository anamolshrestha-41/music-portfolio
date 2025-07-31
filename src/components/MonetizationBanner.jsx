import { motion } from 'framer-motion'
import { slideUp } from '../utils/animations'

const MonetizationBanner = () => {
  return (
    <motion.div 
      className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-6 rounded-lg mb-8"
      variants={slideUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="text-center">
        <h3 className="text-xl font-bold mb-3">🎯 Support My Music Journey</h3>
        <p className="mb-4 text-sm opacity-90">
          Help me reach monetization goals and create more amazing content!
        </p>
        <div className="flex flex-wrap justify-center gap-4 text-sm">
          <div className="bg-white/20 px-3 py-2 rounded-full">
            📺 YouTube: 1K subs needed for monetization
          </div>
          <div className="bg-white/20 px-3 py-2 rounded-full">
            🎵 SoundCloud Pro: Revenue sharing available
          </div>
        </div>
        <div className="flex justify-center gap-3 mt-4">
          <a
            href="https://www.youtube.com/@anamolshrestha0107?sub_confirmation=1"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-full text-sm font-medium transition-colors"
          >
            Subscribe on YouTube
          </a>
          <a
            href="https://soundcloud.com/your-username"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded-full text-sm font-medium transition-colors"
          >
            Follow on SoundCloud
          </a>
        </div>
      </div>
    </motion.div>
  )
}

export default MonetizationBanner
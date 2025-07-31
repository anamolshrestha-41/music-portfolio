import { motion } from 'framer-motion'
import { slideUp } from '../utils/animations'

const YouTubeChannels = () => {
  const channels = [
    {
      name: "Anamol Shrestha",
      url: "https://www.youtube.com/@anamolshrestha0107",
      description: "Main music channel with original compositions and covers",
      icon: "🎵"
    },
    {
      name: "Anmol Sth",
      url: "https://www.youtube.com/@anmolsth", 
      description: "Additional content and collaborations",
      icon: "🎬"
    }
  ]

  return (
    <motion.div 
      className="bg-red-50 dark:bg-red-900/20 rounded-lg p-6 mb-8"
      variants={slideUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 text-center">
        📺 My YouTube Channels
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {channels.map((channel, index) => (
          <motion.a
            key={index}
            href={`${channel.url}?sub_confirmation=1`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-4 bg-white dark:bg-gray-800 rounded-lg hover:bg-red-50 dark:hover:bg-red-900/30 transition-colors group"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="text-3xl">{channel.icon}</div>
            <div className="flex-1">
              <h4 className="font-semibold text-gray-900 dark:text-white group-hover:text-red-600 dark:group-hover:text-red-400">
                {channel.name}
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                {channel.description}
              </p>
            </div>
            <div className="text-red-600 dark:text-red-400">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </div>
          </motion.a>
        ))}
      </div>
      
      <p className="text-center text-sm text-gray-600 dark:text-gray-400 mt-4">
        Subscribe to both channels to support my music journey! 🙏
      </p>
    </motion.div>
  )
}

export default YouTubeChannels
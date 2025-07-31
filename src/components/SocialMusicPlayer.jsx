import { motion } from 'framer-motion'
import { slideUp } from '../utils/animations'

const SocialMusicPlayer = ({ type, embedId, title, platform }) => {
  const getEmbedUrl = () => {
    if (type === 'youtube') {
      return `https://www.youtube.com/embed/${embedId}`
    }
    if (type === 'soundcloud') {
      return `https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${embedId}&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true`
    }
  }

  const getFollowUrl = () => {
    if (type === 'youtube') {
      return 'https://www.youtube.com/@anamolshrestha0107?sub_confirmation=1'
    }
    if (type === 'soundcloud') {
      return 'https://soundcloud.com/your-username'
    }
  }

  return (
    <motion.div 
      className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
      variants={slideUp}
      whileHover={{ scale: 1.02 }}
    >
      <div className="aspect-video">
        <iframe
          src={getEmbedUrl()}
          width="100%"
          height="100%"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title={title}
        />
      </div>
      
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-2 text-gray-900 dark:text-white">{title}</h3>
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-600 dark:text-gray-400 capitalize">{platform}</span>
          <div className="flex gap-2">
            <a
              href={getFollowUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className={`px-4 py-2 rounded-full text-white text-sm font-medium transition-colors ${
                type === 'youtube' 
                  ? 'bg-red-600 hover:bg-red-700' 
                  : 'bg-orange-500 hover:bg-orange-600'
              }`}
            >
              {type === 'youtube' ? '📺 Subscribe' : '🎵 Follow'}
            </a>
            <button
              onClick={() => navigator.share?.({ 
                title, 
                url: type === 'youtube' 
                  ? `https://youtu.be/${embedId}` 
                  : `https://soundcloud.com/track/${embedId}` 
              })}
              className="px-3 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-full text-sm"
            >
              📤
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default SocialMusicPlayer
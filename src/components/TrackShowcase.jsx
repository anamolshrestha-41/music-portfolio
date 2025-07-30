import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import TrackFilter from './TrackFilter'
import AudioBars from './AudioBars'
import { useAudio } from '../contexts/AudioContext'
import { slideUp, hoverScale, staggerContainer } from '../utils/animations'

const TrackShowcase = ({ tracks }) => {
  const [selectedFilter, setSelectedFilter] = useState('all')
  const { currentAudio, isPlaying, playAudio } = useAudio()

  const filteredTracks = useMemo(() => {
    if (selectedFilter === 'all') return tracks
    
    return tracks.filter(track => 
      track.category === selectedFilter || 
      track.album === selectedFilter
    )
  }, [tracks, selectedFilter])

  return (
    <div>
      <TrackFilter onFilter={setSelectedFilter} tracks={tracks} />
      
      {filteredTracks.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500 dark:text-gray-400 text-lg">No tracks found in this category.</p>
        </div>
      ) : (
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {filteredTracks.map((track) => (
        <motion.div
          key={track.id}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
          variants={slideUp}
          whileHover="hover"
          {...hoverScale}
        >
          <img 
            src={track.cover} 
            alt={track.title}
            className="w-full h-40 sm:h-48 object-cover"
          />
          <div className="p-3 sm:p-4">
            <h3 className="font-bold text-base sm:text-lg mb-1 truncate text-gray-900 dark:text-white">{track.title}</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-2 truncate">{track.artist}</p>
            <p className="text-gray-500 dark:text-gray-400 text-xs mb-1">{track.genre} • {track.duration}</p>
            <p className="text-gray-400 dark:text-gray-500 text-xs mb-3">{track.album}</p>
            <button 
              onClick={() => playAudio(track.src)}
              className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition-colors text-sm sm:text-base flex items-center justify-center gap-3"
            >
              {currentAudio === track.src && isPlaying ? (
                <>
                  <AudioBars isPlaying={true} barCount={4} />
                  <span>Playing</span>
                </>
              ) : (
                <>
                  <span className="text-lg">▶️</span>
                  Play
                </>
              )}
            </button>
          </div>
        </motion.div>
          ))}
        </motion.div>
      )}
    </div>
  )
}

export default TrackShowcase
import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import VoiceSearchFilter from './VoiceSearchFilter'
import AudioBars from './AudioBars'
import { useAudio } from '../contexts/AudioContext'
import { slideUp, hoverScale, staggerContainer } from '../utils/animations'

const VoiceSampleGrid = ({ samples }) => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedFilter, setSelectedFilter] = useState('all')
  const { currentAudio, isPlaying, playAudio } = useAudio()

  const filteredSamples = useMemo(() => {
    return samples.filter(sample => {
      const matchesSearch = searchTerm === '' || 
        sample.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        sample.mood?.toLowerCase().includes(searchTerm.toLowerCase())
      
      const matchesFilter = selectedFilter === 'all' || sample.genre === selectedFilter
      
      return matchesSearch && matchesFilter
    })
  }, [samples, searchTerm, selectedFilter])



  return (
    <div>
      <VoiceSearchFilter 
        onSearch={setSearchTerm}
        onFilter={setSelectedFilter}
      />
      
      {filteredSamples.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500 dark:text-gray-400 text-lg">No voice samples found matching your criteria.</p>
        </div>
      ) : (
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {filteredSamples.map((sample) => (
        <motion.div
          key={sample.id}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
          variants={slideUp}
          whileHover="hover"
          {...hoverScale}
        >
          <div className="relative">
            <img 
              src={sample.thumbnail} 
              alt={sample.title}
              className="w-full h-40 sm:h-48 object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
              <button className="w-12 h-12 sm:w-16 sm:h-16 bg-white rounded-full flex items-center justify-center text-lg sm:text-2xl hover:bg-gray-100 transition-colors">
                ▶️
              </button>
            </div>
          </div>
          <div className="p-3 sm:p-4">
            <h3 className="font-semibold text-base sm:text-lg mb-2 truncate text-gray-900 dark:text-white">{sample.title}</h3>
            <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm mb-1">{sample.genre}</p>
            <p className="text-gray-500 dark:text-gray-400 text-xs mb-3">{sample.mood}</p>
            <button 
              onClick={() => playAudio(sample.audioSrc)}
              className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition-colors text-sm sm:text-base flex items-center justify-center gap-3"
            >
              {currentAudio === sample.audioSrc && isPlaying ? (
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

export default VoiceSampleGrid
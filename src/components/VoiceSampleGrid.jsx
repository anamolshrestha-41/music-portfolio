import { useState, useMemo, useEffect } from 'react'
import { motion } from 'framer-motion'
import VoiceSearchFilter from './VoiceSearchFilter'
import AudioBars from './AudioBars'
import { useAudio } from '../contexts/AudioContext'
import { generateVoiceDescription } from '../services/aiService'
import { slideUp, hoverScale, staggerContainer } from '../utils/animations'

const VoiceSampleGrid = ({ samples }) => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedFilter, setSelectedFilter] = useState('all')
  const [aiDescriptions, setAiDescriptions] = useState({})
  const { currentAudio, isPlaying, playAudio } = useAudio()

  useEffect(() => {
    const generateDescriptions = async () => {
      const descriptions = {}
      for (const sample of samples) {
        descriptions[sample.id] = await generateVoiceDescription(sample.title, sample.genre, sample.mood)
      }
      setAiDescriptions(descriptions)
    }
    generateDescriptions()
  }, [samples])

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
        <motion.article
          key={sample.id}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
          variants={slideUp}
          whileHover="hover"
          {...hoverScale}
        >
          <div className="relative">
            <img 
              src={sample.thumbnail} 
              alt={`Thumbnail for ${sample.title} - ${sample.genre} voice sample`}
              className="w-full h-40 sm:h-48 object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 focus-within:opacity-100 transition-opacity duration-300">
              <button 
                onClick={() => playAudio(sample.audioSrc)}
                className="w-12 h-12 sm:w-16 sm:h-16 bg-white rounded-full flex items-center justify-center text-lg sm:text-2xl hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500"
                aria-label={`Play ${sample.title}`}
              >
                <span aria-hidden="true">▶️</span>
              </button>
            </div>
          </div>
          <div className="p-3 sm:p-4">
            <h3 className="font-semibold text-base sm:text-lg mb-2 truncate text-gray-900 dark:text-white">{sample.title}</h3>
            <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm mb-1">
              <span className="sr-only">Genre: </span>{sample.genre}
            </p>
            <p className="text-gray-500 dark:text-gray-400 text-xs mb-1">
              <span className="sr-only">Mood: </span>{sample.mood}
            </p>
            <p className="text-blue-600 dark:text-blue-400 text-xs mb-3 italic">
              <span className="sr-only">AI Description: </span>
              {aiDescriptions[sample.id] || 'Generating description...'}
            </p>
            <button 
              onClick={() => playAudio(sample.audioSrc)}
              className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-colors text-sm sm:text-base flex items-center justify-center gap-3"
              aria-label={currentAudio === sample.audioSrc && isPlaying ? `Stop playing ${sample.title}` : `Play ${sample.title}`}
            >
              {currentAudio === sample.audioSrc && isPlaying ? (
                <>
                  <AudioBars isPlaying={true} barCount={4} />
                  <span>Playing</span>
                </>
              ) : (
                <>
                  <span className="text-lg" aria-hidden="true">▶️</span>
                  <span>Play</span>
                </>
              )}
            </button>
          </div>
        </motion.article>
          ))}
        </motion.div>
      )}
    </div>
  )
}

export default VoiceSampleGrid
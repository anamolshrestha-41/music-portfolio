import { useState } from 'react'
import { motion } from 'framer-motion'
import { slideUp } from '../utils/animations'

const MoodRecommendation = ({ tracks, onTrackSelect }) => {
  const [mood, setMood] = useState('')
  const [recommendations, setRecommendations] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const getRecommendations = async () => {
    if (!mood.trim()) return
    
    setIsLoading(true)
    
    try {
      const apiKey = import.meta.env.VITE_OPENAI_API_KEY
      if (!apiKey || apiKey === '') {
        throw new Error('No API key')
      }
      
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify({
          model: 'gpt-3.5-turbo',
          messages: [{
            role: 'user',
            content: `Based on the mood "${mood}", recommend tracks from this list: ${tracks.map(t => `${t.title} (${t.genre})`).join(', ')}. Return only track titles separated by commas, maximum 3 recommendations.`
          }],
          max_tokens: 100,
          temperature: 0.7
        })
      })

      const data = await response.json()
      const recommendedTitles = data.choices[0].message.content.trim().split(',').map(t => t.trim())
      
      const matchedTracks = tracks.filter(track => 
        recommendedTitles.some(title => track.title.toLowerCase().includes(title.toLowerCase()))
      )
      
      setRecommendations(matchedTracks.slice(0, 3))
    } catch (error) {
      console.error('Recommendation failed:', error)
      setRecommendations(getRandomTracks())
    } finally {
      setIsLoading(false)
    }
  }

  const getRandomTracks = () => {
    return tracks.sort(() => 0.5 - Math.random()).slice(0, 3)
  }

  return (
    <motion.div 
      className="bg-gray-800 rounded-lg p-6 mb-8"
      variants={slideUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <h3 className="text-xl font-bold text-white mb-4">🎯 Find Your Perfect Track</h3>
      
      <div className="flex gap-3 mb-4">
        <input
          type="text"
          value={mood}
          onChange={(e) => setMood(e.target.value)}
          placeholder="Describe your mood (e.g., relaxed, energetic, melancholic)"
          className="flex-1 p-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:border-purple-500 focus:outline-none"
          onKeyPress={(e) => e.key === 'Enter' && getRecommendations()}
        />
        <button
          onClick={getRecommendations}
          disabled={isLoading || !mood.trim()}
          className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? '🤖' : '✨'}
        </button>
      </div>

      {recommendations.length > 0 && (
        <div className="space-y-3">
          <p className="text-gray-300 text-sm">Recommended for your mood:</p>
          {recommendations.map(track => (
            <motion.div
              key={track.id}
              className="flex items-center gap-3 p-3 bg-gray-700 rounded-lg cursor-pointer hover:bg-gray-600"
              onClick={() => onTrackSelect(track)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <img src={track.cover} alt={track.title} className="w-12 h-12 rounded" />
              <div>
                <p className="text-white font-medium">{track.title}</p>
                <p className="text-gray-400 text-sm">{track.genre}</p>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </motion.div>
  )
}

export default MoodRecommendation
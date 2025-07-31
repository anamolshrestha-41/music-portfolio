import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { slideUp } from '../utils/animations'

const UserFavorites = ({ tracks, voiceSamples }) => {
  const [favorites, setFavorites] = useState([])

  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem('userFavorites') || '[]')
    setFavorites(savedFavorites)
  }, [])

  const toggleFavorite = (item, type) => {
    const favoriteItem = { ...item, type }
    const existingIndex = favorites.findIndex(f => f.id === item.id && f.type === type)
    
    let newFavorites
    if (existingIndex >= 0) {
      newFavorites = favorites.filter((_, index) => index !== existingIndex)
    } else {
      newFavorites = [...favorites, favoriteItem]
    }
    
    setFavorites(newFavorites)
    localStorage.setItem('userFavorites', JSON.stringify(newFavorites))
  }

  const isFavorite = (id, type) => {
    return favorites.some(f => f.id === id && f.type === type)
  }

  return (
    <motion.div 
      className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
      variants={slideUp}
    >
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
        ❤️ Your Favorites ({favorites.length})
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Tracks */}
        <div>
          <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Tracks</h4>
          <div className="space-y-2">
            {tracks.map(track => (
              <div 
                key={track.id}
                className="flex items-center justify-between p-2 bg-gray-50 dark:bg-gray-700 rounded"
              >
                <div>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">{track.title}</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">{track.genre}</p>
                </div>
                <button
                  onClick={() => toggleFavorite(track, 'track')}
                  className={`text-xl ${isFavorite(track.id, 'track') ? 'text-red-500' : 'text-gray-400'}`}
                >
                  {isFavorite(track.id, 'track') ? '❤️' : '🤍'}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Voice Samples */}
        <div>
          <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Voice Samples</h4>
          <div className="space-y-2">
            {voiceSamples.map(sample => (
              <div 
                key={sample.id}
                className="flex items-center justify-between p-2 bg-gray-50 dark:bg-gray-700 rounded"
              >
                <div>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">{sample.title}</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">{sample.genre}</p>
                </div>
                <button
                  onClick={() => toggleFavorite(sample, 'voice')}
                  className={`text-xl ${isFavorite(sample.id, 'voice') ? 'text-red-500' : 'text-gray-400'}`}
                >
                  {isFavorite(sample.id, 'voice') ? '❤️' : '🤍'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {favorites.length > 0 && (
        <div className="mt-6 p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
          <h4 className="font-semibold text-purple-800 dark:text-purple-200 mb-2">
            Your Favorite Collection
          </h4>
          <div className="flex flex-wrap gap-2">
            {favorites.map((fav, index) => (
              <span 
                key={index}
                className="px-2 py-1 bg-purple-200 dark:bg-purple-700 text-purple-800 dark:text-purple-200 text-xs rounded-full"
              >
                {fav.title}
              </span>
            ))}
          </div>
        </div>
      )}
    </motion.div>
  )
}

export default UserFavorites
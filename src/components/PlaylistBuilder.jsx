import { useState } from 'react'
import { motion } from 'framer-motion'
import { slideUp } from '../utils/animations'

const PlaylistBuilder = ({ tracks, voiceSamples }) => {
  const [playlist, setPlaylist] = useState([])
  const [playlistName, setPlaylistName] = useState('')

  const allItems = [
    ...tracks.map(t => ({ ...t, type: 'track' })),
    ...voiceSamples.map(v => ({ ...v, type: 'voice', artist: 'Voice Sample' }))
  ]

  const addToPlaylist = (item) => {
    if (!playlist.find(p => p.id === item.id && p.type === item.type)) {
      setPlaylist([...playlist, item])
    }
  }

  const removeFromPlaylist = (item) => {
    setPlaylist(playlist.filter(p => !(p.id === item.id && p.type === item.type)))
  }

  const savePlaylist = () => {
    if (playlist.length > 0 && playlistName) {
      const savedPlaylists = JSON.parse(localStorage.getItem('userPlaylists') || '[]')
      const newPlaylist = {
        id: Date.now(),
        name: playlistName,
        items: playlist,
        created: new Date().toLocaleDateString()
      }
      savedPlaylists.push(newPlaylist)
      localStorage.setItem('userPlaylists', JSON.stringify(savedPlaylists))
      
      alert(`Playlist "${playlistName}" saved! 🎵`)
      setPlaylist([])
      setPlaylistName('')
    }
  }

  return (
    <motion.div 
      className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
      variants={slideUp}
    >
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
        🎵 Create Your Playlist
      </h3>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Available Items */}
        <div>
          <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Available Music</h4>
          <div className="space-y-2 max-h-64 overflow-y-auto">
            {allItems.map(item => (
              <div 
                key={`${item.type}-${item.id}`}
                className="flex items-center justify-between p-2 bg-gray-50 dark:bg-gray-700 rounded"
              >
                <div>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">{item.title}</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">{item.artist}</p>
                </div>
                <button
                  onClick={() => addToPlaylist(item)}
                  className="text-purple-600 hover:text-purple-800 text-sm"
                >
                  + Add
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Playlist */}
        <div>
          <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
            Your Playlist ({playlist.length})
          </h4>
          
          <input
            type="text"
            placeholder="Playlist name..."
            value={playlistName}
            onChange={(e) => setPlaylistName(e.target.value)}
            className="w-full p-2 mb-3 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
          />
          
          <div className="space-y-2 max-h-48 overflow-y-auto mb-4">
            {playlist.map((item, index) => (
              <div 
                key={`playlist-${item.type}-${item.id}`}
                className="flex items-center justify-between p-2 bg-purple-50 dark:bg-purple-900/20 rounded"
              >
                <div>
                  <p className="text-sm font-medium text-gray-900 dark:text-white">
                    {index + 1}. {item.title}
                  </p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">{item.artist}</p>
                </div>
                <button
                  onClick={() => removeFromPlaylist(item)}
                  className="text-red-600 hover:text-red-800 text-sm"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
          
          <button
            onClick={savePlaylist}
            disabled={playlist.length === 0 || !playlistName}
            className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Save Playlist
          </button>
        </div>
      </div>
    </motion.div>
  )
}

export default PlaylistBuilder
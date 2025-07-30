import { useState } from 'react'
import { motion } from 'framer-motion'

const TrackFilter = ({ onFilter, tracks }) => {
  const [activeTab, setActiveTab] = useState('all')

  const categories = ['all', 'Original', 'Remix', 'Cover', 'Ambient', 'Experimental']
  
  const albums = [...new Set(tracks.map(track => track.album))]

  const handleTabClick = (category) => {
    setActiveTab(category)
    onFilter(category)
  }

  return (
    <div className="mb-8 space-y-4">
      {/* Category Tabs */}
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => handleTabClick(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeTab === category
                ? 'bg-purple-600 text-white'
                : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
            }`}
          >
            {category === 'all' ? 'All Tracks' : category}
          </button>
        ))}
      </div>

      {/* Album Dropdown */}
      <select
        onChange={(e) => handleTabClick(e.target.value)}
        className="p-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white"
      >
        <option value="all">All Albums</option>
        {albums.map((album) => (
          <option key={album} value={album}>{album}</option>
        ))}
      </select>
    </div>
  )
}

export default TrackFilter
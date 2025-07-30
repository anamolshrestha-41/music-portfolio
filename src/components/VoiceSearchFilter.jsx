import { useState } from 'react'
import { motion } from 'framer-motion'

const VoiceSearchFilter = ({ onSearch, onFilter }) => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedFilter, setSelectedFilter] = useState('all')

  const filters = [
    { value: 'all', label: 'All' },
    { value: 'Opera', label: 'Opera' },
    { value: 'Jazz', label: 'Jazz' },
    { value: 'Pop', label: 'Pop' },
    { value: 'Folk', label: 'Folk' },
    { value: 'R&B', label: 'R&B' },
    { value: 'Theatre', label: 'Theatre' }
  ]

  const handleSearch = (value) => {
    setSearchTerm(value)
    onSearch(value)
  }

  const handleFilter = (value) => {
    setSelectedFilter(value)
    onFilter(value)
  }

  return (
    <motion.div 
      className="mb-8 space-y-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Search Bar */}
      <div className="relative">
        <input
          type="text"
          placeholder="Search by title or mood..."
          value={searchTerm}
          onChange={(e) => handleSearch(e.target.value)}
          className="w-full p-3 pl-10 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
        />
        <div className="absolute left-3 top-3 text-gray-400">
          🔍
        </div>
      </div>

      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-2">
        {filters.map((filter) => (
          <button
            key={filter.value}
            onClick={() => handleFilter(filter.value)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              selectedFilter === filter.value
                ? 'bg-purple-600 text-white'
                : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
            }`}
          >
            {filter.label}
          </button>
        ))}
      </div>
    </motion.div>
  )
}

export default VoiceSearchFilter
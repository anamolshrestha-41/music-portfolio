import { useState } from 'react'

const VoiceSearchFilter = ({ onSearch, onFilter }) => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedGenre, setSelectedGenre] = useState('all')

  const genres = ['all', 'Opera', 'Jazz', 'Pop', 'Folk', 'R&B', 'Theatre']

  const handleSearch = (value) => {
    setSearchTerm(value)
    onSearch(value)
  }

  const handleFilter = (genre) => {
    setSelectedGenre(genre)
    onFilter(genre)
  }

  return (
    <div className="mb-8 space-y-4">
      <div className="flex flex-col sm:flex-row gap-4">
        <input
          type="text"
          placeholder="Search voice samples..."
          value={searchTerm}
          onChange={(e) => handleSearch(e.target.value)}
          className="flex-1 p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
        />
        
        <select
          value={selectedGenre}
          onChange={(e) => handleFilter(e.target.value)}
          className="p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
        >
          {genres.map(genre => (
            <option key={genre} value={genre}>
              {genre === 'all' ? 'All Genres' : genre}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}

export default VoiceSearchFilter
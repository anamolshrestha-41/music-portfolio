import { motion } from 'framer-motion'
import { fadeIn, slideUp } from '../utils/animations'
import AudioBars from './AudioBars'
import { useAudio } from '../contexts/AudioContext'
import { useState, useRef, useEffect } from 'react'

const AudioPlayer = ({ playlist = [], currentTrackIndex = 0, onTrackChange }) => {
  const { currentAudio, isPlaying: globalIsPlaying, playAudio } = useAudio()
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [trackIndex, setTrackIndex] = useState(currentTrackIndex)
  const audioRef = useRef(null)
  
  const currentTrack = playlist[trackIndex] || {}

  useEffect(() => {
    let interval
    
    if (globalIsPlaying && currentAudio === currentTrack?.src) {
      interval = setInterval(() => {
        // Get current audio from context
        const contextAudio = document.querySelector(`audio[src="${currentAudio}"]`)
        if (contextAudio) {
          setCurrentTime(contextAudio.currentTime || 0)
          setDuration(contextAudio.duration || 0)
        }
      }, 100)
    }

    return () => {
      if (interval) clearInterval(interval)
    }
  }, [globalIsPlaying, currentAudio, currentTrack?.src])

  const handleTogglePlay = () => {
    if (currentTrack?.src) {
      playAudio(currentTrack.src)
    }
  }

  const handleNext = () => {
    const nextIndex = (trackIndex + 1) % playlist.length
    setTrackIndex(nextIndex)
    onTrackChange?.(nextIndex)
  }

  const handlePrevious = () => {
    const prevIndex = trackIndex === 0 ? playlist.length - 1 : trackIndex - 1
    setTrackIndex(prevIndex)
    onTrackChange?.(prevIndex)
  }

  const handleSeek = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const percent = (e.clientX - rect.left) / rect.width
    const newTime = percent * duration
    
    // Find the current playing audio element
    const contextAudio = document.querySelector(`audio[src="${currentAudio}"]`)
    if (contextAudio && duration > 0) {
      contextAudio.currentTime = newTime
      setCurrentTime(newTime)
    }
  }

  const formatTime = (time) => {
    if (!time || isNaN(time)) return '0:00'
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds.toString().padStart(2, '0')}`
  }

  if (!currentTrack.src) {
    return (
      <div className="bg-gray-900 text-white rounded-lg p-6 text-center">
        <p>No track available</p>
      </div>
    )
  }

  return (
    <motion.section 
      className="bg-gray-900 text-white rounded-lg p-4 sm:p-6 w-full max-w-sm sm:max-w-md lg:max-w-lg mx-auto"
      variants={fadeIn}
      initial="hidden"
      animate="visible"
      role="region"
      aria-label="Audio Player"
    >
      <audio 
        ref={audioRef} 
        src={currentTrack.src}
        preload="metadata"
        aria-label={`Audio track: ${currentTrack.title}`}
      />
      
      {/* Cover Art & Track Info */}
      <motion.div 
        className="text-center mb-6"
        variants={slideUp}
      >
        <img 
          src={currentTrack.cover} 
          alt={`Album cover for ${currentTrack.title}`}
          className="w-24 h-24 sm:w-32 sm:h-32 rounded-lg mx-auto mb-4 object-cover"
        />
        <h2 className="text-lg sm:text-xl font-bold mb-1 truncate">{currentTrack.title}</h2>
        <p className="text-gray-400 text-sm sm:text-base truncate">{currentTrack.artist}</p>
        <p className="text-gray-500 text-xs sm:text-sm">{currentTrack.genre}</p>
      </motion.div>

      {/* Progress Bar */}
      <div className="mb-6">
        <div 
          className="w-full bg-gray-700 rounded-full h-2 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500"
          onClick={handleSeek}
          role="slider"
          aria-label="Seek audio position"
          aria-valuemin="0"
          aria-valuemax={duration}
          aria-valuenow={currentTime}
          tabIndex="0"
          onKeyDown={(e) => {
            if (e.key === 'ArrowLeft') handleSeek({ currentTarget: e.currentTarget, clientX: e.currentTarget.getBoundingClientRect().left + (currentTime / duration) * e.currentTarget.offsetWidth - 10 })
            if (e.key === 'ArrowRight') handleSeek({ currentTarget: e.currentTarget, clientX: e.currentTarget.getBoundingClientRect().left + (currentTime / duration) * e.currentTarget.offsetWidth + 10 })
          }}
        >
          <div 
            className="bg-blue-500 h-2 rounded-full transition-all duration-100"
            style={{ width: `${duration ? (currentTime / duration) * 100 : 0}%` }}
          />
        </div>
        <div className="flex justify-between text-xs sm:text-sm text-gray-400 mt-2">
          <span aria-label={`Current time: ${formatTime(currentTime)}`}>{formatTime(currentTime)}</span>
          <span aria-label={`Total duration: ${formatTime(duration)}`}>{formatTime(duration)}</span>
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-center space-x-4 sm:space-x-6" role="group" aria-label="Audio controls">
        <button 
          onClick={handlePrevious}
          className="text-xl sm:text-2xl hover:text-blue-400 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded p-2"
          aria-label="Previous track"
        >
          ⏮️
        </button>
        
        <button 
          onClick={handleTogglePlay}
          className="w-12 h-12 sm:w-14 sm:h-14 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
          aria-label={globalIsPlaying && currentAudio === currentTrack.src ? 'Pause' : 'Play'}
        >
          {currentAudio === currentTrack.src && globalIsPlaying ? (
            <AudioBars isPlaying={true} barCount={3} />
          ) : (
            <span className="text-lg sm:text-xl" aria-hidden="true">▶️</span>
          )}
        </button>
        
        <button 
          onClick={handleNext}
          className="text-xl sm:text-2xl hover:text-blue-400 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded p-2"
          aria-label="Next track"
        >
          ⏭️
        </button>
      </div>
    </motion.section>
  )
}

export default AudioPlayer
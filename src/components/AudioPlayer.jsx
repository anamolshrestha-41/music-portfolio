import { motion } from 'framer-motion'
import { fadeIn, slideUp } from '../utils/animations'
import AudioBars from './AudioBars'
import { useAudio } from '../contexts/AudioContext'
import useAudioPlayer from '../hooks/useAudioPlayer'

const AudioPlayer = ({ playlist, currentTrackIndex = 0, onTrackChange, autoPlay = false }) => {
  const { currentAudio, isPlaying: globalIsPlaying, playAudio } = useAudio()
  const {
    audioRef,
    currentTrack,
    currentTrackIndex: trackIndex,
    isPlaying,
    currentTime,
    duration,
    togglePlay,
    nextTrack,
    previousTrack,
    seekTo
  } = useAudioPlayer(playlist, currentTrackIndex, autoPlay)

  const handleTogglePlay = () => {
    if (currentTrack?.src) {
      playAudio(currentTrack.src)
    }
  }

  const handleNext = () => {
    nextTrack()
    onTrackChange?.(trackIndex + 1)
  }

  const handlePrevious = () => {
    previousTrack()
    onTrackChange?.(trackIndex - 1)
  }

  const handleSeek = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const percent = (e.clientX - rect.left) / rect.width
    seekTo(percent * duration)
  }

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds.toString().padStart(2, '0')}`
  }

  return (
    <motion.div 
      className="bg-gray-900 text-white rounded-lg p-4 sm:p-6 w-full max-w-sm sm:max-w-md lg:max-w-lg mx-auto"
      variants={fadeIn}
      initial="hidden"
      animate="visible"
    >
      <audio 
        ref={audioRef} 
        src={currentTrack?.src}
        onLoadedMetadata={() => console.log('Audio loaded:', currentTrack?.title)}
        onError={(e) => {
          console.error('Audio error for:', currentTrack?.title, e)
          console.log('Trying to load:', currentTrack?.src)
        }}
        crossOrigin="anonymous"
      />
      
      {/* Cover Art & Track Info */}
      <motion.div 
        className="text-center mb-6"
        variants={slideUp}
      >
        <img 
          src={currentTrack?.cover} 
          alt={currentTrack?.title}
          className="w-24 h-24 sm:w-32 sm:h-32 rounded-lg mx-auto mb-4 object-cover"
        />
        <h3 className="text-lg sm:text-xl font-bold mb-1 truncate">{currentTrack?.title}</h3>
        <p className="text-gray-400 text-sm sm:text-base truncate">{currentTrack?.artist}</p>
        <p className="text-gray-500 text-xs sm:text-sm">{currentTrack?.genre}</p>
      </motion.div>

      {/* Progress Bar */}
      <div className="mb-6">
        <div 
          className="w-full bg-gray-700 rounded-full h-2 cursor-pointer"
          onClick={handleSeek}
        >
          <div 
            className="bg-blue-500 h-2 rounded-full transition-all duration-100"
            style={{ width: `${duration ? (currentTime / duration) * 100 : 0}%` }}
          />
        </div>
        <div className="flex justify-between text-xs sm:text-sm text-gray-400 mt-2">
          <span>{formatTime(currentTime)}</span>
          <span>{formatTime(duration)}</span>
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-center space-x-4 sm:space-x-6">
        <button 
          onClick={handlePrevious}
          className="text-xl sm:text-2xl hover:text-blue-400 transition-colors"
        >
          ⏮️
        </button>
        
        <button 
          onClick={handleTogglePlay}
          className="w-12 h-12 sm:w-14 sm:h-14 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
        >
          {currentAudio === currentTrack?.src && globalIsPlaying ? (
            <AudioBars isPlaying={true} barCount={3} />
          ) : (
            <span className="text-lg sm:text-xl">▶️</span>
          )}
        </button>
        
        <button 
          onClick={handleNext}
          className="text-xl sm:text-2xl hover:text-blue-400 transition-colors"
        >
          ⏭️
        </button>
      </div>
    </motion.div>
  )
}

export default AudioPlayer
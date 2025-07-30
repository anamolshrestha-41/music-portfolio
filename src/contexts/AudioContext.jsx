import { createContext, useContext, useState, useRef } from 'react'

const AudioContext = createContext()

export const useAudio = () => {
  const context = useContext(AudioContext)
  if (!context) {
    throw new Error('useAudio must be used within AudioProvider')
  }
  return context
}

export const AudioProvider = ({ children }) => {
  const [currentAudio, setCurrentAudio] = useState(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef(null)

  const playAudio = (src) => {
    // If same audio, toggle play/pause
    if (currentAudio === src && audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
        setIsPlaying(false)
      } else {
        audioRef.current.play().catch(e => console.error('Audio play failed:', e))
        setIsPlaying(true)
      }
      return
    }

    // Stop current audio if playing different one
    if (audioRef.current) {
      audioRef.current.pause()
      audioRef.current = null
    }

    // Create and play new audio
    const audio = new Audio(src)
    audioRef.current = audio
    setCurrentAudio(src)
    setIsPlaying(true)
    
    audio.play().catch(e => console.error('Audio play failed:', e))
    
    // Clean up when audio ends
    audio.onended = () => {
      setCurrentAudio(null)
      setIsPlaying(false)
      audioRef.current = null
    }
  }

  return (
    <AudioContext.Provider value={{ currentAudio, isPlaying, playAudio }}>
      {children}
    </AudioContext.Provider>
  )
}
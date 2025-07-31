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
    try {
      // If same audio, toggle play/pause
      if (currentAudio === src && audioRef.current) {
        if (isPlaying) {
          audioRef.current.pause()
          setIsPlaying(false)
        } else {
          audioRef.current.play().then(() => {
            setIsPlaying(true)
          }).catch(e => {
            console.error('Audio play failed:', e)
            setIsPlaying(false)
          })
        }
        return
      }

      // Stop current audio if playing different one
      if (audioRef.current) {
        audioRef.current.pause()
        audioRef.current.currentTime = 0
      }

      // Create and play new audio
      const audio = new Audio(src)
      audio.volume = 0.7
      
      audioRef.current = audio
      setCurrentAudio(src)
      
      // Play audio
      audio.play().then(() => {
        setIsPlaying(true)
      }).catch(e => {
        console.error('Audio play failed:', e)
        setIsPlaying(false)
        setCurrentAudio(null)
      })
      
      // Clean up when audio ends
      audio.onended = () => {
        setCurrentAudio(null)
        setIsPlaying(false)
      }
      
      audio.onerror = (e) => {
        console.error('Audio error:', e)
        setIsPlaying(false)
        setCurrentAudio(null)
      }
      
    } catch (error) {
      console.error('Audio setup failed:', error)
      setIsPlaying(false)
      setCurrentAudio(null)
    }
  }

  return (
    <AudioContext.Provider value={{ currentAudio, isPlaying, playAudio }}>
      {children}
    </AudioContext.Provider>
  )
}
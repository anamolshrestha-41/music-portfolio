import { useState, useRef, useEffect } from 'react'

const useAudioPlayer = (playlist, initialIndex = 0, autoPlay = false) => {
  const [currentTrackIndex, setCurrentTrackIndex] = useState(initialIndex)
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const audioRef = useRef(null)

  const currentTrack = playlist[currentTrackIndex]

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    const updateTime = () => setCurrentTime(audio.currentTime)
    const updateDuration = () => setDuration(audio.duration)
    const handleEnded = () => {
      setIsPlaying(false)
      nextTrack()
    }

    audio.addEventListener('timeupdate', updateTime)
    audio.addEventListener('loadedmetadata', updateDuration)
    audio.addEventListener('ended', handleEnded)

    return () => {
      audio.removeEventListener('timeupdate', updateTime)
      audio.removeEventListener('loadedmetadata', updateDuration)
      audio.removeEventListener('ended', handleEnded)
    }
  }, [currentTrackIndex])

  useEffect(() => {
    if (autoPlay && currentTrack) {
      play()
    }
  }, [currentTrackIndex, autoPlay])

  const play = () => {
    const audio = audioRef.current
    if (audio) {
      audio.play()
      setIsPlaying(true)
    }
  }

  const pause = () => {
    const audio = audioRef.current
    if (audio) {
      audio.pause()
      setIsPlaying(false)
    }
  }

  const togglePlay = () => {
    isPlaying ? pause() : play()
  }

  const nextTrack = () => {
    const nextIndex = (currentTrackIndex + 1) % playlist.length
    setCurrentTrackIndex(nextIndex)
    setIsPlaying(false)
  }

  const previousTrack = () => {
    const prevIndex = currentTrackIndex === 0 ? playlist.length - 1 : currentTrackIndex - 1
    setCurrentTrackIndex(prevIndex)
    setIsPlaying(false)
  }

  const seekTo = (time) => {
    const audio = audioRef.current
    if (audio) {
      audio.currentTime = time
    }
  }

  const setTrack = (index) => {
    if (index >= 0 && index < playlist.length) {
      setCurrentTrackIndex(index)
      setIsPlaying(false)
    }
  }

  return {
    audioRef,
    currentTrack,
    currentTrackIndex,
    isPlaying,
    currentTime,
    duration,
    play,
    pause,
    togglePlay,
    nextTrack,
    previousTrack,
    seekTo,
    setTrack
  }
}

export default useAudioPlayer
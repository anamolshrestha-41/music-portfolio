import { renderHook, act } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import useAudioPlayer from '../hooks/useAudioPlayer'

const mockPlaylist = [
  { id: 1, title: 'Test Song 1', src: '/test1.mp3' },
  { id: 2, title: 'Test Song 2', src: '/test2.mp3' },
  { id: 3, title: 'Test Song 3', src: '/test3.mp3' }
]

describe('useAudioPlayer', () => {
  it('initializes with correct default values', () => {
    const { result } = renderHook(() => useAudioPlayer(mockPlaylist, 0))
    
    expect(result.current.currentTrack).toEqual(mockPlaylist[0])
    expect(result.current.currentTrackIndex).toBe(0)
    expect(result.current.isPlaying).toBe(false)
  })

  it('switches to next track correctly', () => {
    const { result } = renderHook(() => useAudioPlayer(mockPlaylist, 0))
    
    act(() => {
      result.current.nextTrack()
    })
    
    expect(result.current.currentTrackIndex).toBe(1)
    expect(result.current.currentTrack).toEqual(mockPlaylist[1])
  })

  it('switches to previous track correctly', () => {
    const { result } = renderHook(() => useAudioPlayer(mockPlaylist, 1))
    
    act(() => {
      result.current.previousTrack()
    })
    
    expect(result.current.currentTrackIndex).toBe(0)
    expect(result.current.currentTrack).toEqual(mockPlaylist[0])
  })

  it('loops to first track when next is called on last track', () => {
    const { result } = renderHook(() => useAudioPlayer(mockPlaylist, 2))
    
    act(() => {
      result.current.nextTrack()
    })
    
    expect(result.current.currentTrackIndex).toBe(0)
    expect(result.current.currentTrack).toEqual(mockPlaylist[0])
  })

  it('loops to last track when previous is called on first track', () => {
    const { result } = renderHook(() => useAudioPlayer(mockPlaylist, 0))
    
    act(() => {
      result.current.previousTrack()
    })
    
    expect(result.current.currentTrackIndex).toBe(2)
    expect(result.current.currentTrack).toEqual(mockPlaylist[2])
  })
})
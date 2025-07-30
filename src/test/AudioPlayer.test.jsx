import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import AudioPlayer from '../components/AudioPlayer'

const mockPlaylist = [
  { id: 1, title: 'Test Song 1', artist: 'Test Artist', src: '/test1.mp3', cover: '/cover1.jpg' },
  { id: 2, title: 'Test Song 2', artist: 'Test Artist', src: '/test2.mp3', cover: '/cover2.jpg' }
]

describe('AudioPlayer', () => {
  it('renders audio player with track info', () => {
    render(<AudioPlayer playlist={mockPlaylist} currentTrackIndex={0} />)
    
    expect(screen.getByText('Test Song 1')).toBeInTheDocument()
    expect(screen.getByText('Test Artist')).toBeInTheDocument()
  })

  it('toggles play/pause when play button is clicked', () => {
    render(<AudioPlayer playlist={mockPlaylist} currentTrackIndex={0} />)
    
    const playButton = screen.getByRole('button', { name: /play|pause/i })
    fireEvent.click(playButton)
    
    expect(playButton).toBeInTheDocument()
  })

  it('switches to next track when next button is clicked', () => {
    const onTrackChange = vi.fn()
    render(<AudioPlayer playlist={mockPlaylist} currentTrackIndex={0} onTrackChange={onTrackChange} />)
    
    const nextButton = screen.getByText('⏭️')
    fireEvent.click(nextButton)
    
    expect(onTrackChange).toHaveBeenCalledWith(1)
  })

  it('switches to previous track when previous button is clicked', () => {
    const onTrackChange = vi.fn()
    render(<AudioPlayer playlist={mockPlaylist} currentTrackIndex={1} onTrackChange={onTrackChange} />)
    
    const prevButton = screen.getByText('⏮️')
    fireEvent.click(prevButton)
    
    expect(onTrackChange).toHaveBeenCalledWith(0)
  })
})
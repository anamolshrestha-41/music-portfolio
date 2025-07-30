import '@testing-library/jest-dom'
import { vi } from 'vitest'

// Mock HTMLMediaElement
Object.defineProperty(window.HTMLMediaElement.prototype, 'play', {
  writable: true,
  value: vi.fn().mockImplementation(() => Promise.resolve()),
})

Object.defineProperty(window.HTMLMediaElement.prototype, 'pause', {
  writable: true,
  value: vi.fn(),
})

Object.defineProperty(window.HTMLMediaElement.prototype, 'load', {
  writable: true,
  value: vi.fn(),
})

// Mock audio properties
Object.defineProperty(window.HTMLMediaElement.prototype, 'duration', {
  writable: true,
  value: 180,
})

Object.defineProperty(window.HTMLMediaElement.prototype, 'currentTime', {
  writable: true,
  value: 0,
})
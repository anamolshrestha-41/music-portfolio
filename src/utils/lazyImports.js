import { lazy } from 'react'

// Centralized lazy imports for better organization
export const LazyAudioPlayer = lazy(() => import('../components/AudioPlayer'))
export const LazyVoiceSampleGrid = lazy(() => import('../components/VoiceSampleGrid'))
export const LazyTrackShowcase = lazy(() => import('../components/TrackShowcase'))
export const LazyContactForm = lazy(() => import('../components/ContactForm'))
export const LazyAnimatedTitle = lazy(() => import('../components/AnimatedTitle'))

// Page lazy imports
export const LazyHome = lazy(() => import('../pages/Home'))
export const LazyAbout = lazy(() => import('../pages/About'))
export const LazyPortfolio = lazy(() => import('../pages/Portfolio'))
export const LazyContact = lazy(() => import('../pages/Contact'))
import React from 'react'
import ReactDOM from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import App from './App.jsx'
import { ThemeProvider } from './contexts/ThemeContext'
import { AudioProvider } from './contexts/AudioContext'
import './styles/index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <AudioProvider>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </AudioProvider>
    </HelmetProvider>
  </React.StrictMode>,
)
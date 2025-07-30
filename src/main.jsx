import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ThemeProvider } from './contexts/ThemeContext'
import { AudioProvider } from './contexts/AudioContext'
import './styles/index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AudioProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </AudioProvider>
  </React.StrictMode>,
)
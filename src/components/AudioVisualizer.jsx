import { useEffect, useRef } from 'react'

const AudioVisualizer = ({ audioElement, isPlaying, type = 'bars' }) => {
  const canvasRef = useRef(null)
  const animationRef = useRef(null)
  const analyserRef = useRef(null)
  const dataArrayRef = useRef(null)

  useEffect(() => {
    if (!audioElement) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    
    // Set canvas size
    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight

    // Create audio context and analyser
    const audioContext = new (window.AudioContext || window.webkitAudioContext)()
    const analyser = audioContext.createAnalyser()
    const source = audioContext.createMediaElementSource(audioElement)
    
    source.connect(analyser)
    analyser.connect(audioContext.destination)
    
    analyser.fftSize = 256
    const bufferLength = analyser.frequencyBinCount
    const dataArray = new Uint8Array(bufferLength)
    
    analyserRef.current = analyser
    dataArrayRef.current = dataArray

    const draw = () => {
      if (!isPlaying) {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        return
      }

      analyser.getByteFrequencyData(dataArray)
      
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      if (type === 'bars') {
        drawBars(ctx, dataArray, canvas.width, canvas.height)
      } else {
        drawWave(ctx, dataArray, canvas.width, canvas.height)
      }
      
      animationRef.current = requestAnimationFrame(draw)
    }

    if (isPlaying) {
      draw()
    }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
      audioContext.close()
    }
  }, [audioElement, isPlaying, type])

  const drawBars = (ctx, dataArray, width, height) => {
    const barWidth = width / dataArray.length * 2
    let x = 0

    for (let i = 0; i < dataArray.length; i++) {
      const barHeight = (dataArray[i] / 255) * height * 0.8
      
      // Create rainbow effect
      const hue = (i / dataArray.length) * 360
      const saturation = 70 + (dataArray[i] / 255) * 30
      const lightness = 50 + (dataArray[i] / 255) * 30
      
      const gradient = ctx.createLinearGradient(0, height, 0, height - barHeight)
      gradient.addColorStop(0, `hsl(${hue}, ${saturation}%, ${lightness}%)`)
      gradient.addColorStop(0.5, `hsl(${(hue + 60) % 360}, ${saturation}%, ${lightness + 10}%)`)
      gradient.addColorStop(1, `hsl(${(hue + 120) % 360}, ${saturation}%, ${lightness + 20}%)`)
      
      ctx.fillStyle = gradient
      ctx.shadowColor = `hsl(${hue}, ${saturation}%, ${lightness}%)`
      ctx.shadowBlur = 10
      ctx.fillRect(x, height - barHeight, barWidth, barHeight)
      
      x += barWidth + 1
    }
  }

  const drawWave = (ctx, dataArray, width, height) => {
    ctx.lineWidth = 3
    
    // Create gradient for wave
    const gradient = ctx.createLinearGradient(0, 0, width, 0)
    gradient.addColorStop(0, 'rgb(255, 0, 128)')
    gradient.addColorStop(0.25, 'rgb(0, 255, 255)')
    gradient.addColorStop(0.5, 'rgb(255, 255, 0)')
    gradient.addColorStop(0.75, 'rgb(128, 0, 255)')
    gradient.addColorStop(1, 'rgb(0, 255, 128)')
    
    ctx.strokeStyle = gradient
    ctx.shadowColor = 'rgba(255, 255, 255, 0.5)'
    ctx.shadowBlur = 5
    ctx.beginPath()

    const sliceWidth = width / dataArray.length
    let x = 0

    for (let i = 0; i < dataArray.length; i++) {
      const v = dataArray[i] / 128.0
      const y = v * height / 2

      if (i === 0) {
        ctx.moveTo(x, y)
      } else {
        ctx.lineTo(x, y)
      }

      x += sliceWidth
    }

    ctx.stroke()
  }

  return (
    <canvas 
      ref={canvasRef}
      className="w-full h-16 bg-gray-800 rounded"
    />
  )
}

export default AudioVisualizer
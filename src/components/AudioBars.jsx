import { motion } from 'framer-motion'

const AudioBars = ({ isPlaying, barCount = 3 }) => {
  const colors = [
    'rgb(255, 0, 128)',   // Pink
    'rgb(0, 255, 255)',   // Cyan
    'rgb(255, 255, 0)',   // Yellow
    'rgb(128, 0, 255)',   // Purple
    'rgb(0, 255, 128)',   // Green
  ]

  return (
    <div className="flex items-center justify-center space-x-1">
      {Array.from({ length: barCount }).map((_, i) => (
        <motion.div
          key={i}
          className="w-1 rounded-full"
          style={{
            backgroundColor: colors[i % colors.length],
            boxShadow: isPlaying ? `0 0 10px ${colors[i % colors.length]}` : 'none'
          }}
          animate={isPlaying ? {
            height: [4, 16, 4],
            opacity: [0.7, 1, 0.7],
            boxShadow: [
              `0 0 5px ${colors[i % colors.length]}`,
              `0 0 20px ${colors[i % colors.length]}`,
              `0 0 5px ${colors[i % colors.length]}`
            ]
          } : {
            height: 4,
            opacity: 0.5,
            boxShadow: 'none'
          }}
          transition={{
            duration: 0.6,
            repeat: isPlaying ? Infinity : 0,
            delay: i * 0.1,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  )
}

export default AudioBars
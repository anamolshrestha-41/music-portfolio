import { motion } from 'framer-motion'

const AudioBars = ({ isPlaying, barCount = 5 }) => {
  return (
    <div className="flex items-center justify-center space-x-1">
      {Array.from({ length: barCount }).map((_, index) => (
        <motion.div
          key={index}
          className="w-1 bg-purple-500 rounded-full"
          animate={isPlaying ? {
            height: [4, 16, 8, 20, 12],
            opacity: [0.4, 1, 0.6, 1, 0.8]
          } : {
            height: 4,
            opacity: 0.4
          }}
          transition={{
            duration: 0.8,
            repeat: isPlaying ? Infinity : 0,
            delay: index * 0.1,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  )
}

export default AudioBars
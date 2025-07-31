import { motion } from 'framer-motion'

const HexGrid = () => {
  return (
    <div className="absolute inset-0 overflow-hidden opacity-10">
      <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.polygon
            key={i}
            points="50,1 93.3,25 93.3,75 50,99 6.7,75 6.7,25"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
            transform={`translate(${(i % 5) * 20}, ${Math.floor(i / 5) * 25}) scale(0.3)`}
            animate={{
              opacity: [0.1, 0.3, 0.1],
              scale: [0.3, 0.35, 0.3]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.2
            }}
          />
        ))}
      </svg>
    </div>
  )
}

export default HexGrid
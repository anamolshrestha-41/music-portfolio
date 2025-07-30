import { motion } from 'framer-motion'

const HexGrid = () => {
  const hexagons = Array.from({ length: 120 }, (_, i) => i)

  const getHexColor = (index) => {
    const col = index % 20
    if (col < 7) return 'hex-green'
    if (col < 14) return 'hex-gold'
    return 'hex-blue'
  }

  return (
    <div className="absolute inset-0 overflow-hidden opacity-30">
      <div className="hex-grid">
        {hexagons.map((_, index) => (
          <motion.div
            key={index}
            className={`hexagon ${getHexColor(index)}`}
            whileHover={{
              scale: 1.1,
              opacity: 1,
            }}
            transition={{
              duration: 0.3,
              ease: "easeOut"
            }}
          />
        ))}
      </div>
      
      <style jsx>{`
        .hex-grid {
          display: grid;
          grid-template-columns: repeat(20, 1fr);
          gap: 8px;
          padding: 20px;
          transform: rotate(0deg);
        }
        
        .hexagon {
          width: 30px;
          height: 26px;
          position: relative;
          margin: 13px 0;
          border-radius: 4px;
          transition: all 0.3s ease;
        }
        
        .hexagon:before,
        .hexagon:after {
          content: "";
          position: absolute;
          width: 0;
          border-left: 15px solid transparent;
          border-right: 15px solid transparent;
        }
        
        .hexagon:before {
          bottom: 100%;
          border-bottom: 8px solid;
        }
        
        .hexagon:after {
          top: 100%;
          border-top: 8px solid;
        }
        
        .hex-green {
          background: rgba(34, 197, 94, 0.2);
          border: 1px solid rgba(34, 197, 94, 0.4);
          box-shadow: 0 0 10px rgba(34, 197, 94, 0.3);
        }
        
        .hex-green:before,
        .hex-green:after {
          border-bottom-color: rgba(34, 197, 94, 0.2);
          border-top-color: rgba(34, 197, 94, 0.2);
        }
        
        .hex-green:hover {
          background: rgba(34, 197, 94, 0.4);
          box-shadow: 0 0 20px rgba(34, 197, 94, 0.6);
          animation: pulse-green 1.5s infinite;
        }
        
        .hex-gold {
          background: rgba(251, 191, 36, 0.2);
          border: 1px solid rgba(251, 191, 36, 0.4);
          box-shadow: 0 0 10px rgba(251, 191, 36, 0.3);
        }
        
        .hex-gold:before,
        .hex-gold:after {
          border-bottom-color: rgba(251, 191, 36, 0.2);
          border-top-color: rgba(251, 191, 36, 0.2);
        }
        
        .hex-gold:hover {
          background: rgba(251, 191, 36, 0.4);
          box-shadow: 0 0 20px rgba(251, 191, 36, 0.6);
          animation: pulse-gold 1.5s infinite;
        }
        
        .hex-blue {
          background: rgba(59, 130, 246, 0.2);
          border: 1px solid rgba(59, 130, 246, 0.4);
          box-shadow: 0 0 10px rgba(59, 130, 246, 0.3);
        }
        
        .hex-blue:before,
        .hex-blue:after {
          border-bottom-color: rgba(59, 130, 246, 0.2);
          border-top-color: rgba(59, 130, 246, 0.2);
        }
        
        .hex-blue:hover {
          background: rgba(59, 130, 246, 0.4);
          box-shadow: 0 0 20px rgba(59, 130, 246, 0.6);
          animation: pulse-blue 1.5s infinite;
        }
        
        @keyframes pulse-green {
          0%, 100% { box-shadow: 0 0 20px rgba(34, 197, 94, 0.6); }
          50% { box-shadow: 0 0 30px rgba(34, 197, 94, 0.8); }
        }
        
        @keyframes pulse-gold {
          0%, 100% { box-shadow: 0 0 20px rgba(251, 191, 36, 0.6); }
          50% { box-shadow: 0 0 30px rgba(251, 191, 36, 0.8); }
        }
        
        @keyframes pulse-blue {
          0%, 100% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.6); }
          50% { box-shadow: 0 0 30px rgba(59, 130, 246, 0.8); }
        }
      `}</style>
    </div>
  )
}

export default HexGrid
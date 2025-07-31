import { motion } from 'framer-motion'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import SEOHead from '../components/SEOHead'
import AnimatedTitle from '../components/AnimatedTitle'
import AudioPlayer from '../components/AudioPlayer'
import VoiceSampleGrid from '../components/VoiceSampleGrid'
import ContactForm from '../components/ContactForm'
import HexGrid from '../components/HexGrid'
import MoodRecommendation from '../components/MoodRecommendation'
import SocialMusicPlayer from '../components/SocialMusicPlayer'
import MonetizationBanner from '../components/MonetizationBanner'
import YouTubeChannels from '../components/YouTubeChannels'
import MusicQuiz from '../components/MusicQuiz'
import PlaylistBuilder from '../components/PlaylistBuilder'
import UserFavorites from '../components/UserFavorites'
import NewsletterSignup from '../components/NewsletterSignup'
import { trackData } from '../data/trackData'
import { voiceSamples } from '../data/voiceSamples'
import { socialTracks } from '../data/socialTracks'
import { fadeIn, slideUp, hoverScale, staggerContainer } from '../utils/animations'

const Home = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [selectedTrack, setSelectedTrack] = useState(0)

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    })
  }

  const scrollToMusic = () => {
    const musicSection = document.querySelector('#featured-track')
    musicSection?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen">
      <SEOHead />
      <div id="main-content" className="sr-only">Main content starts here</div>
      {/* Hero Section */}
      <motion.section 
        className="relative min-h-screen flex items-center justify-center bg-gray-900 overflow-hidden"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        onMouseMove={handleMouseMove}
      >
        <HexGrid />
        
        <div className="absolute inset-0 bg-black opacity-70"></div>
        <div className="relative z-10 text-center text-white px-4 py-8">
          <motion.div 
            className="flex items-center justify-center mb-6"
            variants={slideUp}
          >
            <motion.div 
              className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 rounded-full border-4 border-white flex items-center justify-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl relative overflow-hidden"
              animate={{
                boxShadow: [
                  '0 0 20px rgba(251, 191, 36, 0.5), 0 0 40px rgba(251, 191, 36, 0.3), 0 0 60px rgba(251, 191, 36, 0.1)',
                  '0 0 30px rgba(147, 51, 234, 0.5), 0 0 50px rgba(147, 51, 234, 0.3), 0 0 70px rgba(147, 51, 234, 0.1)',
                  '0 0 25px rgba(59, 130, 246, 0.5), 0 0 45px rgba(59, 130, 246, 0.3), 0 0 65px rgba(59, 130, 246, 0.1)',
                  '0 0 20px rgba(251, 191, 36, 0.5), 0 0 40px rgba(251, 191, 36, 0.3), 0 0 60px rgba(251, 191, 36, 0.1)'
                ]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              🎵
            </motion.div>
          </motion.div>
          <AnimatedTitle 
            text="Welcome to Anamol's Music World"
            effect="typewriter"
            className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl mb-4 sm:mb-6"
          />
          <motion.p 
            className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 max-w-2xl mx-auto"
            variants={slideUp}
          >
            Crafting melodies that touch the soul
          </motion.p>
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <motion.button 
              onClick={scrollToMusic}
              className="relative bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full text-base sm:text-lg font-semibold overflow-hidden group cursor-pointer"
              variants={slideUp}
              whileHover={{
                scale: 1.05,
                boxShadow: '0 0 30px rgba(147, 51, 234, 0.5)'
              }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">🎶 Explore My Music</span>
            </motion.button>
            
            <motion.div variants={slideUp}>
              <Link
                to="/licensing"
                className="bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-full text-base font-medium border border-white/20 hover:bg-white/20 transition-colors inline-block"
              >
                📄 License My Music
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Music Section */}
      <section className="py-16 bg-gray-100 dark:bg-gray-800" aria-labelledby="music-heading">
        <div className="container mx-auto px-4">
          <YouTubeChannels />
          <MonetizationBanner />
          
          <MoodRecommendation 
            tracks={trackData} 
            onTrackSelect={(track) => {
              const index = trackData.findIndex(t => t.id === track.id)
              setSelectedTrack(index)
            }}
          />
          
          <motion.div 
            id="featured-track"
            className="text-center mb-12"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 id="music-heading" className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              Featured Content
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Watch, listen, and support my music journey
            </p>
          </motion.div>
          
          <div className="flex justify-center">
            <AudioPlayer 
              playlist={trackData} 
              currentTrackIndex={selectedTrack}
              onTrackChange={setSelectedTrack}
            />
          </div>
        </div>
      </section>

      {/* Voice Samples Section */}
      <section className="py-16 bg-white dark:bg-gray-900" aria-labelledby="voice-samples-heading">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-12"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 id="voice-samples-heading" className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              Voice Samples
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Explore different vocal styles and techniques
            </p>
          </motion.div>
          
          <VoiceSampleGrid samples={voiceSamples} />
        </div>
      </section>

      {/* Interactive Features Section */}
      <section className="py-16 bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-12"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              Interactive Experience
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Engage with music in new ways - test your knowledge, build playlists, and save favorites
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <MusicQuiz />
            <UserFavorites tracks={trackData} voiceSamples={voiceSamples} />
          </div>
          
          <div className="mb-8">
            <PlaylistBuilder tracks={trackData} voiceSamples={voiceSamples} />
          </div>
          
          <NewsletterSignup />
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gray-100 dark:bg-gray-800" aria-labelledby="contact-heading">
        <div className="container mx-auto px-4 max-w-2xl">
          <motion.div 
            className="text-center mb-12"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 id="contact-heading" className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              Get In Touch
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Ready to collaborate or have questions? Let's connect!
            </p>
          </motion.div>
          
          <ContactForm />
        </div>
      </section>
    </div>
  )
}

export default Home
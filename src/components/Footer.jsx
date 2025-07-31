import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">Anamol's Music</h3>
            <p className="text-gray-400 text-sm">
              Professional musician crafting melodies that touch the soul.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <Link to="/" className="block text-gray-400 hover:text-white transition-colors">Home</Link>
              <Link to="/about" className="block text-gray-400 hover:text-white transition-colors">About</Link>
              <Link to="/portfolio" className="block text-gray-400 hover:text-white transition-colors">Portfolio</Link>
              <Link to="/licensing" className="block text-gray-400 hover:text-white transition-colors">Licensing</Link>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a href="https://www.youtube.com/@anamolshrestha0107" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-red-500 transition-colors" aria-label="YouTube Channel">📺</a>
              <a href="https://www.youtube.com/@anmolsth" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-red-500 transition-colors" aria-label="Second YouTube Channel">🎬</a>
              <a href="https://soundcloud.com/your-username" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-orange-500 transition-colors" aria-label="SoundCloud">🎵</a>
              <a href="mailto:your-email@example.com" className="text-gray-400 hover:text-blue-500 transition-colors" aria-label="Email">📧</a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; 2024 Anamol's Music. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
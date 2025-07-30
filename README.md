# 🎵 Anamol's Music Portfolio

<div align="center">

![Music Portfolio](https://img.shields.io/badge/Music-Portfolio-purple?style=for-the-badge&logo=music&logoColor=white)
![React](https://img.shields.io/badge/React-18.2.0-blue?style=for-the-badge&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5.4.0-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.0-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-11.5.0-0055FF?style=for-the-badge&logo=framer&logoColor=white)

**A stunning, interactive music portfolio showcasing professional audio work with cutting-edge animations and modern design.**

[🚀 Live Demo](https://music-portfolio-anamol.vercel.app) • [📖 Documentation](#features) • [🎨 Screenshots](#screenshots)

</div>

---

## ✨ Features

### 🎨 **Visual Excellence**
- **Hexagonal Grid Background** - Futuristic animated grid with color zones
- **Floating Particles** - Dynamic particle system for magical atmosphere
- **Mouse-Following Glow** - Interactive spotlight effect that follows cursor
- **Animated Sound Waves** - SVG waves at section transitions
- **Color-Changing Avatar** - Dynamic avatar with rotating animations

### 🎵 **Audio Experience**
- **Advanced Audio Player** - Full-featured player with progress bar and controls
- **Animated Audio Bars** - Visual feedback during playback
- **Voice Sample Grid** - Searchable and filterable voice samples
- **Track Showcase** - Categorized music tracks with album organization
- **Play/Pause States** - Smart audio management (only one plays at a time)

### 🔍 **Smart Filtering**
- **Search Functionality** - Search tracks by title, mood, or genre
- **Category Filters** - Filter by Original, Remix, Cover, etc.
- **Album Organization** - Browse by album collections
- **Mood-Based Filtering** - Find tracks by emotional tone

### 📱 **Modern UX/UI**
- **Responsive Design** - Perfect on all devices
- **Dark/Light Theme** - Toggle between themes
- **Smooth Animations** - Framer Motion powered transitions
- **Glassmorphism Effects** - Modern blur and transparency effects
- **Interactive Elements** - Hover effects and micro-interactions

---

## 🛠️ Tech Stack

| Technology | Purpose | Version |
|------------|---------|---------|
| **React** | Frontend Framework | 18.2.0 |
| **Vite** | Build Tool | 5.4.0 |
| **Tailwind CSS** | Styling | 3.4.0 |
| **Framer Motion** | Animations | 11.5.0 |
| **React Router** | Navigation | 6.26.0 |
| **Vercel** | Deployment | Latest |

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/anamolshrestha-41/music-portfolio.git

# Navigate to project directory
cd music-portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

### Build for Production

```bash
# Create production build
npm run build

# Preview production build
npm run preview
```

---

## 📁 Project Structure

```
music-portfolio/
├── public/
│   ├── audio/              # Audio files
│   ├── AnamolResume.docx   # Resume file
│   └── README-Audio.md     # Audio setup guide
├── src/
│   ├── components/         # React components
│   │   ├── AudioPlayer.jsx
│   │   ├── AudioBars.jsx
│   │   ├── HexGrid.jsx
│   │   └── ...
│   ├── contexts/          # React contexts
│   │   ├── AudioContext.jsx
│   │   └── ThemeContext.jsx
│   ├── data/              # Data files
│   │   ├── trackData.js
│   │   └── voiceSamples.js
│   ├── hooks/             # Custom hooks
│   ├── pages/             # Page components
│   ├── styles/            # CSS files
│   └── utils/             # Utility functions
├── vercel.json            # Vercel configuration
└── package.json
```

---

## 🎨 Screenshots

<div align="center">

### Hero Section with Hexagonal Grid
![Hero Section](https://via.placeholder.com/800x400/1a1a2e/ffffff?text=Hero+Section+with+Animated+Grid)

### Audio Player Interface
![Audio Player](https://via.placeholder.com/800x300/16213e/ffffff?text=Advanced+Audio+Player)

### Voice Samples Grid
![Voice Samples](https://via.placeholder.com/800x400/0f3460/ffffff?text=Interactive+Voice+Samples)

</div>

---

## 🎵 Adding Your Music

### 1. Add Audio Files
Place your audio files in `/public/audio/`:
```
public/audio/
├── your-track-1.mp3
├── your-track-2.mp3
└── voice-sample-1.mp3
```

### 2. Update Track Data
Edit `src/data/trackData.js`:
```javascript
{
  id: 1,
  title: "Your Song Title",
  artist: "Your Name",
  src: "/audio/your-track-1.mp3",
  genre: "Your Genre",
  album: "Your Album",
  category: "Original"
}
```

### 3. Update Voice Samples
Edit `src/data/voiceSamples.js`:
```javascript
{
  id: 1,
  title: "Your Voice Sample",
  genre: "Opera",
  mood: "Dramatic",
  audioSrc: "/audio/voice-sample-1.mp3"
}
```

---

## 🎨 Customization

### Colors
Update colors in `tailwind.config.js`:
```javascript
theme: {
  extend: {
    colors: {
      primary: '#your-color',
      secondary: '#your-color'
    }
  }
}
```

### Animations
Modify animations in `src/utils/animations.js`:
```javascript
export const customAnimation = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
}
```

---

## 🚀 Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Connect to Vercel
3. Deploy automatically

### Manual Deployment
```bash
npm run build
# Upload dist/ folder to your hosting provider
```

---

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Author

**Anamol Shrestha**
- GitHub: [@anamolshrestha-41](https://github.com/anamolshrestha-41)
- Portfolio: [music-portfolio-anamol.vercel.app](https://music-portfolio-anamol.vercel.app)

---

## 🙏 Acknowledgments

- **Framer Motion** for amazing animations
- **Tailwind CSS** for rapid styling
- **React** for the solid foundation
- **Vercel** for seamless deployment

---

<div align="center">

**⭐ Star this repo if you found it helpful!**

Made with ❤️ and 🎵 by Anamol Shrestha

</div>
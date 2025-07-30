# Your Audio Files Setup

This is YOUR music portfolio. To use your own audio files:

## 1. Add Your Audio Files
Place your audio files in `/public/audio/` directory:

### Tracks (for main player):
- `your-track-1.mp3`
- `your-track-2.mp3` 
- `your-track-3.mp3`
- etc.

### Voice Samples:
- `your-voice-1.mp3`
- `your-voice-2.mp3`
- `your-voice-3.mp3`
- etc.

## 2. Update Data Files
Edit these files with your audio information:

### `/src/data/trackData.js`
```javascript
{
  id: 1,
  title: "Your Song Title",
  artist: "Anamol",
  src: "/audio/your-track-1.mp3",
  genre: "Your Genre",
  duration: "3:45",
  album: "Your Album",
  category: "Original"
}
```

### `/src/data/voiceSamples.js`
```javascript
{
  id: 1,
  title: "Your Voice Sample Title",
  genre: "Your Genre",
  mood: "Your Mood",
  audioSrc: "/audio/your-voice-1.mp3"
}
```

## 3. Provide Your Audio Details
Send me:
- Audio file names
- Track titles
- Genres/moods
- Album names
- Any other details

I'll update the data files accordingly!
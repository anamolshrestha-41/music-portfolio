const OPENAI_API_KEY = import.meta.env.VITE_OPENAI_API_KEY

export const generateVoiceDescription = async (audioTitle, genre, mood) => {
  if (!OPENAI_API_KEY || OPENAI_API_KEY === '') {
    return generateFallbackDescription(genre, mood)
  }

  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [{
          role: 'user',
          content: `Generate a brief voice description (2-3 descriptive words) for a ${genre} vocal performance titled "${audioTitle}" with a ${mood} mood. Focus on vocal qualities like tone, texture, and energy. Return only the descriptive words separated by commas.`
        }],
        max_tokens: 20,
        temperature: 0.7
      })
    })

    const data = await response.json()
    return data.choices[0].message.content.trim()
  } catch (error) {
    console.error('AI description generation failed:', error)
    return generateFallbackDescription(genre, mood)
  }
}

const generateFallbackDescription = (genre, mood) => {
  const descriptions = {
    'Opera': ['powerful', 'resonant', 'dramatic'],
    'Jazz': ['smooth', 'sultry', 'improvisational'],
    'Pop': ['bright', 'melodic', 'accessible'],
    'Folk': ['warm', 'natural', 'storytelling'],
    'R&B': ['soulful', 'rich', 'expressive'],
    'Theatre': ['theatrical', 'dynamic', 'articulate']
  }

  const moodAdjectives = {
    'Dramatic': 'intense',
    'Smooth': 'silky',
    'Emotional': 'heartfelt',
    'Peaceful': 'gentle',
    'Energetic': 'vibrant',
    'Uplifting': 'inspiring'
  }

  const base = descriptions[genre] || ['melodic', 'expressive']
  const moodWord = moodAdjectives[mood] || 'captivating'
  
  return [...base.slice(0, 2), moodWord].join(', ')
}
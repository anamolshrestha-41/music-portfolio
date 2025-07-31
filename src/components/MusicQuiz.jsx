import { useState } from 'react'
import { motion } from 'framer-motion'
import { slideUp } from '../utils/animations'

const MusicQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [showResult, setShowResult] = useState(false)
  const [selectedAnswer, setSelectedAnswer] = useState(null)

  const questions = [
    {
      question: "Which genre combines electronic beats with organic instruments?",
      options: ["Ambient", "Electronic", "Experimental", "Classical"],
      correct: 2
    },
    {
      question: "What makes a voice sample 'dramatic'?",
      options: ["High pitch", "Emotional intensity", "Fast tempo", "Loud volume"],
      correct: 1
    },
    {
      question: "Which license allows commercial use?",
      options: ["Free", "Commercial", "Both", "None"],
      correct: 1
    }
  ]

  const handleAnswer = (answerIndex) => {
    setSelectedAnswer(answerIndex)
    if (answerIndex === questions[currentQuestion].correct) {
      setScore(score + 1)
    }
    
    setTimeout(() => {
      if (currentQuestion + 1 < questions.length) {
        setCurrentQuestion(currentQuestion + 1)
        setSelectedAnswer(null)
      } else {
        setShowResult(true)
      }
    }, 1000)
  }

  const resetQuiz = () => {
    setCurrentQuestion(0)
    setScore(0)
    setShowResult(false)
    setSelectedAnswer(null)
  }

  if (showResult) {
    return (
      <motion.div 
        className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-6 rounded-lg text-center"
        variants={slideUp}
      >
        <h3 className="text-2xl font-bold mb-4">🎉 Quiz Complete!</h3>
        <p className="text-xl mb-4">Your Score: {score}/{questions.length}</p>
        <p className="mb-4">
          {score === questions.length ? "Perfect! You're a music expert! 🎵" : 
           score >= 2 ? "Great job! You know your music! 🎶" : 
           "Keep exploring to learn more! 🎼"}
        </p>
        <button 
          onClick={resetQuiz}
          className="bg-white text-purple-600 px-6 py-2 rounded-full font-semibold hover:bg-gray-100"
        >
          Try Again
        </button>
      </motion.div>
    )
  }

  return (
    <motion.div 
      className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
      variants={slideUp}
    >
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white">🧠 Music Knowledge Quiz</h3>
        <span className="text-sm text-gray-600 dark:text-gray-400">
          {currentQuestion + 1}/{questions.length}
        </span>
      </div>
      
      <p className="text-gray-700 dark:text-gray-300 mb-6">
        {questions[currentQuestion].question}
      </p>
      
      <div className="space-y-3">
        {questions[currentQuestion].options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleAnswer(index)}
            disabled={selectedAnswer !== null}
            className={`w-full p-3 text-left rounded-lg border transition-colors ${
              selectedAnswer === index
                ? index === questions[currentQuestion].correct
                  ? 'bg-green-100 border-green-500 text-green-800'
                  : 'bg-red-100 border-red-500 text-red-800'
                : 'bg-gray-50 dark:bg-gray-700 border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-600 text-gray-900 dark:text-white'
            }`}
          >
            {option}
          </button>
        ))}
      </div>
    </motion.div>
  )
}

export default MusicQuiz
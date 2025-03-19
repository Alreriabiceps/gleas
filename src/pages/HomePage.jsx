import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router'
import ProfileHeader from '../components/ProfileHeader'
import BackgroundImage from '../assets/greenbg.jpg'

const HomePage = () => {
  const navigate = useNavigate()
  const [stars, setStars] = useState([]) // State to hold star positions
  const [buttonPosition, setButtonPosition] = useState({ top: '50%', left: '50%' }) // State for button position
  const [isCorrect, setIsCorrect] = useState(false) // Track if the answer is correct
  const [isAnimating, setIsAnimating] = useState(false) // Track if funky animation is active

  useEffect(() => {
    // Generate initial star positions
    const initialStars = Array.from({ length: 100 }, () => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
    }))
    setStars(initialStars)
  }, [])

  const handleMouseMove = (e) => {
    // Update star positions to move away from the cursor
    const updatedStars = stars.map((star) => {
      const distanceX = Math.abs(e.clientX - (window.innerWidth * star.left) / 100)
      const distanceY = Math.abs(e.clientY - (window.innerHeight * star.top) / 100)

      if (distanceX < 100 && distanceY < 100) {
        // Move the star away from the cursor
        return {
          left: Math.random() * 100,
          top: Math.random() * 100,
        }
      }
      return star
    })
    setStars(updatedStars)

    // Move the button away if the answer is not correct
    if (!isCorrect) {
      const button = document.getElementById('start-button')
      const rect = button.getBoundingClientRect()

      const distanceX = Math.abs(e.clientX - (rect.left + rect.width / 2))
      const distanceY = Math.abs(e.clientY - (rect.top + rect.height / 2))

      if (distanceX < 100 && distanceY < 100) {
        const newTop = Math.random() * 80 + 10 // Random position between 10% and 90% vertically
        const newLeft = Math.random() * 80 + 10 // Random position between 10% and 90% horizontally
        setButtonPosition({ top: `${newTop}%`, left: `${newLeft}%` })
      }
    }
  }

  const handleStartClick = () => {
    if (isCorrect) {
      setIsAnimating(true) // Start the funky animation
      setTimeout(() => {
        navigate('/start') // Navigate to the next page after the animation
      }, 3000) // Match the duration of the animation
    } else {
      alert('Answer the question correctly to proceed!')
    }
  }

  const handleAnswer = (answer) => {
    if (answer === 'correct') {
      setIsCorrect(true) // Stop the button from moving
    } else {
      alert('Wrong answer! Try again.')
    }
  }

  return (
    <div
      className={`min-h-screen bg-cover bg-center flex flex-col items-center justify-center text-white relative overflow-hidden ${
        isAnimating ? 'funky-animation' : ''
      }`}
      style={{ backgroundImage: `url(${BackgroundImage})` }}
      onMouseMove={handleMouseMove}
    >
      <div className="absolute top-4 left-4">
        <ProfileHeader />
      </div>
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-8 animate-bounce">ARE YOU READY?</h1>
        <button
          id="start-button"
          onClick={handleStartClick}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded text-2xl transition-transform transform hover:scale-110 absolute"
          style={{
            top: buttonPosition.top,
            left: buttonPosition.left,
            transform: 'translate(-50%, -50%)',
          }}
        >
          Start
        </button>
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Answer this question to stop the button:</h2>
          <p className="mb-4">What is 2 + 2?</p>
          <div className="flex space-x-4">
            <button
              onClick={() => handleAnswer('wrong')}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            >
              3
            </button>
            <button
              onClick={() => handleAnswer('correct')}
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            >
              4
            </button>
            <button
              onClick={() => handleAnswer('wrong')}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            >
              5
            </button>
          </div>
        </div>
      </div>

      {/* Star Particles */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        {stars.map((star, index) => (
          <div
            key={index}
            className="star-animation"
            style={{
              left: `${star.left}%`,
              top: `${star.top}%`,
            }}
          ></div>
        ))}
      </div>

      <style>
        {`
          /* Star Animation */
          .star-animation {
            position: absolute;
            width: 10px;
            height: 10px;
            background: radial-gradient(circle, white, transparent);
            border-radius: 50%;
            transition: all 0.5s ease; /* Smooth movement */
          }

          /* Funky Animation */
          @keyframes funky {
            0% {
              transform: scale(1) rotate(0deg);
              opacity: 1;
            }
            25% {
              transform: scale(1.2) rotate(15deg);
              opacity: 0.8;
            }
            50% {
              transform: scale(0.8) rotate(-15deg);
              opacity: 0.6;
            }
            75% {
              transform: scale(1.5) rotate(30deg);
              opacity: 0.9;
            }
            100% {
              transform: scale(1) rotate(0deg);
              opacity: 1;
            }
          }
          .funky-animation {
            animation: funky 3s infinite ease-in-out;
          }
        `}
      </style>
    </div>
  )
}

export default HomePage
import React from 'react'
import { useNavigate } from 'react-router-dom'
import profileImage from '../assets/56.jpg'

const HomePage = () => {
  const navigate = useNavigate()

  const handleStartClick = () => {
    navigate('/start')
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <div className="absolute top-4 left-4 flex items-center space-x-4">
        <img
          src={profileImage}
          alt="Profile"
          className="w-20 h-20 rounded-full"
        />
        <div>
          <h2 className="text-lg font-bold">AlreriaBiceps</h2>
          <p className="text-sm text-gray-600">Immortal</p>
        </div>
      </div>
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-8">ARE YOU READY?</h1>
        <button
          onClick={handleStartClick}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded text-2xl"
        >
          Start
        </button>
      </div>
    </div>
  )
}

export default HomePage
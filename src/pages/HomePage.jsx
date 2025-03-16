import React from 'react'
import { useNavigate } from 'react-router';
import ProfileHeader from '../components/ProfileHeader';


const HomePage = () => {
  const navigate = useNavigate()

  const handleStartClick = () => {
    navigate('/start')
  }
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center text-white">
      <div className='absolute top-4 left-4'>
      <ProfileHeader />
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
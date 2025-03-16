import React from 'react'
import { useNavigate } from 'react-router'
import ProfileHeader from '../components/ProfileHeader'
import profileImage from '../assets/56.jpg'

const Profile = () => {
  const navigate = useNavigate()

  const handleBackClick = () => {
    navigate('/home')
  }

  return (
    <div className="p-4 bg-gray-900 min-h-screen text-white">
      <div className='relative'>
      <ProfileHeader 
        profileImage={profileImage} 
        profileName="AlreriaBiceps" 
        profileStatus="Immortal" 
      />
      </div>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <section className="bg-gray-800 p-4 rounded shadow">
          <h3 className="text-xl font-bold">MMR Statistics</h3>
          <p>Overall MMR: 2500</p>
          <p>Solo MMR: 2400</p>
          <p>Party MMR: 2600</p>
        </section>
        <section className="bg-gray-800 p-4 rounded shadow">
          <h3 className="text-xl font-bold">Medals and Achievements</h3>
          <p>Earned badges and milestone rewards.</p>
        </section>
        <section className="bg-gray-800 p-4 rounded shadow">
          <h3 className="text-xl font-bold">Duel Record</h3>
          <p>Wins: 50</p>
          <p>Losses: 10</p>
          <p>Streaks: 5</p>
        </section>
        <section className="bg-gray-800 p-4 rounded shadow">
          <h3 className="text-xl font-bold">Game Stats</h3>
          <p>Total quizzes taken: 100</p>
          <p>Accuracy rate: 85%</p>
          <p>Best score: 95%</p>
        </section>
        <section className="bg-gray-800 p-4 rounded shadow">
          <h3 className="text-xl font-bold">Customization Options</h3>
          <p>Change avatar or update profile details.</p>
        </section>
      </div>
      <div className="mt-8"> 
      <button 
        onClick={handleBackClick} 
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
      >
        Back to Home
      </button>
      </div>
    </div>
  )
}

export default Profile
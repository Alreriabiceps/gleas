import React from 'react'
import profileImage from '../assets/56.jpg'

const Start = () => {
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
        <h1 className="text-5xl font-bold mb-8">CHOOSE YOUR BATTLE</h1>
        <div className="space-y-4 w-full max-w-md">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded text-2xl w-2/3 mx-auto">
            1v1
          </button>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded text-2xl w-2/3 mx-auto">
            Leaderboard
          </button>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded text-2xl w-2/3 mx-auto">
            Take Quiz
          </button>
        </div>
      </div>
    </div>
  )
}

export default Start
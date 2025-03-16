import React from 'react'
import { useNavigate } from 'react-router'

const Start = () => {
  const navigate = useNavigate()
  
    const handleBackClick = () => {
      navigate('/home')
    }
    
    const handleShowDownClick = () => {
      navigate('/showdown')
    }
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-8">CHOOSE YOUR BATTLE</h1>
        <div className="space-y-4 w-full max-w-md">
          <button
          onClick={handleShowDownClick} 
           className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded text-2xl w-2/3 mx-auto">
          Showdown
          </button>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded text-2xl w-2/3 mx-auto">
          Rapid Fire
          </button>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded text-2xl w-2/3 mx-auto">
          Prove Yourself
          </button>
        </div>
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

export default Start
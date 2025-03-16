import React, { useState, useEffect } from 'react'
import { Bars4Icon } from '@heroicons/react/24/outline'

const ShowDown = () => {
  const [playersOnline, setPlayersOnline] = useState(0)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    // Simulate fetching the number of players online from an API
    const fetchPlayersOnline = () => {
      // Replace this with your actual API call
      const players = Math.floor(Math.random() * 1000) + 1
      setPlayersOnline(players)
    }

    fetchPlayersOnline()

    // Optionally, set an interval to update the number of players online periodically
    const interval = setInterval(fetchPlayersOnline, 5000)

    // Cleanup interval on component unmount
    return () => clearInterval(interval)
  }, [])

  const handleCreateLobby = () => {
    // Logic to create a new lobby
    console.log('Create New Lobby')
  }

  const handleJoinLobby = () => {
    // Logic to join an existing lobby
    console.log('Join Lobby')
  }

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <div className="p-4 bg-gray-900 min-h-screen text-white">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">ShowDown</h1>
        <div className="relative">
          <Bars4Icon className="h-6 w-6 text-white cursor-pointer" onClick={toggleMenu} />
          {menuOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-gray-800 rounded shadow-lg py-2">
              <a href="#" className="block px-4 py-2 text-sm text-white hover:bg-gray-700">Profile</a>
              <a href="#" className="block px-4 py-2 text-sm text-white hover:bg-gray-700">Settings</a>
              <a href="#" className="block px-4 py-2 text-sm text-white hover:bg-gray-700">Logout</a>
            </div>
          )}
        </div>
      </div>
      <div className="bg-gray-800 p-4 rounded shadow mb-4">
        <h2 className="text-xl font-bold">Players Online</h2>
        <p className="text-lg">{playersOnline}</p>
      </div>
      <div className="flex space-x-4">
        <button 
          onClick={handleCreateLobby} 
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700"
        >
          Create New Lobby
        </button>
        <button 
          onClick={handleJoinLobby} 
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
        >
          Join Lobby
        </button>
      </div>
    </div>
  )
}

export default ShowDown
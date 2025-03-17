import React, { useState, useEffect } from 'react'
import { Bars4Icon } from '@heroicons/react/24/outline'

const ShowDown = () => {
  const [playersOnline, setPlayersOnline] = useState(0)
  const [menuOpen, setMenuOpen] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)
  const [lobbyName, setLobbyName] = useState('')
  const [isPublic, setIsPublic] = useState(true)
  const [password, setPassword] = useState('')

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
    setModalOpen(true)
  }

  const handleJoinLobby = () => {
    // Logic to join an existing lobby
    console.log('Join Lobby')
  }

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  const handleModalClose = () => {
    setModalOpen(false)
  }

  const handleModalSubmit = () => {
    // Logic to create a new lobby with the provided details
    console.log('Lobby Name:', lobbyName)
    console.log('Public:', isPublic)
    if (!isPublic) {
      console.log('Password:', password)
    }
    setModalOpen(false)
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

      {modalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-gray-900 p-6 rounded shadow-lg text-gray-300 w-sm h-sm max-w-md">
            <h2 className="text-xl font-bold mb-4">Create New Lobby</h2>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1" htmlFor="lobbyName">Lobby Name</label>
              <input
                type="text"
                id="lobbyName"
                value={lobbyName}
                onChange={(e) => setLobbyName(e.target.value)}
                className="w-full px-3 py-2 border rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Visibility</label>
              <div className="flex items-center">
                <input
                  type="radio"
                  id="public"
                  name="visibility"
                  checked={isPublic}
                  onChange={() => setIsPublic(true)}
                  className="mr-2"
                />
                <label htmlFor="public" className="mr-4">Public</label>
                <input
                  type="radio"
                  id="private"
                  name="visibility"
                  checked={!isPublic}
                  onChange={() => setIsPublic(false)}
                  className="mr-2"
                />
                <label htmlFor="private">Private</label>
              </div>
            </div>
            {!isPublic && (
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1" htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-3 py-2 border rounded"
                />
              </div>
            )}
            <div className="flex justify-end space-x-4">
              <button
                onClick={handleModalClose}
                className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-700"
              >
                Cancel
              </button>
              <button
                onClick={handleModalSubmit}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
              >
                OK
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default ShowDown
import React from 'react'
import { useLocation } from 'react-router'

const ShowDownStart = () => {
  const location = useLocation()
  const { lobbyName = 'Unknown Lobby', players = [] } = location.state || {}

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="max-w-4xl mx-auto bg-gray-800 p-6 rounded shadow">
        <h1 className="text-3xl font-bold mb-4">Welcome to {lobbyName}</h1>
        <h2 className="text-xl font-semibold mb-4">Players:</h2>
        <ul className="mb-6">
          {players.map((player, index) => (
            <li key={index} className="text-lg mb-2">
              {player}
            </li>
          ))}
        </ul>
        <p className="text-lg">The game is starting soon...</p>
      </div>
    </div>
  )
}

export default ShowDownStart
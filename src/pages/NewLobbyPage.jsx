import React, { useState } from 'react'
import { useNavigate } from 'react-router'

const NewLobbyPage = () => {
  const navigate = useNavigate()
  const [players, setPlayers] = useState(['Player1', 'Player2', 'Player3']) // Example players
  const [lobbyName, setLobbyName] = useState('My Awesome Lobby') // Example lobby name

  const handleStartGame = () => {
    navigate('/showdownstart', { state: { lobbyName, players } }) // Redirect to ShowDownStart with lobby data
  }

  const handleLeaveLobby = () => {
    alert('You left the lobby!')
    // Add logic to leave the lobby
  }

  const handleShareLobby = () => {
    navigate('/joinlobby', { state: { lobbyName, players } }) // Pass lobby data to JoinLobby
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="max-w-4xl mx-auto bg-gray-800 p-6 rounded shadow">
        <h1 className="text-3xl font-bold mb-4">{lobbyName}</h1>
        <h2 className="text-xl font-semibold mb-4">Players in Lobby:</h2>
        <ul className="mb-6">
          {players.map((player, index) => (
            <li key={index} className="text-lg mb-2">
              {player}
            </li>
          ))}
        </ul>
        <div className="flex space-x-4">
          <button
            onClick={handleStartGame}
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700"
          >
            Start Game
          </button>
          <button
            onClick={handleLeaveLobby}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700"
          >
            Leave Lobby
          </button>
          <button
            onClick={handleShareLobby}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
          >
            Share Lobby
          </button>
        </div>
      </div>
    </div>
  )
}

export default NewLobbyPage
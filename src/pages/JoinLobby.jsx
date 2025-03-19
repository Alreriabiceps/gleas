import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router'

const JoinLobby = () => {
  const navigate = useNavigate()
  const [lobbies, setLobbies] = useState([])
  useEffect(() => {

    const fetchLobbies = () => {
      const mockLobbies = [
        { id: 1, name: 'Lobby 1', players: ['Player1', 'Player2'] },
        { id: 2, name: 'Lobby 2', players: ['Player3', 'Player4', 'Player5'] },
        { id: 3, name: 'Lobby 3', players: ['Player6'] },
      ]
      setLobbies(mockLobbies)
    }

    fetchLobbies()
  }, [])

  const handleJoinLobby = (lobby) => {
    alert(`You joined ${lobby.name}!`)
    navigate('/newlobbypage', { state: { lobbyName: lobby.name, players: lobby.players } })
  }

  const handleBack = () => {
    navigate(-1)
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="max-w-4xl mx-auto bg-gray-800 p-6 rounded shadow">
        <h1 className="text-3xl font-bold mb-4">Available Lobbies</h1>
        <ul className="mb-6">
          {lobbies.map((lobby) => (
            <li key={lobby.id} className="mb-4">
              <div className="flex justify-between items-center bg-gray-700 p-4 rounded">
                <div>
                  <h2 className="text-xl font-semibold">{lobby.name}</h2>
                  <p className="text-sm text-gray-300">
                    Players: {lobby.players.length}
                  </p>
                </div>
                <button
                  onClick={() => handleJoinLobby(lobby)}
                  className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700"
                >
                  Join
                </button>
              </div>
            </li>
          ))}
        </ul>
        <button
          onClick={handleBack}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700"
        >
          Back
        </button>
      </div>
    </div>
  )
}

export default JoinLobby
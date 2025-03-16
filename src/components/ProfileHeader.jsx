import React from 'react'
import profileImage from '../assets/56.jpg'
import { NavLink } from 'react-router'

const ProfileHeader = () => {
  return (
    <NavLink to="/profile">
        <div className="flex items-center space-x-4">
        <img
          src={profileImage}
          alt="Profile"
          className="w-20 h-20 rounded-full"
        />
        <div>
          <h2 className="text-lg font-bold">AlreriaBiceps</h2>
          <p className="text-sm text-gray-400">Immortal</p>
        </div>
      </div>
    </NavLink>
  )
}

export default ProfileHeader
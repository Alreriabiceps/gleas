import React from 'react'

const Input = ({ type = "text", id, name, className = "", ...props }) => {
  return (
    <input
      type={type}
      id={id}
      name={name}
      className={`mt-1 w-full rounded-md border-gray-200 bg-white px-2 py-2 text-md text-gray-700 shadow-xs dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 ${className}`}
      {...props}
    />
  )
}

export default Input
import React, { useContext } from 'react'
import { ThemeContext } from '../../context/themecontext'

export default function Theme() {
    const { darkMode, toggleDarkMode } = useContext(ThemeContext)
  return (
    <div>
      <button
      onClick={toggleDarkMode}
      className={`px-4 py-2 rounded-full ${
        darkMode ? 'bg-yellow-400' : 'bg-gray-800'
      } transition-colors duration-200`}
    >
      {darkMode ? 'Light Mode' : 'Dark Mode'}
    </button>
    </div>
  )
}

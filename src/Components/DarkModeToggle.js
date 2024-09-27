// src/Darkmode.jsx
import React, { useContext } from 'react';
import { ThemeContext } from '../ThemeContext';

const DarkModeToggle = () => {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);

  return (
    <nav className="p-6">
      <button
        onClick={toggleDarkMode}
        className="px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600 transition"
      >
        {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      </button>
    </nav>
  );
};

export default DarkModeToggle;
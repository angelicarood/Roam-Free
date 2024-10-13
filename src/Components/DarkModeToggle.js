import React, { useContext } from 'react';
import { ThemeContext } from '../ThemeContext';

const DarkModeToggle = () => {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleDarkMode}
      style={{
        padding: '10px 20px',
        backgroundColor: darkMode ? '#4a5568' : 'white',
        color: darkMode ? 'white' : 'black',
        borderRadius: '5px',
        cursor: 'pointer',
        border: 'none',
        transition: 'background-color 0.3s ease',
      }}
      className="dark-mode-toggle"
    >
      {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
    </button>
  );
};

export default DarkModeToggle;
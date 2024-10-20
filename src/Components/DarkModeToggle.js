import React, { useContext } from 'react';
import { ThemeContext } from '../ThemeContext';
import styled from 'styled-components';

const DarkModeToggle = ({ onToggle }) => {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);

  const handleClick = () => {
    toggleDarkMode();
    console.log("DarkModeToggle clicked, darkMode:", darkMode);  // Debugging log
    if (onToggle) {
      onToggle();
        // Trigger the stars when toggling dark mode
    }
  };

  return (
    <ToggleContainer darkMode={darkMode} onClick={handleClick}>
       <ToggleBall darkMode={darkMode}>
       {!darkMode ? <SunIcon /> : <MoonIcon />}
      </ToggleBall>
    </ToggleContainer>
  );
};

// Sun Icon
const SunIcon = styled.div`
  width: 30px;
  height: 30px;
  background-image: url("/sun.png");  // Corrected the syntax here
  background-size: cover;
  background-position: center;
`;

// Moon Icon
const MoonIcon = styled.div`
  width: 30px;
  height: 30px;
  background-image: url("/moon.png");  // Corrected the syntax here
  background-size: cover;
  background-position: center;
`;


// Toggle ball that changes between sun and moon
const ToggleBall = styled.div`
  width: 40px;
  height: 30px;
  background-color: ${({ darkMode }) => (darkMode ? 'grey' : 'grey')}; 
  border-radius: 20px;
  position: absolute;
  top: 5px;
  left: ${({ darkMode }) => (darkMode ? '35px' : '5px')}; 
  transition: all 0.3s ease;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ToggleContainer = styled.div`
  border: 1px solid ${({ darkMode }) => (darkMode ? 'white' : 'black')};
  width: 80px;
  height: 30px;
  background-color: ${({ darkMode }) => (darkMode ? '#282828' : 'white')}; 
  border-radius: 30px;
  padding: 5px;
  display: flex;
  align-items: center;
  position: relative;
  cursor: pointer;
  box-shadow: inset 0 0 15px rgba(0, 0, 0, 0.2);
  transition: background-color 0.3s ease;
`;

export default DarkModeToggle;
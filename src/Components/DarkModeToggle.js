import React, { useContext } from 'react';
import { ThemeContext } from '../ThemeContext';
import styled from 'styled-components';

const DarkModeToggle = ({ onToggle }) => {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);

  const handleClick = () => {
    toggleDarkMode();
    console.log("DarkModeToggle clicked, darkMode:", darkMode);  // Debugging log
    if (onToggle) {
      onToggle();  // Trigger the stars when toggling dark mode
    }
  };

  return (
    <ToggleContainer darkMode={darkMode} onClick={handleClick}>
      <ToggleBall darkMode={darkMode}>
        {darkMode ? <MoonIcon /> : <SunIcon />}
      </ToggleBall>
    </ToggleContainer>
  );
};

// Sun Icon with shadow
const SunIcon = styled.div`
  width: 20px;
  height: 20px;
  background: #ffcc00;
  border-radius: 50%;
  box-shadow: 0 0 10px rgba(255, 204, 0, 0.5);
`;

// Moon Icon with crescent
const MoonIcon = styled.div`
  width: 20px;
  height: 20px;
  background: #ffffff;
  border-radius: 50%;
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
  position: relative;

  &::before {
    content: '';
    width: 10px;
    height: 20px;
    background-color: #2d3748;
    border-radius: 50%;
    position: absolute;
    right: 0px;
  }
`;

// Toggle ball that changes between sun and moon
const ToggleBall = styled.div`
  width: 30px;
  height: 30px;
  background-color: ${({ darkMode }) => (darkMode ? '#2d3748' : '#87ceeb')}; 
  border-radius: 50%;
  position: absolute;
  top: 5px;
  left: ${({ darkMode }) => (darkMode ? '35px' : '5px')}; 
  transition: all 0.3s ease;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ToggleContainer = styled.div`
  width: 70px;
  height: 40px;
  background-color: ${({ darkMode }) => (darkMode ? '#2d3748' : '#87ceeb')}; 
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
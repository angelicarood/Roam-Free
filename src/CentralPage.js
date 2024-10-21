import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';
import Navbar from './Components/Navbar';
import FooterWeb from './Components/FooterWeb';


const North = () => {

  const { darkMode } = useContext(ThemeContext);
  
  return (
    <div className={darkMode ? 'dark-mode' : 'light-mode'}>
      <Navbar transparent={true} />
      <FooterWeb />
    </div>
  );
};

export default North;
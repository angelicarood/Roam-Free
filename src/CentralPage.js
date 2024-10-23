import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';
import Navbar from './Components/Navbar';
import FooterWeb from './Components/FooterWeb';
import CenterMap from './Components/CenterMap';


const Central = () => {

  const { darkMode } = useContext(ThemeContext);
  
  return (
    <div className={darkMode ? 'dark-mode' : 'light-mode'}>
      <Navbar/>
      <CenterMap/>
      <FooterWeb />
    </div>
  );
};

export default Central;
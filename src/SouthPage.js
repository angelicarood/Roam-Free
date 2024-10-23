import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';
import Navbar from './Components/Navbar';
import FooterWeb from './Components/FooterWeb';
import SouthMap from './Components/SouthMap';


const South = () => {

  const { darkMode } = useContext(ThemeContext);
  
  return (
    <div className={darkMode ? 'dark-mode' : 'light-mode'}>
      <Navbar/>
      <SouthMap/>
      <FooterWeb />
    </div>
  );
};

export default South;
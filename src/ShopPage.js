import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';
import Navbar from './Components/Navbar';
import FooterWeb from './Components/FooterWeb';
import Shop from './Components/Shop';

const ShopPage = () => {

  const { darkMode } = useContext(ThemeContext);
  

  return (
    <div className={darkMode ? 'dark-mode' : 'light-mode'}>
      <Navbar />
      <Shop />
      <FooterWeb />
    </div>
  );
};

export default ShopPage;

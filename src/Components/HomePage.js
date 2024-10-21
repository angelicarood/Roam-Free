import React, { useContext } from 'react';
import DiscoverSect from './DiscoverSect';
import CustomizeSect from './CustomizeSect';
import BrandSect from './BrandSect';
import SignUp from './SignUp';
import VideoPlayer from "./VideoPlayer";
import Header from './Header';
import { ThemeContext } from '../ThemeContext';
import Navbar from './Navbar';


const HomePage = () => {

  const { darkMode } = useContext(ThemeContext);
  
  return (
    <div className={darkMode ? 'dark-mode' : 'light-mode'}>
      <Navbar transparent={true} />
      <Header/>
      <DiscoverSect />
      <VideoPlayer/>
      <CustomizeSect />
      <BrandSect />
      <SignUp />
    </div>
  );
};

export default HomePage;
import React, { useContext } from 'react';
import DiscoverSect from './Components/DiscoverSect';
import CustomizeSect from './Components/CustomizeSect';
import BrandSect from './Components/BrandSect';
import SignUp from './Components/SignUp';
import VideoPlayer from "./Components/VideoPlayer";
import Header from './Components/Header';
import { ThemeContext } from './ThemeContext';
import Navbar from './Components/Navbar';
import FooterWeb from './Components/FooterWeb';


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
      <FooterWeb />
    </div>
  );
};

export default HomePage;
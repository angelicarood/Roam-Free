import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';
import Navbar from './Components/Navbar';
import FooterWeb from './Components/FooterWeb';
import SouthMap from './Components/SouthMap';
import styled from 'styled-components';

const MapSection = styled.div`
  justify-content: center;
  align-items: center;
  padding-top: 200px; // Adjust this value based on your Navbar's height
  background-size: cover;
  height: 50vh;
`;

const NavbarStyle = styled.div`
  .navbar {
    background-color: #f8f9fa;
    border-bottom: 1px solid #e9ecef;
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 10;
  }
`;

const South = () => {

  const { darkMode } = useContext(ThemeContext);
  
  return (
    <div className={darkMode ? 'dark-mode' : 'light-mode'}>
      <NavbarStyle>
      <Navbar/>
      </NavbarStyle>
      <MapSection>
      <SouthMap/>
      </MapSection> 
      <FooterWeb />
    </div>
  );
};

export default South;
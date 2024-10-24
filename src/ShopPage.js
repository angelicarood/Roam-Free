import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';
import Navbar from './Components/Navbar';
import FooterWeb from './Components/FooterWeb';
import styled from 'styled-components';



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


const North = () => {

  const { darkMode } = useContext(ThemeContext);
  
  return (
    
    <div className={darkMode ? 'dark-mode' : 'light-mode'}>
      <NavbarStyle>
      <Navbar/>
      </NavbarStyle>
      <FooterWeb />
    </div>
  );
};

export default North;
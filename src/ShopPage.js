import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';
import Navbar from './Components/Navbar';
import FooterWeb from './Components/FooterWeb';
import styled from 'styled-components';
import Shop from './Components/Shop';

const ShopSection = styled.div`
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

const ShopPage = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    
    <div darkMode={darkMode}>
      <NavbarStyle>
      <Navbar/>
      </NavbarStyle>
      <ShopSection>
      <Shop />
      </ShopSection>
      <FooterWeb />
    </div>
  );
};

export default ShopPage;

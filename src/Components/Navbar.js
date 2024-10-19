import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import DarkModeToggle from './DarkModeToggle';
import LanguageDropdown from './LanguageDropdown';

const Navbar = ({ darkMode }) => {
  const [scrollPosition, setScrollPosition] = useState(0);

  // Monitor scroll position
  useEffect(() => {
    const handleScroll = () => setScrollPosition(window.scrollY);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);  // Cleanup
    };
  }, []);

  return (
    <NavbarContainer darkMode={darkMode} isScrolled={scrollPosition > 50}>
      <LeftSection>
        <Logo darkMode={darkMode}></Logo>
        <LanguageDropdown />
      </LeftSection>
      <NavLinks darkMode={darkMode}><NavItem darkMode={ darkMode}>
          <NavLink darkMode={darkMode} href="#home-page">Home</NavLink>
        </NavItem>
        <NavItem darkMode={ darkMode}>
          <NavLink darkMode={darkMode} href="#">North Area</NavLink>
        </NavItem>
        <NavItem darkMode={darkMode}>
          <NavLink darkMode={darkMode} href="#">Central Area</NavLink>
        </NavItem>
        <NavItem darkMode={darkMode}>
          <NavLink darkMode={darkMode} href="#">South Area</NavLink>
        </NavItem>
        <NavItem darkMode={darkMode}> 
          <NavLink darkMode={darkMode} href="#brand-section">About</NavLink>
        </NavItem>
        <NavItem darkMode={darkMode}>
          <NavLink darkMode={darkMode} href="#">Shop</NavLink>
        </NavItem>
      </NavLinks>
      <DarkModeButton>
        <DarkModeToggle /> {/* No need for onToggle unless needed */}
      </DarkModeButton>
    </NavbarContainer>
  );
};

// NavbarContainer with sticky and background change logic
const NavbarContainer = styled.nav`
  box-shadow: ${({ isScrolled }) =>
    isScrolled ? '0 0 10px rgba(0, 0, 0, 0.1)' : 'none'};  // Add shadow on scroll
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
  position: sticky;
  top: 0;
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 20px;
  background-color: ${({ darkMode, isScrolled }) =>
    isScrolled ? (darkMode ? '#282828' : '#fff') : 'transparent'}; /* Change background on scroll */
  z-index: 10;
  transition: background-color 0.3s ease; /* Smooth transition for background */
`;

const Logo = styled.div`
  background-image: url('/RoamLogo.png');
  background-size: contain;  // Ensure the logo fits within the container
  background-position: center;
  background-repeat: no-repeat;
  width: 200px;  // Adjust width as necessary
  height: 130px;  // Adjust height as necessary 
  margin-bottom: 10px;
`;

const LeftSection = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
`;

const NavLinks = styled.ul`
  list-style: none;
  display: flex;
  gap: 20px;
  font-family: syncoptate, sans-serif;
  marging-left: 20px;
  letter-spacing: 1px;
`;

const NavItem = styled.li`
  border: 1px solid ${({ darkMode }) => (darkMode ? 'white' : 'black')};
  padding: 10px 20px;
  border-radius: 30px;

`;

const NavLink = styled.a`
  color: ${({ darkMode }) => (darkMode ? 'white' : '#282828')};
  text-decoration: none;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    color: #f1bb7d;
  }
`;

const DarkModeButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 30px;
  
`;


export default Navbar;
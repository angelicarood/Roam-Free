import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import DarkModeToggle from './DarkModeToggle';
import LanguageDropdown from './LanguageDropdown';
import { ThemeContext } from '../ThemeContext';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Navbar = ({ transparent }) => {
  const { darkMode } = useContext(ThemeContext);
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
    <NavbarContainer darkMode={darkMode} isScrolled={scrollPosition > 50} transparent={transparent}>
      <LeftSection>
        <Logo darkMode={darkMode}></Logo>
        <LanguageDropdown />
      </LeftSection>
      <NavLinks darkMode={darkMode}>
        <NavItem darkMode={darkMode}>
          <NavLink as={Link} darkMode={darkMode} to="/">Home</NavLink> {/* Home Link */}
        </NavItem>
        <NavItem darkMode={darkMode}>
          <NavLink as={Link} darkMode={darkMode} to="/north">North Area</NavLink> {/* North Page Link */}
        </NavItem>
        <NavItem darkMode={darkMode}>
          <NavLink as={Link} darkMode={darkMode} to="/central">Central Area</NavLink>
        </NavItem>
        <NavItem darkMode={darkMode}>
          <NavLink as={Link} darkMode={darkMode} to="/south">South Area</NavLink>
        </NavItem>
        <NavItem darkMode={darkMode}>
          <NavLink as={Link} darkMode={darkMode} to="#brand-section">About</NavLink> {/* Scroll to Section */}
        </NavItem>
        <NavItem darkMode={darkMode}>
          <NavLink as={Link} darkMode={darkMode} to="/shop-page">Shop</NavLink> {/* Shop Link */}
        </NavItem>
      </NavLinks>
      <DarkModeButton>
        <DarkModeToggle /> {/* No need for onToggle unless needed */}
      </DarkModeButton>
    </NavbarContainer>
  );
};

// Modify NavbarContainer to handle transparent prop and scroll behavior
const NavbarContainer = styled.nav`
  box-shadow: ${({ isScrolled }) =>
    isScrolled ? '0 0 10px rgba(0, 0, 0, 0.1)' : 'none'};  // Add shadow on scroll
  position: fixed;
  top: 0;
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 20px;
  background-color: ${({ darkMode, isScrolled, transparent }) =>
    transparent && !isScrolled
      ? 'transparent' // Transparent when at top of the page and if transparent prop is true
      : isScrolled
      ? (darkMode ? '#282828' : '#fff') // Solid background on scroll
      : (darkMode ? '#282828' : '#fff')}; // Default background if not transparent
  z-index: 10;
  transition: background-color 0.3s ease; /* Smooth transition for background */
`;

const Logo = styled.div`
  background-image: ${({ darkMode }) => (darkMode ? 'url("/nightlogo.png")' : 'url("/RoamLogo.png")')};
  background-size: ${({ darkMode }) => (darkMode ? 'contain' : 'contain')}; 
  background-position: center;
  background-repeat: no-repeat;
  
  width: ${({ darkMode }) => (darkMode ? '150px' : '150px')};
  height: ${({ darkMode }) => (darkMode ? '130px' : '130px')};
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
  margin-left: 20px;
  letter-spacing: 1px;
`;

const NavItem = styled.li`
  background-color: ${({ darkMode }) => (darkMode ? '#282828' : '#fff')};
  border: 1px solid ${({ darkMode }) => (darkMode ? 'white' : 'black')};
  padding: 10px 20px;
  border-radius: 30px;
`;

const NavLink = styled(Link)`  // Styled as a Link
  color: ${({ darkMode }) => (darkMode ? 'white' : 'black')};
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
  padding: 50px;
`;

export default Navbar;
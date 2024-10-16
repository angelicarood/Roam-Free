import React, { useContext } from 'react';
import styled from 'styled-components';
import DarkModeToggle from './DarkModeToggle';
import { ThemeContext } from '../ThemeContext';

const Navbar = ({ handleToggle }) => {
  const { darkMode } = useContext(ThemeContext);

  console.log("Navbar: handleToggle passed:", handleToggle);  // Debugging log

  return (
    <NavbarContainer darkMode={darkMode}>
      <LeftSection>
        <Logo darkMode={darkMode}>ROAM FREE</Logo>
      </LeftSection>
      <NavLinks>
        <NavItem>
          <NavLink darkMode={darkMode} href="#">Shop</NavLink>
        </NavItem>
        <NavItem>
          <NavLink darkMode={darkMode} href="#">Services</NavLink>
        </NavItem>
        <NavItem>
          <NavLink darkMode={darkMode} href="#">About</NavLink>
        </NavItem>
        <NavItem>
          <NavLink darkMode={darkMode} href="#">Contact</NavLink>
        </NavItem>
      </NavLinks>
      <DarkModeButton>
        <DarkModeToggle onToggle={handleToggle} />  {/* Pass handleToggle to DarkModeToggle */}
      </DarkModeButton>
    </NavbarContainer>
  );
};

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
  background-color: transparent;
  z-index: 10; 
  position: relative;
`;

const Logo = styled.h1`
  font-family: 'Syncopate';
  font-size: 24px;
  font-weight: bold;
  color: white;
  cursor: pointer;
  z-index: 11; 
  pointer-events: all;
`;

const LeftSection = styled.div`
  display: flex;
  align-items: center;
`;

const NavLinks = styled.ul`
  list-style: none;
  display: flex;
  gap: 30px;
  z-index: 11; 
`;

const NavItem = styled.li`
  list-style: none;
`;

const NavLink = styled.a`
  color: white;
  text-decoration: none;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  pointer-events: all; 
  z-index: 11; 

  &:hover {
    color: ${({ darkMode }) => (darkMode ? '#ccc' : '#333')}; /* Dark/Light mode hover color */
  }
`;

const DarkModeButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 10px;
  z-index: 12; 
  
`;

export default Navbar;
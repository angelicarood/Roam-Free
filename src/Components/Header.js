import React from 'react';
import styled from 'styled-components';
import LanguageDropdown from "./LanguageDropdown";

const Header = () => {
    return (
        <HeaderContainer>
            <Overlay />
            <Navbar>
                <Logo>ROAM FREE</Logo>
                <LanguageContainer>
                    <LanguageDropdown />
                </LanguageContainer>
                <NavLinks>
                    <li><NavLink href="#">Shop</NavLink></li>
                    <li><NavLink href="#">Services</NavLink></li>
                    <li><NavLink href="#">About</NavLink></li>
                    <li><NavLink href="#">Contact</NavLink></li>
                </NavLinks>
                <AccountButton href="#">Account</AccountButton>
            </Navbar>
            <HeroText>
                <HeroHeading>JOURNEY BEYOND<br />THE ORDINARY</HeroHeading>
                <HeroDescription>
                    Embark on a journey where the ordinary dissolves into the extraordinary, and every moment is a new horizon waiting to be explored. Blaze trails across uncharted territories and redefine what it means to travel the world.
                </HeroDescription>
                <JoinButton href="#">Join Us</JoinButton>
            </HeroText>
        </HeaderContainer>
    );
};

// Styled components for the Header
const HeaderContainer = styled.header`
    position: relative;
    background-image: url('/outside.png');
    background-size: cover;
    background-position: center;
    height: 45vh;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1;
`;

const Navbar = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    position: relative;
    z-index: 2;
`;

const Logo = styled.h1`
    font-family: 'Syncopate';
    font-size: 24px;
    font-weight: bold;
`;

// New container for the language dropdown
const LanguageContainer = styled.div`
    margin-left: 20px;
`;

const NavLinks = styled.ul`
    list-style: none;
    display: flex;
    gap: 20px;
    margin-left: auto;
    margin-right: 20px;
`;

const NavLink = styled.a`
    color: white;
    text-decoration: none;
    font-size: 18px;
    transition: color 0.3s;

    &:hover {
        color: #f0f0f0;
    }
`;

const AccountButton = styled.a`
    background-color: white;
    color: black;
    padding: 10px 20px;
    text-decoration: none;
    font-size: 16px;
    border-radius: 4px;
    transition: background-color 0.3s;

    &:hover {
        background-color: #f0f0f0;
    }
`;

const HeroText = styled.div`
    text-align: center;
    padding-bottom: 50px;
    position: relative;
    z-index: 2;
`;

const HeroHeading = styled.h2`
    font-family: 'Syncopate';
    font-weight: 700;
    font-size: 62px;
    margin-bottom: 20px;
    line-height: 1.1;
`;

const HeroDescription = styled.p`
    font-family: 'Space Grotesk';
    font-size: 20px;
    max-width: 600px;
    margin: 0 auto 30px auto;
`;

const JoinButton = styled.a`
  padding: 15px 30px;
  background-color: white;
  color: black;
  text-decoration: none;
  font-size: 18px;
  border-radius: 4px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #f0f0f0;
  }
`;

export default Header;

import React from 'react';
import styled from 'styled-components';
import Navbar from './Navbar';  // Now import the Navbar separately

const Header = () => {
    return (
        <HeaderContainer>
            <Overlay />
            <Navbar />
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

const HeaderContainer = styled.header`
    position: relative;
    background-image: url('/outside.png');
    background-size: cover;
    background-position: center;
    height: 50vh; /* Adjust height if needed */
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
    background-color: rgba(0, 0, 0, 0.4);
    z-index: 1;
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

const JoinButton = styled.button`
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

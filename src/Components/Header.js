import React, { useContext, useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { ThemeContext } from '../ThemeContext'; 

const Header = () => {
  const { darkMode } = useContext(ThemeContext);
  const [showStars, setShowStars] = useState(false);

  useEffect(() => {
    if (darkMode) {
      setShowStars(true);
      const timeoutId = setTimeout(() => setShowStars(false), 2000);
      return () => clearTimeout(timeoutId);  // Cleanup timeout
    }
  }, [darkMode]);

  return (
    <HeaderContainer>
      {showStars && <StarsContainer>{createStars()}</StarsContainer>}
      <Overlay />
      <HeroText>
        <HeroHeading>JOURNEY BEYOND<br />THE ORDINARY</HeroHeading>
        <HeroDescription>
        Embark on a journey where the ordinary dissolves into the extraordinary,<br></br> and every moment is a new horizon waiting to be explored. Blaze trails across uncharted territories and redefine what it means to travel the <br></br>world.        </HeroDescription>
      </HeroText>
    </HeaderContainer>
  );
};

// Keyframe animation for stars
const starAnimation = keyframes`
  0% { opacity: 0; transform: scale(0.5); }
  50% { opacity: 1; transform: scale(1.2); }
  100% { opacity: 0; transform: scale(0.5); }
`;

// Stars container to hold the stars in the header
const StarsContainer = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    pointer-events: none;
    z-index: 3;  

    & > div {
        position: absolute;
        width: 10px;
        height: 10px;
        background-color: white;
        border-radius: 50%;
        box-shadow: 0 0 5px rgba(255, 255, 255, 0.8);
        animation: ${starAnimation} 2s ease-in-out;

    }
`;

// Generate more stars for the container
const createStars = () => {
  const stars = [];
  const numberOfStars = 70; // Increase the number of stars
  for (let i = 0; i < numberOfStars; i++) {
    stars.push(
      <div 
        key={i} 
        style={{ 
          top: `${Math.random() * 90}%`, 
          left: `${Math.random() * 90}%` 
        }}
      ></div>
    );
  }
  return stars;
};

const HeaderContainer = styled.header`
    z-index: 1;
    position: relative;
    background-image: url('/outside.png');
    background-size: cover;
    background-position: center;
    height: 50vh;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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
    width: 100%;
    font-family: 'Syncopate' ,sans-serif;
    font-weight: 700;
    font-size: 85px;
    margin-bottom: 50px;
    line-height: 1.1;
    padding-top: 100px;
    font-widght: bold;
`;

const HeroDescription = styled.p`
    font-family: 'Space Grotesk' ,sans-serif;
    font-size: 18px;
    max-width: 600px;
    margin: 0 auto 30px auto;
    line-height: 1.6;
    color: white;
`;

export default Header;


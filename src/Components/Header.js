import React, { useState, useContext } from 'react';
import styled, { keyframes } from 'styled-components';
import Navbar from './Navbar';
import { ThemeContext } from '../ThemeContext';

const Header = () => {
    const { darkMode } = useContext(ThemeContext);  // Access darkMode from the context
    const [showStars, setShowStars] = useState(false);

    const handleToggle = () => {
        // Only show stars if switching to dark mode
        if (!darkMode) {  // darkMode is false, meaning we're switching to dark mode
            console.log("Switching to dark mode: Stars should appear");
            setShowStars(true); // Show stars when toggling to dark mode
            setTimeout(() => {
                setShowStars(false); // Hide stars after 2 seconds
                console.log("Stars hidden after 4 seconds");
            }, 4000);
        }
    };

    return (
        <HeaderContainer>
            {showStars && <StarsContainer>{createStars()}</StarsContainer>} {/* Display stars when dark mode is toggled */}
            <Overlay />
            <Navbar handleToggle={handleToggle} />  {/* Pass handleToggle to Navbar */}
            <HeroText>
                <HeroHeading>JOURNEY BEYOND<br />THE ORDINARY</HeroHeading>
                <HeroDescription>
                    Embark on a journey where the ordinary dissolves into the extraordinary, and every moment is a new horizon waiting to be explored. Blaze trails across uncharted territories and redefine what it means to travel the world.
                </HeroDescription>
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
        animation: ${starAnimation} 4s ease-in-out;
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
    position: relative;
    background-image: url('/outside.png');
    background-size: cover;
    background-position: center;
    height: 50vh;
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

export default Header;


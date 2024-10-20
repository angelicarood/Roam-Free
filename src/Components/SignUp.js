import React, { useContext } from 'react';
import styled from 'styled-components';
import { ThemeContext } from '../ThemeContext';
import EmailSubscription from './EmailSubscription';

const SignUp = () => {
  const { darkMode } = useContext(ThemeContext);

  // Function to handle form submission
  const handleSignUp = (email) => {
    console.log("Email submitted: ", email);
  };

  return (
    <SignUpSection darkMode={darkMode}>
      <SignUpContent>
        <Title>START PLANNING</Title>
        <Description>
          Enter your email to stay updated on our latest news, including new <br /> 
          merchandise, exciting places to explore, and exclusive offers.
        </Description>
        <EmailSubscription onSubmit={handleSignUp} />
      </SignUpContent>
    </SignUpSection>
  );
};

// Styled Components
const SignUpSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: ${({ darkMode }) => (darkMode ? 'url("/nightback.webp")' : 'url("/background.jpg")')}; /* Changes only section background */
  background-size: cover;
  background-position: center;
  padding: 50px;
  height: 60vh; /* Ensure it takes full height of the screen */
  background-color: ${({ darkMode }) => (darkMode ? '#282828' : 'white')}; /* Changes only section background */
`;

const SignUpContent = styled.div`
  background-color: white; /* Fixed white background */
  color: black; /* Fixed black text */
  padding: 40px 60px;
  text-align: center;
  border-radius: 8px;
  max-width: 800px;
  max-height: 500px;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2); /* Add shadow for better visibility */
  width: 100%;
  height: 100%;
`;

const Title = styled.h1`
  font-size: 38px;
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: 20px;
  font-family: 'Syncopate', sans-serif;
  color: black; /* Always stays black */
`;

const Description = styled.p`
  font-size: 18px;
  margin-bottom: 30px;
  font-family: 'Space Grotesk', sans-serif;
  color: black !important; /* Forces the description to always be black */
`;

export default SignUp;
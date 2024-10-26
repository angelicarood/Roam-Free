import React, { useContext } from 'react';
import styled from 'styled-components';
import { ThemeContext } from '../ThemeContext';
import EmailSubscription from './EmailSubscription';

const SignUp = () => {
  const { darkMode } = useContext(ThemeContext);

  // Function to handle form submission and connect to the Flask backend
  const handleSignUp = async (email) => {
    console.log("Email received in handleSignUp:", email); // Add this line to debug
  
    try {
      const response = await fetch("http://127.0.0.1:5010/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });
  
      const result = await response.json();
  
      if (response.ok) {
        alert(result.message || "Subscription successful!"); // Show success message
      } else {
        alert(`Subscription failed: ${result.message}`);
      }
    } catch (error) {
      console.error("Error subscribing:", error);
      alert("An error occurred. Please try again later.");
    }
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
  background-image: ${({ darkMode }) =>
    darkMode ? 'url("/nightback.webp")' : 'url("/background.jpg")'};
  background-size: cover;
  background-position: center;
  padding: 50px;
  height: 60vh;
  background-color: ${({ darkMode }) =>
    darkMode ? '#282828' : 'white'};
`;

const SignUpContent = styled.div`
  background-color: white;
  color: black;
  padding: 40px 60px;
  text-align: center;
  border-radius: 8px;
  max-width: 800px;
  max-height: 500px;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);
  width: 100%;
  height: 100%;
`;

const Title = styled.h1`
  font-size: 38px;
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: 20px;
  font-family: 'Syncopate', sans-serif;
  color: black;
`;

const Description = styled.p`
  font-size: 18px;
  margin-bottom: 30px;
  font-family: 'Space Grotesk', sans-serif;
  color: black !important;
`;

export default SignUp;

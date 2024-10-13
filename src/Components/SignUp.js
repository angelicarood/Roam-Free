import React, { useContext } from 'react';
import styled from 'styled-components';
import { ThemeContext } from '../ThemeContext';

const SignUp = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <SignUpSection darkMode={darkMode}>
      <SignUpContent darkMode={darkMode}>
        <Title darkMode={darkMode}>START PLANNING</Title>
        <Description darkMode={darkMode}>
          Tell people what they can expect when they sign up with<br></br> their email, like a newsletter, discounts or updates.
        </Description>
        <SignUpForm>
          <SignUpInput darkMode={darkMode} type="email" placeholder="Email Address" />
          <SignUpButton darkMode={darkMode}>Sign Up</SignUpButton>
        </SignUpForm>
      </SignUpContent>
    </SignUpSection>
  );
};

const SignUpSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url('/background.jpg');
  padding: 50px;
`;

const SignUpContent = styled.div`
  background-color: ${({ darkMode }) => (darkMode ? '#333' : 'white')};
  color: ${({ darkMode }) => (darkMode ? 'white' : 'black')};
  padding: 40px 60px;
  text-align: center;
  border-radius: 8px;
  max-width: 800px;
  height: 500px;
  width: 100%;
`;

const Title = styled.h1`
  font-size: 38px;
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: 20px;
  font-family: 'Syncopate', sans-serif;
  color: ${({ darkMode }) => (darkMode ? 'white' : 'black')};
`;

const Description = styled.p`
  font-size: 18px;
  margin-bottom: 30px;
  font-family: 'Space Grotesk', sans-serif;
  color: ${({ darkMode }) => (darkMode ? 'white' : 'black')};
`;

const SignUpForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SignUpInput = styled.input`
  width: 40%;
  padding: 15px;
  font-size: 16px;
  margin-bottom: 20px;
  border: 1px solid ${({ darkMode }) => (darkMode ? '#666' : '#ccc')};
  border-radius: 4px;
  background-color: ${({ darkMode }) => (darkMode ? '#666' : 'white')};
  color: ${({ darkMode }) => (darkMode ? 'white' : 'black')};
  outline: none;

  &:focus {
    border-color: #6db56f;
  }
`;

const SignUpButton = styled.button`
  background-color: ${({ darkMode }) => (darkMode ? '#555' : 'black')};
  color: ${({ darkMode }) => (darkMode ? 'white' : 'white')};
  padding: 15px 30px;
  font-size: 16px;
  text-transform: uppercase;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ darkMode }) => (darkMode ? '#777' : '#333')};
  }
`;

export default SignUp;
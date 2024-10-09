import React from "react";
import styled from "styled-components";

const SignUp = () => {
  return (
    <SignUpSection>
      <SignUpContent>
        <Title>START PLANNING</Title>
        <Description>
          Tell people what they can expect when they sign up with<br></br> their email, like a newsletter, discounts or updates.
        </Description>
        <SignUpForm>
          <SignUpInput type="email" placeholder="Email Address" />
          <SignUpButton>Sign Up</SignUpButton>
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
  background-color: white;
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
`;

const Description = styled.p`
  font-size: 18px;
  margin-bottom: 30px;
  fotn-family: 'space grotesk', sans-serif;
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
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;

  &:focus {
    border-color: #6DB56F;
  }
`;

const SignUpButton = styled.button`
  background-color: black;
  color: white;
  padding: 15px 30px;
  font-size: 16px;
  text-transform: uppercase;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #333;
  }
`;

export default SignUp;
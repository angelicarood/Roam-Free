import React from "react";
import styled from "styled-components";


const EmailSubscription = ({onSubmit}) => {// Get the darkMode value from the ThemeContext
  const [email, setEmail] = React.useState("");
  const [error, setError] = React.useState("");


  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


  //handle email input changes
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setError("");
  };

  //handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if(!emailRegex.test(email)){// VALIDATE EMAIL, if invalid, set error message
      setError("Please enter a valid email address");
      return;
    }
      //when email is valid call the parent function which is sigup com
      onSubmit(email);
      setEmail("");// this resets the email input field after submission
    
  };


  return(
    <form onSubmit={handleSubmit}> 
      <StyledSignUpInput type="email" placeholder="Email Address" value={email} onChange={handleEmailChange} required />
      {error && <p style={{color: "red"}}>{error}</p>} {/* display error message if email is invalid */}
      <br></br>  {/* Line break */}
      <SignUpButton type="submit">Sign Up</SignUpButton> {/* Styled button */}
        
    </form>
)
}; 

const StyledSignUpInput = styled.input`
  width: 40%;
  padding: 15px;
  font-size: 16px;
  margin-bottom: 20px;
  border: 1px solid ${({ darkMode }) => (darkMode ? '#282828' : '#ccc')};
  border-radius: 4px;
  background-color: ${({ darkMode }) => (darkMode ? '#282828' : 'white')};
  color: ${({ darkMode }) => (darkMode ? 'white' : '#282828')};
  outline: none;

  &:focus {
    border-color: #6db56f;
  }
`;

const SignUpButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  color: white;
  background-color: #6db56f;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #5aa85c;
  }
`;

  
export default EmailSubscription;

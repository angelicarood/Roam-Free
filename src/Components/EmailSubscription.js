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
    console.log("Form submitted with email:", email);
  
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address");
      return;
    }
  
    onSubmit(email);
    setEmail("");
  };


  return(
    <form onSubmit={handleSubmit}> 
      
      <StyledSignUpInput type="email" placeholder="Email Address" value={email} onChange={handleEmailChange} required  />
      {error && <p style={{color: "red"}}>{error}</p>} {/* display error message if email is invalid */}
      <br></br>
      <SignUpButton type="submit">Subscribe</SignUpButton> {/* Styled button */}
        
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

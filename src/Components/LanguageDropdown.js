import React, { useContext } from 'react';
import styled from 'styled-components';
import { ThemeContext } from '../ThemeContext'; // Adjust the path as necessary





const LanguageDropdown = () => {
    const { darkMode } = useContext(ThemeContext);
    const languages = ['English', 'Spanish', 'Chinese', 'Portuguese', 'French'];

    return (
        <StyledSelect darkMode={darkMode}>
            {languages.map((lang, index) => (
                <option key={index} value={lang}>{lang}</option>
            ))}
        </StyledSelect>
    );
}
const StyledSelect = styled.select`
  color: black; /* Change text color to black */
  background-color: ${({ darkMode }) => (darkMode ? '#282828' : 'white')}; /* Change background color based on darkmode */
  border: 1px solid ${({ darkMode }) => (darkMode ? 'white' : '#282828')}; /* Change border color based on darkmode */
  padding: 10px 10px; /* Optional: add some padding */
  font-size: 18px; /* Optional: increase font size */
  color: ${({ darkMode }) => (darkMode ? 'white' : '#282828')}; /* Change text color based on darkmode */
  border-radius: 30px; /* Optional: round the corners */
  font: syncopte sans-serif; /* Optional: change font */
  font-weight: bold; /* Optional: make text bold */
  &&:hover {
    color: #f1bb7d/* Change text color on hover */
`;

export default LanguageDropdown;

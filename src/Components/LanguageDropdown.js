import React from 'react';
import styled from 'styled-components';

const StyledSelect = styled.select`
  color: black; /* Change text color to black */
  background-color: white; /* Optional: set background to white for better visibility */
  border: 1px solid black; /* Optional: set a border for the select box */
  padding: 5px; /* Optional: add some padding */
  border-radius: 4px; /* Optional: round the corners */
`;

function LanguageDropdown() {
    const languages = ['English', 'Spanish', 'Chinese', 'Portuguese', 'French'];

    return (
        <StyledSelect>
            {languages.map((lang, index) => (
                <option key={index} value={lang}>{lang}</option>
            ))}
        </StyledSelect>
    );
}

export default LanguageDropdown;

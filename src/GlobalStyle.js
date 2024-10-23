import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  /* Basic body styling, same as in your index.css */
  body {
    background-color: ${({ darkMode }) => (darkMode ? '#282828' : 'white')};
    color: ${({ darkMode }) => (darkMode ? 'white' : '#282828')};
    transition: background-color 0.3s ease, color 0.3s ease;
  }

  /* Style for links (assuming you meant a tags, not href) */
  a {
    color: ${({ darkMode }) => (darkMode ? '#2d3748' : '#282828')};
  }

  /* Style for paragraphs */
  p {
    color: ${({ darkMode }) => (darkMode ? 'white' : '#282828')};
  }

  /* Replicate the text-gradient utility */
  .text-gradient {
    background: linear-gradient(to right, #f6d365, #fda085);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    color: transparent; /* Fallback for browsers that don't support text gradient */
  }
`;
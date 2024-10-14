import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ThemeProvider } from './ThemeContext';
import './index.css'; // Ensure this line exists

ReactDOM.render(
  <ThemeProvider>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);

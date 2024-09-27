// src/index.js
import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css'; // Tailwind CSS
import App from './App';
import { ThemeProvider } from './ThemeContext';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

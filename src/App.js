import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FooterWeb from './Components/FooterWeb';
import HomePage from './Components/HomePage';
import Shop from './Components/Shop';
import PaymentSuccess from './Components/PaymentSuccess';
import { GlobalStyle } from './GlobalStyle';  // Global styles
import { ThemeProvider, ThemeContext } from './ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <ThemeContext.Consumer>
        {({ darkMode }) => (
          <>
      <GlobalStyle darkMode={darkMode} />  {/* Apply global styles */}
      <Router>
        <div className="App">
          <Routes>
            <Route path="/shop" element={<Shop darkMode={darkMode} />} />
            <Route path="/payment-success" element={<PaymentSuccess darkMode={darkMode} />} />
          </Routes>
          <HomePage darkMode={darkMode} />  {/* Pass darkMode to HomePage */}
          <FooterWeb darkMode={darkMode} />  {/* Pass darkMode to Footer */}
        </div>
      </Router>
          </>
        )}
      </ThemeContext.Consumer>
    </ThemeProvider>
  );
}

export default App;
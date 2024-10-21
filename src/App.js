import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage'; // Home page component
import North from './NorthPage'; // North subpage component
import ShopPage from './ShopPage';
import Central from './CentralPage';
import South from './SouthPage';
import PaymentSuccess from './Components/PaymentSuccess';
import { GlobalStyle } from './GlobalStyle'; // Global styles
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
                  {/* Define your routes here */}
                  <Route path="/" element={<HomePage darkMode={darkMode} />} /> {/* Home Page at root URL */}
                  <Route path="/north" element={<North darkMode={darkMode} />} /> {/* North Page */}
                  <Route path="/central" element={<Central darkMode={darkMode} />} /> {/* Central Page */}
                  <Route path="/south" element={<South darkMode={darkMode} />} /> {/* South Page */}
                  <Route path="/shop-page" element={<ShopPage darkMode={darkMode} />} /> {/* Shop Page */}
                  <Route path="/payment-success" element={<PaymentSuccess darkMode={darkMode} />} /> {/* Payment Success Page */}
                  
                  {/* Fallback Route */}
                  <Route path="*" element={<HomePage darkMode={darkMode} />} /> {/* Catch-all route that redirects to HomePage */}
                </Routes>
              </div>
            </Router>
          </>
        )}
      </ThemeContext.Consumer>
    </ThemeProvider>
  );
}

export default App;
import './App.css';
import Header from './Components/Header.js';
// import Header from './Components/theme/Header/Header.js';
//import Home from './Components/Home.js';
//import Navbar from './Components/Navbar.js';
//import Footer from './Components/Footer.js';
//import NewsletterSignup from './Components/NewsletterSignup.js';
import HomePage from './Components/HomePage.js';
import FooterWeb from './Components/FooterWeb.js';
import Shop from './Components/Shop.js';
import PaymentSuccess from './Components/PaymentSuccess.js'; // Import the PaymentSuccess component
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <Router>
    <div className="App">  
    
      <Header /> {/* Include the Header component here */}
      <span/><span/>
      <Routes> {/* Corrected opening tag */}
           <Route path="/shop" element={<Shop />} /> {/* Shop page */}
           <Route path="/payment-success" element={<PaymentSuccess />} /> {/* Add this route */}
        </Routes> {/* Corrected closing tag */}
      <HomePage />
      <FooterWeb />
    </div>
    </Router>
  );
}

export default App;


// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <Header /> {/* Include the Header component here */}
//         <Routes> {/* Corrected opening tag */}
//           <Route path="/shop" element={<Shop />} /> {/* Shop page */}
//           <Route path="/" element={<Home />} /> {/* Home page */}
//           <Route path="/payment-success" element={<PaymentSuccess />} /> {/* Add this route */}
//         </Routes> {/* Corrected closing tag */}
//         <NewsletterSignup />
//         <Footer />
//       </div>
//     </Router>
//   );
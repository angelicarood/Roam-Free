import './App.css';
import Header from './Components/Header.js';
// import Header from './Components/theme/Header/Header.js';
//import Home from './Components/Home.js';
import Navbar from './Components/Navbar.js';
import Footer from './Components/Footer.js';
//import NewsletterSignup from './Components/NewsletterSignup.js';
import HomePage from './Components/HomePage.js';
import FooterWeb from './Components/FooterWeb.js';

function App() {
  return (
    <div className="App">  
      <Header /> {/* Include the Header component here */}
      <HomePage />
      {/*<NewsletterSignup /> */}
      {/*<Footer />} */}
      <FooterWeb />
    </div>
  );
}

export default App;

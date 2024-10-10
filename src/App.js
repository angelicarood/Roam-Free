import './App.css';
import Header from './Components/Header.js';
// import Header from './Components/theme/Header/Header.js';
import Navbar from './Components/Navbar.js';
import HomePage from './Components/HomePage.js';
import FooterWeb from './Components/FooterWeb.js';

function App() {
  return (
    <div className="App">  
      <Header /> {/* Include the Header component here */}
      <span/><span/>
      <HomePage />
      {/*<NewsletterSignup /> */}
      {/*<Footer />} */}
      <FooterWeb />
    </div>
  );
}

export default App;

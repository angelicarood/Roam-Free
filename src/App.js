import './App.css';
import Header from './Components/Header.js';
// import Header from './Components/theme/Header/Header.js';
import Home from './Components/Home.js';
import Navbar from './Components/Navbar.js';

function App() {
  return (
    <div className="App">
      <Header /> {/* Include the Header component here */}
      <Home /> {/* Include the Home component here */}
    </div>
  );
}

export default App;

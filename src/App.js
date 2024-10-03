import logo from './logo.svg';
import './App.css';
import Header from './Components/theme/Header/Header.js'; // Change to Header
import Home from './Components/Home.js';

function App() {
  return (
    <div className="App">
      <Header /> {/* Include the Header component here */}
      <Home /> {/* Include the Home component here */}
    </div>
  );
}

export default App;

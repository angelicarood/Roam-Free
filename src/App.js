// src/App.js
import React from 'react';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-500">
      <Navbar />
      <main className="flex flex-col items-center justify-center mt-10">
        <h1 className="text-4xl font-bold mb-4 text-black dark:text-white">
          App Title
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300">
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        </p>
      </main>
    </div>
  );
}

export default App;

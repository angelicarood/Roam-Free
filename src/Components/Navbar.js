import React from 'react';
import DarkModeToggle from './DarkModeToggle';

const Navbar = () => {
  return (
    <nav className="w-full bg-white dark:bg-gray-800 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold text-black dark:text-white">Roam Free</h1>
          </div>
          <div className="flex items-center space-x-4">
            <a href="#home" className="text-gray-900 dark:text-white">Home</a>
            <a href="#about" className="text-gray-900 dark:text-white">About</a>
            <a href="#contact" className="text-gray-900 dark:text-white">Contact</a>
            <DarkModeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import React from 'react';


const Footer = () => {
 return (
   <footer className="bg-black text-white py-6">
     <div className="container mx-auto px-4">
       <div className="flex flex-col md:flex-row justify-between items-center">
         <div className="mb-4 md:mb-0">
           <h2 className="text-lg font-semibold">My Website</h2>
         </div>
         <div className="flex space-x-4">
           <a href="/" className="text-gray-400 hover:text-white transition-colors duration-300">Home</a>
           <a href="/about" className="text-gray-400 hover:text-white transition-colors duration-300">About</a>
           <a href="/services" className="text-gray-400 hover:text-white transition-colors duration-300">Services</a>
           <a href="/contact" className="text-gray-400 hover:text-white transition-colors duration-300">Contact</a>
         </div>
       </div>
       <div className="mt-6 text-center">
         <p className="text-gray-500">&copy; 2024 My Website. All Rights Reserved.</p>
       </div>
     </div>
   </footer>
 );
};


export default Footer;


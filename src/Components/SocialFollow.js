import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faWhatsapp, faXTwitter } from '@fortawesome/free-brands-svg-icons';

const SocialFollow = () => {
  return (
    <div className="flex flex-col items-center justify-center my-8">
      <h2 className="text-8xl font-bold mb-4 py-4">FOLLOW US ON SOCIAL</h2>
      <div className="flex space-x-6 py-6"> 
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} className="text-7xl text-red-500" />
        </a>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebook} className="text-7xl text-blue-700" />
        </a>
        <a href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faWhatsapp} className="text-7xl text-green-500" />
        </a>
        <a href="https://www.x.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faXTwitter} className="text-7xl text-black-400" />
        </a>
      </div>
      <button className="mt-6 bg-black text-white py-4 px-12 rounded hover:bg-gray-800">SOCIAL</button>
    </div>
  );
};

export default SocialFollow;

// import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faInstagram, faFacebook, faWhatsapp, faXTwitter } from '@fortawesome/free-brands-svg-icons';

// const SocialFollow = () => {
//   return (
//     <div className="flex flex-col items-center justify-center my-8">
//       <h2 className="text-7xl font-bold mb-4">FOLLOW US ON SOCIAL</h2>
//       <div className="flex space-x-6">
//         <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
//           <FontAwesomeIcon icon={faInstagram} className="text-7xl text-red-500" />
//         </a>
//         <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
//           <FontAwesomeIcon icon={faFacebook} className="text-7xl text-blue-700" />
//         </a>
//         <a href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer">
//           <FontAwesomeIcon icon={faWhatsapp} className="text-7xl text-green-500" />
//         </a>
//         <a href="https://www.x.com" target="_blank" rel="noopener noreferrer">
//           <FontAwesomeIcon icon={faXTwitter} className="text-7xl text-black-400" />
//         </a>
//       </div>
//       <button className="mt-6 bg-black text-white py-2 px-4 rounded hover:bg-gray-800">SOCIAL</button>
//     </div>
//   );
// };

// export default SocialFollow;

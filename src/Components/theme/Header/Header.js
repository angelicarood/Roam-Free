import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMountainSun } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    return (
        <>
            <header className="fixed top-0 left-0 right-0 bg-gradient-to-b from-black via-slate-400 to-slate-700 p-4 z-50">
            <container className="flex justify-start ml-3">
                <h1 className="font-bold text-3xl  ">
                    <FontAwesomeIcon icon={faMountainSun} /> Roam Free
                </h1>
                </container>
                <nav>
                    <ul className="text-white flex space-x-12 justify-end mr-5 hover:">
                        <li>
                            <a href="/" className="hover:text-blue-700">Home</a>
                        </li>
                        <li >
                            <a href="/" className="hover:text-blue-700">Destinations</a>
                        </li>
                        <li>
                            <a href="/" className="hover:text-blue-700">Blog</a>
                        </li>
                        <li >
                            <a href="/" className="hover:text-blue-700">About</a>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default Header;
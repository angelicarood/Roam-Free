import React from "react";


const Home = () => {
    return (
        <div className= "flex items-center justify-center"
        style={{
            backgroundImage: `url("https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "100vh",
        }}
        >
            <h1 className="text-white ml-64 pr-44">Your Guide to Epic Outdoor Journeys</h1>
            <div className="absolute left-52">
            <img
            src="/pexels-pixabay-35600.jpg"
            alt="Hiking in the mountains"
            className="top-50 w-64 h-auto object-contain z-20 opacity-50"
            />
            <p className="font-bold text-3xl mt-4">Into the Wild</p>
            <button  className="mt-5 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
                Learn More
            </button>
        </div>
        <div className="absolute right-52">
            <img
            src="/pexels-souvenirpixels-417074.jpg"
            alt="Hiking in the mountains"
            className="top-50 w-64 h-auto ml-96 object-contain z-20 opacity-40 p-0 right-44"
            />
            <p className="ml-96 font-bold text-3xl mt-4">Discover New Trails</p>
            <button  className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 ml-96">
                Learn More
            </button>
        </div>
        </div>
        

        
    )
}

export default Home;
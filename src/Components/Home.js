import React from "react";

const Home = () => {
    return (
        <div className="flex items-center justify-center"
            style={{
                backgroundImage: `url("https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0")`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "100vh",
            }}
        >
            <h1 className="text-white ml-4 sm:ml-8 md:ml-16 lg:ml-32 xl:ml-64 pr-4 sm:pr-8 md:pr-16 lg:pr-32 xl:pr-44">
                Your Guide to Epic Outdoor Journeys
            </h1>
            <div className="absolute left-4 sm:left-8 md:left-16 lg:left-32 xl:left-52">
                <img
                    src="/pexels-pixabay-35600.jpg"
                    alt="Hiking in the mountains"
                    className="top-50 w-32 sm:w-48 md:w-64 h-auto object-contain z-20 opacity-100 rounded-lg border border-white"
                />
                <p className="font-bold text-xl sm:text-2xl md:text-3xl mt-4">Into the Wild</p>
                <button className="mt-5 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
                    Learn More
                </button>
            </div>
            <div className="absolute right-4 sm:right-8 md:right-16 lg:right-32 xl:right-52">
                <img
                    src="/pexels-souvenirpixels-417074.jpg"
                    alt="Hiking in the mountains"
                    className="top-50 w-32 sm:w-48 md:w-64 h-auto object-contain z-20 opacity-100 rounded-lg border border-white"
                />
                <p className="font-bold text-xl sm:text-2xl md:text-3xl mt-4">Discover New Trails</p>
                <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
                    Learn More
                </button>
            </div>
        </div>
    )
}

export default Home;
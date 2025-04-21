import React from "react";
import BookCard from "../components/BookCard.jsx";


const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white relative overflow-hidden">
      {/* Background gradient */}

      <div className="flex flex-row justify-center mb-8 gap-[2rem] w-full h-full">
        <div className="bg-gray-800 rounded-lg shadow-lg w-[250px] h-[400px]"></div>
        <div className="bg-gray-800 rounded-lg shadow-lg w-[250px] h-[400px]"></div>
        <div className="bg-gray-800 rounded-lg shadow-lg w-[250px] h-[400px]"></div>
        <div className="bg-gray-800 rounded-lg shadow-lg w-[250px] h-[400px]"></div>
      </div>

      <BookCard />
 
    </div>
  );
};

export default HomePage;

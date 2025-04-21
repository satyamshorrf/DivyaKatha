import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";


import HomePage from "./pages/HomePage";

import GitaPage from "./pages/GitaPage";



function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white relative overflow-hidden">
      <div className="relative z-10 pt-20">
        <Navbar />

        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route path="/gita" element={<GitaPage />} />
       
        </Routes>

    
        
      </div>
    </div>
  );
}

export default App;

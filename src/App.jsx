import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import HomePage from "./pages/HomePage";
import SatayugaPage from "./pages/SatyayugaPage";
import TreatayugaPage from "./pages/TreatayugaPage";
import DvaparayugaPage from "./pages/DvaparayugaPage";
import KaliyugaPage from "./pages/KaliyugaPage";

import SatyayugaStoryPage from "./pages/SatyayugaStoryPage";
import TreatayugaStoryPage from "./pages/TreatayugaStoryPage";
import DvaparayugaStoryPage from "./pages/DvaparayugaStoryPage";
import KaliyugaStoryPage from "./pages/KaliyugaStoryPage";
import NotFoundPage from "./pages/NotFoundPage";
import Explorer from "./pages/ExplorerPage";
import ExplorerPage from "./pages/ExplorerPage";



function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white relative overflow-hidden">
      <div className="relative z-10 pt-20">
        <Navbar />

        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route path="/satyayuga" element={<SatayugaPage />} />
          <Route
            path="/satyayuga/story1"
            element={<SatyayugaStoryPage storyId="story1" />}
          />
          <Route
            path="/satyayuga/story2"
            element={<SatyayugaStoryPage storyId="story2" />}
          />
          <Route
            path="/satyayuga/story3"
            element={<SatyayugaStoryPage storyId="story3" />}
          />
          <Route
            path="/satyayuga/story4"
            element={<SatyayugaStoryPage storyId="story4" />}
          />
          <Route
            path="/satyayuga/story5"
            element={<SatyayugaStoryPage storyId="story5" />}
          />
          <Route path="/tretayuga" element={<TreatayugaPage />} />
          <Route
            path="/tretayuga/story1"
            element={<TreatayugaStoryPage storyId="story1" />}
          />
          <Route
            path="/tretayuga/story2"
            element={<TreatayugaStoryPage storyId="story2" />}
          />
          <Route
            path="/tretayuga/story3"
            element={<TreatayugaStoryPage storyId="story3" />}
          />
          <Route
            path="/tretayuga/story4"
            element={<TreatayugaStoryPage storyId="story4" />}
          />
          <Route
            path="/tretayuga/story5"
            element={<TreatayugaStoryPage storyId="story5" />}
          />
          <Route path="/dvaparayuga" element={<DvaparayugaPage />} />
          <Route
            path="/dvaparayuga/story1"
            element={<DvaparayugaStoryPage storyId="story1" />}
          />
          <Route
            path="/dvaparayuga/story2"
            element={<DvaparayugaStoryPage storyId="story2" />}
          />
          <Route
            path="/dvaparayuga/story3"
            element={<DvaparayugaStoryPage storyId="story3" />}
          />
          <Route
            path="/dvaparayuga/story4"
            element={<DvaparayugaStoryPage storyId="story4" />}
          />
          <Route
            path="/dvaparayuga/story5"
            element={<DvaparayugaStoryPage storyId="story5" />}
          />
          <Route path="/kaliyuga" element={<KaliyugaPage />} />
          <Route
            path="/kaliyuga/story1"
            element={<KaliyugaStoryPage storyId="story1" />}
          />
          <Route
            path="/kaliyuga/story2"
            element={<KaliyugaStoryPage storyId="story2" />}
          />
          <Route
            path="/kaliyuga/story3"
            element={<KaliyugaStoryPage storyId="story3" />}
          />
          <Route
            path="/kaliyuga/story4"
            element={<KaliyugaStoryPage storyId="story4" />}
          />
          <Route
            path="/kaliyuga/story5"
            element={<KaliyugaStoryPage storyId="story5" />}
          />
          <Route
            path="/explores"
            element={<ExplorerPage />}
          />

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
      <Footer />
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <img
          src="/imgs/flower_bg.png"
          alt="background"
          className="w-full h-full object-cover opacity-20"
        />
      </div>
    </div>
  );
}

export default App;

import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import HomePage from "./pages/HomePage";
import SatayugaPage from "./pages/SatyayugaPage";
import TreatayugaPage from "./pages/TreatayugaPage";
import DvaparayugaPage from "./pages/DvaparayugaPage";
import KaliyugaPage from "./pages/KaliyugaPage";

import TreatayugaStoryPage from "./pages/TreatayugaStoryPage";
import DvaparayugaStoryPage from "./pages/DvaparayugaStoryPage";

import NotFoundPage from "./pages/NotFoundPage";
import ExplorerPage from "./pages/ExplorerPage";

const pageVariants = {
  initial: {
    opacity: 0,
    x: "-100vw",
    scale: 0.8,
  },
  in: {
    opacity: 1,
    x: 0,
    scale: 1,
  },
  out: {
    opacity: 0,
    x: "100vw",
    scale: 1.2,
  },
};

const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 1,
};

function App() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-gray-900 text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <img
          src="/imgs/flower_bg.png"
          alt="background"
          className="w-full h-full object-cover opacity-20"
        />
      </div>

      <div className="relative z-10 pt-20">
        <Navbar />

        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route
              path="/"
              element={
                <motion.div
                  initial="initial"
                  animate="in"
                  exit="out"
                  variants={pageVariants}
                  transition={pageTransition}
                >
                  <HomePage />
                </motion.div>
              }
            />

            <Route
              path="/satyayuga"
              element={
                <motion.div
                  initial="initial"
                  animate="in"
                  exit="out"
                  variants={pageVariants}
                  transition={pageTransition}
                >
                  <SatayugaPage />
                </motion.div>
              }
            />

            <Route
              path="/tretayuga"
              element={
                <motion.div
                  initial="initial"
                  animate="in"
                  exit="out"
                  variants={pageVariants}
                  transition={pageTransition}
                >
                  <TreatayugaPage />
                </motion.div>
              }
            />

            <Route
              path="/tretayuga/story1"
              element={
                <motion.div
                  initial="initial"
                  animate="in"
                  exit="out"
                  variants={pageVariants}
                  transition={pageTransition}
                >
                  <TreatayugaStoryPage storyId="story1" />
                </motion.div>
              }
            />

            <Route
              path="/tretayuga/story2"
              element={
                <motion.div
                  initial="initial"
                  animate="in"
                  exit="out"
                  variants={pageVariants}
                  transition={pageTransition}
                >
                  <TreatayugaStoryPage storyId="story2" />
                </motion.div>
              }
            />

            <Route
              path="/tretayuga/story3"
              element={
                <motion.div
                  initial="initial"
                  animate="in"
                  exit="out"
                  variants={pageVariants}
                  transition={pageTransition}
                >
                  <TreatayugaStoryPage storyId="story3" />
                </motion.div>
              }
            />

            <Route
              path="/tretayuga/story4"
              element={
                <motion.div
                  initial="initial"
                  animate="in"
                  exit="out"
                  variants={pageVariants}
                  transition={pageTransition}
                >
                  <TreatayugaStoryPage storyId="story4" />
                </motion.div>
              }
            />

            <Route
              path="/tretayuga/story5"
              element={
                <motion.div
                  initial="initial"
                  animate="in"
                  exit="out"
                  variants={pageVariants}
                  transition={pageTransition}
                >
                  <TreatayugaStoryPage storyId="story5" />
                </motion.div>
              }
            />

            <Route
              path="/dvaparayuga"
              element={
                <motion.div
                  initial="initial"
                  animate="in"
                  exit="out"
                  variants={pageVariants}
                  transition={pageTransition}
                >
                  <DvaparayugaPage />
                </motion.div>
              }
            />

            <Route
              path="/dvaparayuga/story1"
              element={
                <motion.div
                  initial="initial"
                  animate="in"
                  exit="out"
                  variants={pageVariants}
                  transition={pageTransition}
                >
                  <DvaparayugaStoryPage storyId="story1" />
                </motion.div>
              }
            />

            <Route
              path="/dvaparayuga/story2"
              element={
                <motion.div
                  initial="initial"
                  animate="in"
                  exit="out"
                  variants={pageVariants}
                  transition={pageTransition}
                >
                  <DvaparayugaStoryPage storyId="story2" />
                </motion.div>
              }
            />

            <Route
              path="/dvaparayuga/story3"
              element={
                <motion.div
                  initial="initial"
                  animate="in"
                  exit="out"
                  variants={pageVariants}
                  transition={pageTransition}
                >
                  <DvaparayugaStoryPage storyId="story3" />
                </motion.div>
              }
            />

            <Route
              path="/dvaparayuga/story4"
              element={
                <motion.div
                  initial="initial"
                  animate="in"
                  exit="out"
                  variants={pageVariants}
                  transition={pageTransition}
                >
                  <DvaparayugaStoryPage storyId="story4" />
                </motion.div>
              }
            />

            <Route
              path="/dvaparayuga/story5"
              element={
                <motion.div
                  initial="initial"
                  animate="in"
                  exit="out"
                  variants={pageVariants}
                  transition={pageTransition}
                >
                  <DvaparayugaStoryPage storyId="story5" />
                </motion.div>
              }
            />

            <Route
              path="/kaliyuga"
              element={
                <motion.div
                  initial="initial"
                  animate="in"
                  exit="out"
                  variants={pageVariants}
                  transition={pageTransition}
                >
                  <KaliyugaPage />
                </motion.div>
              }
            />

            <Route
              path="/explores"
              element={
                <motion.div
                  initial="initial"
                  animate="in"
                  exit="out"
                  variants={pageVariants}
                  transition={pageTransition}
                >
                  <ExplorerPage />
                </motion.div>
              }
            />

            <Route
              path="*"
              element={
                <motion.div
                  initial="initial"
                  animate="in"
                  exit="out"
                  variants={pageVariants}
                  transition={pageTransition}
                >
                  <NotFoundPage />
                </motion.div>
              }
            />
          </Routes>
        </AnimatePresence>
      </div>
      <Footer />
    </div>
  );
}

export default App;

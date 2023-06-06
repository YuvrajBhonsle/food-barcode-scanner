import React, { lazy, Suspense } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Footer from './components/Footer'

const Landing = lazy(() => import("./pages/Landing"));
const FoodChoice = lazy(() => import("./pages/FoodChoice"));
const WhyFSG = lazy(() => import("./pages/WhyFSG"));
const Social = lazy(() => import("./pages/Social"));
const About = lazy(() => import("./pages/About"));
const Faq = lazy(() => import("./pages/Faq"));

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Suspense fallback={<h1 className="flex justify-center items-center text-xl font-semibold h-[80vh]">Loading...</h1>}>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/foodchoice" element={<FoodChoice />} />
          <Route path="/fsg" element={<WhyFSG />} />
          <Route path="/social" element={<Social />} />
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<Faq />} />
        </Routes>
      </Suspense>
      <Footer />
    </div>
  );
};

export default App;

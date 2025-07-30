import { createContext, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Features from "./Components/Features";
import Operations from "./Components/Operations";
import Testimonials from "./Components/Testimonials";
import Home from "./Components/Home";

export const Maincont = createContext();

function App() {
  return (
    <>
      <Maincont.Provider>
        <Navbar />
        <Home />
        <Routes>
          <Route path="/" element={<img />} />
          <Route path="features" element={<Features />} />
          <Route path="operations" element={<Operations />} />
          <Route path="testimonials" element={<Testimonials />} />
        </Routes>
      </Maincont.Provider>
    </>
  );
}

export default App;

import "./css/App.css";
//react
import { useState } from "react";
// router 
import { Routes, Route } from "react-router-dom";
//array of painting objects
import { gallery } from "./data";
// pages
import { PaintingInfo } from "./pages/PaintingInfo";
import { Home } from "./pages/Home";
//components
import { Nav } from "./components/Nav";


console.log(gallery);

export const fadeCard = (e) => {
  e.target.closest(".gallery-card").style.opacity = 0.5;
};

export const removeFade = (e) => {
  e.target.closest(".gallery-card").style.opacity = 1;
};

export const closeFullScreen = (e) => {
  e.target.closest(".full-screen").style.scale = 0
}

export const openFullScreen = (e) => {
  e.target.closest(".painting-page").previousElementSibling.style.scale = 1
}

function App() {
  const [focusedPainting, setFocusedPainting] = useState(null)
  const [play, setPlay] =  useState(false)

  return (
    <div className="container">
     <Nav focusedPainting={focusedPainting} play={play} setPlay={setPlay}  />
      
      <Routes>
        <Route  path="/" element={<Home gallery={gallery} setFocusedPainting={setFocusedPainting} />}  />
        <Route  path="/:paintingName" element={<PaintingInfo focusedPainting={focusedPainting} setFocusedPainting={setFocusedPainting} gallery={gallery} play={play} />}  />
      </Routes>

    </div>
  );
}

export default App;

import "./css/App.css";
//react
import { useState } from "react";
// router 
import { Routes, Route, Link, useNavigate } from "react-router-dom";
//array of painting objects
import { gallery } from "./data";
// pages
import { PaintingInfo } from "./pages/PaintingInfo";
import { Home } from "./pages/Home";


console.log(gallery);

export const fadeCard = (e) => {
  e.target.closest(".gallery-card").style.opacity = 0.5;
};

export const removeFade = (e) => {
  e.target.closest(".gallery-card").style.opacity = 1;
};

function App() {
  const [focusedPainting, setFocusedPainting] = useState(null)
  return (
    <div className="container">
      <nav>
        <h1>galleria.</h1>
        <p>start slideshow</p>
      </nav>

      
      <Routes>
        <Route  path="/" element={<Home gallery={gallery} setFocusedPainting={setFocusedPainting} />}  />
        <Route  path="/:paintingName" element={<PaintingInfo focusedPainting={focusedPainting} />}  />
      </Routes>

    </div>
  );
}

export default App;

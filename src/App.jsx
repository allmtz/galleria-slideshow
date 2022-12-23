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
  const navigate = useNavigate()

  function startSlideshow(location){
    let i = 0

    if(location.pathname === "/"){
      console.log("you are in root, start from the top")
      navigate(`/${gallery[1].name}`)

      let intervalID = setInterval( ()=>{
        i++
        if(i< gallery.length){
          navigate(`/${gallery[i].name}`)
          return
        }
        console.log("cleared")
        clearInterval(intervalID)
      },1000 )
      return
    }

    console.log("you are focused, start from focus")

    let index = gallery.indexOf(focusedPainting)

    let intervalID = setInterval( ()=>{
      console.log("running")
      index++
      if (index < gallery.length) {
        navigate(`/${gallery[index].name}`)
      }
      else{
        console.log("cleared")
        clearInterval(intervalID)
      }
    }, 1000 )
  }

  return (
    <div className="container">
     <Nav startSlideshow={startSlideshow} />
      
      <Routes>
        <Route  path="/" element={<Home gallery={gallery} setFocusedPainting={setFocusedPainting} />}  />
        <Route  path="/:paintingName" element={<PaintingInfo focusedPainting={focusedPainting} setFocusedPainting={setFocusedPainting} gallery={gallery} />}  />
      </Routes>

    </div>
  );
}

export default App;

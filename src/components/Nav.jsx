import { Link, useLocation, useNavigate } from "react-router-dom";
import { gallery } from "../data";

let isPlaying = false

export const Nav = ( {focusedPainting}  ) => {
  const location = useLocation()
  const navigate = useNavigate()

  function startSlideshow(location){
    isPlaying = !isPlaying

    //chooses at which painting to start the slideshow based on the current route
    let i = location.pathname === "/" ? 0 : gallery.indexOf(focusedPainting)
    
    navigate(`/${gallery[i].name}`)

    let intervalID = setInterval( ()=>{
      i++
      if(i< gallery.length && isPlaying){
        navigate(`/${gallery[i].name}`)
        return
      }
      console.log("cleared")
      clearInterval(intervalID)
      isPlaying = false
      i === gallery.length ? navigate(`/${gallery[gallery.length - 1].name}`) : ""
    },500 )
  }

  return (
    <nav>
      <Link to="/">
        <h1>galleria.</h1>
      </Link>
      <p onClick={ () => startSlideshow(location)}>{!isPlaying ? "start" : "stop"} slideshow</p>
    </nav>
  );
};
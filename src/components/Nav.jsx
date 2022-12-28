import { Link, useLocation, useNavigate } from "react-router-dom";
import { gallery } from "../data";
import { useRef } from "react";


export const Nav = ( {focusedPainting, play, setPlay}  ) => {
  const location = useLocation()
  const navigate = useNavigate()

  const intervalContainer = useRef(null)

  function stopSlideshow(){
    setPlay(false)
    clearInterval(intervalContainer.current)
  }

  function startSlideshow(location){
    if(play === false){
      setPlay(true)

      //chooses at which painting to start the slideshow based on the current route
      //resets the slideshow if on the last painting
      let i = 
        location.pathname === "/" 
          ? 0 
          : gallery.indexOf(focusedPainting) === gallery.length - 1 
          ? 0
          : gallery.indexOf(focusedPainting)

      
      // prevent navigating to the same painting twice if starting the slideshow from a specific painting
      i === 0 ? navigate( `/${gallery[i].name}` ) : ""
  
      intervalContainer.current = setInterval( ()=>{
        i++
        if(i < gallery.length){
          navigate( `/${gallery[i].name}` )
          return
        }
        stopSlideshow()
      },500 )
      return
    }
    // stopping the slideshow before it reaches the last painting
    stopSlideshow()
  }
  return (
    <nav>
      <Link to="/">
        <h1>galleria.</h1>
      </Link>
      <p onClick={ () => startSlideshow(location)}>{play ? "stop" : "start"} slideshow</p>
    </nav>
  );
};
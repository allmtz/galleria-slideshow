import { Link, useLocation, useNavigate } from "react-router-dom";
import { gallery } from "../data";

export const Nav = ( {focusedPainting}  ) => {
  const location = useLocation()
  const navigate = useNavigate()

  function startSlideshow(location){
    //chooses where to start the slideshow depending on the current route
    let i = location.pathname === "/" ? 0 : gallery.indexOf(focusedPainting)
    
    navigate(`/${gallery[i].name}`)

      let intervalID = setInterval( ()=>{
        i++
        if(i< gallery.length){
          navigate(`/${gallery[i].name}`)
          return
        }
        console.log("cleared")
        clearInterval(intervalID)
      },500 )
  
  }

  return (
    <nav>
      <Link to="/">
        <h1>galleria.</h1>
      </Link>
      <p onClick={ () => startSlideshow(location)}>start slideshow</p>
    </nav>
  );
};
import { Link, useLocation } from "react-router-dom";

export const Nav = ( {startSlideshow} ) => {
  const location = useLocation()

  return (
    <nav>
      <Link to="/">
        <h1>galleria.</h1>
      </Link>
      <p onClick={ () => startSlideshow(location)}>start slideshow</p>
    </nav>
  );
};
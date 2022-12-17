import { Link } from "react-router-dom";

export const Nav = () => {
  return (
    <nav>
      <Link to="/">
        <h1>galleria.</h1>
      </Link>
      <p>start slideshow</p>
    </nav>
  );
};
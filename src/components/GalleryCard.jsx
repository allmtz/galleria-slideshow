import { Link } from "react-router-dom";
import { fadeCard } from "../App"
import { removeFade } from "../App"

export const GalleryCard = ({ painting, setFocusedPainting }) => {
  return (
    <Link
      to={`/${encodeURI(painting.name)}`}
      className="gallery-card"
      onMouseEnter={fadeCard}
      onMouseLeave={removeFade}
      onClick={ () => setFocusedPainting(painting) }
    >
      <div className="gradient"></div>
      {/* <img src={"src/" + painting.images.thumbnail} alt={painting.name} /> */}
      <img src={painting.images.thumbnail} alt={painting.name} />
     
      <div className="painting-info">
        <h2>{painting.name}</h2>
        <p>{painting.artist.name}</p>
      </div>
    </Link>
  );
};

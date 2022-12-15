import { GalleryCard } from "../components/GalleryCard";
import { nanoid } from "nanoid";

export const Home = ({ gallery, setFocusedPainting }) => {
  return (
    <div className="gallery">
      {gallery.map((painting) => (
        <GalleryCard
          key={nanoid()}
          painting={painting}
          setFocusedPainting={setFocusedPainting}
        />
      ))}
    </div>
  );
};
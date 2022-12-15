import "./css/App.css";
import { GalleryCard } from "./components/GalleryCard";
import { gallery } from "./data";
import { nanoid } from "nanoid";

console.log(gallery);

const fadeCard = (e) => {
  e.target.closest(".gallery-card").style.opacity = 0.5;
};

const removeFade = (e) => {
  e.target.closest(".gallery-card").style.opacity = 1;
};

function App() {
  return (
    <div className="container">
      <nav>
        <h1>galleria.</h1>
        <p>start slideshow</p>
      </nav>

      <div className="gallery">
        {gallery.map((painting) => (
          <GalleryCard
            key={nanoid()}
            painting={painting}
            fadeCard={fadeCard}
            removeFade={removeFade}
          />
        ))}
      </div>
    </div>
  );
}

export default App;

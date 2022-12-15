export const GalleryCard = ({ painting, fadeCard, removeFade }) => {
  return (
    <div
      className="gallery-card"
      onMouseEnter={fadeCard}
      onMouseLeave={removeFade}
    >
      <div className="gradient"></div>
      <img src={"src/" + painting.images.thumbnail} alt={painting.name} />
      <div className="painting-info">
        <h2>{painting.name}</h2>
        <p>{painting.artist.name}</p>
      </div>
    </div>
  );
};

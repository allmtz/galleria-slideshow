import { useEffect } from "react"
import { useParams } from "react-router-dom"

export const PaintingInfo = ( {setFocusedPainting,focusedPainting, gallery} ) => {
    let {paintingName} = useParams()

    useEffect(() => {
        let paintingFromUrl = gallery.find(painting => painting.name === paintingName)
        setFocusedPainting(paintingFromUrl)
    },[paintingName])


    return(
        <div>
            <h1>{focusedPainting.name}</h1>
            <div className="img-container">
                <img src={ "src/" + focusedPainting.images.hero.small} alt={focusedPainting.name} />
                <div className="img-info">
                    <h1>{focusedPainting.name}</h1>
                    <p>{focusedPainting.artist.name}</p>
                </div>
                <section className="description">
                    <img src={"src/" + focusedPainting.artist.image} alt={focusedPainting.artist.name} className="artist-portrait" />
                    <p>{focusedPainting.date}</p>
                    <p>{focusedPainting.description}</p>
                </section>
            </div>

            <a href={focusedPainting.source}>go to source</a>
            <progress value="1" max="100"></progress>

            <section className="slideshow-controls">
                <div>
                    <h3>{focusedPainting.name}</h3>
                    <p>{focusedPainting.artist.name}</p>
                </div>
                <div>
                    <img src={"src/assets/shared/icon-back-button.svg"} alt="back arrow" />
                    <img src={"src/assets/shared/icon-next-button.svg"} alt="forward arrow" />
                </div>
            </section>
        </div>
        
    )
}
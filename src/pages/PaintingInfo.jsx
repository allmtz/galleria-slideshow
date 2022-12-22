import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { closeFullScreen, openFullScreen } from "../App"

export const PaintingInfo = ( {setFocusedPainting,focusedPainting, gallery, displayImage} ) => {
    let {paintingName} = useParams()

    useEffect(() => {
        let paintingFromUrl = gallery.find(painting => painting.name === paintingName)
        setFocusedPainting(paintingFromUrl)
    },[paintingName])

    return(
        <> 
        { focusedPainting !== null ? 
        <>
    <div className="full-screen">
        <div>
            <p onClick={closeFullScreen}>close</p>
            <img src={ "src/" + focusedPainting.images.hero.small} alt={focusedPainting.name} />
        </div>
    </div>
    <div className="painting-page">
        
        <div className="img-container">

            <div className="view-image" onClick={openFullScreen}>
                <img  src={ "src/assets/shared/icon-view-image.svg"} alt="" />
                <p>view image</p>
            </div>

            <img src={ "src/" + focusedPainting.images.hero.small} alt={focusedPainting.name} />
            <div className="img-info">
                <h2>{focusedPainting.name}</h2>
                <p>{focusedPainting.artist.name}</p>
            </div>
        </div>

            <section className="painting-information">
                <img 
                    src={"src/" + focusedPainting.artist.image} 
                    alt={focusedPainting.artist.name} 
                    className="artist-portrait" />
                <p className="year">{focusedPainting.year}</p>
                <p className="description">{focusedPainting.description}</p>
            </section>

        <a href={focusedPainting.source} target="_blank" rel="noreferrer" >go to source</a>
        <progress value="1" max="10"></progress>

        <section className="slideshow-controls">
            <div>
                <h4>{focusedPainting.name}</h4>
                <p>{focusedPainting.artist.name}</p>
            </div>
            <div className="arrows" >
                <img src={"src/assets/shared/icon-back-button.svg"} alt="back arrow" />
                <img src={"src/assets/shared/icon-next-button.svg"} alt="forward arrow" />
            </div>
        </section>
    </div> 
    </>
    : ""
    }
        </>
    )
}
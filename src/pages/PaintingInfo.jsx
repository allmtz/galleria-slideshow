import { useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { closeFullScreen, openFullScreen } from "../App"

export const PaintingInfo = ( {setFocusedPainting,focusedPainting, gallery, play } ) => {
    let {paintingName} = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        let paintingFromUrl = gallery.find(painting => painting.name === paintingName)
        setFocusedPainting(paintingFromUrl)
    },[paintingName])

    function manuallyChangeSlide(direction){
        let currentIndex = gallery.indexOf(gallery.find( painting => painting.name === focusedPainting.name) )

        //disable skip buttons when the slideshow is playing and when on the first or last painting
        if(play) return
        if( direction==="back" && currentIndex === 0 || direction=="forward" && currentIndex === gallery.length - 1){
            return
        }

        direction === "forward" ?  navigate(`/${gallery[currentIndex + 1].name}`) : navigate(`/${gallery[currentIndex - 1].name}`)
    }
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
                <div className="info-container">
                    <img 
                        src={"src/" + focusedPainting.artist.image} 
                        alt={focusedPainting.artist.name} 
                        className="artist-portrait" />
                    <p className="year">{focusedPainting.year}</p>
                    <p className="description">{focusedPainting.description}</p>
                    <div className="link-container">
                    <a href={focusedPainting.source} target="_blank" rel="noreferrer" >go to source</a>
                    </div>
                </div>
            </section>

        <progress value={gallery.indexOf(focusedPainting) + 1 } max={gallery.length}></progress>

        <section className="slideshow-controls">
            <div>
                <h4>{focusedPainting.name}</h4>
                <p>{focusedPainting.artist.name}</p>
            </div>
            <div className="arrows" >
                <img className={play ? "disabled" : ""} src={"src/assets/shared/icon-back-button.svg"} alt="back arrow" onClick={ () => manuallyChangeSlide("back")}  />
                <img className={play ? "disabled" : ""} src={"src/assets/shared/icon-next-button.svg"} alt="forward arrow" onClick={() => manuallyChangeSlide("forward")}/>
            </div>
        </section>
    </div> 
    </>
    : ""
    }
        </>
    )
}
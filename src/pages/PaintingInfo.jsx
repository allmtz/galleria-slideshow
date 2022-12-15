export const PaintingInfo = ( {focusedPainting} ) => {
    return(
        <div>
            {console.log(focusedPainting)}
            <h1>{focusedPainting.name}</h1>
        </div>
    )
}
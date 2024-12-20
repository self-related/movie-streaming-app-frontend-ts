import "./Gallery.css";

export default function Gallery({movies, large}) {
    const thumbnailType = large ? "large" : "compact"

    const moviesList = movies?.map(({image, info}, index) => (
        <div className={`thumbnail thumbnail--${thumbnailType}`} key={index}>
            <img src={image} alt={info.name} className="thumbnail__image" />
            <div className="thumbnail__info">
                <h3>{info.name}</h3>
                <p>{info.year} | {info.genre}</p>
            </div>
        </div>
    ));

    return (
        <div className="gallery">
            {moviesList ?? "..."}
        </div>
    );
}
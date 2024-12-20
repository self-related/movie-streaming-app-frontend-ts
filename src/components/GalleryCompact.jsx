import "./GalleryCompact.css"

export default function GalleryCompact({movies}) {

    const moviesList = movies?.map(({image, info}, index) => (
        <div className="thumbnail_compact" key={index}>
            <img src={image} alt={info.name} className="thumbnail_compact__image" />
            <div className="thumbnail_compact__info">
                <h3>{info.name}</h3>
                <p>{info.year} | {info.genre}</p>
            </div>
        </div>
    ));

    return (
        <div className="gallery_compact">
            {moviesList ?? "..."}
        </div>
    );
}


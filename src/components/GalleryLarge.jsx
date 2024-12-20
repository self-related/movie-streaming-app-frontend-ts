import "./GalleryLarge.css";

export default function GalleryLarge({movies}) {

    const moviesList = movies?.map(({image, info}, index) => (
        <div className="thumbnail_large" key={index}>
            <img src={image} alt={info.name} className="thumbnail_large__image" />
            <div className="thumbnail_large__info">
                <h3>{info.name}</h3>
                <p>{info.year} | {info.genre}</p>
            </div>
        </div>
    ));

    return (
        <div className="gallery_large">
            {moviesList ?? "..."}
        </div>
    );
}
import "./GalleryCompact.css"

/**
 * @typedef {Object} Movie
 * @prop {String} Movie.name
 * @prop {String} Movie.genre
 * @prop {String} Movie.year 
 * 
 * @param {Object} props - GalleryCompact props
 * @param {Array<Movie>} props.movies - тип для {movies}
*/
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


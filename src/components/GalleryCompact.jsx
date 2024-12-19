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


    const moviesList = movies?.map((movie, index) => (
        <div className="thumbnail_compact" key={index}>
            <img src={movie.image} alt={movie.name} className="thumbnail_compact__image" />
            <div className="thumbnail_compact__info">
                <h3>{movie.name}</h3>
                <p>{movie.year} | {movie.genre}</p>
            </div>
        </div>
    ));

    return (
        <div className="gallery_compact">
            {moviesList ?? "..."}
        </div>
    );
}


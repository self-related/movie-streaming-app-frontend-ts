import { useEffect } from "react";
import "./Gallery.css";
import { useClickedMovieContext } from "../App";
import LikeIcon from "../assets/icons/heart.svg";
import LikeIconPressed from "../assets/icons/like-icon-pressed.svg";
import { handleLikeClick } from "../utils.ts";

// type imports
import { Movie } from "../pages/home/Home.tsx";
import { MovieInfo } from "../pages/home/Home.tsx";

interface GalleryProps {
    movies: Movie[] | null,
    large?: boolean
}

export default function Gallery({movies, large}: GalleryProps) {
    const thumbnailType = large ? "large" : "compact"; // аттрибут для широких/узких превью
    
    const [clickedMovie, setClickedMovie] = useClickedMovieContext();

    const handleThumbnailClick = (id: number, image: string, info: MovieInfo) => (event: Event) => {

        // закрыть инфоблок, если повторный клик
        if (id === clickedMovie?.id) {
            setClickedMovie(null);
            return;
        }

        setClickedMovie({
            id,
            image,
            info,
            detailedDescription: "TEST",
            element: event.target // чтобы использовать в useEffect
        });

    };



    // эффект - прокрутить до выбранного превью
    useEffect(() => {
        if (clickedMovie == null) {
            return;
        }

        // получить координаты картинки превью
        const coords = clickedMovie.element.getBoundingClientRect();

        // проскроллить до верхушки превью
        scrollBy({
            top: coords.top,
            behavior: "smooth"
        });

    }, [clickedMovie]);

    const moviesList = movies?.map(({image, info, id}: Movie, index: number) => (
        <div className={`thumbnail thumbnail--${thumbnailType} ${clickedMovie && clickedMovie?.id !== id ? "thumbnail--shadowed" : ""}`} key={index} onClick={handleThumbnailClick(id, image, info)}>
            
            <button className="thumbnail__like_button" onClick={handleLikeClick}> 
                <img src={info.is_favorite ? LikeIconPressed : LikeIcon} alt="like button"  /> 
            </button>

            <img src={image} alt={info.name} className="thumbnail__image" />
            <div className="thumbnail__info">
                <h3>{info.name}</h3>
                <p>{info.year} | {info.genre}</p>
            </div>
            
        </div>
    ));

    return (
        <>
            <div className="gallery">
                {moviesList ?? "Loading..."}
            </div>
        </>
    );
}
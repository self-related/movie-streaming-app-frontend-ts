import { useClickedMovieContext } from "../App";
import HeartIcon from "../assets/icons/heart.svg";
import { getDurationString, getShortDescription } from "../utils";
import "./DetailedInfo.css";


export default function DetailedInfo() {

    const [clickedMovie, setClickedMovie] = useClickedMovieContext();

    
    const handleCloseDetailedPreview = () => {
        setClickedMovie(null);
    };

    return clickedMovie
    ? (
        <>
        <div className="detailed_info__empty_space" onClick={handleCloseDetailedPreview}>

        </div>
            <div className="detailed_info" >
                <button className="detailed_info__close_button" onClick={handleCloseDetailedPreview}>x</button>
                <div className="detailed_info__image_block">
                    <img src={`${clickedMovie?.image}`} alt={clickedMovie?.info?.name} />
                </div>

                <div className="detailed_info__text_block">

                    <div className="detailed_info__header">
                        <h3>{clickedMovie?.info?.name}</h3> 
                        <p><span>★</span>{clickedMovie?.info?.rating}/10</p>
                    </div>

                    <p className="detailed_info__metadata">
                        <span>{clickedMovie?.info?.year}</span> 
                        <span>{clickedMovie?.info?.genre}</span> 
                        <span>{getDurationString(clickedMovie?.info?.duration)}</span>
                    </p>

                    {/* тут описание фильма */}
                    <p>{getShortDescription(clickedMovie?.info?.description)}</p>
                    <button className="detailed_info__watch_button">Watch now</button>
                    <button className="detailed_info__like_button"> <img src={HeartIcon} height="10px"/> </button>

                </div>
            </div>

        </>
)  
    : "";
    
}
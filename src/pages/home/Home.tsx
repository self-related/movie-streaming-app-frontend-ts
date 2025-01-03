import BannerTrending from "./BannerTrending";
import "./Home.css";
import BannerImage from "../../assets/banner.svg";
import { useState } from "react";
import { useEffect } from "react";
import Gallery from "../../components/Gallery";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

export interface MovieInfo {
    name: string,
    year: number,
    genre: string,
    duration: number,
    is_favorite: boolean,
    rating: number,
    description: string
}

export interface Movie {
    id: number,
    info: MovieInfo,
    image: string
}

export default function Home() {
    // временная заглушка на баннер
    const trendingMovie = {
        name: "Insider",
        image: BannerImage,
        year: 2022,
        genre: "Comedy horror",
        season: "Season 1"
    }

    const [trendingMovies, setTrendingMovies] = useState<Movie[] | null>(null);
    const [continueMovies, setContinueMovies] = useState<Movie[] | null>(null);

    const [cookies] = useCookies<string>([]);
    const navigate = useNavigate();


    useEffect(() => {
        if (cookies.first_visit !== false) {
            navigate("/welcome");
            return;
        }
    
        
        fetch("/temp_trending_movies.json")
        .then(res => res.json())
        .then(data => setTrendingMovies(data));

        fetch("/temp_continue_movies.json")
        .then(res => res.json())
        .then(data => setContinueMovies(data));


    }, []);

    
    return (
        <div className="home_wrapper">
            <BannerTrending trendingMovie={trendingMovie} />
            <div className="trending_block">
                <h2>Trending</h2>
                <Gallery movies={trendingMovies} />
            </div>
            <div className="continue_block">
                <h2>Continue watching</h2>
                <Gallery movies={continueMovies} large />
            </div>
        </div>
    );
}
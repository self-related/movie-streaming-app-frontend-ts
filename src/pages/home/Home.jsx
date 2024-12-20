import BannerTrending from "./BannerTrending";
import "./Home.css";
import BannerImage from "../../assets/banner.svg";
import GalleryCompact from "../../components/GalleryCompact";
import { useState } from "react";
import { useEffect } from "react";

export default function Home() {
    // временная заглушка на баннер
    const trendingMovie = {
        name: "Insider",
        image: BannerImage,
        year: 2022,
        genre: "Comedy horror",
        season: "Season 1"
    }

    const [trendingMovies, setTrendingMovies] = useState(null);

    useEffect(() => {
        fetch("/temp_trending_movies.json")
        .then(res => res.json())
        .then(data => setTrendingMovies(data));
    }, []);

    
    return (
        <div className="home_wrapper">
            <BannerTrending trendingMovie={trendingMovie} />
            <div className="trending_block">
                <h2>Trending</h2>
                <GalleryCompact movies={trendingMovies} />
            </div>
            <div>Continue watching</div>
        </div>
    );
}
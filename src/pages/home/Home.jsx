import BannerTrending from "./BannerTrending";
import "./Home.css";
import BannerImage from "../../assets/banner.svg";

export default function Home() {
    // временная заглушка на баннер
    const trendingMovie = {
        name: "Insider",
        image: BannerImage,
        year: 2022,
        genre: "Comedy horror",
        season: "Season 1"
    }

    
    return (
        <div className="home_wrapper">
            <BannerTrending trendingMovie={trendingMovie} />
            <div>Trending</div>
            <div>Continue watching</div>
        </div>
    );
}
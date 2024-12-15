import { Link } from "react-router-dom";
import "./NavBarLeft.css";

export default function NavBarLeft() {

    return (
        <nav className="navbar_left">
            <Link to="/welcome" className="navbar_left__logo" title="Watch movies for money :)"> <img src="/logo.svg" alt="logo" height={22}/> WATCH</Link>
            <Link to="/" className="navbar_left__link"> <img src="/icons/home.svg" /> Home</Link>
            <Link to="/favorites" className="navbar_left__link"> <img src="/icons/favorites.svg" /> Favorites</Link>
            <Link to="/trending" className="navbar_left__link"> <img src="/icons/trending.svg" /> Trending</Link>
            <Link to="/" className="navbar_left__link"> <img src="/icons/coming-soon.svg" /> Coming Soon</Link>

            <div className="navbar_left__wrapper_div">
                <Link to="/" className="navbar_left__link"> <img src="/icons/community.svg" /> Community</Link>
                <Link to="/" className="navbar_left__link"> <img src="/icons/social.svg" /> Social</Link>
            </div>

            <div className="navbar_left__wrapper_div">
                <Link to="/" className="navbar_left__link"> <img src="/icons/settings.svg" /> Settings</Link>
                <Link to="/" className="navbar_left__link"> <img src="/icons/logout.svg" /> Logout</Link>
            </div>
        </nav>
    );
}
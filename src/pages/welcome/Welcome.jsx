import WelcomeBackgroundImage from "/welcome.png";
import "./Welcome.css";
import { Link, useNavigate } from "react-router-dom";

export default function Welcome() {
    const navigate = useNavigate();
    const handleSignInClick = () => {
        navigate("/");
    };

    return (
        <div className="welcome-page" >
            <img src={WelcomeBackgroundImage} alt="welcome" />
            <header className="welcome_header">
                <img src={"/logo.svg"} alt="logo" />
                <h1>WATCH</h1>
                <p>Enjoy the newest movies</p>
            </header>
            <div className="welcome_login">
                <button onClick={handleSignInClick}>Log in</button>
                <p>No account? <Link to="/" className="welcome_login__links welcome_login__links--bold">Sign up</Link>
                </p>
                <p><Link to="/"className="welcome_login__links welcome_login__links--small">Proceed to the home page</Link></p>
            </div>
        </div>
    );
}
import { Link } from "react-router-dom";
import "./Navigation.css";

export default function Navigation() {
    return (
        <nav className="nav-container">
            <Link to="/" className="nav-link">
                Home
            </Link>
            <Link to="/glade" className="nav-link">
                The Glade
            </Link>
            <Link to="/falling" className="nav-link">
                Falling...
            </Link>
            <Link to="/about" className="nav-link">
                About A Puppy
            </Link>
        </nav>
    );
}

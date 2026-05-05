import NavItem from "./navItem";
import "./Navigation.css";

export default function Navigation() {
    return (
        <nav className="flex justify-around items-center p-0 sticky top-0 bg-[#333] z-50">
            <NavItem to="/">Home</NavItem>
            <NavItem to="/glade">The Glade</NavItem>
            <NavItem to="/falling">Falling...</NavItem>
            <NavItem to="/about">About</NavItem>
        </nav>
    );
}

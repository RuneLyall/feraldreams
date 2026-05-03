import { Link } from "react-router-dom";
import Divide from "../useful/divider";

export default function Landing() {
    return (
        <main className="page-full bg-mist-700 flex-1 text-sky-aqua">
            <div className="page-container">
                <h1 className="page-title">Welcome to my Den</h1>
                <p className="page-text">
                    I see, it would appear you have found your way to my little
                    hideaway within the void. It's a pleasure to make your
                    acquaintance, I welcome you to this humble den and would
                    like you invite you further.
                </p>
                <Divide />
                <p className="page-text">
                    To your left a small{" "}
                    <Link to="/Glade" className="subtle-link">
                        glade
                    </Link>
                    , a peace amongst the trees with a view of the stars and a
                    quiet but warm breeze flows. The scent of wildgrass will be
                    your constant companion and you are free to linger as long
                    as you like. Though I do kindly ask please don't break
                    anything or uproot anything, it's supposed to be a relaxing
                    space, not a playground.
                </p>
                <Divide />
                <p className="page-text">
                    To your right, you will find a place of strange energy,
                    where the laws of space and time sometimes don't obey what
                    they should. If you{" "}
                    <Link to="/Falling" className="subtle-link">
                        venture
                    </Link>{" "}
                    that way, I'm not sure where you will end up, but it could
                    be fun regardless.
                </p>
                <p className="page-text text-sky-800">
                    In the back, well, only those that know me unlock the space
                    within there.
                </p>
            </div>
        </main>
    );
}

import { Link } from "react-router-dom";
import StyledLink from "../useful/StyledLink";
export default function Glade() {
    return (
        <main className="page-full">
            <div className="page-container">
                <h2 className="page-title">
                    A soft breeze and the scent of grass
                </h2>
                <p className="page-text">
                    You've reached the spot I come to relax, the place where I
                    keep my thoughts and my visions, this is where you will find
                    the things I work on, the ideas I have, and the stuff I
                    sometimes don't say outloud
                </p>
                <p className="page-text">
                    Wanted to make this section for a long long time, so here it
                    is, I'm not a pro photographer, I don't try to be, but I
                    love nature, so, here.{" "}
                    <StyledLink to="/Gallery">Gallery</StyledLink>
                </p>
                <p className="page-text">
                    This next one is more just for me and my partner but yer
                    welcome to take a look, it's basically just a{" "}
                    <StyledLink to="/RecipeBook">Recipe Book</StyledLink>. It
                    has a few of our favorites and stuff we want to someday try.
                </p>
                <p className="page-text">
                    In essence, this is where all the random projects, the
                    Python, the Flask, the random JS that I don't put anywhere
                    lives. Most likely within my GitHub. Regardless, hope you
                    enjoy your stay.
                </p>
                <p className="page-text">
                    Eventually I'd like to show everyone who comes here all
                    sides of my creative stuff, I have a lot of things I'd like
                    to eventually work on. In truth, this is kinds the space
                    where I feel most at ease in essence.
                </p>
                <p className="page-text">
                    Alas, I'm not sure what else to say for the present, either
                    way, yer welcome to stay and enjoy your time relaxing here
                    in this tranquil space.""
                </p>
                <p>
                    <a
                        href="https://github.com/RuneLyall"
                        target="_blank"
                        rel="noopener noreferrer">
                        Nothing for Now(GitHub)
                    </a>
                </p>
            </div>
        </main>
    );
}

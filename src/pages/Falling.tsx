import { Link } from "react-router-dom";
import Divide from "../useful/divider";

export default function Falling() {
    return (
        <main className="page-full">
            <div className="page-container">
                <h1 className="page-title">Falling...</h1>
                <p className="page-text">
                    So, you came this way, take a breath, calm down, you aren't
                    in danger. Just let yourself stand up, you won't keep
                    falling. ...See, you're fine, now that yer here, welcome.
                </p>
                <Divide />
                <p className="page-text">
                    This place is a bit strange, it doesn't really follow any
                    guidlines or rules, it's just sorta, here, you might find a
                    huge repository of knowlege, or you might find a milkbone,
                    who knows.
                </p>
                <Divide />
                <p className="page-text">
                    Either way, over there is that{" "}
                    <Link to="/Wiki" className="subtle-link">
                        repository
                    </Link>{" "}
                    I mentioned, it's sorta, big, and has a bunch of different
                    creatures listed in it.
                </p>
                <p className="page-text">
                    Over there is this interactive adventure that's sorta, still
                    generating itself, might not work, might, can't say for
                    sure.((Currently doesn't work, flat out doesn't exist
                    sorry))
                </p>
                <p className="page-text">
                    Up there is, well, I'll just let you see that one for
                    yourself.
                </p>
            </div>
        </main>
    );
}

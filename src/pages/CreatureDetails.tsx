import { useParams, Link } from "react-router-dom";
import creatures from "../data/creatures.json";
import "./Wiki.css";

export default function CreatureDetails() {
    const { id } = useParams();
    const creature = creatures.find((c) => c.id === id);

    if (!creature) {
        return <h2>Creature not found</h2>;
    }

    return (
        <main className="page-full">
            <div className="page-container">
                <h1 className="page-title">{creature.title}</h1>
                <p className="page-deeper">{creature.content}</p>

                {creature.author && (
                    <p className="page-text">Author: {creature.author} </p>
                )}
                {creature.type && (
                    <p className="page-text">Type: {creature.type}</p>
                )}
                {creature.license && (
                    <p className="page-text">
                        Licensed under: {creature.license}
                    </p>
                )}
                {creature.source && (
                    <p className="page-text">
                        Source:{" "}
                        <a href={creature.source} target="_blank">
                            {creature.source}
                        </a>
                    </p>
                )}
                <p>
                    <Link to="/Wiki" className="entry-back">
                        Back
                    </Link>
                </p>
            </div>
        </main>
    );
}

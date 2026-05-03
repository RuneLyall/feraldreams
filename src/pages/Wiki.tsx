import creatures from "../data/creatures.json";
import "./Wiki.css";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Wiki() {
    const [search, setSearch] = useState("");
    const [searchMode, setSearchMode] = useState("title");

    function handleSearch(e: React.ChangeEvent<HTMLInputElement>) {
        setSearch(e.target.value);
    }
    const handleClear = () => {
        setSearch("");
    };
    const searchData = creatures
        .filter((creature) => {
            const query = search.toLowerCase();

            if (searchMode === "title") {
                return creature.title.toLowerCase().includes(query);
            }

            if (searchMode === "tag") {
                return creature.tags?.some((tag) =>
                    tag.toLowerCase().includes(query),
                );
            }

            if (searchMode === "type") {
                return creature.type.toLowerCase().includes(query);
            }
        })
        .sort((a, b) => a.title.localeCompare(b.title));
    return (
        <main className="page-full">
            <div className="page-container">
                <h1 className="page-title">The creatures from Lore</h1>
                <p className="page-text">
                    Here you will find a list of creatures, monster, entities
                    from across the multiverse of time and space, hopefully they
                    have the correct details, if not, I apologize. Eventually I
                    want to add the tools for people to be able to add entries
                    of their own but that's a long long ways away .. probably
                    once I can afford to change web hosts.
                </p>
                <ul>
                    <div className="flex grow justify-center align-middle">
                        <label className="text-white font-bold">
                            Looking for a specific creature? {"  "}
                            <div className="relative inline-block">
                                <input
                                    type="search"
                                    className="rounded-xl text-amber-300 bg-black pr-5 pt-1 pl-2"
                                    onChange={handleSearch}
                                    value={search}
                                />

                                <button
                                    onClick={handleClear}
                                    className={`absolute right-2 top-1/2 -translate-y-1/2 text-amber-300 transition-opacity duration-300 ${
                                        search
                                            ? "opacity-100"
                                            : "opacity-0 pointer-events-none"
                                    }`}>
                                    ✕
                                </button>
                            </div>
                        </label>
                        {"   "}
                        <select
                            className=" rounded-xl bg-black text-amber-300 w-30 p-1 ml-2"
                            value={searchMode}
                            onChange={(e) => setSearchMode(e.target.value)}>
                            <option value="title">Title</option>
                            <option value="tag">Tag</option>
                            <option value="type">Type</option>
                        </select>
                    </div>
                    <div className="entry-grid">
                        {searchData.length > 0 ? (
                            searchData.map((creature) => (
                                <div
                                    className="entry-card"
                                    key={creature.title}>
                                    <Link
                                        to={`/CreatureDetails/${creature.id}`}>
                                        <h2 className="entry-card-title">
                                            {creature.title}
                                        </h2>
                                    </Link>
                                </div>
                            ))
                        ) : (
                            <p className="page-text text-center col-span-full">
                                Sorry no results found with that search.
                            </p>
                        )}
                    </div>
                </ul>
            </div>
        </main>
    );
}

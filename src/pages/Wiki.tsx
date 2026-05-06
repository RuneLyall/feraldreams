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
        <main className="w-full flex justify-center min-w-0 min-h-0">
            <div className="w-[90%] max-w-7xl py-6">
                <h1 className="text-5xl text-pine-teal-600 text-center pb-4">
                    The creatures from Lore
                </h1>
                <p className="text-deep-lilac-300 text-lg leading-relaxed pb-3">
                    Here you will find a list of creatures, monster, entities
                    from across the multiverse of time and space, hopefully they
                    have the correct details, if not, I apologize. Eventually I
                    want to add the tools for people to be able to add entries
                    of their own but that's a long long ways away .. probably
                    once I can afford to change web hosts.
                </p>
                <ul>
                    <div className="flex flex-col sm:flex-row gap-2 items-center justify-center w-full">
                        <label className="text-white font-bold">
                            <p>Looking for a specific creature?</p> {"  "}
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
                            className=" rounded-xl bg-black text-amber-300 w-30 p-1 ml-2 "
                            value={searchMode}
                            onChange={(e) => setSearchMode(e.target.value)}>
                            <option value="title">Title</option>
                            <option value="tag">Tag</option>
                            <option value="type">Type</option>
                        </select>
                    </div>
                    <div className="grid gap-6  p-4 max-w-7xl mx-auto md:grid-cols-[repeat(4,minmax(250px,1fr))] min-w-0 ">
                        {searchData.length > 0 ? (
                            searchData.map((creature) => (
                                <div
                                    className="bg-[#1e1e1e] text-[#f2f2f2] p-5 rounded-xl border border-[whitesmoke] shadow-[0_4px_12px_rgba(0,0,0,0.25)] transition-shadow duration-150 ease-in-out min-h-22.5  flex flex-col justify-center items-center text-center"
                                    key={creature.title}>
                                    <Link
                                        to={`/CreatureDetails/${creature.id}`}>
                                        <h2 className="overflow-hidden text-ellipsis line-clamp-2 overflow-wrap-anywhere min-w-0">
                                            {creature.title}
                                        </h2>
                                    </Link>
                                </div>
                            ))
                        ) : (
                            <p className="text-deep-lilac-300 text-lg leading-relaxed pb-3 text-center col-span-full">
                                Sorry no results found with that search.
                            </p>
                        )}
                    </div>
                </ul>
            </div>
        </main>
    );
}

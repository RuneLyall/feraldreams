import photos from "../data/photos.json";
import { useState, useEffect, useRef } from "react";
interface GalleryItem {
    id: number;
    thumbnail: string;
    url: string;
    title: string;
}

export default function Gallery() {
    const touchStartX = useRef(0);
    const [selected, setSelected] = useState<GalleryItem | null>(null);
    const [loaded, setLoaded] = useState(false);
    const currentIndex = selected
        ? photos.findIndex((p) => p.id === selected.id)
        : -1;
    const goNext = () => {
        if (currentIndex === -1) return;
        const nextIndex = (currentIndex + 1) % photos.length;
        setLoaded(false);
        setSelected(photos[nextIndex]);
    };
    const goPrev = () => {
        if (currentIndex === -1) return;
        const prevIndex = (currentIndex - 1 + photos.length) % photos.length;
        setLoaded(false);
        setSelected(photos[prevIndex]);
    };
    useEffect(() => {
        const handleKey = (e: KeyboardEvent) => {
            if (!selected) return;

            if (e.key === "ArrowRight") goNext();
            if (e.key === "ArrowLeft") goPrev();
            if (e.key === "Escape") setSelected(null);
        };
        window.addEventListener("keydown", handleKey);
        return () => window.removeEventListener("keydown", handleKey);
    }, [selected, currentIndex]);

    return (
        <>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-4">
                {photos.length <= 0 ? (
                    <p>No Photo's Found Sorry</p>
                ) : (
                    photos.map((photo) => (
                        <div key={photo.id}>
                            <img
                                key={photo.id}
                                src={photo.thumbnail}
                                alt={photo.title}
                                loading="lazy"
                                className="w-full aspect-square object-cover rounded-lg"
                                onClick={() => {
                                    setLoaded(false);
                                    setSelected(photo);
                                }}
                            />
                            <p className="mt-2 text-sm text-gray-300">
                                {photo.title}
                            </p>
                        </div>
                    ))
                )}
            </div>
            {selected && (
                <div
                    className="fixed inset-0 bg-black/80 flex flex-col items-center justify-center z-50"
                    onClick={() => setSelected(null)}
                    onTouchStart={(e) => {
                        touchStartX.current = e.touches[0].clientX;
                    }}
                    onTouchEnd={(e) => {
                        const endX = e.changedTouches[0].clientX;
                        const diff = touchStartX.current - endX;

                        if (Math.abs(diff) > 50) {
                            if (diff > 0) goNext();
                            else goPrev();
                        }
                    }}>
                    <div className="relative flex items-center justify-center max-w-5xl w-full h-[80vh]">
                        <img
                            src={selected.thumbnail}
                            alt=""
                            className="absolute max-w-[90%] max-h-[90%] rounded-lg blur-lg opacity-70"
                            draggable="false"
                        />
                        <img
                            src={selected!.url}
                            alt={selected!.title}
                            onLoad={() => setLoaded(true)}
                            className={`relative z-10 max-w-[90%] max-h-[90%] rounded-lg shadow-lg transition-opacity duration-300 ${loaded ? "opacity-100" : "opacity-0"}`}
                        />
                        {!loaded && (
                            <div className="absolute w-20 h-20 border-4 border-gray-400 border-t-transparent rounded-full animate-spin" />
                        )}
                    </div>{" "}
                    <p className="mt-2 text-sm text-gray-300">
                        {selected.title}
                    </p>
                </div>
            )}
        </>
    );
}

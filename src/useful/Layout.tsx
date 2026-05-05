import { useLocation, Outlet } from "react-router-dom";
import Navigation from "./Navigation";
export default function Layout() {
    const { pathname } = useLocation();

    function getTheme(path: string) {
        if (path.startsWith("/wiki")) return "bg-gunmetal text-teagreen";
        if (path.startsWith("/glade")) return "bg-green-900 text-blue-300";
        if (path.startsWith("/falling")) return "bg-indigo-950 text-indigo-200";
        if (path.startsWith("/about")) return "bg-purple-950 text-gunmetal";
        return "bg-gunmetal text-gray-200";
    }

    const bgClass = getTheme(pathname);
    return (
        <div
            className={`flex flex-col min-h-dvh w-full overflow-x-hidden ${bgClass}`}>
            <Navigation />
            <Outlet />
        </div>
    );
}

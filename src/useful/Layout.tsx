import { useLocation, Outlet } from "react-router-dom";
import Navigation from "./Navigation";
export default function Layout() {
    const { pathname } = useLocation();

    function getTheme(path: string) {
        if (path.startsWith("/wiki")) return "bg-gunmetal text-teagreen";
        if (path.startsWith("/glade")) return "bg-pine-teal-900 text-blue-300";
        if (path.startsWith("/falling"))
            return "bg-platinum-900 text-indigo-200";
        if (path.startsWith("/about")) return "bg-deep-lilac-800 text-gunmetal";
        return "bg-gunmetal text-gray-200";
    }

    const bgClass = getTheme(pathname);
    return (
        <div className={` min-h-dvh w-full overflow-x-hidden ${bgClass}`}>
            <Navigation />
            <Outlet />
        </div>
    );
}

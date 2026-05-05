import { Link, type To } from "react-router-dom";

interface NavProps {
    to: To;
    children: string;
}
export default function NavItem({ to, children }: NavProps) {
    return (
        <Link
            to={to}
            className="flex justify-center items-center p-0 text-white no-underline font-bold flex-1 border border-gray-400 border-solid hover:bg-[#444] hover:text-[#61dafb] hover:transition-[background] hover:duration-200 hover:ease-[ease]">
            {children}
        </Link>
    );
}

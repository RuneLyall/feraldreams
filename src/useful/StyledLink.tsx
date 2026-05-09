import { Link, type LinkProps } from "react-router-dom";
import { twMerge } from "tailwind-merge";

interface StyledLinkProps extends LinkProps {
    className?: string;
    children: React.ReactNode;
}

export default function StyledLink({
    to,
    children,
    className,
    ...props
}: StyledLinkProps) {
    const baseStyles =
        "text-platinum-200 hover:text-indigo-300 font-medium transition-all duration-200 ease-in-out text-shadow-sm text-shadow-white/25";

    return (
        <Link to={to} className={twMerge(baseStyles, className)} {...props}>
            {children}
        </Link>
    );
}

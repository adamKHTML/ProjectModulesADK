import React from "react";
import { Link } from "react-router-dom";

interface NavLinkProps {
    to: string;
    label: string;
}

const NavLink: React.FC<NavLinkProps> = ({ to, label }) => (
    <Link to={to} className="text-white px-4 py-2">
        {label}
    </Link>
);

export default NavLink;
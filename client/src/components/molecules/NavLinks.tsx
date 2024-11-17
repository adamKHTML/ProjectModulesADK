import React from 'react';
import NavLink from '../atoms/NavLink';

const NavLinks: React.FC = () => (
    <div className="bg-blue-500 flex">
        <NavLink to="/" label="Home" />
        <NavLink to="/modules" label="Modules" />
    </div>
);

export default NavLinks;
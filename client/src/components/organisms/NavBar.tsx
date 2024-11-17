import React from 'react';
import NavLinks from '../molecules/NavLinks';

const Navbar: React.FC = () => (
    <header className="bg-black text-white">
        <h1 className='Navbar-title'>Tree Learning</h1>
        <nav className="container mx-auto p-4">
            <NavLinks />
        </nav>
    </header>
);

export default Navbar;
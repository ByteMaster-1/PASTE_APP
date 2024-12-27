import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className='bg-gray-800 p-4 shadow-md w-full'>
            <div className='container mx-auto flex justify-between items-center'>
                <div className='text-white text-lg font-bold'>
                    My Paste
                </div>
                <div className='flex space-x-4'>
                    <NavLink 
                        to="/" 
                        className='text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
                        activeClassName='bg-gray-900 text-white'
                    >
                        Home
                    </NavLink>
                    <NavLink 
                        to="/pastes" 
                        className='text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
                        activeClassName='bg-gray-900 text-white'
                    >
                        Pastes
                    </NavLink>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
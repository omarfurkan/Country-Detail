import React from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className='bg-indigo-300'>
            <nav className='py-8 flex justify-between w-5/6 mx-auto'>
                <div className='text-4xl'>logo</div>
                <div className='text-3xl'>
                    <Link to="/" >Home</Link>
                    <Link to="/about" className='ml-9'>About</Link>
                    <Link to="/blog" className='ml-9'>Blog</Link>
                </div>

            </nav>
        </div>
    );
};

export default Navbar;
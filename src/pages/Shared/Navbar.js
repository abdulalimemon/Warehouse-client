import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ThemeButton from './ThemeButton';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [profileOpen, setProfileOpen] = useState(false);
    return (
        <div className='bgNav'>
            <div className="navbar container mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden" onClick={() => setMenuOpen(!menuOpen)}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className={`menu menu-compact dropdown-content mt-3 p-2 shadow bg-slate-300 rounded-box ${menuOpen ? 'w-72' : 'hidden'}`}>
                            <li><Link to='/blog'>Blog</Link></li>
                            <li><Link>Item 3</Link></li>
                        </ul>
                    </div>
                    <Link className="font-semibold normal-case text-2xl">WareHouse</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        <li><Link>Item 1</Link></li>
                        <li><Link>Item 3</Link></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar" >
                            <div className="w-10 rounded-full" onClick={() => setProfileOpen(!profileOpen)}>
                                <img src="https://placeimg.com/80/80/people" />
                            </div>
                        </label>
                        <ul tabIndex={0} className={`mt-3 p-2 shadow menu menu-compact dropdown-content bg-slate-300 rounded-box ${profileOpen ? 'w-72' : 'hidden'}`}>
                            <li>
                                <Link className="justify-between">
                                    Profile
                                </Link>
                            </li>
                            <li><Link>Settings</Link></li>
                            <li><ThemeButton></ThemeButton></li>
                            <li><Link>Logout</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
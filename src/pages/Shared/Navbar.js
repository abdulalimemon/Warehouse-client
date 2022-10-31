import { signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import ThemeButton from './ThemeButton';


const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [profileOpen, setProfileOpen] = useState(false);
    const [user] = useAuthState(auth);

    const usersignOut = () => {
        signOut(auth);
    };

    return (
        <div className='bgNav'>
            <div className="navbar container mx-auto">
                <div className="navbar-start">
                    <Link className="font-semibold normal-case text-2xl textHeading" to='/'>WareHouse</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0 hover:bg">
                        <li><Link className='textHeading text-lg font-semibold' to='/blog'>Blog</Link></li>
                        {
                            user && <li><Link className='textHeading text-lg font-semibold' to='/manageinventory'>Manage Inventory</Link></li>
                        }

                    </ul>
                </div>
                {
                    user ?
                        <div className="navbar-end">
                            <div className="dropdown dropdown-end">
                                <label tabIndex={0} className="btn btn-ghost btn-circle avatar border-2 border-green-500  hover:border-green-700" >
                                    <div className="w-10 rounded-full bg-white" onClick={() => setProfileOpen(!profileOpen)}>
                                        <img src={`${user.photoURL ? user.photoURL : 'https://placeimg.com/80/80/people'}`} alt='User Profile' />
                                    </div>
                                </label>
                                <ul tabIndex={0} className={`mt-3 p-2 shadow menu menu-compact dropdown-content bgNav rounded-box ${profileOpen ? 'w-72' : 'hidden'}`}>
                                    <li className='flex items-center'>
                                        <Link className="justify-between textHeading text-lg font-semibold">
                                            {user.displayName}
                                        </Link>
                                    </li>
                                    <li><Link className='textHeading text-base font-semibold'>Settings</Link></li>
                                    <li><ThemeButton></ThemeButton></li>
                                    <li><Link className='textHeading  font-semibold'><button className='btn btn-primary capitalize w-full text-base' onClick={() => {
                                        usersignOut()
                                    }}>Logout</button></Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        :
                        <>
                            <div className="navbar-end">
                                <div className="dropdown dropdown-end">
                                    <label tabIndex={0} className="btn btn-ghost lg:hidden" onClick={() => setMenuOpen(!menuOpen)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 textHeading" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                                    </label>
                                    <ul tabIndex={0} className={`menu menu-compact dropdown-content mt-3 p-2 shadow bgNav rounded-box ${menuOpen ? 'w-72' : 'hidden'}`}>
                                        <li className='flex items-center'><Link to='/blog' className='textHeading text-base font-semibold'>Blog</Link></li>
                                        <li><Link className='textHeading text-lg font-semibold' to='/manageinventory'>Manage Inventory</Link></li>
                                        <li><Link className='textHeading font-semibold' to='/login'><button className='btn btn-primary capitalize w-full text-base'>Login</button></Link>
                                        </li>
                                        <li><Link className='textHeading font-semibold' to='/registration'><button className='btn btn-primary capitalize w-full text-base'>Registration</button></Link>
                                        </li>
                                    </ul>
                                </div>
                                <ul className="menu menu-horizontal p-0 hover:bg hidden lg:flex">
                                    <li><Link className='textHeading font-semibold p-2' to='/login'><button className=' btn btn-primary capitalize text-base'>Login</button></Link>
                                    </li>
                                    <li><Link className='textHeading font-semibold p-2' to='/registration'><button className=' btn btn-primary capitalize text-base'>Registration</button></Link>
                                    </li>
                                </ul>
                            </div>
                        </>
                }

            </div>
        </div>
    );
};

export default Navbar;
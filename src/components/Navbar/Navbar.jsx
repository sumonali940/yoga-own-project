import React, { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogOut = () => {
        logOut()
            .then(() => {
                toast.logOut('User LogOut Successfully!')
                navigate('/login')
            })
            .catch(error => {
                toast.error(error.message)
            })
    }

    const links = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about">About Us</NavLink></li>
        <li><NavLink to="/contact">Contact Us</NavLink></li>
        {
            user ? <>
                <li><NavLink to="/profile">Profile</NavLink></li>
                <li><NavLink to="/order">orders</NavLink></li>
            </> : <>
                <li><NavLink to="/register">Register</NavLink></li>
                <li><NavLink to="/login">Login</NavLink></li>
            </>
        }
    </>

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown lg:hidden">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {links}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl hidden lg:flex">Yoga</a>
            </div>
            <div className="navbar-center">
                <a className="btn btn-ghost text-xl lg:hidden">daisyUI</a>
                <ul className='menu menu-horizontal px-1 hidden lg:flex'>
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ? <><p className='text-2xl pr-5'>{user.email}</p>
                        <button onClick={handleLogOut} className='btn btn-primary'>LogOut</button> </>
                        : <h2>Welcome</h2>
                }
            </div>
        </div>

    );

};

export default Navbar;
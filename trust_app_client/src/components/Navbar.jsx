import { Bars2Icon, XMarkIcon } from '@heroicons/react/20/solid';
import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from '../assets/Logo.jpeg.jpg';

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const checkLogin = () => {
            const role = localStorage.getItem('role');
            setIsLoggedIn(role === 'ADMIN');
        };

        checkLogin();

        window.addEventListener('storage', checkLogin);
        return () => {
            window.removeEventListener('storage', checkLogin);
        };
    }, []);


    const handleLogout = () => {
        localStorage.removeItem('role');
        localStorage.removeItem('email');
        setIsLoggedIn(false);
        navigate('/login');
    };

    const menuItems = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Programs', path: '/programs' },
        { name: 'Team', path: '/team' },
        { name: 'Gallery', path: '/gallery' },
    ];

    const adminItems = [
        { name: 'Admin', path: '/admin-activities' },
    ];

    const linkBaseStyle = "font-semibold transition-colors";
    const activeStyle = "text-indigo-600";
    const hoverStyle = "hover:text-indigo-900";

    const renderLinks = () => (
        <>
            {menuItems.map((item, index) => {
                const isActive = location.pathname === item.path;
                return (
                    <Link
                        key={index}
                        to={item.path}
                        onClick={() => setOpen(false)}
                        className={`text-platinum ${linkBaseStyle} ${isActive ? activeStyle : ''} ${hoverStyle}`}
                    >
                        {item.name}
                    </Link>
                );
            })}
            {isLoggedIn && adminItems.map((item, index) => {
                const isActive = location.pathname === item.path;
                return (
                    <Link
                        key={index}
                        to={item.path}
                        onClick={() => setOpen(false)}
                        className={`text-platinum ${linkBaseStyle} ${isActive ? activeStyle : ''} ${hoverStyle}`}
                    >
                        {item.name}
                    </Link>
                );
            })}
            {isLoggedIn ? (
                <button
                    onClick={handleLogout}
                    className="text-red-600 font-semibold hover:text-red-500 transition-colors "
                >
                    Logout
                </button>
            ) : (
                <Link
                    to="/login"
                    onClick={() => setOpen(false)}
                    className={`text-platinum ${linkBaseStyle} ${hoverStyle}`}
                >
                    Login
                </Link>
            )}
        </>
    );

    return (
        <nav className="shadow sticky top-0 z-50 bg-platinum">
            <div className="container mx-auto px-4 py-2 flex justify-between items-center">
                <Link to="/" className="font-bold text-platinum" onClick={() => setOpen(false)}>
                    <img
                        src={logo}
                        alt="logo"
                        className="w-20 h-20 mx-auto rounded-full object-cover"
                    />
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex space-x-6">
                    {renderLinks()}
                </div>

                {/* Mobile Menu Button */}
                <button className="md:hidden text-platinum" onClick={() => setOpen(!open)}>
                    {open ? <XMarkIcon className="w-6 h-6" /> : <Bars2Icon className="w-6 h-6" />}
                </button>
            </div>

            {/* Mobile Nav */}
            {open && (
                <div className="md:hidden flex flex-col px-6 pb-4 pt-2 space-y-2">
                    {renderLinks()}
                </div>
            )}

        </nav>
    );
}

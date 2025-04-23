import { Bars2Icon, XMarkIcon } from '@heroicons/react/20/solid';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/Logo.jpeg.jpg';

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const location = useLocation();

    const menuItems = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Programs', path: '/programs' },
        { name: 'Team', path: '/team' },
        { name: 'Gallery', path: '/gallery' },
    ];

    const linkBaseStyle = "font-semibold transition-colors";
    const activeStyle = "text-indigo-600";
    const hoverStyle = "hover:text-indigo-900";

    return (
        <nav className="shadow sticky top-0 z-50 bg-platinum">
            <div className="container mx-auto px-4 py-2 flex justify-between items-center">
                <Link to="/" className="font-bold text-platinum">
                    <img
                        src={logo}
                        alt="logo"
                        className="w-20 h-20 mx-auto rounded-full object-cover"
                    />
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex space-x-6">
                    {menuItems.map((item, index) => {
                        const isActive = location.pathname === item.path;
                        return (
                            <Link
                                key={index}
                                to={item.path}
                                className={`text-platinum ${linkBaseStyle} ${isActive ? activeStyle : ''} ${hoverStyle}`}
                            >
                                {item.name}
                            </Link>
                        );
                    })}
                </div>

                {/* Mobile Menu Button */}
                <button className="md:hidden text-platinum" onClick={() => setOpen(!open)}>
                    {open ? <XMarkIcon className="w-6 h-6" /> : <Bars2Icon className="w-6 h-6" />}
                </button>
            </div>

            {/* Mobile Nav */}
            {open && (
                <div className="md:hidden px-6 pb-4 pt-2 space-y-2">
                    {menuItems.map((item, index) => {
                        const isActive = location.pathname === item.path;
                        return (
                            <Link
                                key={index}
                                to={item.path}
                                onClick={() => setOpen(false)}
                                className={`block text-platinum ${linkBaseStyle} ${isActive ? activeStyle : ''} ${hoverStyle}`}
                            >
                                {item.name}
                            </Link>
                        );
                    })}
                </div>
            )}
        </nav>
    );
}

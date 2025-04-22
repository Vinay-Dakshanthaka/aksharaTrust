import { Bars2Icon, XMarkIcon } from '@heroicons/react/20/solid';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/Logo.jpeg.jpg'

export default function Navbar() {
    const [open, setOpen] = useState(false);

    const menuItems = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Programs', path: '/programs' },
        { name: 'Team', path: '/team' },
        { name: 'Gallery', path: '/gallery' },
    ];

    return (
        <nav className="shadow sticky top-0 z-50 bg-platinum">
            <div className="container mx-auto px-4 py-2 flex justify-between items-center">
                <Link to="/" className="     font-bold text-platinum">

                    <img
                        src={logo}
                        // src="https://static.vecteezy.com/system/resources/previews/021/548/095/original/default-profile-picture-avatar-user-avatar-icon-person-icon-head-icon-profile-picture-icons-default-anonymous-user-male-and-female-businessman-photo-placeholder-social-network-avatar-portrait-free-vector.jpg"
                        alt="logo"
                        className="w-20 h-20 mx-auto rounded-full object-cover"
                    />
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex space-x-6">
                    {menuItems.map((item, index) => (
                        <Link
                            key={index}
                            to={item.path}
                            className="text-platinum font-semibold hover:text-blue-600 transition-colors"
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <button className="md:hidden text-platinum" onClick={() => setOpen(!open)}>
                    {open ? <XMarkIcon className="w-6 h-6" /> : <Bars2Icon className="w-6 h-6" />}
                </button>
            </div>

            {/* Mobile Nav */}
            {open && (
                <div className="md:hidden  px-6 pb-4 pt-2 space-y-2">
                    {menuItems.map((item, index) => (
                        <Link
                            key={index}
                            to={item.path}
                            onClick={() => setOpen(false)}
                            className="block text-platinum font-semibold hover:text-blue-600"
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>
            )}
        </nav>
    );
}

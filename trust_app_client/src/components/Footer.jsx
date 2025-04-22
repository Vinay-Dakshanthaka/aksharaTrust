import { Link } from 'react-router-dom';
import logo from '../assets/Logo.jpeg.jpg'
import facebook from './iconsSvg/facebook.png'
import instagram from './iconsSvg/instagram.png'
import linkedin from './iconsSvg/linkedin.png'

import {
    EnvelopeIcon,
    MapPinIcon,
} from '@heroicons/react/24/outline';
import { InstagramIcon } from './iconsSvg/InstagramIcons';
import { FacebookIcon } from './iconsSvg/FacebookIcon';

const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Programs', path: '/programs' },
    { name: 'Team', path: '/team' },
];

export default function Footer() {
    return (
        <footer className="bg-gray-300 text-gray-700 pt-10 pb-6 px-6 ">
            <div className="w-full mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl">

                {/* Column 1: Logo & Contact */}
                <div>
                    <Link to="/" className="font-bold text-platinum">

                        <img
                            src={logo}
                            // src="https://static.vecteezy.com/system/resources/previews/021/548/095/original/default-profile-picture-avatar-user-avatar-icon-person-icon-head-icon-profile-picture-icons-default-anonymous-user-male-and-female-businessman-photo-placeholder-social-network-avatar-portrait-free-vector.jpg"
                            alt="logo"
                            className="w-24 h-24 mx-start rounded-full object-cover"
                        />
                    </Link>
                    <h2 className="text-2xl font-bold text-platinum mb-4">Akshara Charitable Trust</h2>
                    <div className="flex items-center text-sm mb-2">
                        <address>
                            No.56, "Sumukha Plaza" Subbarama chetty Road, <br />
                            Basavanagudi, <br />
                            Bangalore -560004
                        </address>
                    </div>

                </div>

                {/* Column 2: Quick Links */}
                <div>
                    <h3 className="text-lg font-semibold mb-4 text-platinum">Quick Links</h3>
                    <ul className="space-y-2">
                        {menuItems.map((item, index) => (
                            <li key={index}>
                                <Link to={item.path} className="hover:text-yellow-400 transition-colors">
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Column 3: Social Media */}
                <div>
                    <h3 className="text-lg font-semibold mb-4 text-platinum">Follow Us</h3>
                    <div className="flex space-x-2">
                        <a
                            href="https://www.instagram.com/aksharacharitabletrust25"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-pink-500"
                            aria-label="Instagram"
                        >
                            <img
                                src={instagram}
                                alt="Instagram"
                                className="w-6 h-6"
                            />
                        </a>
                        <a
                            href="https://www.facebook.com/share/169XWvbx6c/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-blue-500"
                            aria-label="Facebook"
                        >
                            <img
                                src={facebook}
                                alt="Facebook"
                                className="w-6 h-6"
                            />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/akshara-charitable-trust-b4b0b0357"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-blue-500"
                            aria-label="Facebook"
                        >
                            <img
                                src={linkedin}
                                alt="Facebook"
                                className="w-6 h-6"
                            />
                        </a>
                    </div>
                    <div className='my-4'>
                        <p className="flex items-center text-sm mb-2">
                            <EnvelopeIcon className="w-5 h-5 mr-2 text-blue-500" />
                            <a href="mailto:aksharacharitabletrust25@gmail.com" className="hover:underline">
                                aksharacharitabletrust25@gmail.com
                            </a>
                        </p>
                        <p className="flex items-center text-sm">
                            <MapPinIcon className="w-5 h-5 mr-2 text-blue-500" />
                            Based in India
                        </p>
                    </div>
                </div>
            </div>

            <div className="text-center text-sm text-gray-500 mt-10">
                © {new Date().getFullYear()} Akshara Charitable Trust.
            </div>
        </footer>
    );
}

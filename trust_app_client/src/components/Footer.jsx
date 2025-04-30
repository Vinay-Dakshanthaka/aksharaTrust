import { Link } from 'react-router-dom';
import logo from '../assets/Logo.jpeg.jpg'
import facebook from './iconsSvg/facebook.png'
import instagram from './iconsSvg/instagram.png'
import linkedin from './iconsSvg/linkedin.png'
import youtube from './iconsSvg/youtube.png'
import twitter from './iconsSvg/twitter.png'

import {
    EnvelopeIcon,
    MapPinIcon,
} from '@heroicons/react/24/outline';
import { InstagramIcon } from './iconsSvg/InstagramIcons';
import { FacebookIcon } from './iconsSvg/FacebookIcon';
import { useGlobalData } from '../GlobalDataContext';
import { useEffect, useState } from 'react';

const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Programs', path: '/programs' },
    { name: 'Team', path: '/team' },
];

export default function Footer() {


    const globalData = useGlobalData();
    const [email, setEmail] = useState()
    const [appName, setAppName] = useState();
    const [address, setAddress] = useState();
    // const [tagLine, setTagLine] = useState()
    // const appName = ;
    useEffect(() => {
        if (globalData.length > 0) {
            const appNameData = globalData.find(item => item.dataKey === 'app_name');
            const addressData = globalData.find(item => item.dataKey === 'address');
            setEmail(globalData.find(item => item.dataKey === 'contact_email')?.dataValue)

            setAppName(appNameData?.dataValue);
            setAddress(addressData?.dataValue);
            // setTagLine(tagLineData?.dataValue);
        }
    }, [globalData]);



    // const instagram_url = globalData.find(item => item.dataKey === 'instagram')?.dataValue;
    // const facebook_url = globalData.find(item => item.dataKey === 'facebook')?.dataValue;
    // const linkedin_url = globalData.find(item => item.dataKey === 'linkedin')?.dataValue;


    const socialLinks = [
        {
            name: 'Instagram',
            url: globalData.find(item => item.dataKey === 'instagram')?.dataValue,
            icon: instagram,
        },
        {
            name: 'Facebook',
            url: globalData.find(item => item.dataKey === 'facebook')?.dataValue,
            icon: facebook,
        },
        {
            name: 'LinkedIn',
            url: globalData.find(item => item.dataKey === 'linkedin')?.dataValue,
            icon: linkedin,
        },
        {
            name: 'YouTube',
            url: globalData.find(item => item.dataKey === 'youtube')?.dataValue,
            icon: youtube,
        },
        {
            name: 'Twitter',
            url: globalData.find(item => item.dataKey === 'twitter')?.dataValue,
            icon: twitter,
        },
    ];


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
                    <h2 className="text-2xl font-bold text-platinum mb-4">
                        {appName}
                        {/* Akshara Charitable Trust */}
                        </h2>
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
                                <Link to={item.path} className="hover:text-indigo-600 transition-colors">
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Column 3: Social Media */}
                <div className="flex flex-col items-start space-y-4">
                    {/* Social Icons */}
                    <div className="flex space-x-4">
                        {socialLinks
                            .filter(link => link.url)
                            .map((link, index) => (
                                <a
                                    key={index}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 hover:opacity-80"
                                    aria-label={link.name}
                                >
                                    <img src={link.icon} alt={link.name} className="w-6 h-6" />
                                </a>
                            ))}
                    </div>

                    {/* Email and Location */}
                    <div className="text-sm text-gray-500 space-y-1">
                        <p className="flex items-center gap-2">
                            <EnvelopeIcon className="w-4 h-4" /> {email}
                        </p>
                        <p className="flex items-center gap-2">
                            <MapPinIcon className="w-4 h-4" /> Based in India
                        </p>
                    </div>
                </div>

            </div>

            <div className="text-center text-sm text-gray-500 mt-10">
                {`© ${new Date().getFullYear()} ${appName}`}
                 {/* Akshara Charitable Trust. */}
            </div>
        </footer>
    );
}

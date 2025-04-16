import { useState, useEffect } from 'react';
import { ArrowUpIcon } from '@heroicons/react/24/outline';

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    const checkScrollPosition = () => {
        if (window.scrollY > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', checkScrollPosition);
        return () => {
            window.removeEventListener('scroll', checkScrollPosition);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        isVisible && (
            <button
                onClick={scrollToTop}
                className="fixed bottom-6 right-6 p-3 bg-green-400 text-platinum font-extrabold rounded-full shadow-lg hover:bg-green-300 focus:outline-none"
                aria-label="Scroll to top"
            >
                <ArrowUpIcon className="w-6 h-6" />
            </button>
        )
    );
};

export default ScrollToTopButton;

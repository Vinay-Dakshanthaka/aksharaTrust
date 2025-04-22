import { PhotoIcon } from '@heroicons/react/20/solid';
import React, { useState } from 'react';

import image from    "../assets/children/children_going_to_school.jpg"
// import image1  from  "../assets/children/child_infront_mirror.jpg"
// import image1  from  "../assets/children/children_going_to_school.jpg"
import image3  from  "../assets/children/children_in_shcool_uniform.jpg"
import image4  from  "../assets/children/children_infront_hut.jpg"
import image5  from  "../assets/children/children_with_slate.jpg"
import image6  from  "../assets/children/collage_images.jpg"
import image7  from  "../assets/children/eduction_for_adults.jpg"
import image8  from  "../assets/children/mother_teaching.jpg"
import image9  from  "../assets/children/outdoor_school.jpg"
import image10 from  "../assets/children/plant_in_hand.jpg"
import image11 from  "../assets/children/profile_pic_default.webp"
import image12 from  "../assets/children/RTE.jpg"
// import image13 from  "../assets/children/rural_school.jpg"

const ITEMS_PER_PAGE = 9;

const galleryItems = [
    {
        type: 'image',
        category: 'Scholarships',
        // src: 'https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?auto=format&fit=crop&w=1470&q=80',
        src: image,
        // description: 'Students receiving scholarships at a local school.'
    },
    {
        type: 'image',
        category: 'Scholarships',
        // src: 'https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?auto=format&fit=crop&w=1470&q=80',
        src: image9,
        // description: 'Students receiving scholarships at a local school.'
    },
    {
        type: 'image',
        category: 'Scholarships',
        // src: 'https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?auto=format&fit=crop&w=1470&q=80',
        src: image3,
        // description: 'Students receiving scholarships at a local school.'
    },
    {
        type: 'image',
        category: 'Scholarships',
        // src: 'https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?auto=format&fit=crop&w=1470&q=80',
        src: image4,
        // description: 'Students receiving scholarships at a local school.'
    },
    {
        type: 'image',
        category: 'Scholarships',
        // src: 'https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?auto=format&fit=crop&w=1470&q=80',
        src: image5,
        // description: 'Students receiving scholarships at a local school.'
    },
    // {
    //     type: 'image',
    //     category: 'Scholarships',
    //     // src: 'https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?auto=format&fit=crop&w=1470&q=80',
    //     src: image6,
        // description: 'Students receiving scholarships at a local school.'
    // },
    {
        type: 'image',
        category: 'Scholarships',
        // src: 'https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?auto=format&fit=crop&w=1470&q=80',
        src: image7,
        // description: 'Students receiving scholarships at a local school.'
    },
    // {
    //     type: 'image',
    //     category: 'Scholarships',
    //     // src: 'https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?auto=format&fit=crop&w=1470&q=80',
    //     src: image8,
        // description: 'Students receiving scholarships at a local school.'
    // },
    // {
    //     type: 'image',
    //     category: 'Scholarships',
    //     // src: 'https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?auto=format&fit=crop&w=1470&q=80',
    //     src: image10,
        // description: 'Students receiving scholarships at a local school.'
    // },
    // {
    //     type: 'image',
    //     category: 'Scholarships',
    //     // src: 'https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?auto=format&fit=crop&w=1470&q=80',
    //     src: image11,
        // description: 'Students receiving scholarships at a local school.'
    // },
    {
        type: 'image',
        category: 'Scholarships',
        // src: 'https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?auto=format&fit=crop&w=1470&q=80',
        src: image12,
        // description: 'Students receiving scholarships at a local school.'
    },
    
    // {
    //     type: 'image',
    //     category: 'Scholarships',
    //     // src: 'https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?auto=format&fit=crop&w=1470&q=80',
    //     src: image6,
        // description: 'Students receiving scholarships at a local school.'
    // },
    
];

const categories = ['All', 'Scholarships', 'School Support', 'Vocational Training', 'Events'];

export const Gallery = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [currentPage, setCurrentPage] = useState(1);
    const [lightboxItem, setLightboxItem] = useState(null);

    const filteredItems = selectedCategory === 'All'
        ? galleryItems
        : galleryItems.filter(item => item.category === selectedCategory);

    const totalPages = Math.ceil(filteredItems.length / ITEMS_PER_PAGE);
    const paginatedItems = filteredItems.slice(
        (currentPage - 1) * ITEMS_PER_PAGE,
        currentPage * ITEMS_PER_PAGE
    );

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
        setCurrentPage(1);
    };

    return (
        <div className="p-6">
            <h2 className="text-platinum font-bold text-4xl flex justify-center items-center gap-2 my-10">
                <PhotoIcon className="w-5 h-5" />
                Gallery
            </h2>
            {/* Category Filter */}
            {/* <div className="flex gap-4 mb-6 flex-wrap justify-center">
                {categories.map(category => (
                    <button
                        key={category}
                        onClick={() => handleCategoryChange(category)}
                        className={`px-4 py-2 rounded-full border ${selectedCategory === category ? 'bg-yellow-500 text-black' : 'bg-green-300 text-blue-600 border-blue-600'
                            }`}
                    >
                        {category}
                    </button>
                ))}
            </div> */}

            {/* Gallery Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {paginatedItems.map((item, index) => (
                    <div key={index} className="cursor-pointer" onClick={() => setLightboxItem(item)}>
                        {item.type === 'image' ? (
                            <img
                                src={item.src}
                                alt={item.description}
                                className="rounded-lg w-full h-52 object-contain"
                            />
                        ) : (
                            <video
                                src={item.src}
                                controls
                                className="rounded-lg w-full h-52 object-contain"
                            />
                        )}
                        <p className="mt-2 text-sm text-gray-600">{item.description}</p>
                    </div>
                ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-6 space-x-2">
                {[...Array(totalPages)].map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setCurrentPage(i + 1)}
                        className={`w-8 h-8 rounded-full ${currentPage === i + 1 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-black'
                            }`}
                    >
                        {i + 1}
                    </button>
                ))}
            </div>

            {/* Lightbox */}
            {lightboxItem && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
                    onClick={() => setLightboxItem(null)}
                >
                    <div className="max-w-3xl w-full p-4">
                        {lightboxItem.type === 'image' ? (
                            <img src={lightboxItem.src} alt={lightboxItem.description} className="w-full rounded-lg" />
                        ) : (
                            <video src={lightboxItem.src} controls className="w-full rounded-lg" />
                        )}
                        <p className="mt-4 text-white text-center">{lightboxItem.description}</p>
                    </div>
                </div>
            )}
        </div>
    );
};

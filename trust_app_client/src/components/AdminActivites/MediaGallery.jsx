import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { baseURL } from '../config/baseURL';

const MediaGallery = () => {
  const [mediaByCategory, setMediaByCategory] = useState({});

  const fetchMedia = async () => {
    try {
      const response = await axios.get(`${baseURL}/api/media/all`);
      const mediaList = response.data.data;

      const grouped = mediaList.reduce((acc, item) => {
        acc[item.category] = acc[item.category] ? [...acc[item.category], item] : [item];
        return acc;
      }, {});

      setMediaByCategory(grouped);
    } catch (error) {
      console.error(error);
    }
  };

  const toggleVisibility = async (id, current) => {
    try {
      await axios.put(`${baseURL}/api/media/visibility/${id}?isVisible=${!current}`);
      setTimeout(() => fetchMedia(), 300);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchMedia();
  }, []);

  const getCategoryMessage = (category) => {
    switch (category) {
      case 'gallery':
        return ' These images will be shown in the Gallery section of your website.';
      case 'team':
        return ' These records represent your Team Members shown on the Team section.';
      case 'hero_section':
        return 'Image displayed on the Hero/Banner section of your homepage.';
      default:
        return ' Media items under this category.';
    }
  };

  return (
    <div className="p-6 space-y-10">
      {Object.entries(mediaByCategory).map(([category, items]) => (
        <div key={category}>
          <h2 className="text-2xl font-bold mb-1 capitalize">{category.replace('_', ' ')}</h2>
          <p className="text-sm text-gray-600 mb-4 italic">{getCategoryMessage(category)}</p>

          <div className="overflow-x-auto rounded shadow-sm">
            <table className="min-w-full border border-gray-200 text-sm text-left bg-white">
              <thead className="bg-gray-100 text-gray-600">
                <tr>
                  <th className="px-3 py-2 border">Image</th>
                  <th className="px-3 py-2 border">Name</th>
                  <th className="px-3 py-2 border">Role</th>
                  <th className="px-3 py-2 border">Qualification</th>
                  <th className="px-3 py-2 border">Event</th>
                  <th className="px-3 py-2 border">Description</th>
                  <th className="px-3 py-2 border">Visibility</th>
                </tr>
              </thead>
              <tbody>
                {items.map(item => (
                  <tr key={item.id} className="border-t hover:bg-gray-50">
                    <td className="px-2 py-2 border">
                      <img src={item.imageUrl} alt="media" className="w-16 h-16 object-cover rounded" />
                    </td>
                    <td className="px-2 py-2 border">{item.name || '-'}</td>
                    <td className="px-2 py-2 border">{item.role || '-'}</td>
                    <td className="px-2 py-2 border">{item.qualification || '-'}</td>
                    <td className="px-2 py-2 border">{item.eventName || '-'}</td>
                    <td className="px-2 py-2 border max-w-xs truncate" title={item.description || '-'}>{item.description || '-'}</td>
                    <td className="px-2 py-2 border">
                      <button
                        onClick={() => toggleVisibility(item.id, item.visible)}
                        className={`text-sm px-2 py-1 rounded ${
                          item.visible ? 'bg-green-500' : 'bg-red-500'
                        } text-white`}
                      >
                        {item.visible ? 'Show' : 'Hide'}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MediaGallery;

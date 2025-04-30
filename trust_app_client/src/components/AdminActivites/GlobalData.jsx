import React, { useState, useEffect } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { baseURL } from '../config/baseURL';

// Heroicons
import {
  GlobeAltIcon,
  EnvelopeIcon,
  PhoneIcon,
  LinkIcon,
  PencilIcon,
} from '@heroicons/react/24/solid';

const GlobalData = () => {
  const [globalData, setGlobalData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [editedValue, setEditedValue] = useState('');
  const [error, setError] = useState('');


  // Label mappings
  const readableLabels = {
    app_name: { label: 'App Name', maxWords: 5 },
    tagline: { label: 'Tagline', maxWords: 20 },
    logo_url: { label: 'Logo URL', maxWords: 1 },

    home_about_our_vision: { label: 'Home About Our Vision', maxWords: 20 },
    home_about_our_mission: { label: 'Home About Our Mission', maxWords: 20 },
    home_about_our_beneficiaries: { label: 'Home About Our Beneficiaries', maxWords: 20 },
    home_about_exist_reason: { label: 'Home About Existence Reason', maxWords: 20 },

    home_programs_scholarship_card: { label: 'Home Program Scholarship Card', maxWords: 40 },
    home_programs_school_support_card: { label: 'Home Program School Support Card', maxWords: 40 },
    home_programs_vocational_training_card: { label: 'Home Program Vocational Training Card', maxWords: 40 },
    home_programs_brief_description: { label: 'Home Program Brief Description', maxWords: 100 },

    address: { label: 'Address', maxWords: 30 },
    contact_email: { label: 'Contact Email', maxWords: 1 },
    contact_phone: { label: 'Contact Phone', maxWords: 1 },

    facebook: { label: 'Facebook', maxWords: 1 },
    instagram: { label: 'Instagram', maxWords: 1 },
    youtube: { label: 'YouTube', maxWords: 1 },
    twitter: { label: 'Twitter', maxWords: 1 },
    linkedin: { label: 'LinkedIn', maxWords: 1 },
  };


  const iconMap = {
    facebook: <GlobeAltIcon className="w-5 h-5 text-blue-600 inline" />,
    instagram: <GlobeAltIcon className="w-5 h-5 text-pink-500 inline" />,
    youtube: <GlobeAltIcon className="w-5 h-5 text-red-600 inline" />,
    twitter: <GlobeAltIcon className="w-5 h-5 text-sky-400 inline" />,
    linkedin: <GlobeAltIcon className="w-5 h-5 text-blue-700 inline" />,
    contact_email: <EnvelopeIcon className="w-5 h-5 text-gray-600 inline" />,
    contact_phone: <PhoneIcon className="w-5 h-5 text-gray-600 inline" />,
    logo_url: <LinkIcon className="w-5 h-5 text-gray-500 inline" />,
  };

  useEffect(() => {
    const fetchGlobalData = async () => {
      try {
        const response = await axios.get(`${baseURL}/api/global-data/all`);
        setGlobalData(response.data.data);
        setIsLoading(false);
      } catch (error) {
        setIsError(true);
        setErrorMessage(error.message);
      }
    };
    fetchGlobalData();
  }, []);

  const handleUpdateDataValue = async (id, newDataValue) => {
    const item = globalData.find(data => data.id === id);
    const maxWords = readableLabels[item.dataKey]?.maxWords || Infinity;
    const wordCount = newDataValue.trim().split(/\s+/).length;

    if (wordCount > maxWords) {
      const fieldName = readableLabels[item.dataKey]?.label || 'This field';
      setError(`${fieldName} must not exceed ${maxWords} words. Current: ${wordCount}`);
      toast.error(`Exceeded word limit: Max ${maxWords} words allowed.`);
      return;
    }

    try {
      await axios.put(`${baseURL}/api/global-data/update/${id}`, {
        dataKey: item?.dataKey,
        dataValue: newDataValue,
      });

      const updatedGlobalData = globalData.map(data =>
        data.id === id ? { ...data, dataValue: newDataValue } : data
      );
      setGlobalData(updatedGlobalData);
      setEditingId(null);
      setError('');
      toast.success('Updated successfully');
    } catch (error) {
      toast.error('Failed to update');
      console.error('Update error:', error);
    }
  };


  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>{errorMessage}</div>;

  return (
    <div className="max-w-5xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4"></h1>
      <table className="w-full border-collapse border border-gray-300">
        <caption className="text-lg font-semibold mb-2">Display Data</caption>
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 px-4 py-2">#</th>
            <th className="text-left px-4 py-2">Setting</th>
            <th className="text-left px-4 py-2">Value</th>
            <th className="text-left px-4 py-2">Type</th>
            <th className="text-center px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody className="bg-white">
          {globalData.map((data, index) => (
            <tr key={data.id} className="border-b border-gray-300">
              <td className="px-4 py-2">{index + 1}</td>
              <td className="px-4 py-2 flex items-center gap-2">
                {iconMap[data.dataKey]}
                {readableLabels[data.dataKey]?.label || data.dataKey}
              </td>
              <td className="px-4 py-2">
                {editingId === data.id ? (
                  <>
                    {data.type === 'text' ? (
                      <textarea
                        value={editedValue}
                        onChange={(e) => setEditedValue(e.target.value)}
                        className="border px-2 py-1 rounded w-full h-24 resize-y"
                        autoFocus
                      />
                    ) : (
                      <input
                        type={data.type === 'email' ? 'email' : data.type === 'url' ? 'url' : 'text'}
                        value={editedValue}
                        onChange={(e) => setEditedValue(e.target.value)}
                        className="border px-2 py-1 rounded w-full"
                        autoFocus
                      />
                    )}
                    {error && <div className="text-red-500 text-sm mt-1">{error}</div>}
                  </>
                ) : (
                  data.dataValue
                )}
              </td>
              <td className="px-4 py-2 capitalize">{data.type}</td>
              <td className="text-center px-4 py-2">
                {editingId === data.id ? (
                  <button
                    className="bg-blue-500 text-white px-3 py-1 rounded text-sm"
                    onClick={() => handleUpdateDataValue(data.id, editedValue)}
                  >
                    Save
                  </button>
                ) : (
                  <button
                    className="w-6 h-6 text-gray-600 hover:text-black"
                    onClick={() => {
                      setEditingId(data.id);
                      setEditedValue(data.dataValue);
                    }}
                  >
                    <PencilIcon /> Edit
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GlobalData;

import React, { useState } from 'react';
import axios from 'axios';
import { baseURL } from '../config/baseURL';
import toast from 'react-hot-toast';

const MediaUpload = () => {
  const [file, setFile] = useState(null);
  const [category, setCategory] = useState('');
  const [formData, setFormData] = useState({
    eventName: '',
    description: '',
    name: '',
    role: '',
    qualification: '',
  });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleUpload = async () => {
    if (!file || !category) {
      alert("Please select file and category");
      return;
    }

    const data = new FormData();
    data.append("file", file);
    data.append("category", category);

    Object.keys(formData).forEach(key => {
      if (formData[key]) data.append(key, formData[key]);
    });

    try {
      const response = await axios.post(`${baseURL}/api/media/upload`, data);
      // alert("Uploaded: " + response.data.data);
      toast.success("Added Successfully")
    } catch (err) {
      // alert("Upload failed");
      toast.error("Sorry! Something went wrong")
      console.error(err);
    }
  };

  const renderFields = () => {
    switch (category) {
      case 'team':
        return (
          <>
            <input name="name" placeholder="Name" value={formData.name} onChange={handleChange} className="w-full mb-2 px-3 py-2 border rounded" />
            <input name="qualification" placeholder="Qualification" value={formData.qualification} onChange={handleChange} className="w-full mb-2 px-3 py-2 border rounded" />
            <input name="role" placeholder="Role" value={formData.role} onChange={handleChange} className="w-full mb-2 px-3 py-2 border rounded" />
            <textarea name="description" placeholder="Description" value={formData.description} onChange={handleChange} className="w-full mb-2 px-3 py-2 border rounded" />
          </>
        );
      case 'gallery':
        return (
          <>
            <input name="eventName" placeholder="Event Name" value={formData.eventName} onChange={handleChange} className="w-full mb-2 px-3 py-2 border rounded" />
            <textarea name="description" placeholder="Description" value={formData.description} onChange={handleChange} className="w-full mb-2 px-3 py-2 border rounded" />
          </>
        );
      case 'hero_section':
        return null; // Only image upload
      default:
        return null;
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-4 bg-white shadow-md rounded">
      <h2 className="text-xl font-bold mb-4">Upload Media</h2>

      <label className="block mb-2 font-medium">Select Category</label>
      <select
        value={category}
        onChange={e => setCategory(e.target.value)}
        className="w-full mb-4 px-3 py-2 border rounded"
      >
        <option value="">-- Select Category --</option>
        <option value="hero_section">Hero Section</option>
        <option value="team">Team</option>
        <option value="gallery">Gallery</option>
      </select>

      <label className="block mb-2 font-medium">Upload Image</label>
      <input type="file" onChange={e => setFile(e.target.files[0])} className="mb-4" />

      {renderFields()}

      <button onClick={handleUpload} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full">
        Upload
      </button>
    </div>
  );
};

export default MediaUpload;

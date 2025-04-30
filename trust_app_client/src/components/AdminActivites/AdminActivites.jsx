import React, { useState } from 'react';
import MediaUpload from './MediaUplaod';
import GlobalData from './GlobalData';
import MediaGallery from './MediaGallery';

const AdminActivities = () => {
  const [activeTab, setActiveTab] = useState('global');

  const renderComponent = () => {
    switch (activeTab) {
      case 'upload':
        return <MediaUpload />;
      case 'gallery':
        return <MediaGallery />;
      case 'global':
      default:
        return <GlobalData />;
    }
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Sidebar */}
      <aside className="w-full md:w-1/6 bg-indigo-400 text-white p-4">
        <h2 className="text-2xl font-bold mb-6">Admin Panel</h2>
        <nav className="space-y-2">
          <button
            onClick={() => setActiveTab('global')}
            className={`w-full text-left px-4 py-2 rounded hover:bg-indigo-500 ${activeTab === 'global' ? 'bg-indigo-700' : ''}`}
          >
            App Data
          </button>
          <button
            onClick={() => setActiveTab('upload')}
            className={`w-full text-left px-4 py-2 rounded hover:bg-indigo-500 ${activeTab === 'upload' ? 'bg-indigo-700' : ''}`}
          >
            Upload Media
          </button>
          <button
            onClick={() => setActiveTab('gallery')}
            className={`w-full text-left px-4 py-2 rounded hover:bg-indigo-500 ${activeTab === 'gallery' ? 'bg-indigo-700' : ''}`}
          >
            Media Gallery
          </button>
        </nav>
      </aside>

      <main className="flex-1 p-6 bg-gray-100">{renderComponent()}</main>
    </div>
  );
};

export default AdminActivities;

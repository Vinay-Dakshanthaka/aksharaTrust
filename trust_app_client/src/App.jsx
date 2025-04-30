import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { GlobalDataContext } from './GlobalDataContext';

// Page views
import AboutUsPage from './components/pages/AboutUsPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './components/pages/HomePage';
import ProgramsPage from './components/pages/ProgramsPages';
import TeamsPage from './components/pages/TeamsPage';
import ScrollToTop from './components/ScrollToTop';
import ScrollToTopButton from './components/ScrollToTopButton';
import { Gallery } from './components/Gallery';
import { Toaster } from 'react-hot-toast';
import GlobalData from './components/AdminActivites/GlobalData';
import { useEffect, useState } from 'react';
import { baseURL } from './components/config/baseURL';
import axios from 'axios';
import MediaUpload from './components/AdminActivites/MediaUplaod';
import AdminActivities from './components/AdminActivites/AdminActivites';
import Login from './components/AdminActivites/Login';
import MediaGallery from './components/AdminActivites/MediaGallery';
import ProtectedRoute from './ProtectedRoute';

function App() {

  const [globalData, setGlobalData] = useState([]);

  useEffect(() => {
    const fetchGlobalData = async () => {
      try {
        const response = await axios.get(`${baseURL}/api/global-data/all`);
        setGlobalData(response.data.data);
        console.log("Global data :", response.data.data)
        // setIsLoading(false);
      } catch (error) {
        // setIsError(true);
        // setErrorMessage(error.message);
        console.error("Erroro while fetching global data : ", error)
      }
    };
    fetchGlobalData();
  }, []);

  return (
    <>
      <GlobalDataContext.Provider value={globalData}>
        <Router>
          <Toaster />
          <ScrollToTop />
          <Navbar />

          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutUsPage />} />
            <Route path="/programs" element={<ProgramsPage />} />
            <Route path="/team" element={<TeamsPage />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="*" element={<HomePage />} />
            <Route
              path="global-data"
              element={
                <ProtectedRoute>
                  <GlobalData />
                </ProtectedRoute>
              }
            />
            <Route
              path="media-gallery"
              element={
                <ProtectedRoute>
                  <MediaGallery />
                </ProtectedRoute>
              }
            />
            <Route
              path="media-upload"
              element={
                <ProtectedRoute>
                  <MediaUpload />
                </ProtectedRoute>
              }
            />
            <Route
              path="admin-activities"
              element={
                <ProtectedRoute>
                  <AdminActivities />
                </ProtectedRoute>
              }
            />
            <Route path="login" element={<Login />} />

          </Routes>
          <ScrollToTopButton />
          <Footer />
        </Router>
      </GlobalDataContext.Provider>
    </>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

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

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/programs" element={<ProgramsPage />} />
        <Route path="/team" element={<TeamsPage />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="*" element={<HomePage />} />

      </Routes>
      <ScrollToTopButton />
      <Footer />
    </Router>
  );
}

export default App;

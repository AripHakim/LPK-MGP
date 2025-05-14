import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import OrganizationSection from './components/OrganizationSection';
import ProgramSection from './components/ProgramSection';
import GallerySection from './components/GallerySection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="font-sans bg-gray-50">
        <Header />
        <Routes>
          <Route path="/" element={
            <>
              <HeroSection />
              <AboutSection />
              <OrganizationSection />
              {/* <ProgramSection /> */}
              <GallerySection />
              <ContactSection />
            </>
          } />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
import { useEffect } from 'react'; // Tambahkan import useEffect
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import OrganizationSection from './components/OrganizationSection';
import GraduatedSection from './components/GraduatedSection';
import GallerySection from './components/GallerySection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}


function App() {
  useEffect(() => {
    const handleHashLink = () => {
      try {
        if (window.location.hash) {
          const id = window.location.hash.substring(1);
          const element = document.getElementById(id);
          if (element) {
            const headerHeight = document.querySelector('header')?.offsetHeight || 0;
            const offsetPosition = element.offsetTop - headerHeight;
            
            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
          }
        }
      } catch (error) {
        console.error('Error handling hash link:', error);
      }
    };
  
    const timeoutId = setTimeout(handleHashLink, 100);
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <div className="font-sans bg-gray-50">
        <Header />
        <Routes>
          <Route path="/" element={
            <>
              <HeroSection id="home" />
              <AboutSection id="about" />
              <OrganizationSection id="organisasi" />
              <GraduatedSection id="lulusan" />
              <GallerySection id="galeri" />
              <ContactSection id="contact" />
            </>
          } />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
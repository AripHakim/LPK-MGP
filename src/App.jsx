import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import OrganizationSection from './components/OrganizationSection';
import GraduatedSection from './components/GraduatedSection';
import GallerySection from './components/GallerySection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import BackToTopButton from './components/BackToTopButton';

// Komponen ScrollToTop yang tidak mengganggu BackToTopButton
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Hanya reset scroll jika bukan hash link
    if (!window.location.hash) {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return null;
}

function App() {
  useEffect(() => {
    const handleHashLink = () => {
      const hash = window.location.hash;
      if (hash) {
        const id = hash.substring(1);
        const element = document.getElementById(id);
        if (element) {
          const headerHeight = document.querySelector('header')?.offsetHeight || 0;
          const offsetPosition = element.offsetTop - headerHeight;
          
          // Gunakan requestAnimationFrame untuk menghindari konflik
          requestAnimationFrame(() => {
            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
          });
        }
      }
    };

    // Timer diperpendek dan dijamin cleanup
    const timeoutId = setTimeout(handleHashLink, 50);
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <div className="font-sans bg-gray-50 min-h-screen">
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
        <BackToTopButton />
      </div>
    </Router>
  );
}

export default App;
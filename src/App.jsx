import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Footer from './components/Footer';
import BackToTopButton from './components/BackToTopButton';
import { lazy, Suspense } from 'react';

const AboutSection = lazy (() => import("./components/AboutSection"));
const OrganizationSection = lazy (() => import("./components/OrganizationSection"));
const GraduatedSection = lazy (() => import("./components/GraduatedSection"));
const GallerySection = lazy (() => import("./components/GallerySection"));
const ContactSection = lazy (() => import("./components/ContactSection"));

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
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
          
          requestAnimationFrame(() => {
            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
          });
        }
      }
    };

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
            <Suspense fallback={null}>
              <AboutSection id="about" />
            </Suspense>
            <Suspense fallback={null}>
              <OrganizationSection id="organisasi" />
            </Suspense>
            <Suspense fallback={null}>
              <GraduatedSection id="lulusan" />
            </Suspense>
            <Suspense fallback={null}>
              <GallerySection id="galeri" />
            </Suspense>
            <Suspense fallback={null}>
              <ContactSection id="contact" />
            </Suspense>
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
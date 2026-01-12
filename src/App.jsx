import { Helmet } from "react-helmet-async";
import { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import OrganizationSection from "./components/OrganizationSection";
import GraduatedSection from "./components/GraduatedSection";
import GallerySection from "./components/GallerySection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import BackToTopButton from "./components/BackToTopButton";

/* ===== Scroll ke atas saat pindah route ===== */
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
  /* ===== Scroll ke section saat hash link ===== */
  useEffect(() => {
    const handleHashLink = () => {
      const hash = window.location.hash;
      if (hash) {
        const id = hash.substring(1);
        const element = document.getElementById(id);
        if (element) {
          const headerHeight =
            document.querySelector("header")?.offsetHeight || 0;
          const offsetPosition = element.offsetTop - headerHeight;

          requestAnimationFrame(() => {
            window.scrollTo({
              top: offsetPosition,
              behavior: "smooth",
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

      {/* ===================== SEO ===================== */}
      <Helmet>
        <title>Maleo Gakuin | LPK Pelatihan Kerja & Kursus Bahasa Jepang</title>

        <meta
          name="description"
          content="Maleo Gakuin adalah LPK (Lembaga Pelatihan Kerja) yang menyediakan pelatihan bahasa dan budaya Jepang untuk persiapan bekerja dan magang ke Jepang secara resmi."
        />

        <meta
          name="keywords"
          content="maleo gakuin, LPK, lembaga pelatihan kerja, bekerja ke jepang, magang jepang, pelatihan kerja jepang, kursus bahasa jepang"
        />

        <link rel="canonical" href="https://maleogogakuin.vercel.app/" />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Maleo Gakuin | LPK Pelatihan Kerja ke Jepang"
        />
        <meta
          property="og:description"
          content="LPK Maleo Gakuin membantu persiapan bahasa, budaya, dan etos kerja untuk bekerja dan magang ke Jepang secara resmi."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://maleogogakuin.vercel.app/" />
      </Helmet>
      {/* =================== END SEO =================== */}

      <div className="font-sans bg-gray-50 min-h-screen">
        <Header />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <HeroSection id="home" />
                <AboutSection id="about" />
                <OrganizationSection id="organisasi" />
                <GraduatedSection id="lulusan" />
                <GallerySection id="galeri" />
                <ContactSection id="contact" />
              </>
            }
          />
        </Routes>

        <Footer />
        <BackToTopButton />
      </div>
    </Router>
  );
}

export default App;

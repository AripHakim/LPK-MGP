import { useState, useRef, useEffect } from 'react';
import { HashLink } from 'react-router-hash-link';
import Logo from '../assets/logo.png';
import RegistrationModal from './RegistrationModal';

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  const handleToggle = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleCloseMenu = () => {
    setMobileMenuOpen(false);
  };

  const handleModalToggle = () => {
    setIsModalOpen(!isModalOpen);
    handleCloseMenu();
  };

  return (
    <>
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto md:px-4 md:py-4 px-2 py-2 flex justify-between items-center">
          <div className="flex items-center">
            <div className="text-white p-2 rounded-lg mr-3">
              <img src={Logo} alt="logo maleo" className="h-12 w-12 md:h-8 md:w-12 lg:h-16 lg:w-16" />
            </div>
            <div>
              <h1 className="text-md md:text-sm lg:text-xl font-bold text-primary-400">
              <HashLink 
                  to="#home"
                  smooth
                >
                MALEO GOGAKUIN PALU
                </HashLink>
              </h1>
            </div>
          </div>

          <nav className="hidden md:block">
            <ul className="flex items-center space-x-8">
              <li>               
                <HashLink 
                  to="#home"
                  smooth
                  className="text-center text-primary-300 hover:text-secondary hover:underline font-medium lg:text-base md:text-sm"
                >
                  Beranda
                </HashLink>
              </li>
              <li>
              <HashLink 
                  to="#about"
                  smooth
                  className="text-center text-primary-300 hover:text-secondary hover:underline font-medium lg:text-base md:text-sm"
                >
                Tentang Kami
              </HashLink>
              </li>
              <li>
              <HashLink 
                  to="#organisasi"
                  smooth
                  className="text-center text-primary-300 hover:text-secondary hover:underline font-medium lg:text-base md:text-sm"
                >
                  Struktur Organisasi
                </HashLink>
              </li>
              <li>
              <HashLink 
                  to="#lulusan"
                  smooth
                  className="text-center text-primary-300 hover:text-secondary hover:underline font-medium lg:text-base md:text-sm"
                >
                  Lulusan
                </HashLink>
              </li>
              <li>
              <HashLink 
                  to="#galeri"
                  smooth
                  className="text-center text-primary-300 hover:text-secondary hover:underline font-medium lg:text-base md:text-sm"
                >
                  Galeri
                </HashLink>
              </li>
              <li>
              <HashLink to="#contact" smooth className="text-center text-primary-300 hover:text-secondary hover:underline font-medium lg:text-base md:text-sm">
                  Kontak
              </HashLink>
              </li>
              <li>
                <button
                  onClick={handleModalToggle}
                  className="bg-secondary text-white lg:px-6 lg:py-3 md:px-2 md:py-0 rounded-lg hover:bg-white hover:text-secondary hover:border hover:border-secondary-600 transition duration-300"
                >
                  Daftar Sekarang
                </button>
              </li>
            </ul>
          </nav>

          <button onClick={handleToggle} className="md:hidden text-gray-800">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
              viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>

        {isMobileMenuOpen && (
          <nav className="md:hidden bg-white shadow-md">
            <ul className="flex flex-col items-end p-8 space-y-4 py-8">
              <li>
              <HashLink 
                to="#home"
                smooth
                className="text-gray-800 hover:text-secondary font-medium"
                onClick={handleCloseMenu}
              >
                  Beranda
              </HashLink>
              </li>
              <li>
                <HashLink
                  to="#about"
                  smooth
                  className="text-gray-800 hover:text-secondary font-medium"
                  onClick={handleCloseMenu}
                >
                  Tentang Kami
                </HashLink>
              </li>
              <li>
                <HashLink
                  to="#organisasi"
                  smooth
                  className="text-gray-800 hover:text-secondary font-medium"
                  onClick={handleCloseMenu}
                >
                  Struktur Organisasi
                </HashLink>
              </li>
              <li>
                <HashLink
                  to="#lulusan"
                  smooth
                  className="text-gray-800 hover:text-secondary font-medium"
                  onClick={handleCloseMenu}
                >
                  Lulusan
                </HashLink>
              </li>
              <li>
                <HashLink
                  to="#galeri"
                  smooth
                  className="text-gray-800 hover:text-secondary font-medium"
                  onClick={handleCloseMenu}
                >
                  Galeri
                </HashLink>
              </li>
              <li>
                <HashLink
                  to="#contact"
                  smooth
                  className="text-gray-800 hover:text-secondary font-medium"
                  onClick={handleCloseMenu}
                >
                  Kontak
                </HashLink>
              </li>
              <li>
                <button
                  onClick={handleModalToggle}
                  className="bg-secondary text-white px-4 py-2 rounded-lg hover:bg-secondary-600 transition duration-300"
                >
                  Daftar Sekarang
                </button>
              </li>
            </ul>
          </nav>
        )}
      </header>

      <RegistrationModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
};

export default Header;

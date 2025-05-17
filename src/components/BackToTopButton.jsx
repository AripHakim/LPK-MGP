import { useEffect, useState } from 'react';
import arrowUpImage from '../assets/logo.png'; // Adjust the path to your image

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(window.scrollY > 10);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    window.history.replaceState(null, null, ' ');
  };

  useEffect(() => {
    let timeoutId;
    const debouncedScrollHandler = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(toggleVisibility, 100);
    };

    const handleInitialLoad = () => {
      toggleVisibility();
      window.addEventListener('scroll', debouncedScrollHandler);
    };

    handleInitialLoad();

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('scroll', debouncedScrollHandler);
    };
  }, []);

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to top"
      className={`fixed bottom-8 right-8 z-[999] p-2 bg-white rounded-full shadow-lg transition-all duration-300 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      } hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-300`}
    >
      <img 
        src={arrowUpImage} 
        alt="Up arrow"
        className="w-8 h-8 object-contain"
        onError={(e) => {
          // Fallback to SVG if image fails to load
          e.target.onerror = null;
          e.target.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%232238a6"><path fillRule="evenodd" d="M11.47 7.72a.75.75 0 011.06 0l7.5 7.5a.75.75 0 11-1.06 1.06L12 9.31l-6.97 6.97a.75.75 0 01-1.06-1.06l7.5-7.5z" clipRule="evenodd"/></svg>';
        }}
      />
    </button>
  );
};

export default BackToTopButton;
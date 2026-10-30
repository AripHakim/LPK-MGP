import { useState } from 'react';
import { HashLink } from 'react-router-hash-link';
import RegistrationModal from './RegistrationModal';
import heroImg from '../assets/event/hero-img.webp';
import { ChevronLeft, ChevronRight } from "lucide-react";


const mediaSlides = [
  {
    type: "image",
    src: heroImg,
    alt: "Siswa LPK Maleo Gogakuin Palu sedang belajar bahasa Jepang",
  },
  {
    type: "video",
    src: "/videos/video-website.mp4",
    alt: "Video dokumentasi kegiatan LPK Maleo Gogakuin Palu",
  },
];

const HeroSection = ({ id }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);


  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % mediaSlides.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + mediaSlides.length) % mediaSlides.length
    );
  };

  const currentMedia = mediaSlides[currentIndex];


  return (
    <section id={id} className="py-10 bg-gradient-to-r from-primary-50 to-indigo-50">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0 md:pr-8 md:text-sm">
          <h1 className="text-xl md:text-xl lg:text-5xl lg:mb-6 font-bold text-primary-400 mb-6 md:mb-2">
            Selamat Datang di <span className="text-secondary-600">LPK MALEO GOGAKUIN PALU</span>
          </h1>
          <p className="text-sm lg:text-md text-primary-200 mb-2 text-justify">
            LPK MALEO GOGAKUIN PALU bekerjasama dengan (SO) PT TERATAI GOGAKUIN merupakan salah satu lembaga yang berdiri untuk memberikan pelatihan khusus bagi orang-orang yang ingin bekerja ke Jepang. 
          </p>
          <h3 className="text-md font-bold text-secondary">
            AYO BERKARIR KE JEPANG BERSAMA LPK MALEO GOGAKUIN PALU
          </h3>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mt-6">
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-secondary text-white font-medium px-6 py-3 rounded-lg hover:bg-secondary-700 transition duration-300"
            >
              Daftar Sekarang
            </button>
            <HashLink 
              to="#contact"
              smooth
              className="border border-secondary-600 text-secondary-600 px-6 py-3 md:py-2 md:py-2 rounded-lg text-center font-medium hover:bg-secondary-600 hover:text-white transition duration-300"
            >
              Hubungi Kami
            </HashLink>
          </div>
        </div>

        <div className="w-full md:w-1/2">
      <div className="relative h-64 md:h-[400px] w-full rounded-lg overflow-hidden shadow-lg bg-gray-100 group">

        {/* Media */}
        {currentMedia.type === "image" ? (
          <img
            src={currentMedia.src}
            alt={currentMedia.alt}
            className="absolute inset-0 h-full w-full object-cover"
          />
        ) : (
          <video
            key={currentMedia.src}
            src={currentMedia.src}
            controls
            playsInline
            preload="metadata"
            className="absolute inset-0 h-full w-full object-cover"
          >   <source src={currentMedia.src} type="video/mp4" />

            Browser Anda tidak mendukung video.
          </video>
        )}

        {/* Previous Button */}
        <button
          onClick={prevSlide}
          aria-label="Media sebelumnya"
          className="absolute left-3 top-1/2 -translate-y-1/2 z-10
          bg-black/50 hover:bg-black/70 text-white
          p-2 rounded-full transition-all"
        >
          <ChevronLeft size={24} />
        </button>

        {/* Next Button */}
        <button
          onClick={nextSlide}
          aria-label="Media berikutnya"
          className="absolute right-3 top-1/2 -translate-y-1/2 z-10
          bg-black/50 hover:bg-black/70 text-white
          p-2 rounded-full transition-all"
        >
          <ChevronRight size={24} />
        </button>

        {/* Indicators */}
        <div className="absolute bottom-4 left-0 right-0 z-10 flex justify-center gap-2">
          {mediaSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Lihat media ${index + 1}`}
              className={`h-2 rounded-full transition-all ${
                currentIndex === index
                  ? "w-6 bg-white"
                  : "w-2 bg-white/50 hover:bg-white"
              }`}
            />
          ))}
        </div>

      </div>
    </div>
      </div>

      <RegistrationModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </section>
  );
};

export default HeroSection;

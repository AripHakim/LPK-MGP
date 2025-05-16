import { useState } from 'react';
import { HashLink } from 'react-router-hash-link';
import RegistrationModal from './RegistrationModal';

const HeroSection = ({ id }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

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
          <div className="relative h-64 md:h-[400px] w-full rounded-lg overflow-hidden shadow-lg bg-gray-100">
            <img 
              src="/event/14.jpg" 
              alt="Siswa LPK Maleo Gogakuin Palu sedang belajar bahasa Jepang" 
              className="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
            />
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
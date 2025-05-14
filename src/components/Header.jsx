import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo.png';

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef(null);

  const [formData, setFormData] = useState({
    fullName: '',
    birthPlace: '',
    birthDate: '',
    gender: '',
    lastEducation: '',
    address: '',
    weight: '',
    height: '',
    phone: ''
  });

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setIsModalOpen(false);
      }
    };

    if (isModalOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isModalOpen]);


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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here (e.g., send to API)
    console.log('Form submitted:', formData);
    alert('Pendaftaran berhasil dikirim! Kami akan menghubungi Anda segera.');
    setIsModalOpen(false);
    // Reset form
    setFormData({
      fullName: '',
      birthPlace: '',
      birthDate: '',
      gender: '',
      lastEducation: '',
      address: '',
      weight: '',
      height: '',
      phone: ''
    });
  };

  return (
    <>
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-2 py-2 flex justify-between items-center">
          {/* Logo & Title */}
          <div className="flex items-center">
            <div className="text-white p-2 rounded-lg mr-3">
              <img src={Logo} alt="logo maleo" className="h-12 w-12 lg:h-16 lg:w-16" />
            </div>
            <div>
              <h1 className="text-md md:text-xl lg:text-xl font-bold text-primary-400">
                MALEO GOGAKUIN PALU
              </h1>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex items-center space-x-8">
              <li><a href="#home" className="text-center text-primary-300 hover:text-secondary hover:underline font-medium text-md">Beranda</a></li>
              <li><a href="#about" className="text-primary-300 hover:text-secondary hover:underline font-medium text-md">Tentang Kami</a></li>
              <li><a href="#organisasi" className="text-primary-300 hover:text-secondary hover:underline font-medium text-md">Struktur Organisasi</a></li>
              <li><a href="#contact" className="text-primary-300 hover:text-secondary hover:underline font-medium text-md">Kontak</a></li>
              <li>
                <button
                  onClick={handleModalToggle}
                  className="bg-secondary text-white px-4 py-2 rounded-lg hover:bg-white hover:text-secondary hover:border hover:border-secondary-600 transition duration-300"
                >
                  Daftar Sekarang
                </button>
              </li>
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <button onClick={handleToggle} className="md:hidden text-gray-800">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
              viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <nav className="md:hidden bg-white shadow-md">
            <ul className="flex flex-col items-end p-8 space-y-4 py-8">
              <li><a href="#home" onClick={handleCloseMenu} className="text-gray-800 hover:text-secondary font-medium">Beranda</a></li>
              <li><a href="#about" onClick={handleCloseMenu} className="text-gray-800 hover:text-secondary font-medium">Tentang Kami</a></li>
              <li><a href="#organisasi" onClick={handleCloseMenu} className="text-gray-800 hover:text-secondary font-medium">Struktur Organisasi</a></li>
              <li><a href="#contact" onClick={handleCloseMenu} className="text-gray-800 hover:text-secondary font-medium">Kontak</a></li>
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

      {/* Registration Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-opacity-10 backdrop-blur-sm flex items-center justify-center z-50 p-4 m-2">
          <div ref={modalRef} className="bg-white rounded-lg shadow-xl w-full max-w-md max-h-[90vh] overflow-y-auto animate-fade-in">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold text-gray-800">Formulir Pendaftaran</h2>
                <button 
                  onClick={() => setIsModalOpen(false)}
                  className="text-gray-500 hover:text-gray-700 transitioin-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                    Nama Lengkap <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary-500"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="birthPlace" className="block text-sm font-medium text-gray-700 mb-1">
                    Tempat Lahir <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="birthPlace"
                    name="birthPlace"
                    value={formData.birthPlace}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary-500"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="birthDate" className="block text-sm font-medium text-gray-700 mb-1">
                    Tanggal Lahir <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="date"
                    id="birthDate"
                    name="birthDate"
                    value={formData.birthDate}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Jenis Kelamin <span className="text-red-500">*</span>
                  </label>
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="gender"
                        value="Laki-laki"
                        checked={formData.gender === 'Laki-laki'}
                        onChange={handleInputChange}
                        className="h-4 w-4 text-secondary-600 focus:ring-secondary-500 border-gray-300"
                        required
                      />
                      <span className="ml-2 text-gray-700">Laki-laki</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="gender"
                        value="Perempuan"
                        checked={formData.gender === 'Perempuan'}
                        onChange={handleInputChange}
                        className="h-4 w-4 text-secondary-600 focus:ring-secondary-500 border-gray-300"
                      />
                      <span className="ml-2 text-gray-700">Perempuan</span>
                    </label>
                  </div>
                </div>

                <div>
                  <label htmlFor="lastEducation" className="block text-sm font-medium text-gray-700 mb-1">
                    Pendidikan Terakhir <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="lastEducation"
                    name="lastEducation"
                    value={formData.lastEducation}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary-500"
                    required
                  >
                    <option value="">Pilih Pendidikan</option>
                    <option value="SD">SD</option>
                    <option value="SMP">SMP</option>
                    <option value="SMA/SMK">SMA/SMK</option>
                    <option value="D3">D3</option>
                    <option value="S1">S1</option>
                    <option value="S2">S2</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                    Alamat Lengkap <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="address"
                    name="address"
                    rows="3"
                    value={formData.address}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary-500"
                    required
                  ></textarea>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="weight" className="block text-sm font-medium text-gray-700 mb-1">
                      Berat Badan (kg) <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="number"
                      id="weight"
                      name="weight"
                      value={formData.weight}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary-500"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="height" className="block text-sm font-medium text-gray-700 mb-1">
                      Tinggi Badan (cm) <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="number"
                      id="height"
                      name="height"
                      value={formData.height}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary-500"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    No. Handphone/WhatsApp <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary-500"
                    required
                  />
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full bg-secondary-600 text-white py-2 px-4 rounded-md hover:bg-secondary-700 transition duration-300"
                  >
                    Kirim Pendaftaran
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const [formData, setFormData] = useState({
    namaLengkap: '',
    tanggalLahir: '',
    jenisKelamin: '',
    pendidikanTerakhir: '',
    alamatLengkap: '',
    beratBadan: '',
    tinggiBadan: '',
    noHP: ''
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

  // Auto-close error/success messages after 3 seconds
  useEffect(() => {
    let timer;
    if (submitError || submitSuccess) {
      timer = setTimeout(() => {
        setSubmitError('');
        setSubmitSuccess(false);
      }, 3000);
    }
    return () => clearTimeout(timer);
  }, [submitError, submitSuccess]);


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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');
    
    try {
      const response = await fetch('https://maleo-be.onrender.com/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setSubmitSuccess(true);
      // Reset form after successful submission
      setFormData({
        namaLengkap: '',
        tanggalLahir: '',
        jenisKelamin: '',
        pendidikanTerakhir: '',
        alamatLengkap: '',
        beratBadan: '',
        tinggiBadan: '',
        noHP: ''
      });
      
      // Optionally close the modal after a delay
      setTimeout(() => {
        setIsModalOpen(false);
        setSubmitSuccess(false);
      }, 2000);
      
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitError('Gagal mengirim formulir. Silakan coba lagi.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="home" className="py-10 bg-gradient-to-r from-primary-50 to-indigo-50">
     <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        {/* Text Content - Left Side */}
        <div className="md:w-1/2 mb-10 md:mb-0 md:pr-8">
          <h1 className="text-xl md:text-5xl font-bold text-primary-400 mb-6">
            Selamat Datang di <span className="text-secondary-600">LPK MALEO GOGAKUIN PALU</span>
          </h1>
          <p className="text-sm lg:text-md text-primary-200 mb-8 text-justify">
            LPK MALEO GOGAKUIN PALU bekerjasama dengan (SO) PT TERATAI GOGAKUIN merupakan salah satu lembaga yang berdiri untuk memberikan pelatihan khusus bagi orang-orang yang ingin bekerja ke jepang. 
            <br /><br />
            {/* LPK MALEO GOGAKUIN PALU saat ini masih PROMO cukup bayar Rp. 1.000.000 GRATIS belajar selama 6 bulan dan mendapatkan kesempatan wawancara dengan perusahaan jepang dalam 1 tahun. 
            Wujudkan cita-cita anda bersama MALEO GOGAKUIN PALU. 
            Daftar sekarang dan akan memulai kelas pada bulan Juni 2025 */}
          </p>
          <h3 className="text-md font-bold pt-2 text-secondary">
            AYO BERKARIR KE JEPANG BERSAMA LPK MALEO GOGAKUIN PALU
          </h3>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mt-6">
            <button
              onClick={handleModalToggle}
              className="bg-secondary text-white font-medium px-6 py-3 rounded-lg hover:bg-secondary hover:text-primary hover:border hover:border-primary-600 transition duration-300"
            >
              Daftar Sekarang
            </button>
            <a 
              href="#contact" 
              className="border border-secondary-600 text-secondary-600 px-6 py-3 rounded-lg text-center font-medium hover:bg-secondary-600 hover:text-white transition duration-300"
            >
              Hubungi Kami
            </a>
          </div>
        </div>

        {/* Image Content - Right Side (Full Height) */}
        <div className="w-full md:w-1/2">
          <div className="relative h-64 md:h-[400px] w-full rounded-lg overflow-hidden shadow-lg bg-gray-100">
            <img 
              src="/event/14.jpg" 
              alt="Kegiatan LPK Maleo Gogakuin Palu" 
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-opacity-10 backdrop-blur-sm flex items-center justify-center z-50 p-4 m-2">
            {/* Toast Notifications */}
            {submitSuccess && (
              <div className="fixed top-4 right-4 z-50 animate-fade-in">
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative">
                  <span className="block sm:inline">Pendaftaran berhasil dikirim!</span>
                </div>
              </div>
            )}
            
            {submitError && (
              <div className="fixed top-4 right-4 z-50 animate-fade-in">
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
                  <span className="block sm:inline">{submitError}</span>
                </div>
              </div>
            )}
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
                  <label htmlFor="namaLengkap" className="block text-sm font-medium text-gray-700 mb-1">
                    Nama Lengkap <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="namaLengkap"
                    name="namaLengkap"
                    value={formData.namaLengkap}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary-500"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="tanggalLahir" className="block text-sm font-medium text-gray-700 mb-1">
                    Tanggal Lahir <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="date"
                    id="tanggalLahir"
                    name="tanggalLahir"
                    value={formData.tanggalLahir}
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
                        name="jenisKelamin"
                        value="Laki-laki"
                        checked={formData.jenisKelamin === 'Laki-laki'}
                        onChange={handleInputChange}
                        className="h-4 w-4 text-secondary-600 focus:ring-secondary-500 border-gray-300"
                        required
                      />
                      <span className="ml-2 text-gray-700">Laki-laki</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="jenisKelamin"
                        value="Perempuan"
                        checked={formData.jenisKelamin === 'Perempuan'}
                        onChange={handleInputChange}
                        className="h-4 w-4 text-secondary-600 focus:ring-secondary-500 border-gray-300"
                      />
                      <span className="ml-2 text-gray-700">Perempuan</span>
                    </label>
                  </div>
                </div>

                <div>
                  <label htmlFor="pendidikanTerakhir" className="block text-sm font-medium text-gray-700 mb-1">
                    Pendidikan Terakhir <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="pendidikanTerakhir"
                    name="pendidikanTerakhir"
                    value={formData.pendidikanTerakhir}
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
                  <label htmlFor="alamatLengkap" className="block text-sm font-medium text-gray-700 mb-1">
                    Alamat Lengkap <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="alamatLengkap"
                    name="alamatLengkap"
                    rows="3"
                    value={formData.alamatLengkap}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary-500"
                    required
                  ></textarea>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="beratBadan" className="block text-sm font-medium text-gray-700 mb-1">
                      Berat Badan (kg) <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="number"
                      id="beratBadan"
                      name="beratBadan"
                      value={formData.beratBadan}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary-500"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="tinggiBadan" className="block text-sm font-medium text-gray-700 mb-1">
                      Tinggi Badan (cm) <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="number"
                      id="tinggiBadan"
                      name="tinggiBadan"
                      value={formData.tinggiBadan}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary-500"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="noHP" className="block text-sm font-medium text-gray-700 mb-1">
                    No. Handphone/WhatsApp <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="noHP"
                    name="noHP"
                    value={formData.noHP}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary-500"
                    required
                  />
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-2 px-4 rounded-md ${isSubmitting ? 'bg-gray-400' : 'bg-secondary-600 hover:bg-secondary-700'} text-secondary-200 text-center font-medium text-sm hover:border hover:border-primary-600 transition duration-300`}
                  >
                    {isSubmitting ? 'Mengirim...' : 'Kirim Pendaftaran'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </section>

    
  );
};

export default HeroSection;

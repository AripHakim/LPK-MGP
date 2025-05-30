import { useState, useRef, useEffect } from 'react';

const RegistrationModal = ({ isOpen, onClose }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const modalRef = useRef(null);
  
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
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

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

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.namaLengkap.trim()) {
      newErrors.namaLengkap = 'Nama lengkap wajib diisi';
    } else if (formData.namaLengkap.length < 3) {
      newErrors.namaLengkap = 'Nama terlalu pendek (minimal 3 karakter)';
    }
  
    if (!formData.tanggalLahir) {
      newErrors.tanggalLahir = 'Tanggal lahir wajib diisi';
    } else {
      const birthDate = new Date(formData.tanggalLahir);
      const minDate = new Date();
      minDate.setFullYear(minDate.getFullYear() - 60);
      const maxDate = new Date();
      maxDate.setFullYear(maxDate.getFullYear() - 17);
      
      if (birthDate > maxDate) {
        newErrors.tanggalLahir = 'Minimal usia 17 tahun';
      } else if (birthDate < minDate) {
        newErrors.tanggalLahir = 'Maksimal usia 60 tahun';
      }
    }
  
    if (!formData.jenisKelamin) {
      newErrors.jenisKelamin = 'Jenis kelamin wajib dipilih';
    }
  
    if (!formData.pendidikanTerakhir) {
      newErrors.pendidikanTerakhir = 'Pilih pendidikan terakhir';
    }
  
    if (!formData.alamatLengkap.trim()) {
      newErrors.alamatLengkap = 'Alamat lengkap wajib diisi';
    } else if (formData.alamatLengkap.length < 10) {
      newErrors.alamatLengkap = 'Alamat terlalu pendek (minimal 10 karakter)';
    }
  
    if (!formData.beratBadan) {
      newErrors.beratBadan = 'Berat badan wajib diisi';
    } else if (formData.beratBadan < 30 || formData.beratBadan > 200) {
      newErrors.beratBadan = 'Berat badan harus antara 30-200 kg';
    }
  
    if (!formData.tinggiBadan) {
      newErrors.tinggiBadan = 'Tinggi badan wajib diisi';
    } else if (formData.tinggiBadan < 100 || formData.tinggiBadan > 250) {
      newErrors.tinggiBadan = 'Tinggi badan harus antara 100-250 cm';
    }
  
    if (!formData.noHP) {
      newErrors.noHP = 'Nomor HP wajib diisi';
    } else if (!/^[0-9]{10,13}$/.test(formData.noHP)) {
      newErrors.noHP = 'Format nomor HP tidak valid (10-13 digit angka)';
    } else if (!/^8/.test(formData.noHP)) {
      newErrors.noHP = 'Nomor HP harus dimulai dengan angka 8';
    }
  
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
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
      
      setTimeout(() => {
        onClose();
        setSubmitSuccess(false);
      }, 2000);
      
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitError(error.message || 'Gagal mengirim formulir. Silakan coba lagi.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-opacity-30 backdrop-blur-sm flex items-center justify-center z-50 p-4">
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

      <div 
        ref={modalRef} 
        className="bg-white rounded-lg shadow-xl w-full max-w-md max-h-[90vh] overflow-y-auto animate-fade-in"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 id="modal-title" className="text-xl font-bold text-gray-800">
              Formulir Pendaftaran
            </h2>
            <button 
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 transition-colors"
              aria-label="Tutup modal"
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
                className={`w-full px-3 py-2 border ${errors.namaLengkap ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-secondary-500`}
                aria-invalid={!!errors.namaLengkap}
                aria-describedby={errors.namaLengkap ? "namaLengkap-error" : undefined}
              />
              {errors.namaLengkap && (
                <p id="namaLengkap-error" className="mt-1 text-sm text-red-600">
                  {errors.namaLengkap}
                </p>
              )}
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
                className={`w-full px-3 py-2 border ${errors.tanggalLahir ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-secondary-500`}
                aria-invalid={!!errors.tanggalLahir}
                aria-describedby={errors.tanggalLahir ? "tanggalLahir-error" : undefined}
              />
              {errors.tanggalLahir && (
                <p id="tanggalLahir-error" className="mt-1 text-sm text-red-600">
                  {errors.tanggalLahir}
                </p>
              )}
            </div>

            <div>
              <fieldset>
                <legend className="block text-sm font-medium text-gray-700 mb-1">
                  Jenis Kelamin <span className="text-red-500">*</span>
                </legend>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="jenisKelaminLaki"
                      name="jenisKelamin"
                      value="Laki-laki"
                      checked={formData.jenisKelamin === 'Laki-laki'}
                      onChange={handleInputChange}
                      className="h-4 w-4 text-secondary-600 focus:ring-secondary-500 border-gray-300"
                      aria-invalid={!!errors.jenisKelamin}
                      aria-describedby={errors.jenisKelamin ? "jenisKelamin-error" : undefined}
                    />
                    <label htmlFor="jenisKelaminLaki" className="ml-2 text-gray-700">
                      Laki-laki
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="jenisKelaminPerempuan"
                      name="jenisKelamin"
                      value="Perempuan"
                      checked={formData.jenisKelamin === 'Perempuan'}
                      onChange={handleInputChange}
                      className="h-4 w-4 text-secondary-600 focus:ring-secondary-500 border-gray-300"
                      aria-invalid={!!errors.jenisKelamin}
                      aria-describedby={errors.jenisKelamin ? "jenisKelamin-error" : undefined}
                    />
                    <label htmlFor="jenisKelaminPerempuan" className="ml-2 text-gray-700">
                      Perempuan
                    </label>
                  </div>
                </div>
                {errors.jenisKelamin && (
                  <p id="jenisKelamin-error" className="mt-1 text-sm text-red-600">
                    {errors.jenisKelamin}
                  </p>
                )}
              </fieldset>
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
                className={`w-full px-3 py-2 border ${
                  errors.pendidikanTerakhir ? 'border-red-500' : 'border-gray-300'
                } rounded-md focus:outline-none focus:ring-2 focus:ring-secondary-500`}
                aria-invalid={!!errors.pendidikanTerakhir}
                aria-describedby={errors.pendidikanTerakhir ? "pendidikan-error" : undefined}
              >
                <option value="">Pilih Pendidikan</option>
                <option value="SD">SD</option>
                <option value="SMP">SMP</option>
                <option value="SMA/SMK">SMA/SMK</option>
                <option value="D3">D3</option>
                <option value="S1">S1</option>
                <option value="S2">S2</option>
              </select>
              {errors.pendidikanTerakhir && (
                <p id="pendidikan-error" className="mt-1 text-sm text-red-600">
                  {errors.pendidikanTerakhir}
                </p>
              )}
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
                className={`w-full px-3 py-2 border ${
                  errors.alamatLengkap ? 'border-red-500' : 'border-gray-300'
                } rounded-md focus:outline-none focus:ring-2 focus:ring-secondary-500`}
                aria-invalid={!!errors.alamatLengkap}
                aria-describedby={errors.alamatLengkap ? "alamat-error" : undefined}
              ></textarea>
              {errors.alamatLengkap && (
                <p id="alamat-error" className="mt-1 text-sm text-red-600">
                  {errors.alamatLengkap}
                </p>
              )}
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
                  min="30"
                  max="200"
                  value={formData.beratBadan}
                  onChange={handleInputChange}
                  className={`w-full px-3 py-2 border ${
                    errors.beratBadan ? 'border-red-500' : 'border-gray-300'
                  } rounded-md focus:outline-none focus:ring-2 focus:ring-secondary-500`}
                  aria-invalid={!!errors.beratBadan}
                  aria-describedby={errors.beratBadan ? "berat-error" : undefined}
                />
                {errors.beratBadan && (
                  <p id="berat-error" className="mt-1 text-sm text-red-600">
                    {errors.beratBadan}
                  </p>
                )}
              </div>
              <div>
                <label htmlFor="tinggiBadan" className="block text-sm font-medium text-gray-700 mb-1">
                  Tinggi Badan (cm) <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  id="tinggiBadan"
                  name="tinggiBadan"
                  min="100"
                  max="250"
                  value={formData.tinggiBadan}
                  onChange={handleInputChange}
                  className={`w-full px-3 py-2 border ${
                    errors.tinggiBadan ? 'border-red-500' : 'border-gray-300'
                  } rounded-md focus:outline-none focus:ring-2 focus:ring-secondary-500`}
                  aria-invalid={!!errors.tinggiBadan}
                  aria-describedby={errors.tinggiBadan ? "tinggi-error" : undefined}
                />
                {errors.tinggiBadan && (
                  <p id="tinggi-error" className="mt-1 text-sm text-red-600">
                    {errors.tinggiBadan}
                  </p>
                )}
              </div>
            </div>

            <div>
              <label htmlFor="noHP" className="block text-sm font-medium text-gray-700 mb-1">
                No. Handphone/WhatsApp <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <span className="text-gray-500">+62</span>
                </div>
                <input
                  type="tel"
                  id="noHP"
                  name="noHP"
                  value={formData.noHP}
                  onChange={handleInputChange}
                  pattern="[0-9]{10,13}"
                  className={`block w-full pl-12 px-3 py-2 border ${
                    errors.noHP ? 'border-red-500' : 'border-gray-300'
                  } rounded-md focus:outline-none focus:ring-2 focus:ring-secondary-500`}
                  placeholder="81234567890"
                  aria-invalid={!!errors.noHP}
                  aria-describedby={errors.noHP ? "nohp-error" : undefined}
                />
              </div>
              {errors.noHP && (
                <p id="nohp-error" className="mt-1 text-sm text-red-600">
                  {errors.noHP}
                </p>
              )}
            </div>            
            <div className="pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-2 px-4 rounded-md ${
                  isSubmitting 
                    ? 'bg-gray-400 cursor-not-allowed' 
                    : 'bg-secondary-600 hover:bg-secondary-700'
                } text-white text-center font-medium text-sm transition duration-300`}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Mengirim...
                  </span>
                ) : 'Kirim Pendaftaran'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegistrationModal;
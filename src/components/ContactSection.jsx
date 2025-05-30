import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import emailjs from 'emailjs-com';
import L from 'leaflet';

const customIcon = L.icon({
  iconUrl: '/pin.png', 
  iconSize: [50, 50],  
  iconAnchor: [16, 32], 
  popupAnchor: [0, -32],
});

const MapWithNoSSR = dynamic(
  () => import('react-leaflet').then((mod) => {
    const { MapContainer, TileLayer, Marker, Popup } = mod;
    return function Map({ center, zoom }) {
      return (
        <MapContainer 
          center={center} 
          zoom={zoom} 
          style={{ height: '100%', width: '100%', borderRadius: '0.375rem' }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={center} icon={customIcon}>
            <Popup maxWidth={1600}>
              <div style={{ textAlign: 'center', width: '100%' }}>
                <img 
                  src="/lpk-maleo.jpg" 
                  alt="Foto LPK" 
                  style={{
                    width: '300px',
                    height: '150px',
                    maxWidth: '1550px',  
                    borderRadius: '0.5rem',
                    marginTop: '0.5rem'
                  }} 
                />
              </div>
            </Popup>
          </Marker>
        </MapContainer>
      );
    };
  }),
  { ssr: false }
);

const ContactSection = ({id}) => {
  const mapCenter = [-0.8879073, 119.8654517];
  const mapZoom = 17;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs.send(
      'service_l7jma5l', 
      'template_eqrf5hr', 
      formData,
      'kZyf2wOhG85ZaVBGZ' 
    )
    .then((response) => {
      alert('Pesan terkirim! Kami akan segera menghubungi Anda.');
      setFormData({ name: '', email: '', phone: '', message: '' });
    }, (error) => {
      alert('Gagal mengirim pesan, silakan coba lagi atau hubungi via WhatsApp.');
      console.error('EmailJS Error:', error);
    })
    .finally(() => {
      setIsSubmitting(false);
    });
  };

  return (
    <section className="py-12 bg-gray-50">
      <div id={id} className="container md:mx-auto md:px-4 lg:mx-auto lg:px-4 lg:scroll-mt-10">
        <h2 className="text-3xl font-bold text-center text-primary-400 mb-12">Kontak Kami</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-primary-300 mb-6">Informasi Kontak</h3>
              
              <div className="space-y-6">

              <div className="flex items-start">
                  <div className="h-56 md:h-64 w-full z-30">
                    <MapWithNoSSR center={mapCenter} zoom={mapZoom} />
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-secondary p-2 rounded-full mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-primary-300">Alamat</h4>
                    <p className="text-gray-600">Jl. Undata No. 27, Palu, Sulawesi Tengah</p>
                    <a
                    href="https://maps.app.goo.gl/dAmGhZ7YB9GUuB9h6?g_st=aw" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-primary-500 hover:underline"
                  >
                    Lihat Lokasi di Google Maps
                  </a>
                  </div>
                </div> 
                <div className="flex items-start">
                  <div className="bg-secondary p-2 rounded-full mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-primary-300">Telepon & WhatsApp</h4>
                    <p className="text-gray-600">+62 821 3122 3365</p>
                    <a 
                      href="https://wa.me/6282131223365" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary-500 hover:underline text-sm"
                    >
                      Kirim Pesan WhatsApp
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-secondary p-2 rounded-full mr-4 items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-primary-300">Email</h4>
                    <a href="mailto:lpk.maleogogakuinpalu@gmail.com" className="text-primary-500 hover:underline">
                      lpk.maleogogakuinpalu@gmail.com                  
                    </a>
                  </div>
                </div>          
              </div>
            </div>     
          </div>          
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-primary-300 mb-6">Formulir Kontak</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary-500"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary-500"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Nomor Telepon/WhatsApp
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary-500"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Pesan
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary-500"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-secondary-600 text-white py-2 px-4 rounded-md hover:bg-secondary-700 transition duration-300 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                {isSubmitting ? 'Mengirim...' : 'Kirim Pesan'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
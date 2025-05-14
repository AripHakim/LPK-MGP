import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-secondary text-primary-300 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Tentang Kami */}
          <div>
            <h3 className="text-xl font-semibold mb-4">LPK MALEO GOGAKUIN PALU</h3>
            <p className="text-primary-400">
            Lembaga Pelatihan Kerja yang berdiri untuk memberikan pelatihan khusus bagi orang-orang yang ingin bekerja ke jepang.
            </p>
          </div>
          
          {/* Tautan Cepat */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Tautan Cepat</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-primary-400 hover:text-white transition">Beranda</a></li>
              <li><a href="#about" className="text-primary-400 hover:text-white transition">Tentang Kami</a></li>
              <li><a href="#organisasi" className="text-primary-400 hover:text-white transition">Struktur Organisasi</a></li>
              <li><a href="#contact" className="text-primary-400 hover:text-white transition">Kontak</a></li>
            </ul>
          </div>
          
          {/* Kontak */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Kontak</h3>
            <ul className="space-y-2 text-primary-400">
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Jl. Undata No. 27, Palu</span>
              </li>
              <li className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>+62 821 3122 3365</span>
              </li>
              <li className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                <span>lpk.maleogogakuinpalu@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-primary-400 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; 2025 LPK MALEO GOGAKUIN PALU. All rights reserved.</p>
          {/* fb */}
          <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="https://www.facebook.com/p/Lpk-Maleo-Gogakuin-Palu-61559252657771/" className="text-primary-400 hover:text-white transition" aria-label="Facebook" target='_blank'>
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22.675 0h-21.35C.6 0 0 .6 0 1.326v21.348C0 23.4.6 24 1.326 24h11.495v-9.294H9.691v-3.622h3.13V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.464.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.4 24 24 23.4 24 22.674V1.326C24 .6 23.4 0 22.675 0z" />
            </svg>
          </a>
            {/* ig */}
            <a href="https://www.instagram.com/lpkmaleogogakuin.plw/" className="text-primary-400 hover:text-white transition" target='_blank' aria-label="Instagram">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            {/* tt */}
            <a href="https://www.tiktok.com/@maleogogakuinpalu" className="text-primary-400 hover:text-white transition" target='_blank' aria-label="TikTok">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.25 2h3.25c.036.874.347 1.679.902 2.274a4.32 4.32 0 0 0 2.598.976v3.225a7.25 7.25 0 0 1-3.25-.778V16.5a5.25 5.25 0 1 1-5.25-5.25h.25v3.192a2.25 2.25 0 1 0 2.25 2.25V2z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
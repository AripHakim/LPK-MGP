const AboutSection = () => {
    return (
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-primary-400 mb-12">Tentang Kami</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <div className="bg-secondary-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-secondary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Visi & Misi</h3>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
              </p>
            </div> */}

            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-secondary-100 w-12 h-12 rounded-full flex items-center justify-center shrink-0">                
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-secondary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                </div>
                <h3 className="text-xl font-semibold text-primary-400">Visi & Misi</h3>
              </div>

              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
              </p>
            </div>                      
            
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-secondary-100 w-12 h-12 rounded-full flex items-center justify-center shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-secondary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-primary-400">Bidang Kerja</h3>
              </div>

              <ul className="text-gray-600">
              <li>Konstruksi</li>
                  <li>Perikanan</li>
                  <li>Pertanian</li>
                  <li>Pengolahan Makanan</li>
                  <li>Peternakan</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-secondary-100 w-12 h-12 rounded-full flex items-center justify-center shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-secondary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-primary-400">Keuntungan</h3>
              </div>

              <ul className="text-gray-600">
                <li>Ada Dana Talangan</li>
                <li>Gaji 12-25jt/bulan</li>
                <li>Mendapat nenkin(pensiun) 30-50jt</li>
                <li>Pengalaman Kerja Internasional</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default AboutSection;
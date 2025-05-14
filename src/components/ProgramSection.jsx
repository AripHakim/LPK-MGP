const ProgramSection = () => {
    const programs = [
      {
        id: 1,
        name: "Muhammad Fadli",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        duration: "3 Bulan",
        fee: "Rp 2.500.000",
        schedule: "Senin & Rabu, 13.00 - 16.00 WITA"
      },
      {
        id: 2,
        name: "Adji Dwi Purnama Putra",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        duration: "2 Bulan",
        fee: "Rp 3.000.000",
        schedule: "Selasa & Kamis, 09.00 - 12.00 WITA"
      },
      {
        id: 3,
        name: "Moh. Fathir",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        duration: "4 Bulan",
        fee: "Rp 4.000.000",
        schedule: "Senin - Jumat, 18.00 - 20.00 WITA"
      },
      {
        id: 4,
        name: "Adzian Afif",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        duration: "3 Bulan",
        fee: "Rp 3.500.000",
        schedule: "Jumat & Sabtu, 08.00 - 12.00 WITA"
      }
    ];
  
    return (
      <section id="program" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Program Pelatihan</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {programs.map(program => (
              <div key={program.id} className="bg-gray-50 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300">
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">{program.name}</h3>
                  <p className="text-gray-600 mb-4">{program.description}</p>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-gray-700">{program.duration}</span>
                    </div>
                    <div className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-gray-700">{program.fee}</span>
                    </div>
                    <div className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span className="text-gray-700">{program.schedule}</span>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-100 px-6 py-4">
                  <button className="w-full bg-blue-600 text-white py-2 rounded-md font-medium hover:bg-blue-700 transition duration-300">
                    Detail Program
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Syarat dan Cara Pendaftaran</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700 mb-6">
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
              <li>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
              <li>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</li>
              <li>Nisi ut aliquip ex ea commodo consequat.</li>
            </ul>
            <a 
              href="#daftar" 
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition duration-300"
            >
              Daftar Online Sekarang
            </a>
          </div>
        </div>
      </section>
    );
  };
  
  export default ProgramSection;
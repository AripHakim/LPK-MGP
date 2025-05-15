import React, { useState, useEffect } from 'react';

const AboutSection = () => {
  const [graduates, setGraduates] = useState([]);
//   const [participants, setParticipans] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Data statis untuk bagian lainnya
  const participants = 100;
  const staffCount = 7;
  const workFields = [
    "Konstruksi",
    "Perikanan",
    "Pertanian",
    "Pengolahan Makanan",
    "Peternakan",
    "CareGiver (Perawat Lansia)"
  ];
  const benefits = [
    "Ada Dana Talangan",
    "Gaji 12-25jt/bulan",
    "Mendapat nenkin(pensiun) 30-50jt",
    "Pengalaman Kerja Internasional",
  ];

  useEffect(() => {
    const fetchGraduates = async () => {
      try {
        const response = await fetch('https://maleo-be.onrender.com/lulus.json');
        if (!response.ok) throw new Error('Gagal memuat data');
        
        const data = await response.json();
        // Filter out header row (where 番号 === "番号")
        const filteredData = data.filter(item => item["番号"] !== "番号");
        setGraduates(filteredData);
      } catch (err) {
        console.error("Error:", err);
        setError(err.message);
        // Fallback data jika API gagal
        setGraduates([
          { "番号": "1", "名前": "MUHHAMAD FADLI" },
          { "番号": "2", "名前": "AJI DWI PURNAMA PUTRA" },
          // ...data fallback lainnya
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchGraduates();
  }, []);

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-primary-400 mb-12">Tentang Kami</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Card Statistik */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-[0_0_20px_#F6B211] transition-shadow duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-secondary w-12 h-12 rounded-full flex items-center justify-center shrink-0">                
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <div className="flex-1 flex justify-between items-center">
                <h3 className="text-md font-semibold text-primary-400">Peserta Terdaftar</h3>
                <p className="text-primary-400 font-medium">
                  {participants} Orang
                  {/* {graduates.length} Orang */}
                </p>
              </div>
            </div>
            
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-secondary w-12 h-12 rounded-full flex items-center justify-center shrink-0">                
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div className="flex-1 flex justify-between items-center">
                <h3 className="text-md font-semibold text-primary-400">Peserta yang lulus</h3>
                {loading ? (
                  <div className="animate-pulse h-6 w-10 bg-gray-200 rounded"></div>
                ) : error ? (
                  <p className="text-red-500 text-sm">Error loading data</p>
                ) : (
                  <p className="text-primary-400 font-medium">
                    {graduates.length} Orang
                  </p>
                )}
              </div>
            </div>
            
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-secondary w-12 h-12 rounded-full flex items-center justify-center shrink-0">                
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div className="flex-1 flex justify-between items-center">
                <h3 className="text-md font-semibold text-primary-400">Staff</h3>
                <p className="text-primary-400 font-medium">
                  {staffCount} Orang
                </p>
              </div>
            </div>
          </div>
          
          {/* Card Bidang Kerja */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-[0_0_20px_#F6B211] transition-shadow duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-secondary w-12 h-12 rounded-full flex items-center justify-center shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-primary-400">Bidang Kerja</h3>
            </div>
            <ul className="list-disc list-inside text-primary-400 font-medium">
              {workFields.map((field, index) => (
                <li key={index}>{field}</li>
              ))}
            </ul>
          </div>

          {/* Card Keuntungan */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-[0_0_20px_#F6B211] transition-shadow duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-secondary w-12 h-12 rounded-full flex items-center justify-center shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-primary-400">Keuntungan</h3>
            </div>
            <ul className="list-disc list-inside text-primary-400 font-medium">
              {benefits.map((benefit, index) => (
                <li key={index}>{benefit}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
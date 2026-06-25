import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import fadli from '../assets/hokage/fadli.webp';
import apip from '../assets/hokage/apip.webp';
import mas from '../assets/hokage/aji.webp';
import fatir from '../assets/hokage/fatir.webp';
import logo from '../assets/logo.webp';
import { lazy, lazyLoad } from 'react';

const GraduatedSection = ({ id }) => {
  const [graduates, setGraduates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isFallback, setIsFallback] = useState(false);
  const [showFallbackMessage, setShowFallbackMessage] = useState(false);

  useEffect(() => {
    const fetchGraduates = async () => {
      try {
        const response = await fetch('https://maleo-be.onrender.com/api/lulus');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const responseData = await response.json();
        const data = responseData.data || [];

        const cleanData = data
          .filter(item => item["番号"] !== "番号") 
          .map(item => {
            const cleanInterviewDate = item["面接合格日"]
              ? item["面接合格日"]
                  .replace(/\s+/g, ' ')
                  .replace(/　/g, ' ') 
                  .trim()
              : '';
            
            const cleanDepartureDate = item["日本への出発日"] 
              ? item["日本への出発日"]
                  .replace(/\s+/g, ' ')
                  .replace(/　/g, ' ')
                  .trim()
              : null;
            
            let imageUrl = '/logo.png';
            if (item["写真"] && item["写真"].includes('drive.google.com')) {
              const match = item["写真"].match(/\/(?:file\/d\/|open\?id=)([\w-]+)/);
              if (match && match[1]) {
                imageUrl = `https://drive.google.com/thumbnail?id=${match[1]}&sz=w300-h400`;
              } else {
                console.warn("Couldn't extract Google Drive ID from:", item["写真"]);
              }
            }
            
            return {
              id: item["番号"],
              name: item["名前"],
              address: item["住所"] || null,
              company: item["会社名"],
              interviewDate: cleanInterviewDate,
              departureDate: cleanDepartureDate,
              image: imageUrl
            };
          });
          
        setGraduates(cleanData); 
      } catch (err) {
        console.error('Error fetching graduates:', err);
        setIsFallback(true);
        setShowFallbackMessage(true);

        setGraduates([
          {
            id: "1",
            name: "MUHHAMAD FADLI",
            address: null,
            company: "IGISHI KOGYO CO.,LTD",
            interviewDate: "2 November 2024",
            departureDate: "14 April 2025",
            image: fadli
          },
          {
            id: "2",
            name: "AJI DWI PURNAMA PUTRA",
            address: null,
            company: "YUUSHOU CO.,LTD",
            interviewDate: "18 Desember 2024",
            departureDate: null,
            image: mas
          },
          {
            id: "3",
            name: "MOH. FATHIR",
            address: null,
            company: "YUUSHOU CO.,LTD",
            interviewDate: "18 Desember 2024",
            departureDate: null,
            image: fatir
          }
          ,
          {
            id: "4",
            name: "ADZIAN AFIF",
            address: null,
            company: "YAMAMARU FUJI",
            interviewDate: "7 Februari 2025",
            departureDate: null,
            image: apip
          }
          ,
          {
            id: "5",
            name: "RAYYAN MEIZAR RABBANI",
            address: null,
            company: "KABUSHIKI GAISHA NAKASONE KOGYO Co., Ltd.",
            interviewDate: "8 Mei 2025",
            departureDate: null,
            image: logo
          }
          ,
          {
            id: "6",
            name: "FATUR RAHMAN",
            address: null,
            company: "KABUSHIKI GAISHA NAKASONE KOGYO Co., Ltd.",
            interviewDate: "8 Mei 2025",
            departureDate: null,
            image: logo
          }
          ,
          {
            id: "7",
            name: "MOH. ADRIE",
            address: null,
            company: "KABUSHIKI GAISHA SUZUKI KOGYO",
            interviewDate: "2 Juni 2025",
            departureDate: null,
            image: logo
          }
          ,
          {
            id: "8",
            name: "ARHAM AR SABRY",
            address: null,
            company: "KABUSHIKI GAISHA SUZUKI KOGYO",
            interviewDate: "2 Juni 2025",
            departureDate: null,
            image: logo
          }
        ]);

        setTimeout(() => {
          setShowFallbackMessage(false);
        }, 2000);
      } finally {
        setLoading(false);
      }
    };

    fetchGraduates();
  }, []);


  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: graduates.length >= 4 ? 4 : graduates.length,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 80000,
    arrows: true,      
    swipe: true,       
    draggable: true, 
    lazyLoad: "ondemand", 
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: graduates.length >= 3 ? 3 : graduates.length,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: graduates.length >= 2 ? 2 : graduates.length,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  if (loading) {
    return (
      <section className="py-20 bg-white">
        <div id={id} className="container mx-auto px-4 text-center">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500 mb-4"></div>
          <p>Memuat data lulusan...</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-white">
      <div id={id} className="container mx-auto px-4 lg:scroll-mt-10">
        <div
            className={`transition-opacity duration-1000 ${
              showFallbackMessage ? "opacity-100" : "opacity-0"
            } bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 mb-6 rounded`}
          >
          Server sedang tidak tersedia. Menampilkan data contoh.
        </div>

        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary-400 mb-4">Lulusan Berprestasi Kami</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Para siswa LPK yang telah berhasil lulus interview dan bekerja di perusahaan ternama
          </p>
        </div>
        
        {graduates.length > 0 ? (
          <Slider {...settings} className="px-2">
            {graduates.map(graduate => (
              <div key={graduate.id} className="px-2 focus:outline-none mb-4">
                <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300 h-[420px] flex flex-col">
                  <div className="h-48 w-full overflow-hidden relative flex-shrink-0">
                    <img 
                      src={graduate.image} 
                      alt={graduate.name}
                      width="400"
                      height="256"
                      className="absolute inset-0 w-[1000px] h-full object-contain"
                      onError={(e) => {
                        e.target.onerror = null; 
                        e.target.src = "/logo.png";
                      }}
                      loading="lazy"
                    />
                    {graduate.image === '/logo.png' && (
                      <div className="absolute inset-0 bg-gray-100 flex items-center justify-center text-gray-400">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                    )}
                  </div>
                  
                  <div className="p-4 flex flex-col flex-grow">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4 mt-2 line-clamp-1">{graduate.name}</h3>
                    
                    <div className="flex items-start mb-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                      <span className="text-sm text-gray-600 line-clamp-2 flex-grow">{graduate.company}</span>
                    </div>
          
                    <div className="space-y-2 mb-6">
                      <div className="flex items-center text-gray-600 text-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>Lulus: {graduate.interviewDate}</span>
                      </div>
          
                      <div className="flex items-center text-gray-600 text-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span>Berangkat: {graduate.departureDate || "Belum ditentukan"}</span>
                      </div>
                    </div>
                    
                    {/* Status badge positioned at bottom */}
                    <div className="mt-auto">
                      <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm inline-flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Lulus Interview
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>    
        ) : (
          <div className="text-center py-10">
            <p className="text-gray-600">Tidak ada data lulusan yang tersedia</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default GraduatedSection;

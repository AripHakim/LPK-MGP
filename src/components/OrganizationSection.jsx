import indra from '../assets/organisasi/indra.webp';
import abdi from '../assets/organisasi/abdi.webp';
import arham from '../assets/organisasi/arham.webp';
import dahlia from '../assets/organisasi/dahlia.webp';
import faraz from '../assets/organisasi/faraz.webp';
import isma from '../assets/organisasi/isma.webp';
import { lazy } from 'react';

const OrganizationSection = ({ id }) => {
  const organizationItems = [
    {
      id: 1,
      name: "INDRAWAN",
      position: "PIMPINAN",
      image: indra
    },
    {
      id: 2,
      name: "ISMAWATI",
      position: "STAFF",
      image: isma
    },
    {
      id: 3,
      name: "DAHLIA",
      position: "INSTRUKTUR",
      image: dahlia
    },
    {
      id: 4,
      name: "FARAZ SALSABILAH. R",
      position: "INSTRUKTUR",
      image: faraz
    },
    {
      id: 5,
      name: "ABDI MUZHER",
      position: "INSTRUKTUR",
      image: abdi
    },
    {
      id: 6,
      name: "ARHAM AR SABRY",
      position: "INSTRUKTUR",
      image: arham
    },
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div id={id} className="container mx-auto px-4 lg:scroll-mt-10">
        <h2 className="text-3xl font-bold text-center text-primary-400 mb-12">Struktur Organisasi</h2>
        <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
          {/* Pimpinan */}
          <div className="flex justify-center mb-8">
            <div className="flex flex-col items-center p-4">
              <div className="w-32 h-32 md:w-36 md:h-36 rounded-full mx-auto mb-4 overflow-hidden border-2 border-secondary-600">
                <img 
                  src={organizationItems[0].image} 
                  alt={organizationItems[0].name} 
                  className="w-full h-full object-cover"
                  width={96}
                  height={96} 
                  onError={(e) => {
                    e.target.onerror = null; 
                    e.target.src = "/placeholder-user.png";
                  }}
                  loading="lazy"
                />
              </div>
              <div className="text-center">
                <h3 className="text-lg md:text-xl font-semibold text-gray-800">{organizationItems[0].position}</h3>
                <p className="text-md md:text-lg text-gray-600 mt-1">{organizationItems[0].name}</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-16 mb-8">
            <div className="flex flex-col items-center">
              {/* staff */}
              <div className="flex flex-col items-center p-4 mb-4">
                <div className="w-28 h-28 md:w-32 md:h-32 rounded-full mx-auto mb-4 overflow-hidden border-2 border-secondary-600">
                  <img 
                    src={organizationItems[1].image} 
                    alt={organizationItems[1].name}
                    width={96}
                    height={96}
                    className="w-full h-full object-cover object-[10%_10%]"
                    onError={(e) => {
                      e.target.onerror = null; 
                      e.target.src = "/placeholder-user.png";
                    }}
                    loading="lazy"
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-lg md:text-lg font-semibold text-gray-800">{organizationItems[1].position}</h3>
                  <p className="text-md md:text-md text-gray-600 mt-1">{organizationItems[1].name}</p>
                </div>
              </div>

              {/* Instruktur */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
                {organizationItems.slice(2).map(item => (
                  <div key={item.id} className="flex flex-col items-center p-2">
                    <div className="w-20 h-20 md:w-24 md:h-24 rounded-full mx-auto mb-2 overflow-hidden border-2 border-secondary-600">
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        width={96}
                        height={96} 
                        className="w-full h-full object-cover object-[20%_35%]"
                        onError={(e) => {
                          e.target.onerror = null; 
                          e.target.src = "/placeholder-user.png";
                        }}
                        loading="lazy"
                      />
                    </div>
                    <div className="text-center">
                      <h3 className="text-md md:text-sm font-semibold text-gray-800">{item.position}</h3>
                      <p className="text-sm text-gray-600 mt-1">{item.name}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrganizationSection;

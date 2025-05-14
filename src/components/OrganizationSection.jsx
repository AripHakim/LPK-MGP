const OrganizationSection = () => {
    return (
      <section id="organisasi" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-primary-400 mb-12">Struktur Organisasi</h2>
          
          <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
            <div className="flex justify-center mb-8">
              <div className="text-center">
                <div className="w-24 h-24 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <img 
                  src="/organisasi/indra shacho.png" 
                  alt="" className="w-full h-full rounded-full border-2 border-secondary-600"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-800">PIMPINAN</h3>
                <p className="text-gray-600">INDRAWAN</p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-20 h-20 bg-blue-100 rounded-full mx-auto mb-3 flex items-center justify-center">
                <img 
                  src="/organisasi/ekasila.jpeg" 
                  alt="" className="w-full h-full rounded-full border-2 border-secondary-600 object-cover object-[10%_10%]"
                  />
                </div>
                <h4 className="text-lg font-medium text-gray-800">KEPALA KANTOR</h4>
                <p className="text-gray-600">EKASILA</p>        
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-blue-100 rounded-full mx-auto mb-3 flex items-center justify-center">
                <img 
                  src="/organisasi/juan.jpeg" 
                  alt="" className="w-full h-full rounded-full border-2 border-secondary-600 object-cover object-[10%_20%]"
                  />
                </div>
                <h4 className="text-lg font-medium text-gray-800">KEPALA PENGAJAR</h4>
                <p className="text-gray-600">JUAN VICTORIO</p>        
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-blue-100 rounded-full mx-auto mb-3 flex items-center justify-center">
                <img 
                  src="/organisasi/DAHLIA SENSEI.png" 
                  alt="" className="w-full h-full rounded-full border-2 border-secondary-600 object-cover object-[10%_50%]"
                  />
                </div>
                <h4 className="text-lg font-medium text-gray-800">PENGAJAR</h4>
                <p className="text-gray-600">DAHLIA</p>        
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-blue-100 rounded-full mx-auto mb-3 flex items-center justify-center">
                <img 
                  src="/organisasi/FARAZ.jpg" 
                  alt="" className="w-full h-full rounded-full border-2 border-secondary-600 object-cover object-[10%_70%]"
                  />
                </div>
                <h4 className="text-lg font-medium text-gray-800">PENGAJAR</h4>
                <p className="text-gray-600">FARAZ SALSABILAH. R</p>        
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-blue-100 rounded-full mx-auto mb-3 flex items-center justify-center">
                <img 
                  src="/organisasi/isma.JPG" 
                  alt="" className="w-full h-full rounded-full border-2 border-secondary-600 object-cover object-[10%_10%]"
                  />
                </div>
                <h4 className="text-lg font-medium text-gray-800">STAFF ADMINISTRASI</h4>
                <p className="text-gray-600">ISMAWATI</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-blue-100 rounded-full mx-auto mb-3 flex items-center justify-center">
                <img 
                  src="/organisasi/devi.jpg" 
                  alt="" className="w-full h-full rounded-full border-2 border-secondary-600 object-cover object-top"
                  />
                </div>
                <h4 className="text-lg font-medium text-gray-800">STAFF ADMINISTRASI</h4>
                <p className="text-gray-600">DEVI MUHARANI</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default OrganizationSection;
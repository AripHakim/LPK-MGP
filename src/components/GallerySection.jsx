const GallerySection = ({id}) => {
    const galleryItems = [
      {
        id: 1,
        title: "Kerja Bakti",
        image: "/event/10.jpg"
      },
      {
        id: 2,
        title: "Hari Kebudayaan",
        image: "/event/7.jpg"
      },
      {
        id: 3,
        title: "Interview",
        image: "/event/3.jpg"
      },
      {
        id: 4,
        title: "Kerja Bakti",
        image: "/event/16.jpg"
      },
      {
        id: 5,
        title: "Olahraga",
        image: "/event/9.jpg"
      },
      {
        id: 6,
        title: "Pembelajaran",
        image: "/event/11.jpg"
      }
    ];
  
    return (
      <section className="py-12 bg-gray-50">
        <div id={id} className="container mx-auto px-4 lg:scroll-mt-10">
          <h2 className="text-3xl font-bold text-center text-primary-400 mb-12">Galeri Kegiatan</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryItems.map(item => (
              <div key={item.id} className="relative group overflow-hidden rounded-lg shadow-md">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-64 object-cover transform group-hover:scale-105 transition duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-75 transition duration-300 ">
                  <h3 className="text-white text-lg font-semibold">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default GallerySection;
import { useState, useEffect } from 'react';
import { Play, ExternalLink, Filter, X } from 'lucide-react';

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const portfolioItems = [
    {
      id: 1,
      title: 'Clip JARFA',
      category: 'video',
      type: 'Clip Musical',
      client: 'Nunez.SN',
      thumbnail: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      description: 'Clip hip-hop cinématographique avec esthétique urbaine',
        videoUrl: 'https://www.youtube.com/embed/v2enIhzW7vI'
    },
    {
      id: 2,
      title: 'Enregistrement Projet',
      category: 'audio',
      type: 'Production Album',
      client: 'Nunez.SN',
      thumbnail: 'https://images.pexels.com/photos/164938/pexels-photo-164938.jpeg',
      description: 'Production et mastering d\'album complet',
        videoUrl: 'https://www.youtube.com/embed/fS_HFq8gRTQ'
    },
    {
      id: 3,
      title: 'Vidéo Corporate',
      category: 'video',
      type: 'Publicité',
      client: 'Metropole Lyon',
      thumbnail: 'https://images.pexels.com/photos/3062541/pexels-photo-3062541.jpeg',
      description: 'Vidéo corporate professionnelle avec motion graphics',
        videoUrl: 'https://www.youtube.com/embed/Uyz6cIYltvI'
    },
    {
      id: 4,
      title: 'Effets Spéciaux',
      category: 'video',
      type: 'Clip Musical',
      client: 'Artistes Rap',
      thumbnail: 'https://images.pexels.com/photos/7698474/pexels-photo-7698474.jpeg',
      description: 'post production et effets spéciaux',
        videoUrl: 'https://player.vimeo.com/video/1106002149'
    },
    {
      id: 5,
      title: 'Animation 3D',
      category: 'video',
      type: 'Clip Musical',
      client: 'Nunez.SN',
      thumbnail: 'https://images.pexels.com/photos/1540406/pexels-photo-1540406.jpeg',
      description: 'Design 3D et animation',
        videoUrl: 'https://www.youtube.com/embed/iGjX3aKmSkY'
    },
    {
      id: 6,
      title: 'Festival',
      category: 'video',
      type: 'video',
      client: 'DJ Set',
      thumbnail: 'https://images.pexels.com/photos/1649693/pexels-photo-1649693.jpeg',
      description: 'Nous couvrons le festival avec des images en direct',
        videoUrl: 'https://www.youtube.com/embed/VbzLNeeSJRY'
    }
  ];

  const filters = [
    { id: 'all', label: 'Tout', icon: Filter },
    { id: 'audio', label: 'Audio', icon: Play },
    { id: 'video', label: 'Vidéo', icon: ExternalLink },
    { id: 'package', label: 'Packs', icon: Filter }
  ];

  const filteredItems = activeFilter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  const openVideoModal = (videoUrl: string) => {
    setSelectedVideo(videoUrl);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  };

  const closeVideoModal = () => {
    setSelectedVideo(null);
    setIsModalOpen(false);
    document.body.style.overflow = 'unset'; // Restore scrolling
  };

  // Handle escape key to close modal
  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isModalOpen) {
        closeVideoModal();
      }
    };

    if (isModalOpen) {
      document.addEventListener('keydown', handleEscapeKey);
    }

    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [isModalOpen]);

  return (
    <section id="portfolio" className="py-20 bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-900/5 via-transparent to-purple-900/5"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Notre <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Portfolio</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Découvrez nos dernières réalisations et voyez comment nous donnons vie aux visions créatives
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center ${
                activeFilter === filter.id
                  ? 'bg-gradient-to-r from-cyan-600 to-purple-600 text-white shadow-lg scale-105'
                  : 'bg-gray-800 text-gray-300 hover:text-white hover:bg-gray-700'
              }`}
            >
              <filter.icon className="w-4 h-4 mr-2" />
              {filter.label}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => openVideoModal(item.videoUrl)}
              className="group relative bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105 cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60"></div>
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button 
                    onClick={() => openVideoModal(item.videoUrl)}
                    className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform"
                  >
                    <Play className="w-6 h-6 text-white ml-1" />
                  </button>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent font-semibold">
                    {item.type}
                  </span>
                  <span className="text-xs text-gray-400">{item.client}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </div>

              {/* Category Indicator */}
              <div className="absolute top-4 left-4">
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  item.category === 'audio' ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' :
                  item.category === 'video' ? 'bg-purple-500/20 text-purple-400 border border-purple-500/30' :
                  'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30'
                }`}>
                  {item.category.toUpperCase()}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <a href="#contact" className="inline-block px-8 py-4 bg-gradient-to-r from-cyan-600 to-purple-600 text-white rounded-full font-semibold hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/25">
            Voir Plus de Réalisations
          </a>
        </div>
      </div>

      {/* Video Modal */}
      {isModalOpen && selectedVideo && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 backdrop-blur-sm"
          onClick={closeVideoModal}
        >
          <div 
            className="relative w-full max-w-4xl mx-4 bg-gray-900 rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeVideoModal}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-gray-800/80 hover:bg-gray-700 rounded-full flex items-center justify-center transition-colors duration-200"
            >
              <X className="w-5 h-5 text-white" />
            </button>

            {/* Video Container */}
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
              <iframe
                src={selectedVideo}
                title="Video Player"
                className="absolute inset-0 w-full h-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
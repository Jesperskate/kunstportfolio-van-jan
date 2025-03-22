
import React, { useState } from 'react';
import { motion } from 'framer-motion';

export interface Artwork {
  id: number;
  title: string;
  category: string;
  image: string;
  description?: string;
  year?: string;
  dimensions?: string;
  material?: string;
}

interface ArtworkGridProps {
  artworks: Artwork[];
}

const ArtworkGrid: React.FC<ArtworkGridProps> = ({ artworks }) => {
  const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null);

  const openModal = (artwork: Artwork) => {
    setSelectedArtwork(artwork);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedArtwork(null);
    document.body.style.overflow = 'auto';
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <>
      <motion.div 
        className="artwork-grid"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {artworks.map((artwork) => (
          <motion.div
            key={artwork.id}
            className="artwork-item rounded-md shadow-md overflow-hidden bg-white"
            onClick={() => openModal(artwork)}
            variants={item}
            whileHover={{ y: -5 }}
          >
            <img 
              src={artwork.image} 
              alt={artwork.title} 
              className="artwork-image"
              loading="lazy"
            />
            <div className="artwork-overlay">
              <h3 className="text-lg font-serif font-medium">{artwork.title}</h3>
              {artwork.year && <p className="text-sm text-white/80 mt-1">{artwork.year}</p>}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Modal */}
      <div 
        className={`image-modal ${selectedArtwork ? 'open' : ''}`}
        onClick={closeModal}
      >
        {selectedArtwork && (
          <div 
            className="bg-white p-6 rounded-lg max-w-4xl w-full mx-4 overflow-y-auto max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/2">
                <img 
                  src={selectedArtwork.image} 
                  alt={selectedArtwork.title} 
                  className="w-full h-auto rounded-md"
                />
              </div>
              <div className="md:w-1/2 space-y-4">
                <h2 className="text-2xl font-serif font-semibold text-bronze-dark">{selectedArtwork.title}</h2>
                
                {selectedArtwork.year && (
                  <p className="text-gray-500">{selectedArtwork.year}</p>
                )}
                
                {selectedArtwork.description && (
                  <div className="mt-4">
                    <p className="text-gray-700 leading-relaxed">{selectedArtwork.description}</p>
                  </div>
                )}
                
                <div className="mt-6 pt-6 border-t border-gray-200 space-y-2">
                  {selectedArtwork.material && (
                    <p className="text-sm text-gray-600">
                      <span className="font-medium">Materiaal:</span> {selectedArtwork.material}
                    </p>
                  )}
                  
                  {selectedArtwork.dimensions && (
                    <p className="text-sm text-gray-600">
                      <span className="font-medium">Afmetingen:</span> {selectedArtwork.dimensions}
                    </p>
                  )}
                  
                  <p className="text-sm text-gray-600">
                    <span className="font-medium">Categorie:</span> {selectedArtwork.category}
                  </p>
                </div>
                
                <button 
                  className="mt-8 bg-bronze text-white px-5 py-2 rounded-full hover:bg-bronze-dark transition-colors"
                  onClick={closeModal}
                >
                  Sluiten
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ArtworkGrid;

import React from 'react';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import ArtworkGrid from '../components/ArtworkGrid';
import SEOHead from '../components/SEOHead';
import { smelikArtworks } from '../data/smelikArtworks';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const GalerieSmelik = () => {
  return (
    <Layout>
      <SEOHead 
        title="Te Koop bij Smelik & Stokking"
        description="Kunstwerken van Jan Voorendt te koop bij Galerie Smelik & Stokking in Den Haag. Bronzen beelden, cortenstaal sculpturen en RVS kunst."
        url="https://janvoorendt.nl/galerie-smelik-stokking"
        keywords="Jan Voorendt, Smelik Stokking, galerie, te koop, bronzen beelden, cortenstaal, RVS, Den Haag"
      />
      <Hero 
        title="Galerie Smelik & Stokking"
        subtitle="Kunstwerken te koop bij Smelik & Stokking Galleries, Den Haag"
      />
      
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-6">
          <motion.div 
            className="max-w-3xl mx-auto text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-gray-600 leading-relaxed mb-6">
              Een selectie van mijn werken is te koop via Galerie Smelik & Stokking 
              in Den Haag. Hieronder vindt u het beschikbare aanbod met prijsinformatie.
            </p>
            <a 
              href="https://www.smelik-stokking.nl/kunstenaar/jan-voorendt/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-bronze text-white px-6 py-3 rounded-full hover:bg-bronze-dark transition-colors font-medium"
            >
              Bezoek Smelik & Stokking
              <ExternalLink size={16} />
            </a>
          </motion.div>
          
          <ArtworkGrid artworks={smelikArtworks} />
        </div>
      </section>
    </Layout>
  );
};

export default GalerieSmelik;

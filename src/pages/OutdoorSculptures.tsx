
import React from 'react';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import ArtworkGrid from '../components/ArtworkGrid';
import SEOHead from '../components/SEOHead';
import { outdoorSculptures } from '../data/artworks';
import { motion } from 'framer-motion';

const OutdoorSculptures = () => {
  return (
    <Layout>
      <SEOHead 
        title="Buitenbeelden"
        description="Buitensculpturen van Jan Voorendt in cortenstaal en brons. Sculpturen ontworpen voor tuin en landschap, duurzame kunstwerken voor buitenruimtes."
        url="https://janvoorendt.nl/buitenbeelden"
        keywords="buitenbeelden, tuinsculpturen, cortenstaal, buitenkunst, landschapskunst, Jan Voorendt, tuinontwerp"
      />
      <Hero 
        title="Buitenbeelden"
        subtitle="Sculpturen die dialoog aangaan met de natuurlijke omgeving"
      />
      
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-6">
          <motion.div 
            className="max-w-3xl mx-auto text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-gray-600 leading-relaxed">
              Mijn buitenbeelden zijn ontworpen om te integreren met hun omgeving en 
              deze tegelijkertijd te verrijken. Gemaakt van duurzame materialen zoals 
              cortenstaal en brons, ontwikkelen deze sculpturen een natuurlijk patina 
              door de invloed van weer en tijd, waardoor elk stuk uniek wordt.
            </p>
          </motion.div>
          
          <ArtworkGrid artworks={outdoorSculptures} />
        </div>
      </section>
    </Layout>
  );
};

export default OutdoorSculptures;

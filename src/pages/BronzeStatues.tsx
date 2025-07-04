import React from 'react';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import ArtworkGrid from '../components/ArtworkGrid';
import SEOHead from '../components/SEOHead';
import { bronzeSculptures } from '../data/artworks';
import { motion } from 'framer-motion';
const BronzeStatues = () => {
  return <Layout>
      <SEOHead 
        title="Bronzen Beelden"
        description="Collectie bronzen beelden van Jan Voorendt. Unieke sculpturen en kunstwerken in brons, van realistische dierensculpturen tot abstracte vormen."
        url="https://janvoorendt.nl/bronzen-beelden"
        keywords="bronzen beelden, sculpturen, brons, Jan Voorendt, dierensculpturen, abstracte kunst, Nederlandse beeldhouwer"
      />
      <Hero title="Bronzen Beelden" subtitle="Sculpturen die beweging en emotie vastleggen in tijdloos brons" />
      
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-6">
          <motion.div className="max-w-3xl mx-auto text-center mb-16" initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6
        }}>
            <p className="text-gray-600 leading-relaxed">Mijn collectie beelden omvat verschillende stijlen en onderwerpen. Van realistische dierensculpturen tot abstracte vormen.</p>
          </motion.div>
          
          <ArtworkGrid artworks={bronzeSculptures} />
        </div>
      </section>
    </Layout>;
};
export default BronzeStatues;
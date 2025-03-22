
import React from 'react';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import CategoryPreview from '../components/CategoryPreview';
import { bronzeSculptures, outdoorSculptures, paintings } from '../data/artworks';
import { motion } from 'framer-motion';

const Index = () => {
  return (
    <Layout>
      <Hero 
        title="Jan Voorendt"
        subtitle="Bronzen beelden, buitenbeelden en schilderijen"
        ctaText="Bekijk de collectie"
        ctaLink="/bronzen-beelden"
        image="/lovable-uploads/276dbc22-5707-46e0-8738-fa5e73746a83.png"
        fullHeight={true}
      />
      
      <motion.section 
        className="py-16 md:py-24 bg-cream"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-6 text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-bronze-dark mb-6">Welkom in mijn atelier</h2>
          <p className="text-gray-600 leading-relaxed mb-10">
            Mijn werk kenmerkt zich door een unieke combinatie van materialen 
            en technieken. Van brons tot staal, van klein naar groot. Elk object 
            vertelt een eigen verhaal door zowel vorm als materiaal.
          </p>
        </div>
      </motion.section>
      
      <CategoryPreview 
        title="Bronzen Beelden"
        description="Mijn collectie bronzen beelden omvat verschillende stijlen en onderwerpen. Van realistische dierensculpturen tot abstracte vormen, elk stuk wordt met precisie en passie gecreëerd."
        image={bronzeSculptures[0].image}
        link="/bronzen-beelden"
        alignment="left"
      />
      
      <CategoryPreview 
        title="Buitenbeelden"
        description="De buitenbeelden zijn ontworpen om te harmoniëren met de natuurlijke omgeving. Ze zijn gemaakt van duurzame materialen die mooi verouderen en een uniek element toevoegen aan elke tuin of buitenruimte."
        image={outdoorSculptures[0].image}
        link="/buitenbeelden"
        alignment="right"
      />
      
      <CategoryPreview 
        title="Schilderijen"
        description="Mijn schilderijen zijn expressieve werken die emotie en beweging vastleggen. Door het gebruik van levendige kleuren en texturen creëer ik kunstwerken die een ruimte tot leven brengen."
        image={paintings[0].image}
        link="/schilderijen"
        alignment="left"
      />
    </Layout>
  );
};

export default Index;

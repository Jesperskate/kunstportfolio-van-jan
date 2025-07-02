
import React from 'react';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import ArtworkGrid from '../components/ArtworkGrid';
import SEOHead from '../components/SEOHead';
import { paintings } from '../data/artworks';
import { motion } from 'framer-motion';

const Paintings = () => {
  return (
    <Layout>
      <SEOHead 
        title="Schilderijen"
        description="Abstracte schilderijen van Jan Voorendt. Expressieve kunstwerken met rijke kleuren en texturen, warme aardetinten en roodtinten."
        url="https://janvoorendt.nl/schilderijen"
        keywords="schilderijen, abstracte kunst, Jan Voorendt, expressieve kunst, Nederlandse schilder, moderne kunst, kleurrijke schilderijen"
      />
      <Hero 
        title="Schilderijen"
        subtitle="Expressieve werken die kleur, textuur en emotie verkennen"
      />
      
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-6">
          <motion.div 
            className="max-w-3xl mx-auto text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-gray-600 leading-relaxed mb-8">
              In mijn schilderijen onderzoek ik de relatie tussen kleur, vorm en textuur. 
              De werken zijn veelal abstract, waarbij ik experimenteer met verschillende 
              technieken en materialen. Door laag over laag te werken ontstaat er een 
              diepte en rijkdom die uitnodigt tot langdurige contemplatie.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Mijn pallette is vaak warm en aards met een voorkeur voor roodtinten, goud en 
              amber, af en toe gecontrasteerd met koelere accenten. Elk werk vertelt zijn 
              eigen verhaal en nodigt de kijker uit om zijn eigen interpretatie te vinden.
            </p>
          </motion.div>
          
          <ArtworkGrid artworks={paintings} />
        </div>
      </section>
    </Layout>
  );
};

export default Paintings;

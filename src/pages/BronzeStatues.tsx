
import React from 'react';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import ArtworkGrid from '../components/ArtworkGrid';
import { bronzeSculptures } from '../data/artworks';
import { motion } from 'framer-motion';

const BronzeStatues = () => {
  return (
    <Layout>
      <Hero 
        title="Bronzen Beelden"
        subtitle="Sculpturen die beweging en emotie vastleggen in tijdloos brons"
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
              In mijn bronzen beelden combineer ik traditionele technieken met moderne expressie. 
              Elk beeld wordt eerst in was of klei gemodelleerd, waarna het via het eeuwenoude cire 
              perdue proces wordt gegoten. Deze techniek stelt me in staat om zowel de kleinste details 
              als de grote lijnen tot hun recht te laten komen.
            </p>
          </motion.div>
          
          <ArtworkGrid artworks={bronzeSculptures} />
        </div>
      </section>
    </Layout>
  );
};

export default BronzeStatues;

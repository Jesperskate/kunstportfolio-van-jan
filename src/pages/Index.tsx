import React from 'react';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import CategoryPreview from '../components/CategoryPreview';
import SEOHead from '../components/SEOHead';
import { bronzeSculptures, outdoorSculptures, paintings, newArtworks } from '../data/artworks';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Index = () => {
  // Show all new works on the homepage
  const highlightedNew = newArtworks;

  return <Layout>
      <SEOHead 
        title="Jan Voorendt | Kunstenaar"
        description="Portfolio van Jan Voorendt - Bronzen beelden, buitenbeelden en schilderijen. Ontdek unieke kunstwerken en sculpturen van Nederlandse kunstenaar en beeldhouwer Jan Voorendt."
        url="https://janvoorendt.nl/"
        keywords="Jan Voorendt, kunstenaar, bronzen beelden, buitenbeelden, schilderijen, sculpturen, Nederland, beeldhouwer, kunst, cortenstaal, metaalkunst"
      />
      <Hero title="Jan Voorendt" subtitle="Bronzen beelden, buitenbeelden en schilderijen" ctaText="Bekijk de collectie" ctaLink="/bronzen-beelden" secondaryCtaText="Bestellen" secondaryCtaLink="https://www.smelik-stokking.nl/kunstenaar/jan-voorendt/" slideshow={true} fullHeight={true} />
      
      <motion.section className="py-16 md:py-24 bg-cream" initial={{
      opacity: 0
    }} whileInView={{
      opacity: 1
    }} transition={{
      duration: 0.6
    }} viewport={{
      once: true
    }}>
        <div className="container mx-auto px-6 text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-bronze-dark mb-6">Welkom in mijn atelier</h2>
          <p className="text-gray-600 leading-relaxed mb-10">Mijn werk kenmerkt zich door een variatie van materialen en technieken. Als goudsmid begonnen met goud enzilver werk ik nu veel met brons en corten staal. Elk object vertelt een eigen verhaal.</p>
        </div>
      </motion.section>

      {/* Nieuw Werk Section */}
      <motion.section 
        id="nieuw-werk"
        className="py-16 md:py-24"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <span className="inline-block bg-bronze text-white text-sm font-semibold px-4 py-1.5 rounded-full mb-4">Nieuw</span>
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-bronze-dark">Nieuw Werk</h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">Ontdek mijn nieuwste creaties — verse sculpturen in RVS, cortenstaal en verguld brons.</p>
          </div>
          <div className="overflow-x-auto pb-4" style={{ scrollbarWidth: 'thin' }}>
            <div className="flex gap-6" style={{ minWidth: 'max-content' }}>
              {highlightedNew.map((artwork, index) => (
                <motion.div
                  key={artwork.id}
                  className="group relative rounded-lg overflow-hidden shadow-md cursor-pointer w-[280px] flex-shrink-0"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <Link to={artwork.category === "Bronzen Beelden" ? "/bronzen-beelden" : "/buitenbeelden"}>
                    <div className="aspect-square overflow-hidden">
                      <img 
                        src={artwork.image} 
                        alt={artwork.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        loading="lazy"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex flex-col justify-end p-4">
                      <span className="inline-block w-fit bg-bronze text-white text-xs font-semibold px-2 py-0.5 rounded-full mb-2">Nieuw</span>
                      <h3 className="text-white font-serif font-medium text-lg">{artwork.title}</h3>
                      <p className="text-white/70 text-sm">{artwork.material}</p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>
      
      <CategoryPreview title="Bronzen Beelden" description="Mijn collectie bronzen beelden omvat verschillende stijlen en onderwerpen. Van realistische dierensculpturen tot abstracte vormen, elk stuk wordt met precisie en passie gecreëerd." image={bronzeSculptures[0].image} link="/bronzen-beelden" alignment="left" />
      
      <CategoryPreview title="Buitenbeelden" description="De buitenbeelden zijn ontworpen om te harmoniëren met de natuurlijke omgeving. Ze zijn gemaakt van duurzame materialen die mooi verouderen en een uniek element toevoegen aan elke tuin of buitenruimte." image={outdoorSculptures[0].image} link="/buitenbeelden" alignment="right" />
      
      <CategoryPreview title="Schilderijen" description="Mijn schilderijen zijn expressieve werken die emotie en beweging vastleggen. Door het gebruik van levendige kleuren en texturen creëer ik kunstwerken die een ruimte tot leven brengen." image={paintings[0].image} link="/schilderijen" alignment="left" />
    </Layout>;
};
export default Index;
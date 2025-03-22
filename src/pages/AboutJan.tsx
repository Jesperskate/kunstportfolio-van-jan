
import React from 'react';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import { motion } from 'framer-motion';

const AboutJan = () => {
  return (
    <Layout>
      <Hero 
        title="Over Jan"
        subtitle="Kunstenaar, ontwerper en metaalbewerker"
      />
      
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-12 items-start">
              <motion.div 
                className="w-full md:w-1/3"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="sticky top-24">
                  <div className="aspect-square overflow-hidden rounded-lg shadow-xl mb-6">
                    <img 
                      src="/lovable-uploads/33d9cfce-f2d9-46c6-9b89-c14f723744a9.png" 
                      alt="Jan Voorendt in zijn atelier" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="bg-cream p-6 rounded-lg">
                    <h3 className="text-xl font-serif font-semibold text-bronze-dark mb-4">Details</h3>
                    <div className="space-y-3">
                      <p className="text-gray-600">
                        <span className="font-medium">Geboren:</span> 1958
                      </p>
                      <p className="text-gray-600">
                        <span className="font-medium">Opleiding:</span> Kunstacademie Tilburg, Vakschool Schoonhoven (edelsmeden)
                      </p>
                      <p className="text-gray-600">
                        <span className="font-medium">Expertise:</span> Bronzen beelden, buitensculpturen, schilderkunst, metaalbewerking
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                className="w-full md:w-2/3"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h2 className="text-3xl font-serif font-semibold text-bronze-dark mb-6">Biografie</h2>
                
                <div className="prose prose-lg max-w-none text-gray-600 space-y-6">
                  <p>
                    Jan Voorendt (1958) volgde kunstacademie in Tilburg en vakschool Schoonhoven edelsmeden. 
                    Na deze opleidingen vele jaren gewerkt als management-adviseur. Naast dit werk altijd bezig 
                    gebleven met schilderen, ontwerpen en metaalbewerking. Van klein naar groot, van goud en 
                    zilver naar staal en brons.
                  </p>
                  
                  <p>
                    De combinatie van zijn formele opleiding in kunst en edelsmeden, samen met zijn ervaring 
                    in het bedrijfsleven, geeft Jan een uniek perspectief op zijn creatieve werk. Zijn achtergrond 
                    in edelsmeden is zichtbaar in de precisie en aandacht voor detail in zijn bronzen beelden, 
                    terwijl zijn schilderijen een meer intuïtieve en expressieve benadering laten zien.
                  </p>
                  
                  <p>
                    In zijn atelier in Nederland werkt Jan met verschillende materialen en technieken. Voor zijn 
                    bronzen beelden maakt hij gebruik van de cire perdue (verloren was) methode, een techniek die 
                    duizenden jaren oud is en hem in staat stelt om complexe en gedetailleerde vormen te creëren. 
                    Voor zijn grotere buitenbeelden werkt hij vaak met cortenstaal, een materiaal dat een warme, 
                    roestkleurige patina ontwikkelt die mooi contrasteert met natuurlijke omgevingen.
                  </p>
                  
                  <p>
                    Zijn schilderijen zijn veelal abstract en worden gekenmerkt door een rijk kleurgebruik, 
                    met een voorkeur voor diepe roden en aardetinten. Door te werken in meerdere lagen en 
                    verschillende technieken te combineren, creëert hij werken met een bijzondere diepte en textuur.
                  </p>
                  
                  <p>
                    Jan's werk bevindt zich in diverse privécollecties in Nederland en daarbuiten. Naast zijn 
                    vrije werk neemt hij ook opdrachten aan voor specifieke locaties of gelegenheden.
                  </p>
                </div>
                
                <div className="mt-12 pt-8 border-t border-bronze/10">
                  <h3 className="text-2xl font-serif font-semibold text-bronze-dark mb-6">Artistieke Visie</h3>
                  
                  <div className="prose prose-lg max-w-none text-gray-600">
                    <p>
                      In mijn werk zoek ik naar een balans tussen technische precisie en artistieke expressie. 
                      Ik ben gefascineerd door de manier waarop verschillende materialen reageren op bewerking 
                      en hoe ze veranderen onder invloed van tijd en omgeving. Deze transformatie, of het nu 
                      gaat om de patina die zich ontwikkelt op een bronzen beeld of de interactie tussen verschillende 
                      verflagen in een schilderij, is voor mij een essentieel onderdeel van het creatieve proces.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutJan;

import { Artwork } from '../components/ArtworkGrid';

export interface SmelikArtwork extends Artwork {
  price?: string;
  galleryUrl?: string;
}

export const smelikArtworks: SmelikArtwork[] = [
  {
    id: 101,
    title: "Boom",
    category: "Bronzen Beelden",
    image: "/lovable-uploads/smelik-stokking/27827.jpg",
    description: "Een prachtig bronzen boombeeld met delicate vertakkingen en een warme, natuurlijke uitstraling.",
    material: "Brons",
    dimensions: "40 x 30 x 30 cm",
    price: "€ 1.850,00",
    galleryUrl: "https://www.smelik-stokking.nl/kunstwerk/jan-voorendt/27827/boom/"
  },
  {
    id: 102,
    title: "The World is Changing III",
    category: "RVS Sculpturen",
    image: "/lovable-uploads/smelik-stokking/27821.jpg",
    description: "De grootste in de serie — een imposante RVS bolvorm die de constante verandering van onze wereld symboliseert.",
    material: "RVS",
    dimensions: "62 x 57 x 56 cm",
    price: "€ 3.250,00",
    galleryUrl: "https://www.smelik-stokking.nl/kunstwerk/jan-voorendt/27821/the-world-is-changing-iii/"
  },
  {
    id: 103,
    title: "The World is Changing II",
    category: "RVS Sculpturen",
    image: "/lovable-uploads/smelik-stokking/27820.jpg",
    description: "Het middelste deel van de serie, met verweven RVS-banden die een dynamische bolvorm creëren.",
    material: "RVS",
    dimensions: "42 x 48 x 41 cm",
    price: "€ 2.750,00",
    galleryUrl: "https://www.smelik-stokking.nl/kunstwerk/jan-voorendt/27820/the-world-is-changing-ii/"
  },
  {
    id: 104,
    title: "The World is Changing I",
    category: "RVS Sculpturen",
    image: "/lovable-uploads/smelik-stokking/27819.jpg",
    description: "De eerste sculptuur in de serie — een compacte, intieme bolvorm van gebogen RVS-banden.",
    material: "RVS",
    dimensions: "35 x 32 x 22 cm",
    price: "€ 1.950,00",
    galleryUrl: "https://www.smelik-stokking.nl/kunstwerk/jan-voorendt/27819/the-world-is-changing-i/"
  },
  {
    id: 105,
    title: "Boom (Cortenstaal)",
    category: "Cortenstaal Sculpturen",
    image: "/lovable-uploads/smelik-stokking/27720.jpg",
    description: "Een krachtige gestileerde boom in cortenstaal met een warme, organische uitstraling.",
    material: "Cortenstaal",
    dimensions: "47 x 50 x 35 cm",
    price: "€ 1.950,00",
    galleryUrl: "https://www.smelik-stokking.nl/kunstwerk/jan-voorendt/27720/boom/"
  },
  {
    id: 106,
    title: "Cubism V",
    category: "Cortenstaal Sculpturen",
    image: "/lovable-uploads/smelik-stokking/27658.jpg",
    description: "De vijfde editie in de Cubism-serie — een hoge, slanke sculptuur met kubistische vormen in cortenstaal.",
    material: "Cortenstaal",
    dimensions: "106 x 43 x 32 cm",
    price: "€ 2.750,00",
    galleryUrl: "https://www.smelik-stokking.nl/kunstwerk/jan-voorendt/27658/cubism-v/"
  },
  {
    id: 107,
    title: "Cubism IV",
    category: "Cortenstaal Sculpturen",
    image: "/lovable-uploads/smelik-stokking/27657.jpg",
    description: "Een robuuste kubistische boomvorm met brede, hoekige segmenten die kracht en stabiliteit uitstralen.",
    material: "Cortenstaal",
    dimensions: "86 x 66 x 40 cm",
    price: "€ 2.950,00",
    galleryUrl: "https://www.smelik-stokking.nl/kunstwerk/jan-voorendt/27657/cubism-iv/"
  },
  {
    id: 108,
    title: "Cubism II",
    category: "Cortenstaal Sculpturen",
    image: "/lovable-uploads/smelik-stokking/27655.jpg",
    description: "Een elegante kubistische interpretatie van een boom, opgebouwd uit hoekige, geometrische vormen in cortenstaal.",
    material: "Cortenstaal",
    dimensions: "72 x 44 x 42 cm",
    price: "€ 2.750,00",
    galleryUrl: "https://www.smelik-stokking.nl/kunstwerk/jan-voorendt/27655/cubism-ii/"
  },
  {
    id: 109,
    title: "Cubism I",
    category: "Cortenstaal Sculpturen",
    image: "/lovable-uploads/smelik-stokking/27654.jpg",
    description: "Het eerste werk in de Cubism-serie — een slanke, opwaarts reikende boomvorm met scherpe lijnen.",
    material: "Cortenstaal",
    dimensions: "85 x 32 x 28 cm",
    price: "€ 1.900,00",
    galleryUrl: "https://www.smelik-stokking.nl/kunstwerk/jan-voorendt/27654/cubism-i/"
  },
  {
    id: 110,
    title: "Knotwilg",
    category: "Bronzen Beelden",
    image: "/lovable-uploads/smelik-stokking/27437.jpg",
    description: "Een prachtig gedetailleerde knotwilg in brons, met karakteristieke verdikkingen en sierlijke takken.",
    material: "Brons",
    dimensions: "44 x 22 cm",
    price: "€ 2.250,00",
    galleryUrl: "https://www.smelik-stokking.nl/kunstwerk/jan-voorendt/27437/knotwilg/"
  },
  {
    id: 111,
    title: "Boom met vogels",
    category: "Bronzen Beelden",
    image: "/lovable-uploads/smelik-stokking/27286.jpeg",
    description: "Een levendige bronzen boom versierd met vogels, die een gevoel van natuur en leven uitstraalt.",
    material: "Brons",
    dimensions: "40 x 33 x 30 cm",
    price: "€ 1.850,00",
    galleryUrl: "https://www.smelik-stokking.nl/kunstwerk/jan-voorendt/27286/boom-met-vogels/"
  },
  {
    id: 112,
    title: "Boom met boomklever en specht",
    category: "Bronzen Beelden",
    image: "/lovable-uploads/smelik-stokking/27270.jpg",
    description: "Een imposant bronzen boombeeld met een boomklever en specht die langs de stam klimmen. Een ode aan de Nederlandse natuur.",
    material: "Brons",
    dimensions: "145 x 30 x 30 cm",
    price: "€ 3.950,00",
    galleryUrl: "https://www.smelik-stokking.nl/kunstwerk/jan-voorendt/27270/boom-met-boomklever-en-specht/"
  }
];

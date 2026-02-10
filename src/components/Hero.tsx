
import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { allArtworks } from '../data/artworks';

interface HeroProps {
  title: string;
  subtitle?: string;
  ctaText?: string;
  ctaLink?: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
  image?: string;
  fullHeight?: boolean;
  slideshow?: boolean;
}

const SLIDESHOW_IMAGES = allArtworks
  .filter(a => a.image)
  .sort(() => 0.5 - Math.random())
  .slice(0, 8)
  .map(a => a.image);

const Hero: React.FC<HeroProps> = ({ 
  title, 
  subtitle, 
  ctaText, 
  ctaLink, 
  secondaryCtaText,
  secondaryCtaLink,
  image,
  fullHeight = false,
  slideshow = false
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = slideshow ? SLIDESHOW_IMAGES : (image ? [image] : []);
  const hasMultiple = images.length > 1;

  const nextSlide = useCallback(() => {
    setCurrentSlide(prev => (prev + 1) % images.length);
  }, [images.length]);

  useEffect(() => {
    if (!hasMultiple) return;
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [hasMultiple, nextSlide]);

  return (
    <div 
      className={`relative ${fullHeight ? 'min-h-screen' : 'py-32'} flex items-center justify-center overflow-hidden`}
    >
      {/* Background images */}
      {images.map((img, index) => (
        <div
          key={img}
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000"
          style={{
            backgroundImage: `url(${img})`,
            opacity: index === currentSlide ? 1 : 0,
          }}
        />
      ))}

      {/* Overlay */}
      {images.length > 0 && <div className="absolute inset-0 bg-black/40 z-0" />}
      
      {/* Content */}
      <div className="container relative z-10 px-6 py-16 max-w-4xl mx-auto text-center">
        <h1 
          className={`font-serif font-semibold leading-tight mb-6 ${
            images.length > 0 ? 'text-white' : 'text-bronze-dark'
          } text-4xl md:text-5xl lg:text-6xl animate-fade-up`}
        >
          {title}
        </h1>
        
        {subtitle && (
          <p 
            className={`text-lg md:text-xl max-w-2xl mx-auto mb-8 animate-fade-up ${
              images.length > 0 ? 'text-white/80' : 'text-gray-600'
            }`}
            style={{ animationDelay: '0.1s' }}
          >
            {subtitle}
          </p>
        )}
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style={{ animationDelay: '0.2s' }}>
          {ctaText && ctaLink && (
            <Link
              to={ctaLink}
              className={`
                inline-flex items-center px-7 py-3 rounded-full text-lg font-medium
                transition-all transform hover:scale-105
                ${images.length > 0 ? 'bg-white/90 text-bronze-dark' : 'bg-bronze text-white hover:bg-bronze-dark'}
              `}
            >
              {ctaText}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          )}
          
          {secondaryCtaText && secondaryCtaLink && (
            <a
              href={secondaryCtaLink}
              target="_blank"
              rel="noopener noreferrer"
              className={`
                inline-flex items-center px-7 py-3 rounded-full text-lg font-medium
                transition-all transform hover:scale-105 shadow-lg
                bg-gradient-to-r from-amber-500 to-amber-600 text-white border-0 hover:from-amber-600 hover:to-amber-700 hover:shadow-xl
                ring-2 ring-amber-300 ring-opacity-40
              `}
            >
              {secondaryCtaText}
              <ExternalLink className="ml-2 h-5 w-5" />
            </a>
          )}
        </div>

        {/* New artworks banner */}
        <div className="animate-fade-up mt-10" style={{ animationDelay: '0.4s' }}>
          <a
            href="#nieuw-werk"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('nieuw-werk')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/15 backdrop-blur-md border border-white/30 text-white text-sm font-medium transition-all hover:bg-white/25 hover:border-white/50 group"
          >
            <span className="inline-block w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            Ontdek nieuw werk 2026
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        {/* Dot navigation */}
        {hasMultiple && (
          <div className="flex justify-center gap-2 mt-8 animate-fade-up" style={{ animationDelay: '0.5s' }}>
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? 'bg-white scale-125'
                    : 'bg-white/40 hover:bg-white/70'
                }`}
                aria-label={`Ga naar afbeelding ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Hero;

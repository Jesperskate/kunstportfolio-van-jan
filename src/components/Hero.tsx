
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink } from 'lucide-react';

interface HeroProps {
  title: string;
  subtitle?: string;
  ctaText?: string;
  ctaLink?: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
  image?: string;
  fullHeight?: boolean;
}

const Hero: React.FC<HeroProps> = ({ 
  title, 
  subtitle, 
  ctaText, 
  ctaLink, 
  secondaryCtaText,
  secondaryCtaLink,
  image,
  fullHeight = false 
}) => {
  return (
    <div 
      className={`relative ${fullHeight ? 'min-h-screen' : 'py-32'} flex items-center justify-center overflow-hidden`}
      style={{
        backgroundImage: image ? `url(${image})` : undefined,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      {/* Optional overlay for better text visibility if there's a background image */}
      {image && <div className="absolute inset-0 bg-black/30 z-0"></div>}
      
      {/* Content */}
      <div className="container relative z-10 px-6 py-16 max-w-4xl mx-auto text-center">
        <h1 
          className={`font-serif font-semibold leading-tight mb-6 ${
            image ? 'text-white' : 'text-bronze-dark'
          } text-4xl md:text-5xl lg:text-6xl animate-fade-up`}
        >
          {title}
        </h1>
        
        {subtitle && (
          <p 
            className={`text-lg md:text-xl max-w-2xl mx-auto mb-8 animate-fade-up ${
              image ? 'text-white/80' : 'text-gray-600'
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
                ${image ? 'bg-white text-bronze-dark' : 'bg-bronze text-white hover:bg-bronze-dark'}
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
                transition-all transform hover:scale-105
                ${image ? 'border-2 border-white text-white hover:bg-white/10' : 'border-2 border-bronze text-bronze hover:bg-bronze/10'}
              `}
            >
              {secondaryCtaText}
              <ExternalLink className="ml-2 h-5 w-5" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;

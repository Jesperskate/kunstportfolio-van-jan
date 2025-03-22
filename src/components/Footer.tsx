
import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-cream py-12 border-t border-bronze/10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-serif font-semibold text-bronze-dark">Jan Voorendt</h3>
            <p className="text-gray-600 max-w-md">
              Kunstenaar gespecialiseerd in bronzen beelden, buitenbeelden en schilderijen.
              Een unieke mix van vakmanschap en creativiteit.
            </p>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-serif font-semibold text-bronze-dark">Navigatie</h3>
            <nav className="flex flex-col space-y-2">
              <Link to="/" className="text-gray-600 hover:text-bronze transition-colors">Home</Link>
              <Link to="/bronzen-beelden" className="text-gray-600 hover:text-bronze transition-colors">Bronzen Beelden</Link>
              <Link to="/buitenbeelden" className="text-gray-600 hover:text-bronze transition-colors">Buitenbeelden</Link>
              <Link to="/schilderijen" className="text-gray-600 hover:text-bronze transition-colors">Schilderijen</Link>
              <Link to="/over-jan" className="text-gray-600 hover:text-bronze transition-colors">Over Jan</Link>
            </nav>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-serif font-semibold text-bronze-dark">Contact</h3>
            <p className="text-gray-600">Voor vragen over kunstwerken of opdrachten, neem gerust contact op.</p>
            <p className="text-gray-600">
              <a href="mailto:info@janvoorendt.nl" className="hover:text-bronze transition-colors">
                info@janvoorendt.nl
              </a>
            </p>
            <div className="flex items-center mt-3">
              <a 
                href="https://www.instagram.com/voorever.art" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-600 hover:text-bronze transition-colors"
              >
                <Instagram size={18} />
                <span>@voorever.art</span>
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-bronze/10 mt-10 pt-6 text-center text-gray-500 text-sm">
          <p>© {currentYear} Jan Voorendt | Alle rechten voorbehouden</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

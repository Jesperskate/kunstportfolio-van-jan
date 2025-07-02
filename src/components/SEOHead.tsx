import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article';
  keywords?: string;
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title = "Jan Voorendt | Kunstenaar",
  description = "Portfolio van Jan Voorendt - Bronzen beelden, buitenbeelden en schilderijen. Gespecialiseerd in unieke kunstwerken en sculpturen in Nederland.",
  image = "/lovable-uploads/276dbc22-5707-46e0-8738-fa5e73746a83.png",
  url = "https://janvoorendt.nl",
  type = "website",
  keywords = "Jan Voorendt, kunstenaar, bronzen beelden, buitenbeelden, schilderijen, sculpturen, kunst Nederland, beeldhouwer, metaalkunst, cortenstaal"
}) => {
  const fullTitle = title === "Jan Voorendt | Kunstenaar" ? title : `${title} | Jan Voorendt`;
  const fullImageUrl = image.startsWith('http') ? image : `${url}${image}`;
  const currentUrl = url;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Jan Voorendt" />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <link rel="canonical" href={currentUrl} />
      
      {/* Geographic targeting */}
      <meta name="geo.region" content="NL" />
      <meta name="geo.placename" content="Nederland" />
      <meta name="language" content="nl" />
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Jan Voorendt" />
      <meta property="og:locale" content="nl_NL" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImageUrl} />
      <meta name="twitter:site" content="@janvoorendt" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Jan Voorendt",
          "jobTitle": "Kunstenaar",
          "description": "Kunstenaar gespecialiseerd in bronzen beelden, buitenbeelden en schilderijen",
          "url": "https://janvoorendt.nl",
          "image": fullImageUrl,
          "birthDate": "1958",
          "nationality": "Dutch",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "NL"
          },
          "knowsAbout": [
            "Bronzen beelden",
            "Buitensculpturen", 
            "Schilderkunst",
            "Metaalbewerking",
            "Edelsmeden"
          ],
          "alumniOf": [
            {
              "@type": "EducationalOrganization",
              "name": "Kunstacademie Tilburg"
            },
            {
              "@type": "EducationalOrganization", 
              "name": "Vakschool Schoonhoven"
            }
          ],
          "contactPoint": {
            "@type": "ContactPoint",
            "email": "voorever12@gmail.com",
            "contactType": "sales"
          },
          "sameAs": [
            "https://www.instagram.com/voorever.art"
          ]
        })}
      </script>
    </Helmet>
  );
};

export default SEOHead;
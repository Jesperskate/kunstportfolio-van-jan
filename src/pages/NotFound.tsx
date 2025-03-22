
import React from 'react';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Layout from '../components/Layout';
import { Link } from 'react-router-dom';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <Layout>
      <div className="min-h-[70vh] flex items-center justify-center">
        <div className="text-center px-6">
          <h1 className="text-4xl md:text-5xl font-serif font-semibold text-bronze-dark mb-4">404</h1>
          <p className="text-xl text-gray-600 mb-8">Pagina niet gevonden</p>
          <Link 
            to="/" 
            className="inline-flex items-center px-6 py-3 rounded-full bg-bronze text-white hover:bg-bronze-dark transition-colors"
          >
            Terug naar Home
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;

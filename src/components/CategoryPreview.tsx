
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface CategoryPreviewProps {
  title: string;
  description: string;
  image: string;
  link: string;
  alignment?: 'left' | 'right';
}

const CategoryPreview: React.FC<CategoryPreviewProps> = ({
  title,
  description,
  image,
  link,
  alignment = 'left'
}) => {
  return (
    <div className="py-16 md:py-24">
      <div className="container mx-auto px-6">
        <div className={`flex flex-col ${alignment === 'right' ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12`}>
          <motion.div 
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: alignment === 'right' ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="overflow-hidden rounded-lg shadow-xl">
              <img 
                src={image} 
                alt={title} 
                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                style={{ aspectRatio: '4/3' }}
              />
            </div>
          </motion.div>
          
          <motion.div 
            className="w-full md:w-1/2 space-y-6"
            initial={{ opacity: 0, x: alignment === 'right' ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-bronze-dark">{title}</h2>
            <p className="text-gray-600 leading-relaxed">{description}</p>
            <div>
              <Link
                to={link}
                className="inline-flex items-center text-bronze hover:text-bronze-dark font-medium transition-colors group"
              >
                <span className="mr-2">Bekijk de collectie</span>
                <span className="transform transition-transform group-hover:translate-x-1">→</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default CategoryPreview;

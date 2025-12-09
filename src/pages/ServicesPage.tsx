import React from 'react';
import { Link } from 'react-router-dom';
import { SERVICES } from '../constants';
import { iconMap } from '../utils/iconMap';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';

const ServicesPage: React.FC = () => {
  return (
    <>
      <SEO
        title="Dienstleistungen - Intellize | Python Automatisierung & KI"
        description="Professionelle Dienstleistungen: Python Automatisierung, N8N Workflows, Server Management und KI-Integration für Ihr Unternehmen."
        canonical="/services"
        keywords="Python Automatisierung, N8N Workflows, Server Management, KI Integration, Data Science, Workflow Automation"
        ogType="website"
      />
      <div className="pt-32 pb-24 min-h-screen">
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span className="text-blue-600 font-semibold tracking-wider uppercase text-sm mb-4 block">Unsere Leistungen</span>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Expertise für Ihr Business.
          </h1>
          <p className="text-xl text-gray-500 max-w-3xl leading-relaxed">
            Wir bieten maßgeschneiderte technische Lösungen, die Ihr Unternehmen voranbringen. 
            Wählen Sie einen Bereich, um mehr zu erfahren.
          </p>
        </motion.div>
      </div>

      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
        {SERVICES.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500">Services werden geladen...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {SERVICES.map((service, index) => {
              const IconComponent = iconMap[service.iconName] || iconMap.HelpCircle;
              
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="h-full"
                >
                  <Link to={`/services/${service.slug}`} className="group flex flex-col h-full bg-white rounded-3xl overflow-hidden border border-gray-200 hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-300">
                    <div className="h-64 overflow-hidden relative bg-gray-200">
                       <div className="absolute inset-0 bg-gradient-to-t from-black/35 to-transparent z-10"></div>
                       <img 
                         src={service.imageUrl}
                         srcSet={service.imageSrcSet}
                         alt={service.title} 
                         width="400"
                         height="256"
                         className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                         loading="lazy"
                       />
                       <div className="absolute bottom-6 left-6 z-20 text-white">
                            <div className="p-2 bg-blue-100/30 backdrop-blur-md rounded-lg w-fit mb-3">
                            <IconComponent size={24} className="text-blue-500 " />
                            </div>
                          <h2 className="text-2xl font-bold">{service.title}</h2>
                       </div>
                    </div>
                    <div className="p-8 flex flex-col flex-grow">
                      <p className="text-gray-600 mb-6 flex-grow leading-relaxed">
                        {service.shortDescription}
                      </p>
                      <ul className="space-y-2 mb-8">
                        {service.features.slice(0, 3).map((feature, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-500">
                            <Icons.Check className="text-blue-500 mr-2 h-4 w-4" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <span className="inline-flex items-center text-blue-600 font-semibold group-hover:translate-x-2 transition-transform">
                        Details ansehen <Icons.ArrowRight className="ml-2" size={18} />
                      </span>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        )}
      </div>
    </div>
    </>
  );
};

export default ServicesPage;
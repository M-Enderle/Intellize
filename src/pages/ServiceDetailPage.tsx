import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { SERVICES } from '../constants';
import * as Icons from 'lucide-react';
import { motion } from 'framer-motion';

const ServiceDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = SERVICES.find(s => s.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Service nicht gefunden</h2>
          <Link to="/services" className="text-blue-600 hover:underline">Zurück zur Übersicht</Link>
        </div>
      </div>
    );
  }

  const IconComponent = (Icons as any)[service.iconName] || Icons.HelpCircle;

  return (
    <div className="min-h-screen bg-white">
      {/* Header Image */}
      <div className="relative h-[50vh] min-h-[400px]">
        <img 
          src={service.imageUrl}
          srcSet={service.imageSrcSet}
          alt={service.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]"></div>
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-screen-2xl mx-auto px-6 lg:px-12 w-full">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <div className="inline-flex items-center gap-2 text-blue-300 font-medium mb-4">
                <Link to="/services" className="hover:text-white transition-colors">Services</Link>
                <Icons.ChevronRight size={16} />
                <span>{service.title}</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                {service.title}
              </h1>
              <p className="text-xl text-gray-200 max-w-2xl leading-relaxed">
                {service.shortDescription}
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12 py-24">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Main Content */}
          <div className="lg:w-2/3">
            <div className="prose prose-lg prose-blue max-w-none text-gray-600">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Überblick</h2>
              <p className="text-lg leading-relaxed mb-12">
                {service.fullDescription}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <Icons.CheckCircle2 className="text-blue-600" />
                    Leistungen
                  </h3>
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-gray-300 mt-2 shrink-0"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                   <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <Icons.TrendingUp className="text-blue-600" />
                    Ihr Vorteil
                  </h3>
                  <ul className="space-y-3">
                    {service.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-gray-300 mt-2 shrink-0"></span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-8">Unser Prozess</h2>
              <div className="relative border-l-2 border-gray-100 pl-8 ml-4 space-y-12">
                {service.process.map((step, idx) => (
                  <div key={idx} className="relative">
                    <span className="absolute -left-[41px] top-0 flex items-center justify-center w-8 h-8 rounded-full bg-blue-50 text-blue-600 font-bold text-sm border-2 border-white ring-1 ring-gray-100">
                      {idx + 1}
                    </span>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">{step}</h4>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/3">
            <div className="sticky top-32 space-y-8">
              <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                <IconComponent size={48} className="text-gray-900 mb-6" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Interesse geweckt?</h3>
                <p className="text-gray-600 mb-6">
                  Lassen Sie uns unverbindlich über Ihr Projekt sprechen. Wir finden die passende Lösung.
                </p>
                <a 
                  href={`mailto:kontakt@intellize.de?subject=Anfrage: ${service.title}`} 
                  className="block w-full text-center bg-black text-white px-6 py-4 rounded-xl font-medium hover:bg-gray-800 transition-colors"
                >
                  Jetzt anfragen
                </a>
              </div>

              <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
                <h3 className="font-bold text-gray-900 mb-4">Andere Services</h3>
                <nav className="flex flex-col space-y-3">
                  {SERVICES.filter(s => s.id !== service.id).map(s => (
                    <Link 
                      key={s.id} 
                      to={`/services/${s.slug}`}
                      className="text-gray-500 hover:text-blue-600 transition-colors flex items-center justify-between group"
                    >
                      <span className="text-sm">{s.title}</span>
                      <Icons.ChevronRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  ))}
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailPage;
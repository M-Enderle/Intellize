import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Hero from '../components/Hero';
import TechStack from '../components/TechStack';
import { Marquee } from '../components/Marquee';
import SEO from '../components/SEO';
import { SERVICES, BLOG_POSTS, CLIENTS, TESTIMONIALS, FAQ_ITEMS } from '../constants';
import * as Icons from 'lucide-react';
import moritzSrc from '../assets/images/moritz.jpg?format=webp&w=800';
import moritzSrcSet from '../assets/images/moritz.jpg?format=webp&w=400;800;1200&as=srcset';

const Home: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [velocity, setVelocity] = useState(10);
  const [testimonialPage, setTestimonialPage] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      // Faster on mobile (80), slower on desktop (40)
      setVelocity(window.innerWidth < 768 ? 50 : 40);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const siteUrl = import.meta.env.VITE_WEBSITE_URL || "https://www.intellize.de";

  // Rich result schema for the homepage
  const homepageSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": siteUrl
          }
        ]
      },
      {
        "@type": "WebSite",
        "url": siteUrl,
        "name": "Intellize",
        "description": "Automatisierung mit Python & N8N, Server Management und AI Implementierung"
      }
    ]
  };

  return (
    <>
      <SEO
        title="Intellize - Automatisierung & Data Science"
        description="Intellize: Automatisierung mit Python & N8N, Server Management und AI Implementierung für kleine Unternehmen und Privatpersonen."
        canonical="/"
        keywords="Automatisierung, Python, N8N, Data Science, KI, Server Management, Workflow Automation"
        schema={homepageSchema}
      />
      <main>
        <Hero />
      
      {/* TRUST / COMPANIES SECTION */}
      <section className="py-0 md:py-12 border-b border-gray-100/50 bg-white/40 backdrop-blur-sm overflow-hidden">
        <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
          <div className="relative w-full">
            {/* Stronger fade gradient overlays (lighter on mobile) */}
            <div className="absolute left-0 top-0 bottom-0 w-20 md:w-64 bg-gradient-to-r from-white/10 md:from-white via-white/5 md:via-white/90 to-transparent z-20 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-20 md:w-64 bg-gradient-to-l from-white/10 md:from-white via-white/5 md:via-white/90 to-transparent z-20 pointer-events-none"></div>

            <Marquee baseVelocity={velocity} gap={32}>
              {CLIENTS.map((client, idx) => (
                <div
                  key={idx}
                  className="flex-shrink-0 flex items-center justify-center"
                >
                  <a
                    href={client.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-2xl md:text-3xl font-bold font-mono text-gray-400 hover:text-gray-600 transition-colors whitespace-nowrap"
                  >
                    {client.name}{React.createElement('span', { className: 'px-2 text-blue-600/50' }, ';')}
                  </a>
                </div>
              ))}
            </Marquee>
          </div>
        </div>
      </section>

      {/* SEO / VALUE PROP SECTION */}
      <section className="py-20 md:py-32 bg-transparent">
        <div className="max-w-5xl mx-auto px-6 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Warum Automatisierung kein Luxus mehr ist.
            </h2>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8">
              In einer Welt, in der Daten exponentiell wachsen, scheitern manuelle Prozesse. 
              Wir nutzen <span className="text-blue-600 font-semibold">modernste Lösungen </span>  
              um Ihre Workflows skalierbar zu machen. Verabschieden Sie sich von Excel-Chaos und Copy-Paste-Fehlern.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 text-left">
              <div className="p-6 bg-white/50 rounded-xl border border-gray-100">
                <Icons.TrendingUp className="text-blue-600 mb-4" size={32} />
                <h3 className="font-bold text-gray-900 mb-2">Effizienz</h3>
                <p className="text-sm text-gray-500">Reduzieren Sie manuelle Arbeitszeit um bis zu 80% und senken Sie operative Kosten.</p>
              </div>
              <div className="p-6 bg-white/50 rounded-xl border border-gray-100">
                <Icons.ShieldCheck className="text-blue-600 mb-4" size={32} />
                <h3 className="font-bold text-gray-900 mb-2">Zuverlässigkeit</h3>
                <p className="text-sm text-gray-500">Automatisierte Prozesse laufen 24/7 fehlerfrei und ohne Ermüdung.</p>
              </div>
              <div className="p-6 bg-white/50 rounded-xl border border-gray-100">
                <Icons.Zap className="text-blue-600 mb-4" size={32} />
                <h3 className="font-bold text-gray-900 mb-2">Geschwindigkeit</h3>
                <p className="text-sm text-gray-500">Reagieren Sie in Echtzeit auf Kundenanfragen und Marktentwicklungen.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-12 md:py-24 border-t border-gray-100/50 relative bg-transparent">
        <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row justify-between items-end mb-10 md:mb-16">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6">Was wir tun.</h2>
              <p className="text-base md:text-lg text-gray-600">
                Ganzheitliche Lösungen von der Server-Infrastruktur bis zur intelligenten Datenverarbeitung.
              </p>
            </div>
            <Link to="/services" className="hidden md:block text-black font-medium hover:underline decoration-2 underline-offset-4 decoration-blue-500">
              Alle Services ansehen &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.slice(0, 4).map((service, idx) => {
              const IconComponent = (Icons as any)[service.iconName] || Icons.HelpCircle;

              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="group relative h-full"
                >
                  <Link to={`/services/${service.slug}`} className="block h-full">
                    <div className="p-6 md:p-8 h-full bg-white/60 backdrop-blur-md rounded-2xl border border-gray-200 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300 flex flex-col">
                      <div className="mb-6 p-3 bg-white w-fit rounded-xl text-blue-600 shadow-sm group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                        <IconComponent size={24} />
                      </div>
                      <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3">{service.title}</h3>
                      <p className="text-gray-500 text-sm leading-relaxed mb-4 flex-grow">
                        {service.shortDescription}
                      </p>
                      <div className="flex items-center text-blue-600 font-medium text-sm mt-auto group-hover:translate-x-1 transition-transform">
                        Mehr erfahren <Icons.ChevronRight size={16} />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
          
          <div className="mt-8 md:hidden">
             <Link to="/services" className="text-black font-medium flex items-center gap-2">
              Alle Services ansehen <Icons.ArrowRight size={16}/>
            </Link>
          </div>
        </div>
      </section>

      {/* ABOUT ME SECTION */}
      <section className="py-20 bg-gray-50/50">
        <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
            <div className="w-full md:w-1/2 relative">
               <div className="aspect-square rounded-2xl overflow-hidden bg-gray-200 relative z-10">
                 {/* Placeholder for Moritz Image - using a professional abstract placeholder for now */}
                 <img 
                   src={moritzSrc}
                   srcSet={moritzSrcSet}
                   alt="Portrait von Moritz Enderle - Gründer von Intellize"
                   width="400"
                   height="400"
                   className="w-full h-full object-cover"
                   loading="lazy"
                 />
               </div>
               {/* Decorative Element */}
              <div className="absolute -bottom-6 -right-6 w-2/3 h-2/3 border-2 border-blue-200 rounded-2xl -z-0 hidden md:block"></div>
            </div>
            
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Hallo, ich bin Moritz. <br />
                <span className="text-gray-500">Entwickler & Gründer.</span>
              </h2>
              <div className="prose prose-lg text-gray-600 mb-8">
                <p>
                  Ich habe Intellize während meines Studiums an der <a href="https://www.jku.at/">Universität Linz</a> gegründet, um kleinen Unternehmen und Privatpersonen den Zugang zu leistungsstarker Automatisierung und Data Science zu ermöglichen.
                </p>
                <br></br>
                <p>
                  Mit meinem Hintergrund als Masterabsolvent in Künstlicher Intelligenz und praktischer Erfahrung in der Softwareentwicklung, spezialisiere ich mich darauf, maßgeschneiderte Lösungen zu entwickeln, die echte Probleme lösen.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="border-l-2 border-blue-500 pl-4">
                  <span className="block text-3xl font-bold text-gray-900">7+</span>
                  <span className="text-sm text-gray-500">Jahre Erfahrung</span>
                </div>
                <div className="border-l-2 border-blue-500 pl-4">
                  <span className="block text-3xl font-bold text-gray-900">26+</span>
                  <span className="text-sm text-gray-500">Projekte automatisiert</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TechStack />

      {/* TESTIMONIALS SECTION */}
      <section className="py-20 bg-transparent">
        <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Was Kunden sagen</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Zufriedene Partner sind unser wichtigstes Kapital.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.slice(testimonialPage * 3, (testimonialPage + 1) * 3).map((t, idx) => (
              <motion.div 
                key={t.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm flex flex-col h-full"
              >
                <div className="mb-6 text-blue-600">
                  <Icons.Quote size={32} />
                </div>
                <p className="text-gray-600 italic mb-6 flex-grow">"{t.content}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center font-bold text-gray-500">
                    {t.author.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 text-sm">{t.author}</div>
                    <div className="text-xs text-gray-500">{t.role}, {t.company}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Pagination Controls */}
          <div className="flex items-center justify-center gap-6 mt-12">
            <button
              onClick={() => setTestimonialPage(Math.max(0, testimonialPage - 1))}
              disabled={testimonialPage === 0}
              className="p-2 text-gray-400 hover:text-gray-600 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
              aria-label="Previous testimonials"
            >
              <Icons.ChevronLeft size={20} />
            </button>
            
            <div className="flex gap-2">
              {Array.from({ length: Math.ceil(TESTIMONIALS.length / 3) }).map((_, page) => (
                <button
                  key={page}
                  onClick={() => setTestimonialPage(page)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    testimonialPage === page ? 'bg-gray-400' : 'bg-gray-200 hover:bg-gray-300'
                  }`}
                  aria-label={`Go to testimonial page ${page + 1}`}
                />
              ))}
            </div>

            <button
              onClick={() => setTestimonialPage(Math.min(Math.ceil(TESTIMONIALS.length / 3) - 1, testimonialPage + 1))}
              disabled={testimonialPage === Math.ceil(TESTIMONIALS.length / 3) - 1}
              className="p-2 text-gray-400 hover:text-gray-600 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
              aria-label="Next testimonials"
            >
              <Icons.ChevronRight size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* Selected Projects / Blog Teaser */}
      <section className="py-12 md:py-24 bg-transparent border-t border-gray-100/50">
        <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 md:mb-12">Einblicke & Projekte</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {BLOG_POSTS.slice(0, 3).map((post) => (
              <Link to={`/blog/${post.id}`} key={post.id} className="block group h-full">
                <article className="bg-white/80 backdrop-blur-sm rounded-xl h-full border border-gray-200 overflow-hidden hover:shadow-2xl hover:shadow-gray-200/50 hover:-translate-y-1 transition-all duration-300 flex flex-col">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={post.imageUrl} 
                      alt={post.title} 
                      width="400"
                      height="192"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6 md:p-8 flex flex-col flex-grow">
                    <div className="flex gap-2 mb-4">
                      {post.tags.slice(0, 2).map(tag => (
                        <span key={tag} className="px-2 py-1 text-xs font-semibold bg-gray-100/80 text-gray-600 rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-500 text-sm mb-6 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="mt-auto flex items-center text-sm font-medium text-gray-900 border-t border-gray-100 pt-4">
                      Details ansehen <Icons.ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-20 bg-gray-50/50">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Häufig gestellte Fragen</h2>
          <div className="space-y-4">
            {FAQ_ITEMS.map((item, idx) => (
              <div key={idx} className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                <button 
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex justify-between items-center p-5 text-left focus:outline-none"
                >
                  <span className="font-semibold text-gray-900">{item.question}</span>
                  {openFaq === idx ? <Icons.Minus size={20} className="text-blue-600" /> : <Icons.Plus size={20} className="text-gray-400" />}
                </button>
                <AnimatePresence>
                  {openFaq === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-5 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-4">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Simple CTA - Keeps solid background for contrast */}
      <section className="py-16 md:py-24 bg-black text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-900/20 blur-3xl rounded-full translate-x-1/2"></div>
        <div className="max-w-5xl mx-auto px-6 lg:px-12 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 md:mb-8">
            Bereit für den nächsten Schritt?
          </h2>
          <p className="text-lg md:text-xl text-gray-300 mb-8 md:mb-10">
            Lassen Sie uns darüber sprechen, wie wir Ihre Prozesse effizienter gestalten können.
            Unverbindlich und direkt.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
             <Link
              to="/contact" 
              className="inline-flex items-center justify-center gap-3 bg-white text-black px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-100 transition-all hover:scale-105 w-full sm:w-auto"
            >
              <Icons.Mail size={20} />
              Kontakt aufnehmen
            </Link>
          </div>
          <p className="mt-8 text-gray-500 text-sm">
            Moritz Enderle &bull; Fischingen
          </p>
        </div>
      </section>
    </main>
    </>
  );
};

export default Home;
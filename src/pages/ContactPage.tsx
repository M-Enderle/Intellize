import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Send, CheckCircle, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';

const ContactPage: React.FC = () => {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Allgemeine Anfrage',
    message: '',
  });
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    setErrorMessage('');

    try {
      const response = await fetch('http://localhost:3001/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to send email');
      }

      setFormState('success');
      setFormData({
        name: '',
        email: '',
        subject: 'Allgemeine Anfrage',
        message: '',
      });
    } catch (error) {
      console.error('Error:', error);
      setFormState('error');
      setErrorMessage('Es gab einen Fehler beim Versenden. Bitte versuchen Sie es später erneut oder kontaktieren Sie uns direkt.');
      setTimeout(() => setFormState('idle'), 5000);
    }
  };

  return (
    <>
      <SEO
        title="Kontakt - Intellize | Jetzt anfragen"
        description="Kontaktieren Sie uns für individuelle Automatisierungslösungen, Beratung zu Python, N8N und KI-Integration."
        canonical="/contact"
        keywords="Kontakt, Anfrage, Beratung, Automatisierung, Python, N8N, KI"
        ogType="website"
      />
      <div className="pt-32 pb-24 min-h-screen bg-white">
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl"
        >
          <span className="text-blue-600 font-semibold tracking-wider uppercase text-sm mb-4 block">Kontakt</span>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Lassen Sie uns sprechen.
          </h1>
          <p className="text-xl text-gray-500 leading-relaxed">
            Haben Sie ein Projekt im Kopf oder möchten Sie Ihre Prozesse automatisieren? 
            Schreiben Sie uns. Wir melden uns innerhalb von 24 Stunden.
          </p>
        </motion.div>
      </div>

      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            {formState === 'success' ? (
              <div className="bg-green-50 border border-green-100 rounded-2xl p-12 text-center h-full flex flex-col items-center justify-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-6">
                  <CheckCircle size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Nachricht gesendet!</h3>
                <p className="text-gray-600 mb-8">Vielen Dank für Ihre Anfrage. Wir werden uns in Kürze bei Ihnen melden.</p>
                <button 
                  onClick={() => setFormState('idle')}
                  className="text-blue-600 font-medium hover:underline"
                >
                  Neue Nachricht schreiben
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-semibold text-gray-900 uppercase tracking-wide">Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-gray-50 border-b-2 border-gray-200 focus:border-blue-600 px-4 py-3 outline-none transition-colors rounded-t-lg"
                      placeholder="Ihr Name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-semibold text-gray-900 uppercase tracking-wide">E-Mail</label>
                    <input 
                      type="email" 
                      id="email" 
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-gray-50 border-b-2 border-gray-200 focus:border-blue-600 px-4 py-3 outline-none transition-colors rounded-t-lg"
                      placeholder="name@firma.de"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-semibold text-gray-900 uppercase tracking-wide">Betreff</label>
                  <select 
                    id="subject" 
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full bg-gray-50 border-b-2 border-gray-200 focus:border-blue-600 px-4 py-3 outline-none transition-colors rounded-t-lg appearance-none"
                  >
                    <option>Allgemeine Anfrage</option>
                    <option>Projektanfrage: Automatisierung</option>
                    <option>Projektanfrage: Data Science</option>
                    <option>Server Management</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-semibold text-gray-900 uppercase tracking-wide">Nachricht</label>
                  <textarea 
                    id="message" 
                    rows={6}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-gray-50 border-b-2 border-gray-200 focus:border-blue-600 px-4 py-3 outline-none transition-colors rounded-t-lg resize-none"
                    placeholder="Erzählen Sie uns kurz von Ihrem Vorhaben..."
                  ></textarea>
                </div>

                {formState === 'error' && (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-700">
                    {errorMessage}
                  </div>
                )}

                <button 
                  type="submit" 
                  disabled={formState === 'submitting'}
                  className="group bg-black text-white px-8 py-4 rounded-full font-medium text-lg w-full md:w-auto flex items-center justify-center gap-3 hover:bg-gray-800 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {formState === 'submitting' ? 'Wird gesendet...' : 'Nachricht absenden'}
                  {formState !== 'submitting' && <Send size={18} className="group-hover:translate-x-1 transition-transform" />}
                </button>
              </form>
            )}
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col justify-between"
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Kontaktdaten</h3>
              
              <div className="space-y-8">
                <a href="mailto:kontakt@intellize.de" className="flex items-start gap-4 group">
                  <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <Mail size={24} />
                  </div>
                  <div>
                    <span className="block text-sm font-semibold text-gray-400 mb-1 uppercase tracking-wide">E-Mail</span>
                    <span className="text-xl text-gray-900">kontakt@intellize.de</span>
                  </div>
                </a>

                <a href="tel:+4917657888987" className="flex items-start gap-4 group">
                  <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <Phone size={24} />
                  </div>
                  <div>
                    <span className="block text-sm font-semibold text-gray-400 mb-1 uppercase tracking-wide">Telefon</span>
                    <span className="text-xl text-gray-900">+49 176 57888987</span>
                  </div>
                </a>

                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <span className="block text-sm font-semibold text-gray-400 mb-1 uppercase tracking-wide">Büro</span>
                    <address className="text-xl text-gray-900 not-italic">
                      Intellize - Moritz Enderle<br />
                      Eimeldingerstr 11<br />
                      79592 Fischingen
                    </address>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-16 p-8 bg-gray-50 rounded-2xl border border-gray-100">
               <h4 className="font-bold text-gray-900 mb-2">Hinweis zur Erreichbarkeit</h4>
               <p className="text-gray-600 text-sm leading-relaxed mb-4">
                 Wir sind telefonisch werktags von 09:00 bis 18:00 Uhr erreichbar. 
                 E-Mails beantworten wir in der Regel auch am Wochenende.
               </p>
               <Link to="/services" className="text-blue-600 font-semibold text-sm flex items-center hover:underline">
                 Unsere Services ansehen <ArrowRight size={16} className="ml-1" />
               </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
    </>
  );
};

export default ContactPage;
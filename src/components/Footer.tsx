import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-100 pt-16 pb-8">
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <span className="font-mono font-bold text-xl tracking-tighter text-gray-900 block mb-4">
              Intellize<span className="text-blue-600">;</span>
            </span>
            <p className="text-gray-500 text-sm leading-relaxed">
              Automatisierung, Server Management und Data Science für das moderne Web.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Links</h3>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><Link to="/" className="hover:text-black transition-colors">Home</Link></li>
              <li><Link to="/services" className="hover:text-black transition-colors">Services</Link></li>
              <li><Link to="/blog" className="hover:text-black transition-colors">Projekte</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Rechtliches</h3>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><Link to="/imprint" className="hover:text-black transition-colors">Impressum</Link></li>
              <li><Link to="/imprint" className="hover:text-black transition-colors">Datenschutz</Link></li>
            </ul>
          </div>

          <div>
             <h3 className="font-semibold text-gray-900 mb-4">Connect</h3>
             <div className="flex space-x-4">
               <a href="https://github.com/M-Enderle" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-black transition-colors" aria-label="GitHub Profile">
                 <Github size={20} />
               </a>
               <a href="https://www.linkedin.com/in/moritz-enderle/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-black transition-colors" aria-label="LinkedIn Profile">
                 <Linkedin size={20} />
               </a>
               <a href="mailto:kontakt@intellize.de" className="text-gray-400 hover:text-black transition-colors" aria-label="Email Contact">
                 <Mail size={20} />
               </a>
             </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
          <p>&copy; {new Date().getFullYear()} Intellize. Moritz Enderle. Alle Rechte vorbehalten.</p>
          <p className="mt-2 md:mt-0">Made with React & TypeScript</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
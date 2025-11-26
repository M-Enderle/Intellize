import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <section ref={ref} className="relative min-h-[70vh] flex flex-col justify-center overflow-hidden bg-transparent">
      {/* Animated Background Gradients */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0 hidden md:block">
        <div className="absolute top-[-20%] right-[5%] w-[40rem] h-[40rem] bg-blue-300/30 rounded-full blur-[100px] mix-blend-multiply" />
        <div className="absolute top-[40%] left-[-5%] w-[35rem] h-[35rem] bg-purple-300/50 rounded-full blur-[100px] mix-blend-multiply" />
        <motion.div 
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 10, repeat: Infinity, repeatType: "mirror" }}
          className="absolute bottom-[-10%] left-[30%] w-[45rem] h-[45rem] bg-indigo-200/30 rounded-full blur-[100px] mix-blend-multiply"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white" />
      </div>

      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12 w-full z-10 pt-20 pb-8">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight text-gray-900 mb-6 leading-[1.1]">
              Skalieren Sie mit <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Intelligenz.
              </span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 max-w-2xl leading-relaxed backdrop-blur-[2px]">
              Schluss mit manuellen Prozessen. Wir bieten maßgeschneiderte Lösungen für Server Management, Python Automatisierung und KI-Integration. 
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link 
                  to="/services" 
                  className="group flex items-center justify-center gap-2 bg-gray-900 text-white px-8 py-4 rounded-full font-medium hover:bg-black transition-all hover:shadow-xl shadow-blue-900/20"
                >
                  Services entdecken
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </div>
            
            <div className="flex items-center gap-6 mt-8">
              <span className="text-gray-500 text-sm">Folgen Sie uns:</span>
              <div className="flex gap-4">
                <a 
                  href="https://github.com/M-Enderle" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                  aria-label="GitHub Profile"
                >
                  <Github size={20} />
                </a>
                <a 
                  href="https://www.linkedin.com/in/moritz-enderle/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin size={20} />
                </a>
                <a 
                  href="mailto:kontakt@intellize.de" 
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                  aria-label="Email Contact"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
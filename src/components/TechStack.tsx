import React from 'react';
import { motion } from 'framer-motion';
import { TECH_STACK } from '../constants';

const TechStack: React.FC = () => {
  return (
    <section className="py-12 md:py-24 bg-transparent border-y border-gray-200/50">
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
        <div className="mb-10 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Unser Tech Stack</h2>
          <p className="text-sm md:text-base text-gray-500 max-w-xl">
            Wir setzen auf bewährte Open-Source-Technologien und moderne Frameworks für maximale Stabilität und Skalierbarkeit.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4">
          {TECH_STACK.map((tech, idx) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              whileHover={{ y: -5, backgroundColor: "rgba(255, 255, 255, 0.9)" }}
              className="p-4 md:p-6 border border-gray-200/60 rounded-xl hover:border-blue-300 hover:shadow-lg transition-all duration-300 bg-white/40 backdrop-blur-sm group cursor-default"
            >
              <div className="text-[10px] md:text-xs font-semibold text-gray-500 mb-1 md:mb-2 uppercase tracking-wide group-hover:text-blue-600 transition-colors">
                {tech.category}
              </div>
              <div className="font-bold text-base md:text-lg text-gray-900">
                {tech.name}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
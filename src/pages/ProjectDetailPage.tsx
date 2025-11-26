import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PROJECTS } from '../constants';
import { Github, Calendar, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

const ProjectDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const project = PROJECTS.find(p => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Projekt nicht gefunden</h2>
          <Link to="/projects" className="text-blue-600 hover:underline">Zurück zu den Projekten</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header Image - Similar to ServiceDetailPage */}
      <div className="relative h-[50vh] min-h-[400px]">
        <img 
          src={project.imageUrl} 
          alt={project.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]"></div>
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-screen-2xl mx-auto px-6 lg:px-12 w-full">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl"
            >
              <div className="inline-flex items-center gap-2 text-blue-300 font-medium mb-6 text-sm">
                <Link to="/projects" className="hover:text-white transition-colors">Projekte</Link>
                <ChevronRight size={14} />
                <span>Case Study</span>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-xs font-bold text-white uppercase tracking-wider">
                    {tag}
                  </span>
                ))}
              </div>

              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                {project.title}
              </h1>
              
              <div className="flex items-center gap-6 text-gray-300 text-sm">
                 <div className="flex items-center gap-2">
                   <Calendar size={18} />
                   <span>{project.date}</span>
                 </div>
                 {project.githubLink && (
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white transition-colors">
                    <Github size={18} />
                    <span className="underline underline-offset-4">Source Code</span>
                  </a>
                 )}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12 py-24">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Main Content */}
          <div className="lg:w-2/3">
             <div 
              className="prose prose-lg prose-blue max-w-none text-gray-600 prose-headings:font-bold prose-headings:text-gray-900 prose-p:leading-relaxed prose-li:text-gray-600"
              dangerouslySetInnerHTML={{ __html: project.content }}
            />
          </div>

          {/* Sidebar / CTA */}
          <div className="lg:w-1/3">
            <div className="sticky top-32">
              <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Interessiert an ähnlichen Lösungen?</h3>
                <p className="text-gray-600 mb-6 text-sm">
                  Wir entwickeln maßgeschneiderte Automatisierungen wie in diesem Beispiel für Ihr Unternehmen.
                </p>
                <a 
                  href={`mailto:info@intellize.de?subject=Anfrage zu: ${project.title}`} 
                  className="block w-full text-center bg-black text-white px-6 py-4 rounded-xl font-medium hover:bg-gray-800 transition-colors flex items-center justify-center gap-2"
                >
                  Projekt anfragen
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailPage;

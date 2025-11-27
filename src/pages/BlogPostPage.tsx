import React, { useEffect, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { BLOG_POSTS } from '../constants';
import { Github, Calendar, ChevronRight, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { mdxComponents } from '../components/MDXComponents';

const BlogPostPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const post = BLOG_POSTS.find(p => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Beitrag nicht gefunden</h2>
          <Link to="/blog" className="text-blue-600 hover:underline">Zurück zum Blog</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header Image - Similar to ServiceDetailPage */}
      <div className="relative h-[50vh] min-h-[400px]">
        <img 
          src={post.imageUrl} 
          alt={post.title} 
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
                <Link to="/blog" className="hover:text-white transition-colors">Blog</Link>
                <ChevronRight size={14} />
                <span>Artikel</span>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {post.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-xs font-bold text-white uppercase tracking-wider">
                    {tag}
                  </span>
                ))}
              </div>

              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                {post.title}
              </h1>
              
              <div className="flex items-center gap-6 text-gray-300 text-sm">
                 <div className="flex items-center gap-2">
                   <Calendar size={18} />
                   <span>{post.date}</span>
                 </div>
                 {post.githubLink && (
                  <a href={post.githubLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white transition-colors">
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
            >
              <post.Content components={mdxComponents} />
            </div>
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
                  href={`mailto:info@intellize.de?subject=Anfrage zu: ${post.title}`} 
                  className="block w-full text-center bg-black text-white px-6 py-4 rounded-xl font-medium hover:bg-gray-800 transition-colors flex items-center justify-center gap-2"
                >
                  Projekt anfragen
                  <ArrowRight size={16} />
                </a>
              </div>
              
              <div className="mt-8">
                 <h4 className="font-bold text-gray-900 mb-4 text-sm uppercase tracking-wider">Weitere Artikel</h4>
                 <div className="flex flex-col space-y-4">
                    {BLOG_POSTS.filter(p => p.id !== post.id).slice(0, 2).map(p => (
                       <Link key={p.id} to={`/blog/${p.id}`} className="group block bg-white border border-gray-100 rounded-xl p-4 hover:border-blue-300 transition-colors">
                          <h5 className="font-bold text-gray-900 text-sm mb-1 group-hover:text-blue-600 transition-colors">{p.title}</h5>
                          <span className="text-xs text-gray-400">{p.date}</span>
                       </Link>
                    ))}
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPostPage;
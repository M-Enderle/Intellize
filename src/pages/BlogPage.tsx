import React from 'react';
import { Link } from 'react-router-dom';
import { BLOG_POSTS } from '../constants';
import { Calendar, ArrowRight, Github } from 'lucide-react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';

const BlogPage: React.FC = () => {
  return (
    <>
      <SEO
        title="Blog - Intellize | Automatisierung & Technologie"
        description="Einblicke in Automatisierungstechnologien, Tutorials und Updates zu Python, N8N, KI und Server Management."
        canonical="/blog"
        keywords="Automatisierung Blog, Python Tutorials, N8N Workflows, KI News, Server Management, Technologie Updates"
        ogType="website"
      />
      <div className="pt-32 pb-24 min-h-screen">
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12 mb-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl"
        >
          <span className="text-blue-600 font-semibold tracking-wider uppercase text-sm mb-4 block">Blog</span>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">Einblicke & News</h1>
          <p className="text-xl text-gray-500 leading-relaxed">
            Gedanken zu aktuellen Automatisierungstechnologien, Tutorials und Updates.
          </p>
        </motion.div>
      </div>

      <div className="max-w-screen-2xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {BLOG_POSTS.map((post, idx) => (
            <motion.div
              key={`blog-post-${post.id}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
            >
              <Link to={`/blog/${post.id}`} className="group flex flex-col h-full bg-white rounded-3xl overflow-hidden border border-gray-200 hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-300">
                <div className="h-72 overflow-hidden relative">
                   <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10"></div>
                   <img 
                     src={post.imageUrl} 
                     alt={post.title} 
                     width="400"
                     height="288"
                     className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                     loading="lazy"
                   />
                   <div className="absolute bottom-6 left-6 right-6 z-20 text-white">
                      <div className="flex gap-2 mb-3">
                        {post.tags.slice(0, 2).map(tag => (
                          <span key={tag} className="px-2 py-1 bg-white/20 backdrop-blur-md rounded text-[10px] font-bold uppercase tracking-wider">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <h2 className="text-2xl font-bold leading-tight group-hover:underline underline-offset-4 decoration-2 decoration-blue-400">{post.title}</h2>
                   </div>
                </div>
                
                <div className="p-8 flex flex-col flex-grow bg-white/60 backdrop-blur-md">
                  <div className="flex items-center gap-4 text-sm text-gray-400 mb-6">
                    <div className="flex items-center gap-1.5">
                      <Calendar size={14} />
                      <span>{post.date}</span>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-8 flex-grow leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between pt-6 border-t border-gray-100/50 mt-auto">
                    <span className="inline-flex items-center text-blue-600 font-semibold text-sm group-hover:translate-x-2 transition-transform">
                      Artikel lesen <ArrowRight className="ml-2" size={16} />
                    </span>
                    {post.githubLink && <Github size={18} className="text-gray-300 group-hover:text-black transition-colors" />}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
    </>
  );
};

export default BlogPage;
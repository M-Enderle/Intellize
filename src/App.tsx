import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ClarityInit from './components/ClarityInit';
import Home from './pages/Home';
import ServicesPage from './pages/ServicesPage';
import ServiceDetailPage from './pages/ServiceDetailPage';
import BlogPage from './pages/BlogPage';
import BlogPostPage from './pages/BlogPostPage';
import ProjectsPage from './pages/ProjectsPage';
import ProjectDetailPage from './pages/ProjectDetailPage';
import Imprint from './pages/Imprint';
import ContactPage from './pages/ContactPage';
import ErrorPage from './pages/ErrorPage';
import ScrollToTop from './components/ScrollToTop';

const App: React.FC = () => {
  return (
    <>
      <ClarityInit />
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-100 selection:text-blue-900 relative">
        <Navbar />
        <div className="flex-grow z-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services/:slug" element={<ServiceDetailPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/projects/:id" element={<ProjectDetailPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:id" element={<BlogPostPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/imprint" element={<Imprint />} />
            {/* Catch-all route for 404 errors */}
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default App;
import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft, Search, FileQuestion } from 'lucide-react';
import SEO from '../components/SEO';

const ErrorPage: React.FC = () => {
  return (
    <>
      <SEO
        title="404 - Seite nicht gefunden | Intellize"
        description="Die gesuchte Seite konnte nicht gefunden werden. Entdecken Sie unsere Dienstleistungen für Automatisierung und Data Science."
        canonical="/404"
        ogType="website"
      />
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 flex items-center justify-center px-6 lg:px-12">
        <div className="max-w-2xl mx-auto text-center">
            {/* Error Icon */}
            <div className="mb-8">
              <h1 className="text-6xl md:text-8xl font-bold text-gray-900 mb-4">404</h1>
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-6">
                Seite nicht gefunden
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Die gesuchte Seite existiert nicht oder wurde möglicherweise verschoben.
                Kein Problem, lassen Sie uns gemeinsam den richtigen Weg finden.
              </p>
            </div>

            {/* Back Button */}
            <div className="mt-8">
              <button
                onClick={() => window.history.back()}
                className="group inline-flex items-center gap-2 text-gray-500 hover:text-gray-700 transition-colors"
              >
                <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                Zurück zur vorherigen Seite
              </button>
            </div>

            {/* Contact Info */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <p className="text-gray-500 mb-2">Brauchen Sie Hilfe?</p>
              <a
                href="mailto:kontakt@intellize.de"
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                kontakt@intellize.de
              </a>
            </div>
          </div>
        </div>
    </>
  );
};

export default ErrorPage;
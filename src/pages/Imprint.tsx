import React from 'react';
import SEO from '../components/SEO';

const Imprint: React.FC = () => {
  return (
    <>
      <SEO
        title="Impressum - Intellize | Rechtliche Informationen"
        description="Impressum und rechtliche Informationen von Intellize - Moritz Enderle, Kontakt und Haftungsausschluss."
        canonical="/imprint"
        keywords="Impressum, Rechtliche Informationen, Kontakt, Haftungsausschluss"
        ogType="website"
      />
      <div className="pt-32 pb-24 min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-12">Impressum</h1>
        
        <div className="space-y-8 text-gray-600 leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Angaben gemäß § 5 TMG</h2>
            <p>
              Moritz Enderle<br />
              Intellize<br />
              Eimeldingerstr 11<br />
              79592 Fischingen<br />
              Deutschland
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Kontakt</h2>
            <p>
              Telefon: +49 176 57888987<br />
              E-Mail: kontakt@intellize.de
            </p>
          </section>

          <section className="border-t border-gray-100 pt-8 mt-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Haftungsausschluss (Disclaimer)</h2>
            <h3 className="font-medium text-gray-900 mt-4 mb-2">Haftung für Inhalte</h3>
            <p className="mb-4">
              Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
            </p>
            
            <h3 className="font-medium text-gray-900 mt-4 mb-2">Haftung für Links</h3>
            <p className="mb-4">
              Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
            </p>

            <h3 className="font-medium text-gray-900 mt-4 mb-2">Urheberrecht</h3>
            <p>
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
            </p>
          </section>
        </div>
      </div>
    </div>
    </>
  );
};

export default Imprint;
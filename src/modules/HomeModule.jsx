import { ChevronRight, Globe, Mail } from 'lucide-react';
import Claim from '../components/brand/Claim';
import Tropfen from '../components/brand/Tropfen';

export default function HomeModule({ interest, setPage }) {
  const isNewsletter = interest === 'newsletter';

  return (
    <div className="animate-fade">
      <section className="bg-white px-8 md:px-20 py-16 min-h-[80vh] flex items-center relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <div>
            <Claim bgContext="white" />
            <div className="mt-12 space-y-6">
              <h1 className="text-3xl font-semibold text-black leading-tight">
                {isNewsletter
                  ? 'Smarte Mandantenbindung durch automatisierte Fach-Inhalte.'
                  : 'Ihre Kanzlei verdient Marketing, das so professionell ist wie Ihre Beratung.'}
              </h1>
              <p className="text-xl text-gray-700 max-w-xl">
                Werden Sie zum Mandanten-Magneten. Mit <span className="font-semibold italic">atikon.com</span> nutzen Sie Tools, die speziell für den Kanzleialltag in AT & DE entwickelt wurden.
              </p>

              <div className="pt-8 flex flex-wrap items-center gap-12">
                <button onClick={() => setPage(isNewsletter ? 'newsletter' : 'websites')}>
                  <Tropfen bg="violet" rotate={-45} className="w-44 h-44 shadow-xl">
                    <span className="font-extrabold text-white text-xl leading-tight">{isNewsletter ? 'System\ntesten' : 'Jetzt\nstarten!'}</span>
                  </Tropfen>
                </button>
                <ul className="atikon-list text-xl font-semibold hidden md:block">
                  <li>Websites in 6-8 Wochen</li>
                  <li>Integrierte Steuernews</li>
                  <li>DATEV-Connect API</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="relative flex justify-center">
            <Tropfen bg="yellow" rotate={135} className="w-[500px] h-[500px] opacity-10 absolute -z-10" />
            <div className="bg-white p-8 rounded-[2.5rem] shadow-2xl border border-gray-100 max-w-md w-full relative">
              <div className="absolute -top-6 -right-4 bg-[#FA4616] text-white font-extrabold px-6 py-2 rounded-full rotate-12">#GIPFELSTURM</div>
              <div className="w-20 h-20 bg-violet-100 rounded-3xl flex items-center justify-center mb-8">
                {isNewsletter ? <Mail size={40} className="text-violet-900" /> : <Globe size={40} className="text-violet-900" />}
              </div>
              <h3 className="text-3xl text-violet-900 mb-4">{isNewsletter ? 'SteuerNewsLetterSystem' : 'Kanzlei-Webseiten'}</h3>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                {isNewsletter
                  ? "Kein 'Tool', sondern ein Kanzlei-Prozess. Automatisieren Sie Ihre Mandanten-Kommunikation rechtssicher."
                  : 'Ihre Website als Herzschlag des Onlineauftritts. Inklusive SEO, Social Media und Karriereportal.'}
              </p>
              <button onClick={() => setPage(isNewsletter ? 'newsletter' : 'websites')} className="text-orange-600 font-extrabold flex items-center gap-2 group text-xl">
                Mehr Details <ChevronRight size={24} className="group-hover:translate-x-2 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-yellow px-8 md:px-20 py-24">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 justify-between">
          <div className="max-w-2xl">
            <h2 className="text-4xl text-violet-900 leading-[1.1] mb-6">
              Mandanten begeistern, <span className="atikon-underline">Mitarbeiter finden</span> und Zeit sparen.
            </h2>
            <p className="text-xl text-violet-950/70 font-semibold">Über 1.800 Kanzleien vertrauen bereits auf den digitalen Aufstieg mit Atikon.</p>
          </div>
          <div className="bg-white/40 backdrop-blur-md p-10 rounded-[3rem] w-full lg:w-auto">
            <ul className="atikon-list text-2xl font-bold">
              <li>WCAG 2.2 Barrierefreiheit</li>
              <li>A-Mandanten-Fließband</li>
              <li>Spezialisten für AT & DE</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

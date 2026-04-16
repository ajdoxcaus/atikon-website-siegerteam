import { Database, Mail, ShieldCheck, Users } from 'lucide-react';
import FeatureCard from '../components/ui/FeatureCard';

export default function NewsletterModule() {
  return (
    <div className="animate-fade">
      <section className="bg-white px-8 md:px-20 py-24 text-center">
        <div className="max-w-4xl mx-auto">
          <Mail size={80} className="text-orange-600 mx-auto mb-10" />
          <h1 className="text-6xl text-violet-900 mb-8 uppercase tracking-tighter">SteuerNewsLetterSystem</h1>
          <p className="text-2xl text-gray-700 leading-relaxed font-semibold">
            Das System für strukturierte Mandanteninformation – <span className="atikon-underline">nicht nur ein weiteres Tool</span>.
          </p>
        </div>
      </section>

      <section className="px-8 md:px-20 py-16 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <FeatureCard icon={<ShieldCheck className="text-orange-600" />} title="Hinweispflicht" text="Kommen Sie Ihrer Hinweispflicht zuverlässig nach." />
          <FeatureCard icon={<Database className="text-orange-600" />} title="Stammdaten-Sync" text="DATEV-Connect-API Anbindung ohne manuelle Pflege." />
          <FeatureCard icon={<Users className="text-orange-600" />} title="Zielgruppen" text="Mailings für Ärzte, Gastro oder Landwirtschaft." />
        </div>

        <div className="bg-white rounded-[3rem] shadow-2xl overflow-hidden border border-gray-100">
          <table className="atikon-table text-lg">
            <thead>
              <tr>
                <th className="w-1/2">Features für Steuerkanzleien</th>
                <th className="text-center">Vorteil</th>
              </tr>
            </thead>
            <tbody>
              {[
                { title: 'DATEV-Connect-API Integration', v: 'Automatische Stammdaten-Synchronisation' },
                { title: 'Individuelle Kanzleinews', v: 'Eigene Inhalte in wenigen Klicks ergänzt' },
                { title: 'Automatischer Versand', v: 'Regelmäßig & zuverlässig (Di, Mi, Do)' },
                { title: 'Reporting-System', v: 'Öffnungs- & Klickraten auf einen Blick' },
                { title: 'DSGVO-Konformität', v: 'Speziell für Steuergeheimnisse programmiert' },
              ].map((row, i) => (
                <tr key={i}>
                  <td className="font-bold text-violet-900">{row.title}</td>
                  <td className="text-gray-600">{row.v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

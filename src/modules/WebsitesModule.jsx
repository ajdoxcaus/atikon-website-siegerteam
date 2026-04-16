import { Database, MonitorSmartphone, PlayCircle, Zap } from 'lucide-react';
import Badge from '../components/ui/Badge';
import IconCard from '../components/ui/IconCard';

export default function WebsitesModule() {
  return (
    <div className="animate-fade pb-24">
      <section className="bg-white px-8 md:px-20 py-24">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <Badge text="6-8 Wochen Projektdauer" />
            <h1 className="text-6xl text-violet-900 mt-6 mb-8 uppercase leading-none tracking-tighter">Ihre Website <br />als Mandanten-Motor</h1>
            <p className="text-2xl text-gray-700 leading-relaxed mb-10">
              Wir bauen Kanzlei-Webseiten, die nicht nur gut aussehen, sondern aktiv <span className="atikon-underline">neue Mandate generieren</span> und Fachkräfte anziehen.
            </p>
            <ul className="atikon-list text-xl font-semibold space-y-4">
              <li>WCAG 2.2 konform (Neues Gesetz ab 6/2025)</li>
              <li>Integrierte Onlinenews & Fachbeiträge</li>
              <li>Social Media & Karriereportal-Anbindung</li>
              <li>DSGVO-Hosting & Wartung inklusive</li>
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <IconCard icon={<Database />} title="Infolisten" text="Wissen von A bis Z für Mandanten." />
            <IconCard icon={<MonitorSmartphone />} title="Responsive" text="Optimiert für alle Endgeräte." />
            <IconCard icon={<Zap />} title="Onlinerechner" text="Mandanten rechnen mit Ihnen." />
            <IconCard icon={<PlayCircle />} title="Kanzlei-Videos" text="Infotainment, das überzeugt." />
          </div>
        </div>
      </section>
    </div>
  );
}

import { BookOpen, Calendar, Mic2, PlayCircle } from 'lucide-react';

export default function KnowledgeModule() {
  return (
    <div className="animate-fade pb-24">
      <section className="bg-white px-8 md:px-20 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <h1 className="text-6xl text-violet-900 mb-8 uppercase leading-none tracking-tighter">Atikon <br />Wissensportal</h1>
              <p className="text-2xl text-gray-700 leading-relaxed mb-10">
                Blättern Sie in mehr als <span className="atikon-underline">100 Praxistipps</span> für Ihr Kanzleimarketing und sichern Sie sich Ihren Wissensvorsprung.
              </p>
              <div className="space-y-8">
                <div className="flex gap-6 items-start">
                  <Mic2 size={40} className="text-orange-600 shrink-0" />
                  <div>
                    <h4 className="text-xl font-extrabold text-violet-900 uppercase">Marketing Süß-Sauer</h4>
                    <p className="text-gray-600">Der Podcast für frische Ideen in der Steuerberatung.</p>
                  </div>
                </div>
                <div className="flex gap-6 items-start">
                  <PlayCircle size={40} className="text-orange-600 shrink-0" />
                  <div>
                    <h4 className="text-xl font-extrabold text-violet-900 uppercase">Gipfelstürmer Webinare</h4>
                    <p className="text-gray-600">Impulse zu Digitalisierung, Social Media und Zeitmanagement.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 grid grid-cols-1 gap-6">
              <div className="bg-yellow p-10 rounded-[3rem]">
                <Calendar className="mb-4 text-violet-900" size={32} />
                <h3 className="text-2xl text-violet-900 mb-4 uppercase">Events & Messen</h3>
                <ul className="atikon-list text-lg font-bold">
                  <li>TAXarena - Die Innovationsmesse</li>
                  <li>Deutscher Steuerberaterkongress</li>
                  <li>ÖGSW Finanzstrafrechtstagung</li>
                </ul>
              </div>
              <div className="bg-violet p-10 rounded-[3rem] text-white bg-violet-900">
                <BookOpen className="mb-4 text-orange-500" size={32} />
                <h3 className="text-2xl text-orange-500 mb-4 uppercase">Direct Marketing Tipps</h3>
                <p className="text-lg opacity-90 leading-relaxed">Erfahren Sie, wie Sie Mundpropaganda, Online- und Offlinemarketing gezielt zur Mandantengewinnung nutzen.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

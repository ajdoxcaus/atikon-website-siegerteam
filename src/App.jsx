import { Menu, Target, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import Logo from './components/brand/Logo';
import HomeModule from './modules/HomeModule';
import KnowledgeModule from './modules/KnowledgeModule';
import NewsletterModule from './modules/NewsletterModule';
import WebsitesModule from './modules/WebsitesModule';
import { globalStyles } from './styles/globalStyles';

export default function App() {
  const [page, setPage] = useState('home');
  const [interest, setInterest] = useState('general');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const sheet = document.createElement('style');
    sheet.innerText = globalStyles;
    document.head.appendChild(sheet);
    return () => document.head.removeChild(sheet);
  }, []);

  return (
    <div className="min-h-screen flex">
      <aside className="fixed left-0 top-0 bottom-0 w-[var(--side-width)] bg-orange-600 z-50 flex flex-col items-center justify-end">
        <div className="h-1/4 w-full bg-violet-900 opacity-20"></div>
        <div className="h-40 w-full bg-yellow-400"></div>
      </aside>

      <div className="ml-[var(--side-width)] flex-1 flex flex-col min-h-screen">
        <div className="bg-slate-900 text-white px-8 py-3 flex justify-between items-center text-xs tracking-widest uppercase font-bold border-b border-white/10 relative z-[60]">
          <div className="flex items-center gap-3">
            <Target size={14} className="text-orange-500" />
            <span>Smart Personalization Active</span>
          </div>
          <div className="flex bg-white/10 rounded-full p-1 gap-1">
            <button
              onClick={() => {
                setInterest('general');
                setPage('home');
              }}
              className={`px-4 py-1 rounded-full transition-all ${interest === 'general' ? 'bg-orange-600 text-white' : 'hover:bg-white/5'}`}
            >
              General
            </button>
            <button
              onClick={() => {
                setInterest('newsletter');
                setPage('home');
              }}
              className={`px-4 py-1 rounded-full transition-all ${interest === 'newsletter' ? 'bg-violet-800 text-white' : 'hover:bg-white/5'}`}
            >
              Newsletter Focus
            </button>
          </div>
        </div>

        <header className="bg-white sticky top-0 z-50 shadow-sm border-b border-gray-100 h-[120px] flex items-center">
          <div className="max-w-7xl mx-auto w-full px-8 flex justify-between items-center">
            <div className="cursor-pointer" onClick={() => setPage('home')}>
              <Logo bg="white" />
            </div>

            <nav className="hidden lg:flex items-center gap-10">
              {[
                { id: 'home', label: 'Start' },
                { id: 'websites', label: 'Websites' },
                { id: 'newsletter', label: 'Newsletter' },
                { id: 'knowledge', label: 'Wissen' },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => setPage(item.id)}
                  className={`text-xl font-bold transition-all relative group ${
                    page === item.id ? 'text-orange-600' : 'text-gray-600 hover:text-orange-600'
                  }`}
                >
                  {item.label}
                  <span
                    className={`absolute -bottom-2 left-0 h-1 bg-orange-600 transition-all ${
                      page === item.id ? 'w-full' : 'w-0 group-hover:w-1/2'
                    }`}
                  ></span>
                </button>
              ))}
              <div className="ml-6 pl-10 border-l-2 border-gray-100">
                <button className="bg-violet-900 text-white px-8 py-3 font-extrabold text-lg hover:bg-orange-600 transition-all active:scale-95 shadow-lg">
                  Kanzlei-Login
                </button>
              </div>
            </nav>

            <button className="text-violet-900 lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={40} /> : <Menu size={40} />}
            </button>
          </div>
        </header>

        {isMenuOpen && (
          <div className="lg:hidden bg-white fixed inset-0 z-40 pt-[120px] px-8 animate-fade">
            <div className="flex flex-col gap-6 pt-10">
              {['Start', 'Websites', 'Newsletter', 'Wissen'].map((item) => (
                <button key={item} className="text-3xl font-extrabold text-left border-b border-gray-100 pb-4 text-violet-900">
                  {item}
                </button>
              ))}
              <button className="bg-orange-600 text-white p-6 font-extrabold text-xl mt-10">Kanzlei-Login</button>
            </div>
          </div>
        )}

        <main className="flex-1">
          {page === 'home' && <HomeModule interest={interest} setPage={setPage} />}
          {page === 'websites' && <WebsitesModule />}
          {page === 'newsletter' && <NewsletterModule />}
          {page === 'knowledge' && <KnowledgeModule />}
        </main>

        <footer className="bg-violet-900 text-white pt-24 pb-12 px-8">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 border-b border-white/10 pb-20 mb-10">
            <div className="lg:col-span-2">
              <Logo bg="violet" />
              <p className="mt-8 text-xl text-white/70 max-w-sm">
                Spezialisierter Marketingpartner für Steuerberater. <br />
                Digitale Exzellenz seit über 25 Jahren.
              </p>
            </div>
            <div>
              <h4 className="text-yellow-400 text-2xl mb-8 font-extrabold uppercase tracking-widest">Navigation</h4>
              <ul className="space-y-4 text-lg">
                <li onClick={() => setPage('websites')} className="hover:text-orange-500 cursor-pointer">Websites</li>
                <li onClick={() => setPage('newsletter')} className="hover:text-orange-500 cursor-pointer">Newsletter</li>
                <li onClick={() => setPage('knowledge')} className="hover:text-orange-500 cursor-pointer">Wissensportal</li>
              </ul>
            </div>
            <div>
              <h4 className="text-yellow-400 text-2xl mb-8 font-extrabold uppercase tracking-widest">Support DACH</h4>
              <div className="space-y-4 text-lg">
                <p>AT: +43 732 611 266</p>
                <p>DE: +49 89 987 654</p>
                <p className="font-semibold italic text-xl mt-6">info@atikon.com</p>
              </div>
            </div>
          </div>
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-white/40 font-bold uppercase tracking-tighter text-xs">
            <p>&copy; 2026 Atikon - Alles Marketing. Pasching | Linz-Land.</p>
            <div className="flex gap-10">
              <a href="#" className="hover:text-white">Impressum</a>
              <a href="#" className="hover:text-white">Datenschutz</a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

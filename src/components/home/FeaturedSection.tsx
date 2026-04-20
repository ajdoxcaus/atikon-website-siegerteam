import { ArrowRight, CheckCircle, Globe, Mail, Sparkles, Target, Play, BarChart3, FileText, Share2 } from "lucide-react";
import type { Intent } from "../../hooks/useIntent";
import { useIntent } from "../../hooks/useIntent";
import { intentVariants } from "../../data/content";
import { SectionShell } from "../ui/SectionShell";
import { Badge } from "../ui/Badge";
import { Button } from "../ui/Button";

export function FeaturedSection() {
  const intent = useIntent();
  const featured = intentVariants[intent].featured;

  return (
    <SectionShell id="loesungen" bg="white" spacing="lg">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20">
        {/* Copy */}
        <div className="max-w-lg animate-fade-up">
          <Badge variant="orange" size="sm">{featured.badge}</Badge>

          <h2 className="mt-5">{featured.title}</h2>
          <p className="mt-4 text-neutral-600 leading-relaxed">
            {featured.subtitle}
          </p>

          <ul className="mt-8 space-y-4">
            {featured.benefits.map((b) => (
              <li key={b} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-atikon-orange/10">
                  <CheckCircle size={14} className="text-atikon-orange" />
                </span>
                <span className="text-[15px] text-neutral-700 leading-snug">{b}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8">
            <Button to={featured.ctaTo} variant="primary" size="md">
              {featured.ctaLabel}
              <ArrowRight size={18} />
            </Button>
          </div>
        </div>

        {/* Visual */}
        <div className="animate-fade-up" style={{ animationDelay: "150ms" }} aria-hidden="true">
          <FeaturedMockup intent={intent} />
        </div>
      </div>
    </SectionShell>
  );
}

function FeaturedMockup({ intent }: { intent: Intent }) {
  return (
    <div className="rounded-2xl border border-neutral-200/80 bg-white shadow-lg overflow-hidden">
      <MockupChrome />
      <div className="p-5 sm:p-6">
        {intent === "newsletter" && <NewsletterMockup />}
        {intent === "website" && <WebsiteMockup />}
        {intent === "ai" && <AiMockup />}
        {intent === "lead" && <LeadMockup />}
        {intent === "default" && <DashboardMockup />}
      </div>
    </div>
  );
}

function MockupChrome() {
  return (
    <div className="flex items-center gap-2 px-5 py-3 border-b border-neutral-100 bg-neutral-50/60">
      <div className="h-2.5 w-2.5 rounded-full bg-neutral-300" />
      <div className="h-2.5 w-2.5 rounded-full bg-neutral-300" />
      <div className="h-2.5 w-2.5 rounded-full bg-neutral-300" />
      <div className="ml-3 flex-1 h-6 rounded-full bg-white border border-neutral-100 flex items-center px-3">
        <span className="text-[10px] text-neutral-300 select-none">taxhub.atikon.com</span>
      </div>
    </div>
  );
}

function DashboardMockup() {
  const metrics = [
    { label: "Websitebesucher", value: "3.247", trend: "+12 %" },
    { label: "Newsletter-Öffnungen", value: "68 %", trend: "+4 %" },
    { label: "Neue Leads", value: "23", trend: "+8 %" },
  ];
  const bars = [40, 55, 35, 65, 50, 80, 70, 90, 75, 95, 85, 100];

  return (
    <>
      <div className="grid grid-cols-3 gap-3 mb-4">
        {metrics.map((m) => (
          <div key={m.label} className="rounded-xl bg-neutral-50 p-3.5">
            <p className="text-[11px] text-neutral-400">{m.label}</p>
            <p className="mt-1 text-lg font-extrabold text-atikon-black">{m.value}</p>
            <p className="mt-0.5 text-xs font-semibold text-emerald-600">{m.trend}</p>
          </div>
        ))}
      </div>
      <div className="h-28 rounded-xl bg-gradient-to-r from-atikon-violet/5 via-atikon-violet/10 to-atikon-orange/5 flex items-end px-4 pb-4 gap-1.5">
        {bars.map((h, i) => (
          <div key={i} className="flex-1 rounded-t bg-atikon-violet/20" style={{ height: `${h}%` }} />
        ))}
      </div>
    </>
  );
}

function NewsletterMockup() {
  return (
    <div className="space-y-3">
      <div className="flex items-center gap-3 rounded-xl bg-neutral-50 p-4">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-atikon-violet/8">
          <Mail size={18} className="text-atikon-violet" />
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-xs text-neutral-400">Betreff</p>
          <p className="text-sm font-semibold text-neutral-700 truncate">Steuernews März 2026 – Ihre Kanzlei informiert</p>
        </div>
      </div>
      <div className="rounded-xl border border-neutral-100 p-4">
        <div className="h-3 w-3/4 rounded bg-neutral-100 mb-2" />
        <div className="h-3 w-full rounded bg-neutral-100 mb-2" />
        <div className="h-3 w-5/6 rounded bg-neutral-100 mb-4" />
        <div className="h-20 rounded-lg bg-gradient-to-br from-atikon-violet/5 to-atikon-orange/5" />
      </div>
      <div className="grid grid-cols-3 gap-3">
        {[{ label: "Öffnungsrate", value: "68 %" }, { label: "Klickrate", value: "12 %" }, { label: "Abonnenten", value: "1.420" }].map((s) => (
          <div key={s.label} className="rounded-xl bg-neutral-50 p-3 text-center">
            <p className="text-lg font-extrabold text-atikon-violet">{s.value}</p>
            <p className="text-[11px] text-neutral-400">{s.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function WebsiteMockup() {
  return (
    <div className="space-y-3">
      <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-neutral-50">
        <div className="h-5 w-5 rounded bg-atikon-violet/15" />
        <div className="flex gap-4">
          {["Home", "Leistungen", "Team", "Kontakt"].map((n) => (
            <span key={n} className="text-[11px] text-neutral-400">{n}</span>
          ))}
        </div>
      </div>
      <div className="rounded-xl bg-gradient-to-br from-atikon-violet/8 to-atikon-orange/5 p-6">
        <div className="h-3 w-2/3 rounded bg-atikon-violet/15 mb-2" />
        <div className="h-3 w-1/2 rounded bg-atikon-violet/10 mb-4" />
        <div className="h-8 w-28 rounded-full bg-atikon-orange/20" />
      </div>
      <div className="grid grid-cols-3 gap-3">
        {[Globe, FileText, Target].map((Icon, i) => (
          <div key={i} className="rounded-xl border border-neutral-100 p-4 text-center">
            <Icon size={18} className="mx-auto text-atikon-violet/40 mb-2" />
            <div className="h-2 w-full rounded bg-neutral-100 mb-1.5" />
            <div className="h-2 w-3/4 mx-auto rounded bg-neutral-100" />
          </div>
        ))}
      </div>
    </div>
  );
}

function AiMockup() {
  return (
    <div className="space-y-3">
      <div className="relative rounded-xl bg-gradient-to-br from-atikon-violet/10 to-atikon-violet/5 flex items-center justify-center h-40">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-md">
          <Play size={24} className="text-atikon-violet ml-1" />
        </div>
        <span className="absolute bottom-3 right-3 rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold text-atikon-violet shadow-sm">
          KI-Avatar
        </span>
      </div>
      <div className="grid grid-cols-2 gap-3">
        {[
          { icon: Sparkles, label: "Steuernews-TV", value: "12 Folgen" },
          { icon: Share2, label: "Video-Academy", value: "8 Tutorials" },
        ].map((item) => (
          <div key={item.label} className="flex items-center gap-3 rounded-xl bg-neutral-50 p-3.5">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-atikon-violet/8">
              <item.icon size={16} className="text-atikon-violet" />
            </div>
            <div>
              <p className="text-xs font-semibold text-neutral-700">{item.label}</p>
              <p className="text-[11px] text-neutral-400">{item.value}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function LeadMockup() {
  const stages = [
    { label: "Anzeige", count: "847", color: "bg-atikon-orange/10 text-atikon-orange" },
    { label: "Anfrage", count: "64", color: "bg-atikon-violet/10 text-atikon-violet" },
    { label: "Termin", count: "23", color: "bg-emerald-50 text-emerald-600" },
  ];

  return (
    <div className="space-y-3">
      <div className="grid grid-cols-3 gap-3">
        {stages.map((s, i) => (
          <div key={s.label} className="relative text-center">
            <div className={`rounded-xl p-4 ${s.color.split(" ")[0]}`}>
              <p className="text-xl font-extrabold">{s.count}</p>
              <p className="text-xs font-semibold mt-1">{s.label}</p>
            </div>
            {i < stages.length - 1 && (
              <ArrowRight size={14} className="absolute top-1/2 -right-2 -translate-y-1/2 text-neutral-300 z-10" />
            )}
          </div>
        ))}
      </div>
      <div className="rounded-xl border border-neutral-100 p-4">
        <div className="flex items-center justify-between mb-3">
          <p className="text-xs font-semibold text-neutral-600">Aktive Kampagnen</p>
          <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-0.5 text-[11px] font-semibold text-emerald-600">
            <BarChart3 size={10} /> 2 aktiv
          </span>
        </div>
        {["Google Ads – Steuerberater München", "Instagram – Fachkräfte-Kampagne"].map((c) => (
          <div key={c} className="flex items-center gap-2 py-2 border-t border-neutral-50 first:border-0">
            <div className="h-2 w-2 rounded-full bg-emerald-500" />
            <p className="text-sm text-neutral-600">{c}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

import { useState } from "react";
import { Video, Lightbulb, TrendingUp, Users, Play, MessageCircle } from "lucide-react";
import { Badge } from "../ui/Badge";

const AMON_PHOTO =
  "https://www.atikon.com/static/content/e4/e48/e75/e6851/photo/ger/CAM_web.jpg";

export function WebinareHero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="container-max py-16 sm:py-20 lg:py-28 xl:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20">
          <div className="animate-fade-up max-w-xl">
            <Badge variant="violet" size="sm">
              <Video size={12} className="mr-1" />
              Gipfelstürmer-Webinare
            </Badge>

            <h1 className="mt-6 text-[clamp(2rem,4.5vw,3.25rem)] leading-[1.08] font-extrabold tracking-tight">
              <span className="text-atikon-black">Webinare für Steuerberater</span>{" "}
              <span className="text-atikon-orange">– effektives Expertenwissen für Ihren Erfolg</span>
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-neutral-600 max-w-md">
              Kostenlose Gipfelstürmer-Webinare bringen frische Ideen und
              neue Perspektiven in Ihre Steuerkanzlei. Kompakt, praxisnah und
              bequem von Ihrem Bildschirm aus.
            </p>
          </div>

          <div
            className="animate-fade-up relative"
            style={{ animationDelay: "200ms" }}
            aria-hidden="true"
          >
            <WebinarVisual />
          </div>
        </div>
      </div>
    </section>
  );
}

function WebinarVisual() {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="relative mx-auto max-w-md aspect-square">
      {/* Background glow */}
      <div className="absolute inset-0 rounded-full bg-atikon-violet/[0.04] blur-3xl scale-110" />

      {/* Main webinar screen */}
      <div className="relative z-10 rounded-2xl border border-neutral-200 bg-white shadow-xl overflow-hidden">
        {/* Browser chrome */}
        <div className="flex items-center gap-2 border-b border-neutral-100 bg-neutral-50 px-4 py-2.5">
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-red-400/60" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-400/60" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/60" />
          </div>
          <div className="ml-3 flex-1 rounded-md bg-neutral-100 px-3 py-1 text-[10px] text-neutral-400 font-mono">
            webinar.atikon.com
          </div>
          <div className="flex items-center gap-1 rounded-full bg-emerald-100 px-2 py-0.5">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            <span className="text-[9px] font-bold text-emerald-700 uppercase">Live</span>
          </div>
        </div>

        {/* Video content area */}
        <div className="relative bg-gradient-to-br from-atikon-violet/[0.03] to-atikon-orange/[0.02] p-5">
          <div className="flex gap-4">
            {/* Speaker panel */}
            <div className="flex-1">
              <div className="relative aspect-[4/3] rounded-xl bg-gradient-to-br from-atikon-violet/10 to-atikon-violet/5 overflow-hidden border border-atikon-violet/10">
                {!imgError ? (
                  <img
                    src={AMON_PHOTO}
                    alt="Christoph Amon"
                    className="h-full w-full object-cover object-top"
                    onError={() => setImgError(true)}
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center text-atikon-violet/30">
                    <Users size={48} />
                  </div>
                )}

                {/* Speaker name overlay */}
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/60 to-transparent px-3 py-2">
                  <p className="text-[10px] font-bold text-white leading-tight">Christoph Amon</p>
                  <p className="text-[8px] text-white/70">Geschäftsführung</p>
                </div>

                {/* Play overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity bg-black/20">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/90 shadow-lg">
                    <Play size={20} className="text-atikon-violet ml-0.5" />
                  </div>
                </div>
              </div>

              {/* Participant strip */}
              <div className="mt-3 flex items-center gap-2">
                <div className="flex -space-x-2">
                  {["bg-atikon-violet", "bg-atikon-orange", "bg-amber-400", "bg-emerald-500", "bg-sky-500"].map((bg, i) => (
                    <div
                      key={i}
                      className={`h-6 w-6 rounded-full ${bg} border-2 border-white flex items-center justify-center text-[7px] font-bold text-white`}
                      style={{ animationDelay: `${0.8 + i * 0.1}s` }}
                    >
                      {["JA", "SB", "NK", "ML", "KS"][i]}
                    </div>
                  ))}
                </div>
                <span className="text-[9px] text-neutral-400 font-medium">+47 Teilnehmer</span>
              </div>
            </div>

            {/* Sidebar: slides + chat */}
            <div className="w-[38%] flex flex-col gap-3">
              {/* Current slide preview */}
              <div className="rounded-lg border border-neutral-200 bg-white p-3 shadow-sm">
                <div className="flex items-center gap-1.5 mb-2">
                  <TrendingUp size={10} className="text-atikon-violet" />
                  <span className="text-[8px] font-bold text-neutral-500 uppercase tracking-wider">Aktuelle Folie</span>
                </div>
                <div className="space-y-1.5">
                  <div className="h-1.5 w-full rounded-full bg-atikon-violet/15" />
                  <div className="h-1.5 w-3/4 rounded-full bg-atikon-violet/10" />
                  <div className="h-1.5 w-5/6 rounded-full bg-atikon-violet/8" />
                  <div className="mt-2 h-1.5 w-1/2 rounded-full bg-atikon-orange/20" />
                </div>
              </div>

              {/* Chat messages */}
              <div className="flex-1 rounded-lg border border-neutral-200 bg-white p-3 shadow-sm">
                <div className="flex items-center gap-1.5 mb-2">
                  <MessageCircle size={10} className="text-atikon-violet" />
                  <span className="text-[8px] font-bold text-neutral-500 uppercase tracking-wider">Live-Chat</span>
                </div>
                <div className="space-y-2">
                  <ChatBubble name="J.L." text="Sehr spannend!" delay="1s" />
                  <ChatBubble name="M.K." text="Wie starte ich damit?" delay="1.5s" />
                  <ChatBubble name="S.B." text="Top Vortrag 👍" delay="2s" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating topic cards */}
      <FloatingCard
        icon={<Lightbulb size={14} />}
        text="Personal Branding"
        className="absolute -top-2 -right-4 z-20"
        delay="0.6s"
      />
      <FloatingCard
        icon={<TrendingUp size={14} />}
        text="KI im Kanzleialltag"
        className="absolute -bottom-2 -left-4 z-20"
        delay="0.9s"
      />
      <FloatingCard
        icon={<Users size={14} />}
        text="Mitarbeitersuche"
        className="absolute bottom-16 -right-6 z-20"
        delay="1.2s"
      />
    </div>
  );
}

function ChatBubble({ name, text, delay }: { name: string; text: string; delay: string }) {
  return (
    <div
      className="flex items-start gap-1.5 animate-fade-up"
      style={{ animationDelay: delay }}
    >
      <div className="h-4 w-4 shrink-0 rounded-full bg-atikon-violet/10 flex items-center justify-center text-[6px] font-bold text-atikon-violet">
        {name}
      </div>
      <div className="rounded-md bg-neutral-50 px-1.5 py-0.5 text-[8px] text-neutral-600">
        {text}
      </div>
    </div>
  );
}

function FloatingCard({
  icon,
  text,
  className,
  delay,
}: {
  icon: React.ReactNode;
  text: string;
  className: string;
  delay: string;
}) {
  return (
    <div
      className={`animate-fade-up flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-3 py-1.5 shadow-lg ${className}`}
      style={{ animationDelay: delay }}
    >
      <span className="text-atikon-violet">{icon}</span>
      <span className="text-[11px] font-semibold text-neutral-700 whitespace-nowrap">{text}</span>
    </div>
  );
}

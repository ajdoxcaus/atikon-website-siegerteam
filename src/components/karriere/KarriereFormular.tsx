import { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Send,
  CheckCircle2,
  Briefcase,
  Star,
  Heart,
  User,
} from "lucide-react";
import { SectionShell } from "../ui/SectionShell";
import { Badge } from "../ui/Badge";

const STELLEN = [
  "Leadmanagement (m/w/d) mit Fokus auf Neukundenakquise & Telefonie",
  "Sales Trainee (m/w/d)",
  "Initiativbewerbung",
];

const WICHTIG_OPTIONS = [
  "Karriere machen",
  "Viel Neues lernen",
  "Sicherheit",
  "Ein tolles Team",
  "Flexibilität",
];

const STEPS = [
  { label: "Stelle", icon: Briefcase },
  { label: "Erfahrung", icon: Star },
  { label: "Wünsche", icon: Heart },
  { label: "Kontakt", icon: User },
];

export function KarriereFormular() {
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const [stelle, setStelle] = useState("");
  const [erfahrung, setErfahrung] = useState<string | null>(null);
  const [wichtig, setWichtig] = useState<string[]>([]);
  const [vorname, setVorname] = useState("");
  const [nachname, setNachname] = useState("");
  const [email, setEmail] = useState("");
  const [telefon, setTelefon] = useState("");

  const toggleWichtig = (val: string) =>
    setWichtig((prev) =>
      prev.includes(val) ? prev.filter((v) => v !== val) : [...prev, val],
    );

  const canNext =
    (step === 0 && stelle !== "") ||
    (step === 1 && erfahrung !== null) ||
    (step === 2 && wichtig.length > 0) ||
    (step === 3 && nachname.trim() !== "" && email.trim() !== "");

  const handleSubmit = () => {
    if (canNext && step === 3) {
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <SectionShell id="bewerbung" bg="neutral">
        <div className="mx-auto max-w-lg text-center py-12">
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-100 text-green-600">
            <CheckCircle2 size={40} />
          </div>
          <h2 className="text-2xl font-bold text-atikon-black">
            Vielen Dank, {vorname || nachname}!
          </h2>
          <p className="mt-4 text-neutral-600 leading-relaxed">
            Deine Bewerbung ist bei uns eingegangen. Wir melden uns in Kürze
            bei dir. Wir freuen uns, dich kennenzulernen!
          </p>
        </div>
      </SectionShell>
    );
  }

  return (
    <SectionShell id="bewerbung" bg="neutral">
      <div className="mx-auto max-w-2xl text-center">
        <Badge variant="orange" size="sm">
          Blitzbewerbung
        </Badge>
        <h2 className="mt-5">In 60 Sekunden bewerben.</h2>
        <p className="mt-4 text-neutral-600 leading-relaxed">
          Nur 4 kurze Fragen – und schon ist deine Bewerbung bei uns!
        </p>
      </div>

      <div className="mx-auto mt-10 max-w-xl">
        {/* Progress */}
        <div className="mb-8 flex items-center justify-between">
          {STEPS.map((s, i) => {
            const Icon = s.icon;
            const isDone = i < step;
            const isCurrent = i === step;
            return (
              <div key={s.label} className="flex flex-1 items-center">
                <div className="flex flex-col items-center gap-1.5">
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold transition-all duration-300 ${
                      isDone
                        ? "bg-green-500 text-white"
                        : isCurrent
                          ? "bg-atikon-violet text-white shadow-lg shadow-atikon-violet/25"
                          : "bg-neutral-200 text-neutral-400"
                    }`}
                  >
                    {isDone ? <CheckCircle2 size={18} /> : <Icon size={18} />}
                  </div>
                  <span
                    className={`text-xs font-medium ${isCurrent ? "text-atikon-violet" : "text-neutral-400"}`}
                  >
                    {s.label}
                  </span>
                </div>
                {i < STEPS.length - 1 && (
                  <div
                    className={`mx-2 h-0.5 flex-1 rounded-full transition-colors duration-300 ${isDone ? "bg-green-500" : "bg-neutral-200"}`}
                  />
                )}
              </div>
            );
          })}
        </div>

        {/* Steps */}
        <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm sm:p-8">
          {step === 0 && (
            <div className="animate-fade-up">
              <h3 className="text-lg font-bold text-atikon-black">
                Für welche Stelle bewirbst du dich?
              </h3>
              <div className="mt-5 flex flex-col gap-3">
                {STELLEN.map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => setStelle(s)}
                    className={`rounded-xl border-2 px-5 py-4 text-left text-sm font-medium transition-all ${
                      stelle === s
                        ? "border-atikon-violet bg-atikon-violet/5 text-atikon-violet"
                        : "border-neutral-200 text-neutral-700 hover:border-neutral-300"
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 1 && (
            <div className="animate-fade-up">
              <h3 className="text-lg font-bold text-atikon-black">
                Hast du schon Erfahrung in diesem Bereich?
              </h3>
              <div className="mt-5 flex gap-4">
                {["Ja", "Nein"].map((opt) => (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => setErfahrung(opt)}
                    className={`flex-1 rounded-xl border-2 px-5 py-6 text-center text-base font-semibold transition-all ${
                      erfahrung === opt
                        ? "border-atikon-violet bg-atikon-violet/5 text-atikon-violet"
                        : "border-neutral-200 text-neutral-700 hover:border-neutral-300"
                    }`}
                  >
                    {opt === "Ja"
                      ? "JA, ich habe Erfahrung"
                      : "NEIN, ich habe keine Erfahrung"}
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="animate-fade-up">
              <h3 className="text-lg font-bold text-atikon-black">
                Was ist dir bei deinem Job am wichtigsten?
              </h3>
              <p className="mt-1 text-sm text-neutral-500">
                Mehrfachauswahl möglich
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                {WICHTIG_OPTIONS.map((opt) => (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => toggleWichtig(opt)}
                    className={`rounded-full border-2 px-5 py-2.5 text-sm font-medium transition-all ${
                      wichtig.includes(opt)
                        ? "border-atikon-violet bg-atikon-violet text-white"
                        : "border-neutral-200 text-neutral-700 hover:border-neutral-300"
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="animate-fade-up">
              <h3 className="text-lg font-bold text-atikon-black">
                Fast geschafft! Deine Kontaktdaten.
              </h3>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-neutral-700">
                    Vorname
                  </label>
                  <input
                    type="text"
                    value={vorname}
                    onChange={(e) => setVorname(e.target.value)}
                    className="w-full rounded-lg border border-neutral-300 px-4 py-2.5 text-sm transition-colors focus:border-atikon-violet focus:outline-none focus:ring-2 focus:ring-atikon-violet/20"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-neutral-700">
                    Nachname <span className="text-atikon-orange">*</span>
                  </label>
                  <input
                    type="text"
                    value={nachname}
                    onChange={(e) => setNachname(e.target.value)}
                    required
                    className="w-full rounded-lg border border-neutral-300 px-4 py-2.5 text-sm transition-colors focus:border-atikon-violet focus:outline-none focus:ring-2 focus:ring-atikon-violet/20"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-neutral-700">
                    E-Mail <span className="text-atikon-orange">*</span>
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full rounded-lg border border-neutral-300 px-4 py-2.5 text-sm transition-colors focus:border-atikon-violet focus:outline-none focus:ring-2 focus:ring-atikon-violet/20"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-neutral-700">
                    Telefon
                  </label>
                  <input
                    type="tel"
                    value={telefon}
                    onChange={(e) => setTelefon(e.target.value)}
                    className="w-full rounded-lg border border-neutral-300 px-4 py-2.5 text-sm transition-colors focus:border-atikon-violet focus:outline-none focus:ring-2 focus:ring-atikon-violet/20"
                  />
                </div>
              </div>

              <div className="mt-4">
                <label className="mb-1.5 block text-sm font-medium text-neutral-700">
                  Lebenslauf (optional)
                </label>
                <div className="flex items-center justify-center rounded-lg border-2 border-dashed border-neutral-300 px-4 py-6 text-center transition-colors hover:border-atikon-violet/40">
                  <span className="text-sm text-neutral-500">
                    PDF oder Word-Datei hierher ziehen oder{" "}
                    <span className="font-medium text-atikon-violet cursor-pointer">
                      durchsuchen
                    </span>
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* Navigation */}
          <div className="mt-8 flex items-center justify-between">
            <button
              type="button"
              onClick={() => setStep((s) => Math.max(0, s - 1))}
              disabled={step === 0}
              className="inline-flex items-center gap-1.5 rounded-lg px-4 py-2 text-sm font-medium text-neutral-600 transition-colors hover:bg-neutral-100 disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ChevronLeft size={16} />
              Zurück
            </button>

            {step < 3 ? (
              <button
                type="button"
                onClick={() => setStep((s) => Math.min(3, s + 1))}
                disabled={!canNext}
                className="inline-flex items-center gap-1.5 rounded-full bg-atikon-violet px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-atikon-violet-dark disabled:opacity-40 disabled:cursor-not-allowed"
              >
                Weiter
                <ChevronRight size={16} />
              </button>
            ) : (
              <button
                type="button"
                onClick={handleSubmit}
                disabled={!canNext}
                className="inline-flex items-center gap-2 rounded-full bg-atikon-orange px-8 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-atikon-orange-dark disabled:opacity-40 disabled:cursor-not-allowed"
              >
                Jetzt bewerben
                <Send size={16} />
              </button>
            )}
          </div>
        </div>
      </div>
    </SectionShell>
  );
}

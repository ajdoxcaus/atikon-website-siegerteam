import { useState, useEffect, useCallback } from "react";
import {
  X,
  ArrowRight,
  ArrowLeft,
  User,
  Building2,
  Mail,
  Phone,
  CalendarCheck,
  CheckCircle,
  Video,
} from "lucide-react";
import { useTerminFunnel } from "../../context/TerminFunnelContext";

const STEPS = [
  { icon: User, label: "Name" },
  { icon: Building2, label: "Kanzlei" },
  { icon: Mail, label: "Kontakt" },
  { icon: Phone, label: "Telefon" },
  { icon: CalendarCheck, label: "Termin" },
] as const;

type FormData = {
  vorname: string;
  nachname: string;
  kanzlei: string;
  adresse: string;
  email: string;
  website: string;
  telefon: string;
  selectedDate: string | null;
  selectedTime: string | null;
};

const INITIAL: FormData = {
  vorname: "",
  nachname: "",
  kanzlei: "",
  adresse: "",
  email: "",
  website: "",
  telefon: "",
  selectedDate: null,
  selectedTime: null,
};

export function TerminFunnelModal() {
  const { isOpen, close } = useTerminFunnel();
  const [step, setStep] = useState(0);
  const [data, setData] = useState<FormData>(INITIAL);
  const [booked, setBooked] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      setTimeout(() => {
        setStep(0);
        setData(INITIAL);
        setBooked(false);
      }, 300);
    }
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    },
    [close],
  );

  useEffect(() => {
    if (isOpen) document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, handleKeyDown]);

  const update = (patch: Partial<FormData>) =>
    setData((prev) => ({ ...prev, ...patch }));

  const canNext = (() => {
    switch (step) {
      case 0:
        return data.vorname.trim() !== "" && data.nachname.trim() !== "";
      case 1:
        return data.kanzlei.trim() !== "";
      case 2:
        return data.email.trim() !== "" && data.email.includes("@");
      case 3:
        return data.telefon.trim() !== "";
      case 4:
        return data.selectedDate !== null && data.selectedTime !== null;
      default:
        return false;
    }
  })();

  const next = () => {
    if (step < 4) setStep(step + 1);
    else setBooked(true);
  };

  const prev = () => {
    if (step > 0) setStep(step - 1);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm animate-fade-in"
        onClick={close}
      />

      <div className="relative w-full max-w-lg rounded-2xl bg-white shadow-2xl animate-fade-up overflow-hidden">
        {/* Close */}
        <button
          type="button"
          onClick={close}
          className="absolute right-4 top-4 z-10 flex h-8 w-8 items-center justify-center rounded-full text-neutral-400 transition-colors hover:bg-neutral-100 hover:text-neutral-700"
          aria-label="Schließen"
        >
          <X size={18} />
        </button>

        {/* Progress */}
        <div className="border-b border-neutral-100 px-6 pt-6 pb-4">
          <div className="flex items-center justify-between">
            {STEPS.map((s, i) => {
              const Icon = s.icon;
              const done = i < step || booked;
              const active = i === step && !booked;
              return (
                <div key={s.label} className="flex flex-col items-center gap-1.5 flex-1">
                  <div
                    className={`flex h-9 w-9 items-center justify-center rounded-full transition-all duration-300 ${
                      done
                        ? "bg-emerald-500 text-white"
                        : active
                          ? "bg-atikon-violet text-white ring-4 ring-atikon-violet/20"
                          : "bg-neutral-100 text-neutral-400"
                    }`}
                  >
                    {done ? <CheckCircle size={16} /> : <Icon size={16} />}
                  </div>
                  <span
                    className={`text-[10px] font-semibold ${
                      active ? "text-atikon-violet" : done ? "text-emerald-600" : "text-neutral-400"
                    }`}
                  >
                    {s.label}
                  </span>
                </div>
              );
            })}
          </div>
          <div className="mt-3 h-1 rounded-full bg-neutral-100 overflow-hidden">
            <div
              className="h-full rounded-full bg-atikon-violet transition-all duration-500"
              style={{ width: `${booked ? 100 : (step / 4) * 100}%` }}
            />
          </div>
        </div>

        {/* Body */}
        <div className="px-6 py-6 min-h-[320px] flex flex-col">
          {booked ? (
            <SuccessView data={data} onClose={close} />
          ) : (
            <>
              <div className="flex-1">
                {step === 0 && <StepName data={data} update={update} onNext={next} canNext={canNext} />}
                {step === 1 && <StepKanzlei data={data} update={update} onNext={next} canNext={canNext} />}
                {step === 2 && <StepEmail data={data} update={update} onNext={next} canNext={canNext} />}
                {step === 3 && <StepTelefon data={data} update={update} onNext={next} canNext={canNext} />}
                {step === 4 && <StepKalender data={data} update={update} />}
              </div>

              <div className="flex items-center justify-between pt-6 mt-auto">
                <button
                  type="button"
                  onClick={prev}
                  disabled={step === 0}
                  className={`inline-flex items-center gap-1.5 text-sm font-semibold transition-colors ${
                    step === 0
                      ? "text-neutral-300 cursor-not-allowed"
                      : "text-neutral-600 hover:text-atikon-violet"
                  }`}
                >
                  <ArrowLeft size={14} />
                  Zurück
                </button>

                <button
                  type="button"
                  onClick={next}
                  disabled={!canNext}
                  className={`inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-semibold text-white transition-all duration-200 ${
                    canNext
                      ? "bg-atikon-orange hover:bg-atikon-orange-dark hover:shadow-[0_4px_16px_rgba(250,70,22,0.3)]"
                      : "bg-neutral-300 cursor-not-allowed"
                  }`}
                >
                  {step === 4 ? "Termin buchen" : "Weiter"}
                  <ArrowRight size={14} />
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

/* ── Steps ────────────────────────────────────── */

const inputCls =
  "w-full rounded-lg border border-neutral-300 bg-white px-4 py-2.5 text-sm text-neutral-800 outline-none transition-colors focus:border-atikon-violet focus:ring-2 focus:ring-atikon-violet/20";

type StepProps = {
  data: FormData;
  update: (patch: Partial<FormData>) => void;
  onNext?: () => void;
  canNext?: boolean;
};

function handleEnter(e: React.KeyboardEvent, canNext: boolean | undefined, onNext: (() => void) | undefined) {
  if (e.key === "Enter" && canNext && onNext) {
    e.preventDefault();
    onNext();
  }
}

function StepName({ data, update, onNext, canNext }: StepProps) {
  return (
    <div onKeyDown={(e) => handleEnter(e, canNext, onNext)}>
      <h3 className="text-lg font-bold text-neutral-900">Wie heißen Sie?</h3>
      <p className="mt-1 text-sm text-neutral-500">
        Damit wir Sie persönlich ansprechen können.
      </p>
      <div className="mt-6 space-y-4">
        <div>
          <label htmlFor="f-vorname" className="mb-1.5 block text-sm font-semibold text-neutral-700">
            Vorname *
          </label>
          <input
            id="f-vorname"
            type="text"
            autoFocus
            className={inputCls}
            placeholder="Max"
            value={data.vorname}
            onChange={(e) => update({ vorname: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="f-nachname" className="mb-1.5 block text-sm font-semibold text-neutral-700">
            Nachname *
          </label>
          <input
            id="f-nachname"
            type="text"
            className={inputCls}
            placeholder="Mustermann"
            value={data.nachname}
            onChange={(e) => update({ nachname: e.target.value })}
          />
        </div>
      </div>
    </div>
  );
}

function StepKanzlei({ data, update, onNext, canNext }: StepProps) {
  return (
    <div onKeyDown={(e) => handleEnter(e, canNext, onNext)}>
      <h3 className="text-lg font-bold text-neutral-900">Ihre Kanzlei</h3>
      <p className="mt-1 text-sm text-neutral-500">
        Erzählen Sie uns von Ihrer Steuerberatungskanzlei.
      </p>
      <div className="mt-6 space-y-4">
        <div>
          <label htmlFor="f-kanzlei" className="mb-1.5 block text-sm font-semibold text-neutral-700">
            Kanzleiname *
          </label>
          <input
            id="f-kanzlei"
            type="text"
            autoFocus
            className={inputCls}
            placeholder="Mustermann Steuerberatung"
            value={data.kanzlei}
            onChange={(e) => update({ kanzlei: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="f-adresse" className="mb-1.5 block text-sm font-semibold text-neutral-700">
            Adresse
          </label>
          <input
            id="f-adresse"
            type="text"
            className={inputCls}
            placeholder="Musterstraße 1, 4020 Linz"
            value={data.adresse}
            onChange={(e) => update({ adresse: e.target.value })}
          />
        </div>
      </div>
    </div>
  );
}

function StepEmail({ data, update, onNext, canNext }: StepProps) {
  return (
    <div onKeyDown={(e) => handleEnter(e, canNext, onNext)}>
      <h3 className="text-lg font-bold text-neutral-900">Wie erreichen wir Sie?</h3>
      <p className="mt-1 text-sm text-neutral-500">
        Ihre E-Mail-Adresse und optional Ihre Website.
      </p>
      <div className="mt-6 space-y-4">
        <div>
          <label htmlFor="f-email" className="mb-1.5 block text-sm font-semibold text-neutral-700">
            E-Mail-Adresse *
          </label>
          <input
            id="f-email"
            type="email"
            autoFocus
            className={inputCls}
            placeholder="max@kanzlei-mustermann.at"
            value={data.email}
            onChange={(e) => update({ email: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="f-website" className="mb-1.5 block text-sm font-semibold text-neutral-700">
            Website
          </label>
          <input
            id="f-website"
            type="url"
            className={inputCls}
            placeholder="https://www.kanzlei-mustermann.at"
            value={data.website}
            onChange={(e) => update({ website: e.target.value })}
          />
        </div>
      </div>
    </div>
  );
}

function StepTelefon({ data, update, onNext, canNext }: StepProps) {
  return (
    <div onKeyDown={(e) => handleEnter(e, canNext, onNext)}>
      <h3 className="text-lg font-bold text-neutral-900">Ihre Telefonnummer</h3>
      <p className="mt-1 text-sm text-neutral-500">
        Für Rückfragen und die Terminbestätigung.
      </p>
      <div className="mt-6">
        <label htmlFor="f-telefon" className="mb-1.5 block text-sm font-semibold text-neutral-700">
          Telefonnummer *
        </label>
        <input
          id="f-telefon"
          type="tel"
          autoFocus
          className={inputCls}
          placeholder="+43 732 ..."
          value={data.telefon}
          onChange={(e) => update({ telefon: e.target.value })}
        />
      </div>
    </div>
  );
}

/* ── Calendar (Step 5 Prototype) ─────────────── */

function StepKalender({ data, update }: StepProps) {
  const today = new Date();
  const [monthOffset, setMonthOffset] = useState(0);

  const viewDate = new Date(today.getFullYear(), today.getMonth() + monthOffset, 1);
  const year = viewDate.getFullYear();
  const month = viewDate.getMonth();

  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDay = (new Date(year, month, 1).getDay() + 6) % 7; // Mo=0

  const dayNames = ["Mo", "Di", "Mi", "Do", "Fr", "Sa", "So"];
  const monthNames = [
    "Januar", "Februar", "März", "April", "Mai", "Juni",
    "Juli", "August", "September", "Oktober", "November", "Dezember",
  ];

  const times = ["09:00", "09:30", "10:00", "10:30", "11:00", "14:00", "14:30", "15:00", "15:30", "16:00"];

  const isWeekend = (d: number) => {
    const dow = new Date(year, month, d).getDay();
    return dow === 0 || dow === 6;
  };

  const isPast = (d: number) => {
    const date = new Date(year, month, d);
    const t = new Date();
    t.setHours(0, 0, 0, 0);
    return date < t;
  };

  const dateStr = (d: number) =>
    `${year}-${String(month + 1).padStart(2, "0")}-${String(d).padStart(2, "0")}`;

  return (
    <div>
      <h3 className="text-lg font-bold text-neutral-900">Wunschtermin wählen</h3>
      <p className="mt-1 text-sm text-neutral-500">
        Wählen Sie Datum und Uhrzeit für Ihr MS Teams Meeting.
      </p>

      <div className="mt-4">
        {/* Month navigation */}
        <div className="flex items-center justify-between mb-3">
          <button
            type="button"
            onClick={() => setMonthOffset((o) => Math.max(0, o - 1))}
            disabled={monthOffset === 0}
            className="p-1.5 rounded-lg text-neutral-500 hover:bg-neutral-100 disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <ArrowLeft size={14} />
          </button>
          <span className="text-sm font-semibold text-neutral-800">
            {monthNames[month]} {year}
          </span>
          <button
            type="button"
            onClick={() => setMonthOffset((o) => Math.min(2, o + 1))}
            disabled={monthOffset >= 2}
            className="p-1.5 rounded-lg text-neutral-500 hover:bg-neutral-100 disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <ArrowRight size={14} />
          </button>
        </div>

        {/* Day grid */}
        <div className="grid grid-cols-7 gap-0.5 text-center">
          {dayNames.map((d) => (
            <div key={d} className="py-1 text-[10px] font-semibold text-neutral-400 uppercase">
              {d}
            </div>
          ))}
          {Array.from({ length: firstDay }).map((_, i) => (
            <div key={`e-${i}`} />
          ))}
          {Array.from({ length: daysInMonth }).map((_, i) => {
            const d = i + 1;
            const disabled = isWeekend(d) || isPast(d);
            const selected = data.selectedDate === dateStr(d);
            return (
              <button
                key={d}
                type="button"
                disabled={disabled}
                onClick={() => update({ selectedDate: dateStr(d), selectedTime: null })}
                className={`py-1.5 rounded-lg text-xs font-medium transition-all ${
                  disabled
                    ? "text-neutral-300 cursor-not-allowed"
                    : selected
                      ? "bg-atikon-violet text-white ring-2 ring-atikon-violet/30"
                      : "text-neutral-700 hover:bg-atikon-violet/8 hover:text-atikon-violet"
                }`}
              >
                {d}
              </button>
            );
          })}
        </div>
      </div>

      {/* Time slots */}
      {data.selectedDate && (
        <div className="mt-4">
          <p className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-2">
            Uhrzeit wählen
          </p>
          <div className="grid grid-cols-5 gap-1.5">
            {times.map((t) => {
              const selected = data.selectedTime === t;
              return (
                <button
                  key={t}
                  type="button"
                  onClick={() => update({ selectedTime: t })}
                  className={`rounded-lg py-2 text-xs font-semibold transition-all ${
                    selected
                      ? "bg-atikon-violet text-white ring-2 ring-atikon-violet/30"
                      : "border border-neutral-200 text-neutral-700 hover:border-atikon-violet hover:text-atikon-violet"
                  }`}
                >
                  {t}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

/* ── Success ──────────────────────────────────── */

function SuccessView({ data, onClose }: { data: FormData; onClose: () => void }) {
  const dateObj = data.selectedDate ? new Date(data.selectedDate + "T00:00:00") : null;
  const formatted = dateObj
    ? dateObj.toLocaleDateString("de-AT", { weekday: "long", day: "numeric", month: "long", year: "numeric" })
    : "";

  return (
    <div className="flex flex-col items-center text-center py-4">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 mb-5">
        <CheckCircle size={32} className="text-emerald-500" />
      </div>
      <h3 className="text-xl font-bold text-neutral-900">
        Termin gebucht!
      </h3>
      <p className="mt-2 text-sm text-neutral-600 max-w-xs">
        Vielen Dank, {data.vorname}! Ihr MS Teams Beratungstermin wurde erfolgreich reserviert.
      </p>

      <div className="mt-6 w-full rounded-xl border border-neutral-200 bg-neutral-50 p-4 text-left">
        <div className="flex items-center gap-2 text-sm font-semibold text-neutral-800 mb-3">
          <Video size={16} className="text-atikon-violet" />
          MS Teams Meeting
        </div>
        <div className="space-y-1.5 text-sm text-neutral-600">
          <p><span className="font-semibold text-neutral-800">Datum:</span> {formatted}</p>
          <p><span className="font-semibold text-neutral-800">Uhrzeit:</span> {data.selectedTime} Uhr</p>
          <p><span className="font-semibold text-neutral-800">Teilnehmer:</span> {data.vorname} {data.nachname}</p>
          <p><span className="font-semibold text-neutral-800">Kanzlei:</span> {data.kanzlei}</p>
        </div>
        <p className="mt-3 text-xs text-neutral-500">
          Sie erhalten in Kürze eine Bestätigung per E-Mail an {data.email}.
        </p>
      </div>

      <button
        type="button"
        onClick={onClose}
        className="mt-6 inline-flex items-center gap-2 rounded-full bg-atikon-violet px-8 py-2.5 text-sm font-semibold text-white transition-all hover:bg-atikon-violet/90"
      >
        Schließen
      </button>
    </div>
  );
}

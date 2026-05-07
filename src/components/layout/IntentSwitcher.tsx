import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MessageCircle, Settings } from "lucide-react";
import type { Intent } from "../../hooks/useIntent";
import { useIntent } from "../../hooks/useIntent";
import { useTerminFunnel } from "../../context/TerminFunnelContext";

const INTENTS: { id: Intent; label: string }[] = [
  { id: "default", label: "Default" },
  { id: "newsletter", label: "Newsletter" },
  { id: "website", label: "Website" },
  { id: "ai", label: "AI" },
  { id: "lead", label: "Lead" },
];

const ZEYNEP_ICON_URL =
  "https://www.atikon.com/static/content/e4/e48/e75/e9114/photo/ger/zka.jpg";
const CHATBOT_FIRST_QUESTION =
  "Möchten Sie direkt einen kurzen Beratungstermin vereinbaren, um mehr Anfragen über Ihre Website zu erhalten?";
const CHATBOT_BOOKING_ANSWER =
  "Perfekt. Klicken Sie auf 'Termin vereinbaren' und sichern Sie sich Ihren Wunschtermin.";
const CHATBOT_QUALIFYING_ANSWER =
  "Gerne. Teilen Sie mir kurz Ihr Ziel mit, dann planen wir den passenden Termin.";
const INTENT_TARGETS: Record<Intent, string> = {
  default: "/home",
  newsletter: "/newsletter?intent=newsletter",
  website: "/website?intent=website",
  ai: "/ai-studio?intent=ai",
  lead: "/lead-management?intent=lead",
};

export function IntentSwitcher() {
  const [open, setOpen] = useState(false);
  const [chatbotOpen, setChatbotOpen] = useState(false);
  const [hasScrolledOnce, setHasScrolledOnce] = useState(false);
  const [chatMessage, setChatMessage] = useState("");
  const [chatHistory, setChatHistory] = useState<{ role: "assistant" | "user"; text: string }[]>([
    { role: "assistant", text: CHATBOT_FIRST_QUESTION },
  ]);
  const current = useIntent();
  const navigate = useNavigate();
  const { open: openTerminFunnel } = useTerminFunnel();

  useEffect(() => {
    function onFirstScroll() {
      if (window.scrollY <= 0) return;
      setHasScrolledOnce((alreadyScrolled) => {
        if (alreadyScrolled) return true;
        setChatbotOpen(true);
        return true;
      });
    }

    onFirstScroll();
    window.addEventListener("scroll", onFirstScroll, { passive: true });
    return () => window.removeEventListener("scroll", onFirstScroll);
  }, []);

  function switchIntent(id: Intent) {
    navigate(INTENT_TARGETS[id]);
  }

  function startMeetingFlow() {
    setChatbotOpen(false);
    openTerminFunnel();
  }

  function submitChatMessage(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const nextMessage = chatMessage.trim();
    if (!nextMessage) return;
    const wantsMeeting = /\b(termin|meeting|gespräch|gespraech|call|buchen|vereinbaren)\b/i.test(
      nextMessage,
    );
    const botReply = wantsMeeting ? CHATBOT_BOOKING_ANSWER : CHATBOT_QUALIFYING_ANSWER;

    setChatHistory((prev) => [
      ...prev,
      { role: "user", text: nextMessage },
      { role: "assistant", text: botReply },
    ]);
    setChatMessage("");
  }

  return (
    <div className="fixed bottom-16 left-10 z-50 flex flex-col items-start gap-2 lg:bottom-4">
      {hasScrolledOnce && (
        <div className="fixed bottom-16 right-4 z-50 flex flex-col items-end gap-2 lg:bottom-4">
          {chatbotOpen && (
            <div className="max-w-[18rem] rounded-2xl border border-neutral-200/60 bg-white/95 p-4 shadow-lg backdrop-blur-sm">
              <div className="flex items-center gap-2">
                <img
                  src={ZEYNEP_ICON_URL}
                  alt="Zeynep"
                  className="h-7 w-7 rounded-full object-cover object-top"
                  loading="lazy"
                />
                <p className="text-xs font-semibold text-atikon-violet">Zeynep, Atikon Team</p>
              </div>
              <div className="mt-2 max-h-52 space-y-2 overflow-y-auto rounded-xl bg-neutral-50 p-2">
                {chatHistory.map((entry, index) => (
                  <div
                    key={`${entry.role}-${index}`}
                    className={`rounded-lg px-2.5 py-2 text-xs leading-relaxed ${
                      entry.role === "assistant"
                        ? "bg-white text-neutral-700"
                        : "bg-atikon-violet text-white"
                    }`}
                  >
                    {entry.text}
                  </div>
                ))}
              </div>
              <form onSubmit={submitChatMessage} className="mt-3 flex gap-2">
                <input
                  type="text"
                  value={chatMessage}
                  onChange={(e) => setChatMessage(e.target.value)}
                  placeholder="Schreiben Sie Ihren Terminwunsch..."
                  className="min-w-0 flex-1 rounded-full border border-neutral-300 bg-white px-3 py-2 text-xs text-neutral-800 outline-none transition-colors focus:border-atikon-violet"
                  aria-label="Frage an Chatbot"
                />
                <button
                  type="submit"
                  className="rounded-full bg-atikon-violet px-3 py-2 text-xs font-semibold text-white transition-colors hover:bg-[#35007f] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-atikon-violet"
                >
                  Senden
                </button>
              </form>
              <button
                type="button"
                onClick={startMeetingFlow}
                className="mt-3 rounded-full bg-atikon-orange px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-[#e53d10] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-atikon-orange"
              >
                Termin jetzt vereinbaren
              </button>
            </div>
          )}

          <button
            type="button"
            onClick={() => setChatbotOpen((v) => !v)}
            className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-white bg-atikon-violet text-white shadow-lg transition-transform hover:scale-105 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-atikon-violet"
            aria-label={chatbotOpen ? "Chatbot schließen" : "Chat mit Zeynep öffnen"}
            aria-expanded={chatbotOpen}
          >
            <MessageCircle size={22} />
          </button>
        </div>
      )}

      {open && (
        <div className="rounded-xl border border-neutral-200/60 bg-white/95 p-3 shadow-lg backdrop-blur-sm">
          <p className="mb-2 px-1 text-[10px] font-semibold uppercase tracking-wider text-neutral-400">
            Intent Demo
          </p>
          <div className="flex flex-wrap gap-1.5">
            {INTENTS.map((i) => (
              <button
                key={i.id}
                type="button"
                onClick={() => switchIntent(i.id)}
                className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition-colors cursor-pointer ${
                  current === i.id
                    ? "bg-atikon-violet text-white"
                    : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
                }`}
              >
                {i.label}
              </button>
            ))}
          </div>
        </div>
      )}

      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="flex h-10 w-10 items-center justify-center rounded-full bg-atikon-violet text-white shadow-lg transition-transform hover:scale-105 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-atikon-violet"
        aria-label={open ? "Intent-Switcher schliessen" : "Intent-Switcher oeffnen"}
        aria-expanded={open}
      >
        <Settings size={18} />
      </button>
    </div>
  );
}

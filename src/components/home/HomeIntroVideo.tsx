import { useEffect, useState } from "react";

const VIDEO_OPEN_URL =
  "https://drive.google.com/file/d/1WKejkg-LNws2jJn_86Gb7NWMPuTnzfYA/view?usp=drive_link";
const VIDEO_EMBED_URL =
  "https://drive.google.com/file/d/1WKejkg-LNws2jJn_86Gb7NWMPuTnzfYA/preview";
const AUTO_CONTINUE_AFTER_MS = 69_000;

export function HomeIntroVideo() {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    if (!isOpen) return;

    const startTs = Date.now();
    const interval = window.setInterval(() => {
      if (Date.now() - startTs >= AUTO_CONTINUE_AFTER_MS) {
        setIsOpen(false);
      }
    }, 500);

    return () => window.clearInterval(interval);
  }, [isOpen]);

  function openVideoInNewTabAndContinue() {
    window.open(VIDEO_OPEN_URL, "_blank", "noopener,noreferrer");
    setIsOpen(false);
  }

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-120 bg-black">
      <iframe
        src={VIDEO_EMBED_URL}
        title="Atikon Intro Video"
        allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
        frameBorder={0}
        width="100%"
        height="100%"
        allowFullScreen
      />

      <div className="pointer-events-none absolute inset-x-0 top-0 bg-linear-to-b from-black/75 to-transparent p-5 sm:p-6">
        <div className="pointer-events-auto mx-auto flex w-full max-w-6xl items-center justify-between">
          <p className="text-xs font-semibold tracking-wide text-white/80 sm:text-sm">
            Intro-Video
          </p>
          <button
            type="button"
            onClick={openVideoInNewTabAndContinue}
            className="rounded-full border border-white/40 px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-white/10 sm:text-sm"
          >
            Video im neuen Tab + hier weiter
          </button>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-linear-to-t from-black/80 to-transparent p-5 sm:p-6">
        <div className="pointer-events-auto mx-auto flex w-full max-w-6xl justify-end">
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-atikon-violet transition-colors hover:bg-neutral-100"
          >
            Weiter zur Website
          </button>
        </div>
      </div>
    </div>
  );
}

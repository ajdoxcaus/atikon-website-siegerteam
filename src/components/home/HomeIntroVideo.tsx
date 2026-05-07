import { useEffect, useRef, useState } from "react";

const VIDEO_OPEN_URL =
  "https://www.capcut.com/presentation/7637059179253104661?workspaceId=7636305603144482837&utm_source=share&utm_medium=product";
const LOCAL_VIDEO_SRC = "/video/latest_video.mp4";

export function HomeIntroVideo() {
  const [isOpen, setIsOpen] = useState(true);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !isOpen) return;

    video.currentTime = 0;
    const playPromise = video.play();
    if (playPromise) {
      playPromise.catch(() => {
        // If autoplay is blocked by the browser, controls stay visible for manual play.
      });
    }
  }, [isOpen]);

  function closeIntro() {
    setIsOpen(false);
  }

  function openVideoInNewTabAndContinue() {
    window.open(VIDEO_OPEN_URL, "_blank", "noopener,noreferrer");
    closeIntro();
  }

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-120 bg-black">
      <video
        ref={videoRef}
        className="h-full w-full object-contain bg-black"
        src={LOCAL_VIDEO_SRC}
        autoPlay
        muted
        playsInline
        controls
        onEnded={closeIntro}
        onError={closeIntro}
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
            onClick={closeIntro}
            className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-atikon-violet transition-colors hover:bg-neutral-100"
          >
            Weiter zur Website
          </button>
        </div>
      </div>
    </div>
  );
}

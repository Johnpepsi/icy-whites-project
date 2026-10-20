"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";

const VIDEO_SRC = "/videos/client-story.mp4";
const POSTER_SRC = "/images/video/client-story-poster.jpg";

export default function Watch() {
  const [open, setOpen] = useState(false);

  const close = useCallback(() => setOpen(false), []);

  // Keyboard close + lock page scroll while open, same pattern as the
  // photo lightbox in Gallery.js.
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, close]);

  return (
    <section className="section-white" id="watch">
      <div className="wrap">
        <div className="head center">
          <div className="kicker">Watch</div>
          <h2>Teeth Whitening, Explained</h2>
          <p>A quick watch on how whitening works and what to expect.</p>
        </div>

        <button
          type="button"
          className="watch-card"
          onClick={() => setOpen(true)}
          aria-label="Play video: Teeth Whitening, Explained"
        >
          <Image
            src={POSTER_SRC}
            alt=""
            fill
            sizes="(max-width: 880px) 90vw, 480px"
            className="watch-poster"
          />
          <span className="watch-play" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
        </button>
      </div>

      {open && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Teeth Whitening, Explained"
          onClick={close}
        >
          <button type="button" className="lightbox-btn lightbox-close" onClick={close} aria-label="Close">
            &times;
          </button>
          <div className="lightbox-video-stage" onClick={(e) => e.stopPropagation()}>
            <video
              src={VIDEO_SRC}
              poster={POSTER_SRC}
              controls
              autoPlay
              playsInline
              preload="metadata"
              className="lightbox-video"
            />
          </div>
        </div>
      )}
    </section>
  );
}

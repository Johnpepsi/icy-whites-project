"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

const PHOTOS = [
  {
    before: "/images/Photos-2/clean.jpg",
    after: "/images/Photos-2/clean.jpg",
    tag: "Signature Whiten",
    span: "short",
  },
  { src: "/images/before&after/result5.JPG", tag: "Shade-Matched Result", span: "short" },
  {
    before: "/images/before&after/result6.JPG",
    after: "/images/before&after/result6.JPG",
    tag: "Deep Stain Lift",
    span: "short",
  },
  { src: "/images/before&after/result4.JPEG", tag: "Shade-Matched Result", span: "short" },
  {
    before: "/images/before&after/result3.JPG",
    after: "/images/before&after/result3.JPG",
    tag: "Deep Stain Lift",
    span: "short",
  },
  { src: "/images/before&after/result2.JPG", tag: "Shade-Matched Result", span: "short" },
  {
    before: "/images/before&after/result1.JPG",
    after: "/images/before&after/result1.JPG",
    tag: "Deep Stain Lift",
    span: "short",
  },
  { src: "/images/before&after/result8.JPG", tag: "Shade-Matched Result", span: "short" }, 
  { src: "/images/Photos-1/home.jpg", tag: "Home Service", span: "short" },
  { src: "/images/Photos-1/inprogress.png", tag: "Before and After", span: "short" },
  { src: "/images/Photos-2/result1.png", tag: "Signature Whiten", span: "short" },
  { src: "/images/Photos-2/result2.png", tag: "Signature Whiten", span: "short" },
  { src: "/images/Photos-2/result3.png", tag: "Signature Whiten", span: "short" },
  { src: "/images/Photos-2/result4.png", tag: "Home Service", span: "short" },
  { src: "/images/Photos-2/result5.jpg", tag: "Signature Whiten", span: "short" },
  { src: "/images/Photos-2/clean2.png", tag: "Signature Whiten", span: "short" },
];

const PAGE_SIZE = 8; // photos per page (4 columns x 2 rows)
 
export default function Gallery() {
  // null = closed, otherwise index of the open photo
  const [active, setActive] = useState(null);
  const [page, setPage] = useState(0);
 
  const pageCount = Math.max(1, Math.ceil(PHOTOS.length / PAGE_SIZE));
  const pageStart = page * PAGE_SIZE;
  const visible = PHOTOS.slice(pageStart, pageStart + PAGE_SIZE);
  const goNext = () => setPage((p) => Math.min(p + 1, pageCount - 1));
  const goPrev = () => setPage((p) => Math.max(p - 1, 0));
 
  // The photo shown in the lightbox (for before/after tiles, the "after")
  const fullSrc = (item) => item.after || item.src;
 
  const close = useCallback(() => setActive(null), []);
  const next = useCallback(() => setActive((i) => (i === null ? i : (i + 1) % PHOTOS.length)), []);
  const prev = useCallback(() => setActive((i) => (i === null ? i : (i - 1 + PHOTOS.length) % PHOTOS.length)), []);
 
  // Keyboard controls + lock page scroll while open
  useEffect(() => {
    if (active === null) return;
    const onKey = (e) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowRight") next();
      else if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [active, close, next, prev]);
 
  const current = active !== null ? PHOTOS[active] : null;
 
  return (
    <section className="section-frost" id="gallery">
      <div className="wrap wrap-wide">
        <div className="head center">
          <div className="kicker">Portfolio</div>
          <h2>The Shade Journey</h2>
          <p>A curated look at real client results.</p>
        </div>
 
        <div className="portfolio-pager">
          <button
            type="button"
            className="pager-arrow pager-prev"
            onClick={goPrev}
            disabled={page === 0}
            aria-label="Previous page of photos"
          >
            &#8249;
          </button>
 
          <div className="portfolio-grid" key={page}>
            {visible.map((item, i) => (
              <button
                type="button"
                className={`portfolio-tile span-${item.span}`}
                key={pageStart + i}
                onClick={() => setActive(pageStart + i)}
                aria-label={`Enlarge photo: ${item.tag}`}
              >
                {item.before ? (
                  <div className="portfolio-compare">
                    <Image src={item.before} alt={`${item.tag} — before`} fill sizes="(max-width: 880px) 50vw, 33vw" className="portfolio-img portfolio-img-before" />
                    <Image src={item.after} alt={`${item.tag} — after`} fill sizes="(max-width: 880px) 50vw, 33vw" className="portfolio-img portfolio-img-after" />
                    <span className="portfolio-swipe-hint"></span>
                  </div>
                ) : (
                  <Image src={item.src} alt={item.tag} fill sizes="(max-width: 880px) 50vw, 33vw" className="portfolio-img" />
                )}
                <span className="portfolio-tag">{item.tag}</span>
              </button>
            ))}
          </div>
 
          <button
            type="button"
            className="pager-arrow pager-next"
            onClick={goNext}
            disabled={page === pageCount - 1}
            aria-label="Next page of photos"
          >
            &#8250;
          </button>
        </div>
 
        <div className="pager-dots" role="tablist" aria-label="Gallery pages">
          {Array.from({ length: pageCount }, (_, n) => (
            <button
              type="button"
              key={n}
              className={`pager-dot${n === page ? " is-active" : ""}`}
              onClick={() => setPage(n)}
              aria-label={`Page ${n + 1}`}
              aria-selected={n === page}
              role="tab"
            />
          ))}
        </div>
      </div>
 
      {current && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={current.tag}
          onClick={close}
        >
          <button type="button" className="lightbox-btn lightbox-close" onClick={close} aria-label="Close">
            &times;
          </button>
          <button
            type="button"
            className="lightbox-btn lightbox-prev"
            onClick={(e) => { e.stopPropagation(); prev(); }}
            aria-label="Previous photo"
          >
            &#8249;
          </button>
          <div className="lightbox-stage" onClick={(e) => e.stopPropagation()}>
            <Image
              key={fullSrc(current)}
              src={fullSrc(current)}
              alt={current.tag}
              fill
              sizes="100vw"
              quality={90}
              priority
              className="lightbox-img"
            />
          </div>
          <button
            type="button"
            className="lightbox-btn lightbox-next"
            onClick={(e) => { e.stopPropagation(); next(); }}
            aria-label="Next photo"
          >
            &#8250;
          </button>
          <div className="lightbox-count">{active + 1} / {PHOTOS.length}</div>
        </div>
      )}
    </section>
  );
}
 
"use client";

import { useEffect, useState } from "react";

const PARTICLE_COUNT = 45;

function randomParticle(id) {
  return {
    id,
    size: Math.random() * 10 + 8,      // 8px - 18px
    duration: Math.random() * 10 + 10, // 10s - 20s
    delay: Math.random() * -20,        // negative = starts mid-fall
    sway: Math.random() * 40 + 10,     // 10px - 50px side drift
    rotate: Math.random() * 140 + 40,  // 40deg - 180deg of rotation across the fall
    opacity: Math.random() * 0.35 + 0.15,
    left: Math.random() * 100,         // 0% - 100%
  };
}

export default function LeafFall() {
  const [particles, setParticles] = useState([]);

  // Generated only after mount, so server render and first client
  // render both start empty — no hydration mismatch from the randomness.
  useEffect(() => {
    setParticles(Array.from({ length: PARTICLE_COUNT }, (_, i) => randomParticle(i)));
  }, []);

  return (
    <div className="leaf-fall" aria-hidden="true">
      {particles.map((p) => (
        <span
          key={p.id}
          className="leaf-particle"
          style={{
            left: `${p.left}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            opacity: p.opacity,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
            "--sway": p.sway,
            "--rotate": p.rotate,
          }}
        >
          <svg viewBox="0 0 64 64" fill="currentColor">
            <path d="M32 4 Q54 20 44 40 Q38 52 32 58 Q26 52 20 40 Q10 20 32 4 Z" />
            <path d="M32 58 L36 63" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
            <path
              d="M32 9C32 24 32 40 32 54"
              stroke="rgba(255,255,255,0.4)"
              strokeWidth="1.3"
              fill="none"
            />
          </svg>
        </span>
      ))}
    </div>
  );
}

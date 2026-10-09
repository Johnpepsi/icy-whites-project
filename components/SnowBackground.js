"use client";

import { useEffect, useState } from "react";

const FLAKE_COUNT = 45;

function randomFlake(id) {
  return {
    id,
    size: Math.random() * 3 + 2,       // 2px - 5px
    duration: Math.random() * 10 + 10, // 10s - 20s
    delay: Math.random() * -20,        // negative = starts mid-fall
    sway: Math.random() * 40 + 10,     // 10px - 50px side drift
    opacity: Math.random() * 0.5 + 0.3,
    left: Math.random() * 100,         // 0% - 100%
  };
}

export default function SnowBackground() {
  const [flakes, setFlakes] = useState([]);

  // Generated only after mount, so server render and first client
  // render both start empty — no hydration mismatch from the randomness.
  useEffect(() => {
    setFlakes(Array.from({ length: FLAKE_COUNT }, (_, i) => randomFlake(i)));
  }, []);

  return (
    <div className="snow" aria-hidden="true">
      {flakes.map((flake) => (
        <span
          key={flake.id}
          className="flake"
          style={{
            left: `${flake.left}%`,
            width: `${flake.size}px`,
            height: `${flake.size}px`,
            opacity: flake.opacity,
            animationDuration: `${flake.duration}s`,
            animationDelay: `${flake.delay}s`,
            "--sway": flake.sway,
          }}
        />
      ))}
    </div>
  );
}

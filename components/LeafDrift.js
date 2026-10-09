// Decorative, ambient drifting leaf shadows for the hero background.
// Purely visual — hidden from assistive tech and ignored by pointer events.
const LEAVES = [
  { left: "6%",  size: 46, duration: 22, delay: -2,  rotate: -18, sway: 26 },
  { left: "18%", size: 30, duration: 17, delay: -9,  rotate: 12,  sway: 18 },
  { left: "32%", size: 54, duration: 26, delay: -14, rotate: -8,  sway: 32 },
  { left: "48%", size: 34, duration: 19, delay: -4,  rotate: 20,  sway: 20 },
  { left: "63%", size: 42, duration: 24, delay: -18, rotate: -14, sway: 28 },
  { left: "78%", size: 28, duration: 16, delay: -7,  rotate: 10,  sway: 16 },
  { left: "90%", size: 50, duration: 27, delay: -11, rotate: -20, sway: 30 },
];

export default function LeafDrift({ count }) {
  const leaves = count ? LEAVES.slice(0, count) : LEAVES;
  return (
    <div className="leaf-drift" aria-hidden="true">
      {leaves.map((leaf, i) => (
        <span
          key={i}
          className="leaf"
          style={{
            left: leaf.left,
            width: leaf.size,
            height: leaf.size,
            animationDuration: `${leaf.duration}s`,
            animationDelay: `${leaf.delay}s`,
            "--rotate": `${leaf.rotate}deg`,
            "--sway": `${leaf.sway}px`,
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
            <path
              d="M32 20L22 28M32 20L42 28M32 32L24 39M32 32L40 39M32 44L26 49M32 44L38 49"
              stroke="rgba(255,255,255,0.3)"
              strokeWidth="0.9"
              fill="none"
            />
          </svg>
        </span>
      ))}
    </div>
  );
}

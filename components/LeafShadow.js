// A single large, soft, static leaf-branch silhouette — mimics natural
// dappled light falling through a plant. For use on dark panels.
export default function LeafShadow({ className = "" }) {
  return (
    <svg
      className={`leaf-shadow ${className}`}
      viewBox="0 0 400 400"
      aria-hidden="true"
    >
      <g fill="currentColor">
        <path d="M40 40 L210 210" stroke="currentColor" strokeWidth="5" fill="none" />
        <path d="M70 30c28-6 52 12 54 40-28 6-52-12-54-40Z" transform="rotate(20 97 50)" />
        <path d="M70 30c28-6 52 12 54 40-28 6-52-12-54-40Z" transform="rotate(60 97 50) translate(38 4)" />
        <path d="M70 30c30-7 56 13 58 43-30 7-56-13-58-43Z" transform="rotate(35 100 90) translate(60 30)" />
        <path d="M70 30c30-7 56 13 58 43-30 7-56-13-58-43Z" transform="rotate(80 100 90) translate(90 20)" />
        <path d="M70 30c34-8 63 15 65 48-34 8-63-15-65-48Z" transform="rotate(40 105 130) translate(115 65)" />
        <path d="M70 30c34-8 63 15 65 48-34 8-63-15-65-48Z" transform="rotate(95 105 130) translate(150 55)" />
        <path d="M70 30c38-9 71 17 73 54-38 9-71-17-73-54Z" transform="rotate(45 110 170) translate(165 105)" />
      </g>
    </svg>
  );
}

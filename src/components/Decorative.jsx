import React from "react";

export function Flower({ className = "" }) {
  return (
    <svg aria-hidden="true" className={className} fill="none" viewBox="0 0 100 100">
      <g stroke="currentColor" strokeWidth="0.8">
        <ellipse cx="50" cy="31" rx="8" ry="19" />
        <ellipse cx="50" cy="69" rx="8" ry="19" />
        <ellipse cx="31" cy="50" rx="19" ry="8" />
        <ellipse cx="69" cy="50" rx="19" ry="8" />
        <ellipse cx="36.5" cy="36.5" rx="8" ry="19" transform="rotate(-45 36.5 36.5)" />
        <ellipse cx="63.5" cy="63.5" rx="8" ry="19" transform="rotate(-45 63.5 63.5)" />
        <ellipse cx="63.5" cy="36.5" rx="8" ry="19" transform="rotate(45 63.5 36.5)" />
        <ellipse cx="36.5" cy="63.5" rx="8" ry="19" transform="rotate(45 36.5 63.5)" />
        <circle cx="50" cy="50" r="6" />
      </g>
    </svg>
  );
}

export function Ornament({ className = "" }) {
  return (
    <svg aria-hidden="true" className={className} fill="none" viewBox="0 0 94 22">
      <path d="M2 11h30m30 0h30M47 3c-6 0-8 8-14 8 6 0 8 8 14 8m0-16c6 0 8 8 14 8-6 0-8 8-14 8" />
      <circle cx="47" cy="11" r="2" />
    </svg>
  );
}

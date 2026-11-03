import React from "react";

export default function InvitationHeader({ onRsvp }) {
  return (
    <header className="sticky top-0 z-20 flex items-center justify-between border-b border-ink/10 bg-paper/95 px-5 py-3 backdrop-blur">
      <a className="font-display text-xl italic" href="#home">M <span className="text-clay">&</span> L</a>
      <span className="text-[9px] font-medium uppercase tracking-[0.12em] text-ink/80">Our wedding weekend</span>
      <button className="border border-olive/70 px-3 py-2 text-[8px] uppercase tracking-[0.16em] text-olive transition hover:bg-olive hover:text-white" onClick={onRsvp} type="button">RSVP</button>
    </header>
  );
}

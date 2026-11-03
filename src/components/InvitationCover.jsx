import React from "react";
import { Flower, Ornament } from "./Decorative.jsx";

export default function InvitationCover({ opening, opened, onOpen }) {
  return (
    <section className="cover-photo relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden px-6 pb-12 pt-16 text-center text-paper sm:min-h-[810px] sm:pt-14" id="home">
      <div aria-hidden="true" className="cover-wash absolute inset-0" />
      <Flower className="cover-flower flower-one absolute -left-7 top-[13%] h-28 w-28 text-paper/50" />
      <Flower className="cover-flower flower-two absolute -right-8 top-[27%] h-36 w-36 text-paper/40" />
      <Flower className="cover-flower flower-three absolute bottom-[13%] left-[5%] h-16 w-16 text-paper/45" />
      <div className="relative z-10 w-full max-w-sm">
        <p className="fade-up text-[8px] uppercase tracking-[0.34em] text-paper/90">With joy in our hearts</p>
        <div className={`envelope-card relative mx-auto mt-8 flex aspect-[0.78] w-full max-w-[330px] flex-col items-center justify-center border border-paper/75 p-3 sm:mt-7 ${opening ? "envelope-opening" : ""} ${opened ? "envelope-opened" : ""}`}>
          <div className="envelope-inner flex h-full w-full flex-col items-center justify-center border border-[#c8b99a] px-5">
            <div className="cover-card-photo mb-4 h-[82px] w-[140px] overflow-hidden border-[3px] border-white">
              <img
                alt="A flower-lined garden prepared for a wedding ceremony"
                className="h-full w-full object-cover"
                src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=500&q=82"
              />
            </div>
            <p className="text-[9px] font-medium uppercase tracking-[0.2em] text-ink/80">Together with our families</p>
            <h1 className="mt-3 font-display text-[62px] font-normal leading-[.76] text-ink sm:text-[70px]">
              Mira <span className="my-4 block font-display text-[25px] italic text-clay">&</span> Luca
            </h1>
            <Ornament className="mx-auto mt-4 h-5 w-24 stroke-olive stroke-[0.7]" />
            <p className="mt-3 text-[9px] font-medium uppercase tracking-[0.16em] text-ink/80">Request the pleasure of your company</p>
            <p className="mt-3 font-display text-xl italic text-ink">October 16, 2027</p>
            <p className="mt-1 text-[9px] font-medium uppercase tracking-[0.2em] text-olive">Tuscany, Italy</p>
          </div>
          <div aria-hidden="true" className="insert-card pointer-events-none absolute inset-x-[8%] bottom-[8%] z-[2] flex h-[82%] flex-col items-center justify-center border border-olive/25 bg-paper text-olive">
            <Flower className="h-10 w-10" />
            <span className="mt-4 font-display text-3xl italic">M <span className="text-clay">&</span> L</span>
            <span className="mt-2 text-[7px] uppercase tracking-[0.22em]">The beginning of forever</span>
          </div>
          <div aria-hidden="true" className="envelope-flap pointer-events-none absolute inset-x-0 top-0 z-[3] h-[14%]" />
          <span aria-hidden="true" className="wax-seal pointer-events-none absolute bottom-[-18px] left-1/2 z-[4] flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full border border-paper/70 font-display text-base italic text-paper">
            M<span className="text-[9px]">&</span>L
          </span>
        </div>
        <button className="open-button group mt-10 inline-flex items-center gap-3 border border-paper/65 px-7 py-3.5 text-[8px] uppercase tracking-[0.24em] text-paper transition hover:bg-paper hover:text-ink" onClick={onOpen} type="button">
          {opening ? "Opening with love…" : opened ? "Your invitation is open" : "Tap to open your invitation"}
          <span aria-hidden="true" className="text-sm transition-transform group-hover:translate-y-0.5">↓</span>
        </button>
        <p className="mt-4 text-[10px] tracking-[0.08em] text-white">A weekend of love, laughter & little moments</p>
      </div>
      <div aria-hidden="true" className="absolute bottom-7 left-1/2 -translate-x-1/2 animate-bounce text-[8px] uppercase tracking-[0.25em] text-paper/75">Scroll to explore ↓</div>
    </section>
  );
}

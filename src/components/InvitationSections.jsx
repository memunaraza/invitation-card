import React from "react";
import { events } from "../data/wedding.js";
import { Flower, Ornament } from "./Decorative.jsx";

export function WelcomeSection({ timeLeft }) {
  return (
    <section className="reveal-on-scroll relative overflow-hidden px-6 pb-12 pt-16 text-center" id="welcome">
      <Flower className="absolute -right-12 top-3 h-32 w-32 text-olive/10" />
      <p className="relative text-[9px] font-medium uppercase tracking-invitation text-olive">A day to remember</p>
      <h2 className="relative mt-5 font-display text-[48px] font-normal leading-[.95]">We found our way<br />to each other.</h2>
      <Ornament className="mx-auto mt-6 h-5 w-24 stroke-olive stroke-[0.7]" />
      <p className="mx-auto mt-5 max-w-[290px] text-[13px] leading-7 text-ink/80">Beneath the Tuscan sky, surrounded by the people we love most, we begin our next chapter.</p>
      <p className="mt-5 font-display text-xl italic text-olive">We hope you’ll be there</p>
      <div className="mx-auto mt-9 grid max-w-sm grid-cols-4 border-y border-ink/15 py-4">
        {Object.entries(timeLeft).map(([unit, value]) => (
          <div className="border-r border-ink/10 last:border-0" key={unit}>
            <p className="font-display text-2xl">{String(value).padStart(2, "0")}</p>
            <p className="mt-1 text-[9px] uppercase tracking-[0.12em] text-ink/75">{unit}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function StorySection() {
  return (
    <section className="story-photo reveal-on-scroll relative flex min-h-[450px] flex-col justify-end overflow-hidden bg-cover bg-center px-7 pb-10 pt-20 text-paper">
      <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-[#211a17]/90 via-[#211a17]/25 to-transparent" />
      <div className="relative">
        <p className="text-[8px] uppercase tracking-invitation">A note from us</p>
        <h2 className="mt-4 font-display text-[42px] leading-[.98]">The best things<br />are better shared.</h2>
        <p className="mt-4 max-w-[285px] text-xs leading-6 text-paper/85">From a chance meeting over coffee to a thousand little adventures, every chapter brought us here. We couldn’t imagine this one without you.</p>
        <p className="mt-4 font-display text-xl italic">With love, Mira & Luca</p>
      </div>
    </section>
  );
}

function EventCard({ event }) {
  return (
    <article className="event-card reveal-on-scroll group relative overflow-hidden border border-[#d9d1c2] bg-white p-4 shadow-[0_3px_12px_rgba(52,43,38,.04)] transition duration-300 hover:-translate-y-0.5 hover:border-olive/50 hover:shadow-lg">
      <div className="flex gap-3">
        <div aria-hidden="true" className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-olive/10 font-display text-xl text-olive">{event.icon}</div>
        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-2">
            <div>
              <p className="text-[9px] font-medium uppercase tracking-[0.13em] text-clay">{event.day}</p>
              <h3 className="mt-1 font-display text-[23px] leading-none">{event.title}</h3>
            </div>
            <span className="whitespace-nowrap pt-0.5 text-[11px] font-medium text-olive">{event.time}</span>
          </div>
          <p className="mt-2 text-[11px] font-medium text-ink/80">{event.place}</p>
          <p className="mt-1.5 text-[12px] leading-[1.7] text-ink/80">{event.description}</p>
        </div>
      </div>
      <span aria-hidden="true" className="absolute bottom-0 left-0 h-px w-0 bg-olive transition-all duration-500 group-hover:w-full" />
    </article>
  );
}

export function EventSchedule({ onCalendarDownload }) {
  return (
    <section className="reveal-on-scroll px-5 py-14" id="events">
      <div className="text-center">
        <p className="text-[9px] font-medium uppercase tracking-invitation text-olive">Three days, one big love</p>
        <h2 className="mt-3 font-display text-[44px] leading-none">The celebrations</h2>
        <p className="mt-3 text-[13px] leading-6 text-ink/80">Come for one, stay for all. We can’t wait to celebrate every moment with you.</p>
      </div>
      <div className="mt-8 space-y-3">
        {events.map((event) => <EventCard event={event} key={event.title} />)}
      </div>
      <button className="mx-auto mt-6 flex items-center gap-2 border-b border-olive pb-1.5 text-[8px] uppercase tracking-[0.17em] text-olive transition hover:text-ink" onClick={onCalendarDownload} type="button">
        Add all events to calendar <span aria-hidden="true">↓</span>
      </button>
    </section>
  );
}

export function VenueSection() {
  return (
    <section className="venue-photo reveal-on-scroll relative flex min-h-[420px] flex-col items-center justify-center overflow-hidden bg-cover bg-center px-6 py-16 text-center text-paper" id="venue">
      <div aria-hidden="true" className="absolute inset-0 bg-[#211b17]/65" />
      <div className="relative">
        <Flower className="mx-auto h-12 w-12 text-paper/80" />
        <p className="mt-5 text-[9px] font-medium uppercase tracking-invitation">Our place in the sun</p>
        <h2 className="mt-4 font-display text-[42px] leading-[.95]">Villa San Michele</h2>
        <p className="mt-3 font-display text-xl italic">Chianti · Tuscany, Italy</p>
        <p className="mx-auto mt-4 max-w-[280px] text-[13px] leading-6 text-white">A country house between olive groves and vineyards, just outside the village of Greve.</p>
        <a className="mt-6 inline-flex border border-paper/75 px-5 py-3 text-[8px] uppercase tracking-[0.17em] transition hover:bg-paper hover:text-ink" href="https://maps.google.com/?q=Greve+in+Chianti+Tuscany" rel="noreferrer" target="_blank">Get directions ↗</a>
      </div>
    </section>
  );
}

export function GuestNotes() {
  const notes = [
    ["What to wear", "Garden party, with a little room to dance. The ceremony is outdoors on the lawn; bring a light wrap for the evening."],
    ["Getting here", "Florence (FLR) is about an hour away; Pisa (PSA) is around 90 minutes. Please arrange a car or taxi ahead of time."],
    ["Where to stay", "Greve and the surrounding hill towns have lovely guesthouses. We recommend booking early."],
    ["Little guests", "Children are welcome at every celebration. Please include them in your RSVP so we can save them a seat."],
  ];

  return (
    <section className="reveal-on-scroll bg-[#f4eee3] px-6 py-12">
      <p className="text-center text-[9px] font-medium uppercase tracking-invitation text-olive">A few little notes</p>
      <h2 className="mt-3 text-center font-display text-[38px]">For your weekend</h2>
      <div className="mt-7 space-y-5">
        {notes.map(([title, text]) => (
          <article className="border-t border-ink/15 pt-4" key={title}>
            <h3 className="font-display text-[22px]">{title}</h3>
            <p className="mt-1.5 text-[12px] leading-[1.75] text-ink/80">{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export function RSVPSection({ onRsvp }) {
  return (
    <section className="reveal-on-scroll px-6 py-16 text-center" id="rsvp">
      <Ornament className="mx-auto h-5 w-24 stroke-olive stroke-[0.7]" />
      <p className="mt-5 text-[9px] font-medium uppercase tracking-invitation text-olive">Kindly reply by September 1</p>
      <h2 className="mt-3 font-display text-[47px] leading-[.95]">Save your<br />place at our table</h2>
      <p className="mx-auto mt-4 max-w-[280px] text-[13px] leading-6 text-ink/80">Tell us which celebrations you’ll join. We’ll be saving a seat just for you.</p>
      <button className="mt-7 bg-olive px-8 py-3.5 text-[8px] uppercase tracking-invitation text-white transition hover:bg-ink" onClick={onRsvp} type="button">RSVP with love</button>
      <p className="mt-7 font-display text-2xl italic text-olive">Mira & Luca</p>
      <p className="mt-1 text-[8px] uppercase tracking-[0.2em] text-ink/45">October 15 — 17, 2027</p>
    </section>
  );
}

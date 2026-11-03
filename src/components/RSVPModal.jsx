import React, { useState } from "react";
import { events } from "../data/wedding.js";

export default function RSVPModal({ onClose }) {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-[#211b17]/80 px-4 py-6 backdrop-blur-md"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <section
        aria-labelledby="rsvp-title"
        aria-modal="true"
        className="relative max-h-full w-full max-w-md overflow-y-auto border border-[#d8cbb5] bg-paper px-6 py-10 shadow-2xl sm:px-10"
        role="dialog"
      >
        <button
          aria-label="Close RSVP form"
          className="absolute right-4 top-4 p-2 text-2xl text-ink/60"
          onClick={onClose}
          type="button"
        >
          ×
        </button>
        {submitted ? (
          <div className="py-12 text-center">
            <p className="mb-4 text-[9px] uppercase tracking-invitation text-olive">Your reply is on its way</p>
            <h2 className="font-display text-5xl">Thank you</h2>
            <p className="mx-auto mt-5 max-w-xs text-sm leading-7 text-ink/70">
              This invitation preview doesn’t send RSVP details anywhere yet.
            </p>
            <button
              className="mt-8 border-b border-olive pb-1 text-[9px] uppercase tracking-[0.18em]"
              onClick={onClose}
              type="button"
            >
              Back to the invitation
            </button>
          </div>
        ) : (
          <>
            <p className="mb-3 text-center text-[10px] font-medium uppercase tracking-invitation text-olive">Kindly reply by September 1</p>
            <h2 className="text-center font-display text-5xl" id="rsvp-title">Will you join us?</h2>
            <p className="mb-7 mt-3 text-center text-sm text-ink/80">We’d love to celebrate this day with you.</p>
            <form className="space-y-5" onSubmit={handleSubmit}>
              <label className="block text-[11px] font-medium uppercase tracking-[0.1em] text-ink/90">
                Your name
                <input autoComplete="name" className="form-field mt-2" name="name" placeholder="First and last name" required />
              </label>
              <label className="block text-[11px] font-medium uppercase tracking-[0.1em] text-ink/90">
                Email address
                <input autoComplete="email" className="form-field mt-2" name="email" placeholder="you@example.com" required type="email" />
              </label>
              <fieldset>
                <legend className="mb-3 text-[11px] font-medium uppercase tracking-[0.1em] text-ink/90">Your reply</legend>
                <div className="grid grid-cols-2 gap-3">
                  <label className="cursor-pointer">
                    <input className="peer sr-only" name="attendance" required type="radio" value="accept" />
                    <span className="block border border-ink/20 px-3 py-3 text-center text-[13px] transition peer-checked:border-olive peer-checked:bg-olive/10">Joyfully accept</span>
                  </label>
                  <label className="cursor-pointer">
                    <input className="peer sr-only" name="attendance" required type="radio" value="decline" />
                    <span className="block border border-ink/20 px-3 py-3 text-center text-[13px] transition peer-checked:border-olive peer-checked:bg-olive/10">Regretfully decline</span>
                  </label>
                </div>
              </fieldset>
              <fieldset>
                <legend className="mb-3 text-[11px] font-medium uppercase tracking-[0.1em] text-ink/90">Which celebrations will you join?</legend>
                <div className="space-y-3">
                  {events.map((event) => (
                    <label className="flex cursor-pointer items-center gap-2.5 text-[13px] text-ink/90" key={event.title}>
                      <input className="accent-[#536348]" name="events" type="checkbox" value={event.title} />
                      <span>
                        {event.title} <span className="text-[11px] text-ink/65">· {event.day.split(" · ")[0]}</span>
                      </span>
                    </label>
                  ))}
                </div>
              </fieldset>
              <label className="block text-[11px] font-medium uppercase tracking-[0.1em] text-ink/90">
                Number of guests in your party
                <select className="form-field mt-2" defaultValue="1" name="guest-count">
                  {[1, 2, 3, 4, 5, 6].map((number) => (
                    <option key={number} value={number}>{number} {number === 1 ? "guest" : "guests"}</option>
                  ))}
                </select>
              </label>
              <label className="block text-[11px] font-medium uppercase tracking-[0.1em] text-ink/90">
                Dietary notes or a message <span className="normal-case tracking-normal">(optional)</span>
                <textarea className="form-field mt-2 resize-y" name="note" placeholder="A little note for us…" rows="3" />
              </label>
              <button className="w-full bg-olive px-6 py-4 text-[9px] uppercase tracking-invitation text-white transition hover:bg-ink" type="submit">
                Send your reply
              </button>
            </form>
          </>
        )}
      </section>
    </div>
  );
}

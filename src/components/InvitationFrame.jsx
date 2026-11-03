import React from "react";

export default function InvitationFrame({ children, scrollRef }) {
  return (
    <main className="invitation-stage relative flex min-h-[100svh] items-center justify-center overflow-hidden px-0 py-0 sm:px-8 sm:py-7">
      <div aria-hidden="true" className="stage-grain pointer-events-none absolute inset-0" />
      <div aria-hidden="true" className="stage-glow pointer-events-none absolute inset-0" />
      <div
        aria-label="Mobile wedding invitation"
        className="phone-shell relative z-10 h-[100svh] w-full overflow-hidden sm:h-[min(900px,calc(100svh-56px))] sm:max-h-[900px] sm:w-[min(430px,calc(100vw-64px))] sm:rounded-[42px] sm:border-[7px] sm:border-[#1b211b] sm:shadow-[0_35px_120px_rgba(0,0,0,.5)]"
      >
        <div aria-hidden="true" className="phone-camera pointer-events-none absolute left-1/2 top-[10px] z-40 hidden h-[25px] w-[92px] -translate-x-1/2 rounded-full bg-[#1b211b] sm:block" />
        <div aria-hidden="true" className="phone-status pointer-events-none absolute left-0 right-0 top-0 z-30 hidden h-10 items-center justify-between px-8 text-[9px] font-medium text-ink/70 sm:flex">
          <span>9:41</span>
          <span className="flex items-center gap-1"><span>●●●</span><span>◖</span><span className="rounded-[2px] border border-current px-[3px]">••</span></span>
        </div>
        <div className="phone-content h-full overflow-hidden bg-paper sm:rounded-[34px]">
          <div className="invitation-scroll h-full overflow-y-auto overscroll-contain" id="invitation-scroll" ref={scrollRef}>
            {children}
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="stage-caption pointer-events-none absolute bottom-8 hidden text-center text-paper/45 sm:block">
        <p className="text-[8px] uppercase tracking-[0.35em]">A little world, made for two</p>
      </div>
    </main>
  );
}

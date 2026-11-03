import React, { useRef, useState } from "react";
import InvitationCover from "./components/InvitationCover.jsx";
import InvitationFrame from "./components/InvitationFrame.jsx";
import InvitationHeader from "./components/InvitationHeader.jsx";
import RSVPModal from "./components/RSVPModal.jsx";
import {
  EventSchedule,
  GuestNotes,
  RSVPSection,
  StorySection,
  VenueSection,
  WelcomeSection,
} from "./components/InvitationSections.jsx";
import { weddingDate } from "./data/wedding.js";
import useCountdown from "./hooks/useCountdown.js";
import useScrollReveal from "./hooks/useScrollReveal.js";
import { downloadWeddingCalendar } from "./utils/calendar.js";

function App() {
  const [opened, setOpened] = useState(false);
  const [opening, setOpening] = useState(false);
  const [rsvpOpen, setRsvpOpen] = useState(false);
  const scrollRef = useRef(null);
  const timeLeft = useCountdown(weddingDate);

  useScrollReveal(scrollRef);

  function openInvitation() {
    if (opened || opening) return;
    setOpening(true);
    window.setTimeout(() => {
      setOpened(true);
      setOpening(false);
      document.getElementById("welcome")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 1150);
  }

  function openRsvp() {
    setRsvpOpen(true);
  }

  return (
    <InvitationFrame scrollRef={scrollRef}>
      <InvitationCover opening={opening} opened={opened} onOpen={openInvitation} />
      <InvitationHeader onRsvp={openRsvp} />
      <WelcomeSection timeLeft={timeLeft} />
      <StorySection />
      <EventSchedule onCalendarDownload={downloadWeddingCalendar} />
      <VenueSection />
      <GuestNotes />
      <RSVPSection onRsvp={openRsvp} />
      <footer className="border-t border-ink/10 px-5 py-5 text-center text-[7px] uppercase tracking-[0.18em] text-ink/45">
        Made with love · Tuscany, Italy
      </footer>
      {rsvpOpen && <RSVPModal onClose={() => setRsvpOpen(false)} />}
    </InvitationFrame>
  );
}

export default App;

import { events } from "../data/wedding.js";

function escapeCalendarText(value) {
  return value
    .replace(/\\/g, "\\\\")
    .replace(/\n/g, "\\n")
    .replace(/,/g, "\\,")
    .replace(/;/g, "\\;");
}

export function downloadWeddingCalendar() {
  const calendarEvents = events.map((event, index) => [
    "BEGIN:VEVENT",
    `UID:mira-luca-${index + 1}-20271016@example.com`,
    "DTSTAMP:20261001T120000Z",
    `DTSTART;TZID=Europe/Rome:${event.start}`,
    `DTEND;TZID=Europe/Rome:${event.end}`,
    `SUMMARY:${escapeCalendarText(`${event.title} · Mira & Luca`)}`,
    `LOCATION:${escapeCalendarText(`${event.place}, Tuscany, Italy`)}`,
    `DESCRIPTION:${escapeCalendarText(event.description)}`,
    "END:VEVENT",
  ].join("\r\n"));
  const calendar = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Mira and Luca//Wedding//EN",
    "CALSCALE:GREGORIAN",
    ...calendarEvents,
    "END:VCALENDAR",
  ].join("\r\n");
  const file = new Blob([calendar], { type: "text/calendar;charset=utf-8" });
  const url = URL.createObjectURL(file);
  const link = document.createElement("a");
  link.href = url;
  link.download = "mira-and-luca-wedding-weekend.ics";
  link.click();
  window.setTimeout(() => URL.revokeObjectURL(url), 0);
}

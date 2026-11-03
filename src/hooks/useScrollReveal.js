import { useEffect } from "react";

export default function useScrollReveal(scrollRef) {
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return undefined;

    const elements = scrollContainer.querySelectorAll(".reveal-on-scroll");
    if (!("IntersectionObserver" in window)) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { root: scrollContainer, rootMargin: "0px 0px -8% 0px", threshold: 0.12 },
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [scrollRef]);
}

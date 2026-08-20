import { useEffect } from "react";

/**
 * Adds the `.in` class to any `.reveal` element inside `ref` once it scrolls into view.
 * Respects prefers-reduced-motion by revealing everything immediately.
 */
export function useReveal(ref, deps = []) {
  useEffect(() => {
    const root = ref?.current || document;
    const nodes = root.querySelectorAll(".reveal");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduced || !("IntersectionObserver" in window)) {
      nodes.forEach((n) => n.classList.add("in"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    nodes.forEach((n) => io.observe(n));
    return () => io.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}

/**
 * Scroll-reveal animations for elements marked with the `.reveal` class.
 *
 * Adds `.js-animations-ready` to <html> so the CSS only hides `.reveal`
 * elements once JS has actually taken over (see styles.css) — content
 * is never stuck invisible if this fails to run for any reason.
 *
 * Call from a page-level useEffect and return the cleanup function.
 */
export function initRevealAnimations(): () => void {
  if (typeof window === "undefined") return () => {};

  const root = document.documentElement;
  const els = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));

  if (els.length === 0) return () => {};

  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReduced || !("IntersectionObserver" in window)) {
    // No JS-driven hide/reveal in this case; CSS only hides elements
    // once js-animations-ready is present, so just leave it off.
    return () => {};
  }

  root.classList.add("js-animations-ready");

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      }
    },
    { threshold: 0.15, rootMargin: "0px 0px -10% 0px" }
  );

  els.forEach((el) => observer.observe(el));

  return () => {
    observer.disconnect();
    root.classList.remove("js-animations-ready");
  };
}

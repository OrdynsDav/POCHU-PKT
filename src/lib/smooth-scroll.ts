export function smoothScrollTo(href: string): void {
  if (typeof document === "undefined") return;

  window.dispatchEvent(new Event("force-mount-sections"));

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    });
  });
}

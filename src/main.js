import { createApp, nextTick } from "vue";
import App from "./App.vue";
import router from "./router";
import "./style.css";
import "./home.css";

const app = createApp(App).use(router);
app.mount("#app");

/* ---------- Scroll reveal engine (robust) ---------- */
function initScrollReveal() {
  const prefersReduced =
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const targets = () => Array.from(document.querySelectorAll("[data-animate]"));

  // If reduced motion: show everything immediately.
  if (prefersReduced) {
    targets().forEach((el) => el.classList.add("in-view"));
    return;
  }

  // Detach any previous observer
  if (window.__io) {
    try { window.__io.disconnect(); } catch {}
  }

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          io.unobserve(entry.target); // animate once
        }
      });
    },
    // simpler, reliable thresholds
    { root: null, rootMargin: "0px", threshold: 0.1 }
  );
  window.__io = io;

  // Observe current elements
  targets().forEach((el) => io.observe(el));

  // Fail-safe: anything in first viewport that hasn't been marked after ~300ms
  // becomes visible (prevents "everything invisible" edge cases).
  setTimeout(() => {
    const vh = window.innerHeight || 800;
    targets()
      .filter((el) => !el.classList.contains("in-view"))
      .forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.top < vh * 0.9) el.classList.add("in-view");
      });
  }, 300);
}

// Run after Vue finishes first paint
router.isReady().then(() => {
  nextTick(() => initScrollReveal());
});

// Re-run on hash navigation or route changes (single-page anchors)
window.addEventListener("hashchange", () => {
  requestAnimationFrame(() => initScrollReveal());
});
router.afterEach(() => {
  nextTick(() => initScrollReveal());
});

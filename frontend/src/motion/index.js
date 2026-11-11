/**
 * Motion helpers shared by the v-reveal directive and <CountUp>.
 * Everything degrades to "no animation" when the user prefers reduced motion
 * or IntersectionObserver is unavailable.
 */
export function prefersReducedMotion() {
  return typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
}

export function canAnimate() {
  return typeof IntersectionObserver !== 'undefined' && !prefersReducedMotion()
}

/** Calls `onEnter` once, the first time `el` scrolls into view. Returns a cleanup fn. */
export function onceVisible(el, onEnter, options = {}) {
  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          io.disconnect()
          onEnter()
        }
      }
    },
    { threshold: 0.15, rootMargin: '0px 0px -8% 0px', ...options },
  )
  io.observe(el)
  return () => io.disconnect()
}

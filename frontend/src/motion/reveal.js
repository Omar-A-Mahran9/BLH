import { canAnimate, onceVisible } from './index'

/**
 * v-reveal — scroll-triggered entrance animation.
 *
 *   v-reveal            fade + rise (default)
 *   v-reveal.fade       fade only
 *   v-reveal.scale      fade + grow from 94%
 *   v-reveal.image      curtain reveal (clip-path) + settle from 108% zoom
 *   v-reveal.line       draw horizontally from the reading-start edge
 *   v-reveal="120"      delay in ms (use i * 100 for staggered lists)
 */
const cleanups = new WeakMap()

export default {
  mounted(el, binding) {
    const variant = Object.keys(binding.modifiers)[0] || 'up'
    el.classList.add('reveal', `reveal--${variant}`)
    if (binding.value) el.style.setProperty('--reveal-delay', `${binding.value}ms`)

    if (!canAnimate()) {
      el.classList.add('is-visible')
      return
    }
    // A fully clipped element (clip-path: inset(100% …)) never reports as intersecting,
    // so curtain-revealed images watch their parent instead.
    const target = variant === 'image' && el.parentElement ? el.parentElement : el
    cleanups.set(
      el,
      onceVisible(target, () => el.classList.add('is-visible')),
    )
  },
  unmounted(el) {
    cleanups.get(el)?.()
    cleanups.delete(el)
  },
}

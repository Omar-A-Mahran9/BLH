<script setup>
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { canAnimate, onceVisible } from '@/motion'

/** Counts the leading number of `value` up from 0 when scrolled into view ("4.5", "50%+", "90"). */
const props = defineProps({
  value: { type: String, required: true },
  duration: { type: Number, default: 1600 },
  delay: { type: Number, default: 0 },
})

const el = ref(null)
const parsed = computed(() => {
  const m = /^(\d+(?:\.\d+)?)(.*)$/.exec(props.value)
  if (!m) return null
  return { target: Number(m[1]), decimals: (m[1].split('.')[1] || '').length, suffix: m[2] }
})

const display = ref(props.value)
let frame = 0
let timer = 0
let stopObserving = null

const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3)

function run() {
  const p = parsed.value
  if (!p) return
  const start = performance.now()
  const tick = (now) => {
    const t = Math.min(1, (now - start) / props.duration)
    display.value = (p.target * easeOutCubic(t)).toFixed(p.decimals) + p.suffix
    if (t < 1) frame = requestAnimationFrame(tick)
  }
  frame = requestAnimationFrame(tick)
}

onMounted(() => {
  if (!parsed.value || !canAnimate()) return
  display.value = (0).toFixed(parsed.value.decimals) + parsed.value.suffix
  stopObserving = onceVisible(el.value, () => {
    timer = setTimeout(run, props.delay)
  })
})

// Language switch: just show the final value, no replay.
watch(
  () => props.value,
  (v) => {
    cancelAnimationFrame(frame)
    display.value = v
  },
)

onBeforeUnmount(() => {
  stopObserving?.()
  clearTimeout(timer)
  cancelAnimationFrame(frame)
})
</script>

<template>
  <span ref="el" class="count-up">{{ display }}</span>
</template>

<style scoped>
.count-up {
  font-variant-numeric: tabular-nums;
}
</style>

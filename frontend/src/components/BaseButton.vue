<script setup>
import ArrowIcon from './ArrowIcon.vue'

defineProps({
  variant: {
    type: String,
    default: 'primary',
    validator: (v) => ['primary', 'outline', 'flat', 'flat-white'].includes(v),
  },
  size: {
    type: String,
    default: 'md',
    validator: (v) => ['md', 'sm'].includes(v),
  },
  href: { type: String, default: '#' },
  arrow: { type: Boolean, default: false },
  arrowColor: { type: String, default: 'white' },
})
</script>

<template>
  <a :href="href" class="btn" :class="[`btn--${variant}`, `btn--${size}`]">
    <span class="btn__label"><slot /></span>
    <ArrowIcon v-if="arrow" :color="arrowColor" class="btn__arrow" />
  </a>
</template>

<style scoped>
/* Figma component "Button English" — Size 1 = 40px, Size 2 = 32px */
.btn {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  flex-shrink: 0;
  padding: 7px 16px;
  border-radius: 8px;
  font-family: var(--font-en);
  font-weight: 600;
  font-size: 16px;
  line-height: 26px;
  white-space: nowrap;
  transition:
    background-color 0.2s ease,
    color 0.2s ease,
    box-shadow 0.2s ease;
}
[dir='rtl'] .btn {
  padding-block: 5px;
  font-family: var(--font-ar);
  font-weight: 700;
  font-size: 17px;
  line-height: 30px;
}

.btn--sm {
  padding-block: 3px;
}
[dir='rtl'] .btn--sm {
  padding-block: 1px;
  font-weight: 400;
}

.btn--primary {
  background: var(--blh-green);
  color: var(--blh-white);
}
.btn--primary:hover {
  background: var(--blh-green-deep);
}

/* Figma uses an inside stroke, so the 1px border is taken out of the padding */
.btn--outline {
  background: var(--blh-white);
  color: var(--blh-green);
  border: 1px solid var(--blh-green);
  padding-block: 6px;
}
[dir='rtl'] .btn--outline {
  padding-block: 4px;
}
.btn--outline:hover {
  background: var(--blh-mist);
}

.btn--flat {
  color: var(--blh-green);
}
.btn--flat:hover {
  background: var(--blh-mist);
}

.btn--flat-white {
  color: var(--blh-white);
}
.btn--flat-white:hover {
  background: rgba(255, 255, 255, 0.08);
}

.btn:hover :deep(.arrow__glyph) {
  translate: 2px 0;
}
[dir='rtl'] .btn:hover :deep(.arrow__glyph) {
  translate: -2px 0;
}
</style>

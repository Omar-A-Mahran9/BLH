<script setup>
import { useI18n } from '@/i18n'
import dotGreen from '@/assets/icons/dot-green.svg'
import dotCopper from '@/assets/icons/dot-copper.svg'

const { t } = useI18n()
</script>

<template>
  <section id="events" class="how bg-white">
    <div class="container how__inner">
      <p class="t-eyebrow c-green">{{ t.how.eyebrow }}</p>
      <h2 class="t-h-section c-green">{{ t.how.title }}</h2>

      <ol class="how__steps">
        <li v-for="step in t.how.steps" :key="step.title" class="step">
          <span class="step__marker">
            <img :src="step.accent ? dotCopper : dotGreen" alt="" aria-hidden="true" />
            <span class="step__line" />
          </span>
          <p class="step__when" :class="step.accent ? 'c-copper' : 'c-green'">{{ step.when }}</p>
          <h3 class="t-h3 c-green">{{ step.title }}</h3>
          <p class="t-body c-charcoal">{{ step.text }}</p>
        </li>
      </ol>
    </div>
  </section>
</template>

<style scoped>
.how__inner {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 48px;
  padding-block: 48px;
}
.how__steps {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(6, minmax(0, 1fr));
  gap: 16px;
}
.step {
  display: flex;
  flex-direction: column;
  gap: 10px;
  min-height: 164px;
}
.step__marker {
  display: flex;
  align-items: center;
  gap: 8px;
}
.step__marker img {
  flex-shrink: 0;
}
.step__line {
  flex: 1 0 0;
  height: 2px;
  background: var(--blh-mist);
}
.step__when {
  font-weight: 700;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 1.44px;
  text-transform: uppercase;
  white-space: nowrap;
}
[dir='rtl'] .step__when {
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 0;
}

@media (max-width: 1024px) {
  .how__steps {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    row-gap: 32px;
  }
  .step {
    min-height: 0;
  }
}

@media (max-width: 640px) {
  .how__steps {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
</style>

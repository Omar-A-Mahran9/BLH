<script setup>
import { useI18n } from '@/i18n'
import BaseButton from './BaseButton.vue'
import CountUp from './CountUp.vue'
import heroPhoto from '@/assets/images/hero-workshop.png'
import dot from '@/assets/icons/dot-pill.svg'

const { t } = useI18n()
</script>

<template>
  <section id="top" class="hero bg-off-white">
    <!-- Brand pattern: the BLH house mark, tiled and slowly drifting -->
    <div class="hero__pattern" aria-hidden="true">
      <div class="hero__pattern-layer" />
    </div>

    <div class="container hero__inner">
      <div class="hero__text">
        <p v-reveal="0" class="hero__pill">
          <span class="hero__pulse" aria-hidden="true">
            <img :src="dot" alt="" />
          </span>
          <span>{{ t.hero.pill }}</span>
        </p>
        <h1 :key="t.hero.title" class="hero__title" :aria-label="t.hero.title">
          <template v-for="(word, i) in t.hero.title.split(' ')" :key="i">
            <span class="hero__word" aria-hidden="true"
              ><span class="hero__word-inner" :style="{ animationDelay: `${120 + i * 90}ms` }">{{
                word
              }}</span></span
            >{{ ' ' }}
          </template>
        </h1>
        <p v-reveal="450" class="hero__lead">{{ t.hero.lead }}</p>
        <div v-reveal="580" class="hero__actions">
          <BaseButton href="#practices" variant="primary" arrow>{{ t.hero.primary }}</BaseButton>
          <BaseButton href="#contact" variant="outline" class="hero__secondary">
            {{ t.hero.secondary }}
          </BaseButton>
        </div>
      </div>

      <div class="hero__media">
        <img
          v-reveal.image="150"
          class="hero__photo"
          :src="heroPhoto"
          :alt="t.alt.hero"
          width="620"
          height="600"
        />
        <div v-reveal.scale="900" class="hero__stat">
          <p class="hero__stat-value font-inter" dir="ltr">
            <CountUp :value="t.hero.stat.value" :delay="900" />
          </p>
          <div class="hero__stat-label">
            <p class="t-body-strong c-charcoal">{{ t.hero.stat.label }}</p>
            <p class="t-caption c-gray">{{ t.hero.stat.sub }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  overflow: hidden;
  isolation: isolate;
}

/* ---- Animated brand pattern ------------------------------------------- */
.hero__pattern {
  --tile: 120px;
  position: absolute;
  inset: 0;
  z-index: -1;
  pointer-events: none;
  /* Fade out toward the headline so the pattern never sits under text */
  -webkit-mask-image: linear-gradient(to right, transparent 34%, rgba(0, 0, 0, 0.4) 48%, #000 66%);
  mask-image: linear-gradient(to right, transparent 34%, rgba(0, 0, 0, 0.4) 48%, #000 66%);
  opacity: 0;
  animation: pattern-in 1.6s var(--ease-out) 0.4s forwards;
}
[dir='rtl'] .hero__pattern {
  -webkit-mask-image: linear-gradient(to left, transparent 34%, rgba(0, 0, 0, 0.4) 48%, #000 66%);
  mask-image: linear-gradient(to left, transparent 34%, rgba(0, 0, 0, 0.4) 48%, #000 66%);
}

/* Oversized by one tile on every side, then moved exactly one tile per loop → seamless */
.hero__pattern-layer {
  --drift-x: 1;
  position: absolute;
  inset: calc(var(--tile) * -1);
  background-color: var(--blh-green);
  opacity: 0.075;
  -webkit-mask-image: url('@/assets/images/pattern-mark-tile.png');
  mask-image: url('@/assets/images/pattern-mark-tile.png');
  -webkit-mask-size: var(--tile) var(--tile);
  mask-size: var(--tile) var(--tile);
  -webkit-mask-repeat: repeat;
  mask-repeat: repeat;
  will-change: transform;
  animation: pattern-drift 40s linear infinite;
}
[dir='rtl'] .hero__pattern-layer {
  --drift-x: -1;
}

@keyframes pattern-drift {
  from {
    transform: translate3d(0, 0, 0);
  }
  to {
    transform: translate3d(calc(var(--tile) * var(--drift-x)), calc(var(--tile) * -1), 0);
  }
}
@keyframes pattern-in {
  to {
    opacity: 1;
  }
}

@media (max-width: 1024px) {
  /* Stacked layout: keep the pattern behind the photo half only */
  .hero__pattern,
  [dir='rtl'] .hero__pattern {
    -webkit-mask-image: linear-gradient(to bottom, transparent 30%, #000 70%);
    mask-image: linear-gradient(to bottom, transparent 30%, #000 70%);
  }
}

.hero__inner {
  display: flex;
  align-items: center;
  gap: 72px;
  padding-block: 48px;
}
.hero__text {
  flex: 1 0 0;
  min-width: 1px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 28px;
}

.hero__pill {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 14px;
  border-radius: 999px;
  background: var(--blh-mist);
  color: var(--blh-green-deep);
  font-weight: 500;
  font-size: 13px;
  line-height: 20px;
  white-space: nowrap;
}
[dir='rtl'] .hero__pill {
  font-size: 14px;
  line-height: 24px;
}

.hero__title {
  color: var(--blh-green-deep);
  font-weight: 800;
  font-size: 76px;
  line-height: 80px;
  letter-spacing: -2.66px;
}
[dir='rtl'] .hero__title {
  font-weight: 700;
  line-height: 124px;
  letter-spacing: 0;
}

/* Headline: each word rises out of its own mask, staggered */
.hero__word {
  display: inline-block;
  overflow: hidden;
  vertical-align: top;
  /* room for descenders / Arabic marks inside the mask */
  padding-bottom: 0.08em;
  margin-bottom: -0.08em;
}
.hero__word-inner {
  display: inline-block;
  animation: hero-word 1s var(--ease-out) both;
}
@keyframes hero-word {
  from {
    transform: translate3d(0, 105%, 0);
  }
  to {
    transform: translate3d(0, 0, 0);
  }
}

/* Pill dot: soft live "pulse" */
.hero__pulse {
  position: relative;
  display: inline-flex;
  flex-shrink: 0;
}
.hero__pulse::after {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 50%;
  background: var(--blh-copper);
  animation: pulse 2.4s var(--ease-out) infinite;
}
@keyframes pulse {
  0% {
    transform: scale(1);
    opacity: 0.55;
  }
  70%,
  100% {
    transform: scale(3);
    opacity: 0;
  }
}

/* Floating stat drifts gently once it has landed */
.hero__stat.is-visible {
  animation: float 6s ease-in-out 2s infinite;
}
@keyframes float {
  0%,
  100% {
    translate: 0 0;
  }
  50% {
    translate: 0 -8px;
  }
}

.hero__lead {
  color: var(--blh-charcoal);
  font-weight: 500;
  font-size: 20px;
  line-height: 26px;
  letter-spacing: -0.2px;
}
[dir='rtl'] .hero__lead {
  font-weight: 400;
  line-height: 30px;
  letter-spacing: 0;
}

.hero__actions {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  gap: 28px;
}
.hero__secondary {
  color: var(--blh-green-deep);
}
[dir='rtl'] .hero__secondary {
  color: var(--blh-green);
}

.hero__media {
  position: relative;
  flex-shrink: 0;
  width: 620px;
  height: 640px;
}
.hero__photo {
  width: 100%;
  height: 600px;
  border-radius: 20px;
  object-fit: cover;
}
.hero__stat {
  position: absolute;
  top: 470px;
  inset-inline-start: -56px;
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 20px 24px;
  border-radius: 16px;
  background: var(--blh-white);
  box-shadow: var(--blh-shadow-card);
}
[dir='rtl'] .hero__stat {
  inset-inline-start: auto;
  inset-inline-end: -14px;
}
.hero__stat-value {
  width: 125px;
  color: var(--blh-green-deep);
  font-weight: 800;
  font-size: 44px;
  line-height: 44px;
  letter-spacing: -1.32px;
}
.hero__stat-label {
  display: flex;
  flex-direction: column;
  gap: 2px;
  white-space: nowrap;
}
[dir='rtl'] .hero__stat-label {
  gap: 0;
}

@media (max-width: 1280px) {
  .hero__inner {
    gap: 56px;
  }
  .hero__media {
    width: 520px;
    height: 560px;
  }
  .hero__photo {
    height: 520px;
  }
  .hero__stat {
    top: 400px;
  }
  .hero__title {
    font-size: 64px;
    line-height: 68px;
  }
  [dir='rtl'] .hero__title {
    line-height: 104px;
  }
}

@media (max-width: 1024px) {
  .hero__inner {
    flex-direction: column;
    align-items: stretch;
    gap: 48px;
  }
  .hero__media {
    width: 100%;
    height: auto;
  }
  .hero__photo {
    height: 480px;
  }
  .hero__stat {
    top: auto;
    bottom: -24px;
    inset-inline-start: 24px;
  }
  [dir='rtl'] .hero__stat {
    inset-inline-start: 24px;
    inset-inline-end: auto;
  }
}

@media (max-width: 640px) {
  .hero__title {
    font-size: 48px;
    line-height: 52px;
    letter-spacing: -1.6px;
  }
  [dir='rtl'] .hero__title {
    font-size: 44px;
    line-height: 72px;
  }
  .hero__lead {
    font-size: 18px;
  }
  .hero__pill {
    white-space: normal;
  }
  .hero__photo {
    height: 340px;
  }
  .hero__stat {
    padding: 16px 20px;
  }
  .hero__stat-value {
    width: auto;
    font-size: 36px;
    line-height: 40px;
  }
}
</style>

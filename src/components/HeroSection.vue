<script setup>
import { useI18n } from '@/i18n'
import BaseButton from './BaseButton.vue'
import heroPhoto from '@/assets/images/hero-workshop.png'
import dot from '@/assets/icons/dot-pill.svg'

const { t } = useI18n()
</script>

<template>
  <section id="top" class="hero bg-off-white">
    <div class="container hero__inner">
      <div class="hero__text">
        <p class="hero__pill">
          <img :src="dot" alt="" aria-hidden="true" />
          <span>{{ t.hero.pill }}</span>
        </p>
        <h1 class="hero__title">{{ t.hero.title }}</h1>
        <p class="hero__lead">{{ t.hero.lead }}</p>
        <div class="hero__actions">
          <BaseButton href="#practices" variant="primary" arrow>{{ t.hero.primary }}</BaseButton>
          <BaseButton href="#contact" variant="outline" class="hero__secondary">
            {{ t.hero.secondary }}
          </BaseButton>
        </div>
      </div>

      <div class="hero__media">
        <img class="hero__photo" :src="heroPhoto" :alt="t.alt.hero" width="620" height="600" />
        <div class="hero__stat">
          <p class="hero__stat-value font-inter" dir="ltr">{{ t.hero.stat.value }}</p>
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

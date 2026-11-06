<script setup>
import { useI18n } from '@/i18n'
import BaseButton from './BaseButton.vue'
import photo from '@/assets/images/cairo-team.png'

const { t } = useI18n()
</script>

<template>
  <section id="contact" class="cta bg-off-white">
    <div class="container cta__inner">
      <div v-reveal.scale class="cta__card">
        <div class="cta__text">
          <p v-reveal="200" class="t-eyebrow c-mist">{{ t.cta.eyebrow }}</p>
          <h2 v-reveal="280" class="t-h-section c-white">{{ t.cta.title }}</h2>

          <ol class="cta__steps">
            <li
              v-for="(step, i) in t.cta.steps"
              :key="step.label"
              v-reveal="400 + i * 120"
              class="cta__step"
            >
              <span class="cta__n">{{ i + 1 }}</span>
              <span class="cta__label t-body-strong c-white">{{ step.label }}</span>
              <span class="cta__when t-caption c-mist">{{ step.when }}</span>
            </li>
          </ol>

          <div v-reveal="780">
            <BaseButton href="tel:+201132842250" variant="outline" arrow arrow-color="green">
              {{ t.cta.button }}
            </BaseButton>
          </div>
          <p v-reveal="860" class="cta__contact t-caption c-mist">{{ t.cta.contact }}</p>
        </div>
        <div class="cta__media">
          <img
            v-reveal.image="250"
            class="cta__photo"
            :src="photo"
            :alt="t.alt.cairoTeam"
            width="520"
            height="544"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.cta__inner {
  padding-block: 48px;
}
.cta__card {
  display: flex;
  align-items: stretch;
  overflow: hidden;
  border-radius: 24px;
  background: var(--blh-green-deep);
}
.cta__text {
  flex: 1 0 0;
  min-width: 1px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  padding: 64px;
}
.cta__text > h2,
.cta__steps {
  width: 100%;
}
.cta__steps {
  display: flex;
  flex-direction: column;
  gap: 24px;
}
.cta__step {
  display: flex;
  align-items: center;
  gap: 16px;
}
.cta__n {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 18px;
  background: var(--blh-copper);
  color: var(--blh-white);
  font-weight: 600;
  font-size: 16px;
  line-height: 26px;
}
[dir='rtl'] .cta__n {
  font-weight: 700;
  font-size: 17px;
  line-height: 30px;
}
.cta__label {
  flex: 1 0 0;
  min-width: 1px;
}
.cta__when {
  flex-shrink: 0;
  white-space: nowrap;
}
.cta__contact {
  white-space: pre;
}
.cta__media {
  flex-shrink: 0;
  width: 520px;
  overflow: hidden;
}
.cta__photo {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

@media (max-width: 1280px) {
  .cta__media {
    width: 400px;
  }
  .cta__text {
    padding: 48px;
  }
}

@media (max-width: 1024px) {
  .cta__card {
    flex-direction: column-reverse;
  }
  .cta__media {
    width: 100%;
    height: 320px;
  }
}

@media (max-width: 640px) {
  .cta__text {
    padding: 32px 20px;
  }
  .cta__step {
    flex-wrap: wrap;
    gap: 4px 16px;
  }
  .cta__when {
    flex-basis: 100%;
    padding-inline-start: 52px;
  }
  .cta__contact {
    white-space: normal;
  }
}
</style>

<script setup>
import { ref } from 'vue'
import { useI18n } from '@/i18n'
import BaseButton from './BaseButton.vue'
import ArrowIcon from './ArrowIcon.vue'

const { t } = useI18n()
// Figma "Practice ·" has a dark and a light variant; the highlighted card follows hover/focus.
const active = ref(0)
</script>

<template>
  <section id="practices" class="practices bg-off-white">
    <div class="container practices__inner">
      <div class="practices__header">
        <div class="practices__heading">
          <p class="t-eyebrow t-eyebrow--medium c-green">{{ t.practices.eyebrow }}</p>
          <h2 class="t-h-section c-green">{{ t.practices.title }}</h2>
        </div>
        <BaseButton href="#flagship" variant="outline" arrow arrow-color="green">
          {{ t.practices.all }}
        </BaseButton>
      </div>

      <div class="practices__grid" @mouseleave="active = 0">
        <a
          v-for="(item, i) in t.practices.items"
          :key="item.n"
          href="#flagship"
          class="practice"
          :class="active === i ? 'practice--dark' : 'practice--light'"
          @mouseenter="active = i"
          @focus="active = i"
        >
          <p class="practice__n font-inter">{{ item.n }}</p>
          <div class="practice__body">
            <h3 class="practice__title">{{ item.title }}</h3>
            <p class="practice__text">{{ item.text }}</p>
            <span class="practice__link">
              <span>{{ t.practices.explore }}</span>
              <ArrowIcon :color="active === i ? 'white' : 'green'" />
            </span>
          </div>
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.practices__inner {
  display: flex;
  flex-direction: column;
  gap: 56px;
  padding-block: 48px;
}
.practices__header {
  display: flex;
  align-items: flex-end;
  gap: 40px;
}
.practices__heading {
  flex: 1 0 0;
  min-width: 1px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.practices__grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 16px;
}

.practice {
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 24px;
  border-radius: 16px;
  transition:
    background-color 0.25s ease,
    color 0.25s ease;
}
.practice--dark {
  background: var(--blh-green-deep);
}
.practice--light {
  background: var(--blh-white);
}

.practice__n {
  font-weight: 800;
  font-size: 44px;
  line-height: 44px;
  letter-spacing: -1.32px;
  transition: color 0.25s ease;
}
.practice--dark .practice__n {
  color: var(--blh-sage);
}
.practice--light .practice__n {
  color: var(--blh-copper);
}

.practice__body {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
}

.practice__title {
  font-weight: 700;
  font-size: 20px;
  line-height: 26px;
  letter-spacing: -0.2px;
}
[dir='rtl'] .practice__title {
  font-size: 17px;
  line-height: 30px;
  letter-spacing: 0;
}
.practice__text {
  font-weight: 400;
  font-size: 16px;
  line-height: 26px;
}
[dir='rtl'] .practice__text {
  font-size: 17px;
  line-height: 30px;
}
.practice--dark .practice__title {
  color: var(--blh-white);
}
.practice--dark .practice__text {
  color: var(--blh-mist);
}
.practice--light .practice__title {
  color: var(--blh-green);
}
.practice--light .practice__text {
  color: var(--blh-charcoal);
}

.practice__link {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-size: 16px;
  line-height: 26px;
  white-space: nowrap;
}
.practice--dark .practice__link {
  font-weight: 600;
  color: var(--blh-white);
}
.practice--light .practice__link {
  font-weight: 400;
  color: var(--blh-green);
}
[dir='rtl'] .practice__link {
  padding-block: 1px;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
}

@media (max-width: 1024px) {
  .practices__header {
    flex-direction: column;
    align-items: flex-start;
    gap: 24px;
  }
  .practices__grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 640px) {
  .practices__inner {
    gap: 40px;
  }
  .practices__grid {
    grid-template-columns: minmax(0, 1fr);
  }
  .practice {
    gap: 24px;
  }
}
</style>

<script setup>
import { useI18n } from '@/i18n'
import ArrowIcon from './ArrowIcon.vue'
import photo from '@/assets/images/compliance-pair.png'

const { t } = useI18n()
</script>

<template>
  <section id="about" class="arabic-first bg-white">
    <div class="container arabic-first__inner">
      <img class="arabic-first__photo" :src="photo" :alt="t.alt.compliance" width="520" height="640" />

      <div class="arabic-first__text">
        <p class="t-eyebrow c-green">{{ t.arabicFirst.eyebrow }}</p>
        <h2 class="t-h-section c-green">{{ t.arabicFirst.title }}</h2>
        <span class="headline-rule" />
        <p class="t-lead c-charcoal">{{ t.arabicFirst.lead }}</p>

        <ul class="agenda">
          <li v-for="item in t.arabicFirst.agenda" :key="item.title">
            <a href="#practices" class="agenda__item">
              <span class="agenda__text">
                <span class="t-body-strong c-green">{{ item.title }}</span>
                <span class="t-body c-charcoal">{{ item.text }}</span>
              </span>
              <ArrowIcon color="copper" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style scoped>
.arabic-first__inner {
  display: flex;
  align-items: center;
  gap: 88px;
  padding-block: 48px;
}
.arabic-first__photo {
  flex-shrink: 0;
  width: 520px;
  height: 640px;
  border-radius: 20px;
  object-fit: cover;
}
.arabic-first__text {
  flex: 1 0 0;
  min-width: 1px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
}
.arabic-first__text > :not(.headline-rule) {
  width: 100%;
}

.agenda__item {
  display: flex;
  align-items: flex-start;
  gap: 20px;
  padding-block: 18px;
  border-top: 1px solid var(--blh-mist);
}
.agenda__text {
  flex: 1 0 0;
  min-width: 1px;
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.agenda__item :deep(.arrow__glyph) {
  transition: translate 0.2s ease;
}
.agenda__item:hover :deep(.arrow__glyph) {
  translate: 3px 0;
}
[dir='rtl'] .agenda__item:hover :deep(.arrow__glyph) {
  translate: -3px 0;
}

@media (max-width: 1280px) {
  .arabic-first__inner {
    gap: 56px;
  }
  .arabic-first__photo {
    width: 420px;
    height: 560px;
  }
}

@media (max-width: 1024px) {
  .arabic-first__inner {
    flex-direction: column;
    align-items: stretch;
    gap: 40px;
  }
  .arabic-first__photo {
    width: 100%;
    height: 420px;
  }
}

@media (max-width: 640px) {
  .arabic-first__photo {
    height: 320px;
  }
}
</style>

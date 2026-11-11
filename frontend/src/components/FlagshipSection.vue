<script setup>
import { useI18n } from '@/i18n'
import ArrowIcon from './ArrowIcon.vue'

const { t } = useI18n()
</script>

<template>
  <section id="flagship" class="flagship bg-off-white">
    <div class="container flagship__inner">
      <p v-reveal class="t-eyebrow t-eyebrow--medium c-green">{{ t.flagship.eyebrow }}</p>
      <h2 v-reveal="80" class="t-h-section c-green">{{ t.flagship.title }}</h2>

      <ul class="flagship__list">
        <li v-for="(item, i) in t.flagship.items" :key="item.tag" v-reveal="150 + i * 110">
          <a href="#contact" class="flag">
            <span class="flag__tag">{{ item.tag }}</span>
            <h3 class="flag__title t-h2 c-green">{{ item.title }}</h3>
            <span class="flag__meta">
              <span class="t-body-strong c-charcoal">{{ item.duration }}</span>
              <span class="t-caption c-gray">{{ item.audience }}</span>
            </span>
            <span class="flag__arrow">
              <ArrowIcon color="white" />
            </span>
          </a>
        </li>
      </ul>

      <p v-reveal="300" class="flagship__tiers t-body-strong c-green">{{ t.flagship.tiers }}</p>
    </div>
  </section>
</template>

<style scoped>
.flagship__inner {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 40px;
  padding-block: 48px;
}
.flagship__list {
  width: 100%;
}

.flag {
  position: relative;
  display: flex;
  align-items: center;
  gap: 32px;
  padding-block: 28px;
  border-bottom: 1px solid var(--blh-sage);
}
/* Copper rule sweeps along the row divider on hover */
.flag::after {
  content: '';
  position: absolute;
  bottom: -1px;
  inset-inline: 0;
  height: 2px;
  background: var(--blh-copper);
  transform: scaleX(0);
  transform-origin: left center;
  transition: transform 0.6s var(--ease-out);
}
[dir='rtl'] .flag::after {
  transform-origin: right center;
}
.flag:hover::after {
  transform: scaleX(1);
}
.flag__title {
  transition: translate 0.4s var(--ease-out);
}
.flag:hover .flag__title {
  translate: 8px 0;
}
[dir='rtl'] .flag:hover .flag__title {
  translate: -8px 0;
}
.flag__arrow :deep(.arrow__glyph) {
  transition: translate 0.4s var(--ease-out);
}
.flag:hover .flag__arrow :deep(.arrow__glyph) {
  translate: 3px 0;
}
[dir='rtl'] .flag:hover .flag__arrow :deep(.arrow__glyph) {
  translate: -3px 0;
}
.flag__tag {
  flex-shrink: 0;
  width: 130px;
  color: var(--blh-copper);
  font-weight: 700;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 1.44px;
  text-transform: uppercase;
  white-space: nowrap;
}
[dir='rtl'] .flag__tag {
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 0;
}
.flag__title {
  flex: 1 0 0;
  min-width: 1px;
}
.flag__meta {
  flex-shrink: 0;
  width: 300px;
  display: flex;
  flex-direction: column;
  gap: 2px;
}
.flag__arrow {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 24px;
  background: var(--blh-green);
  transition:
    background-color 0.3s ease,
    transform 0.4s var(--ease-out);
}
.flag:hover .flag__arrow {
  background: var(--blh-copper);
  transform: scale(1.08);
}
[dir='rtl'] .flagship__tiers {
  font-weight: 400;
}

@media (max-width: 1024px) {
  .flag {
    flex-wrap: wrap;
    gap: 12px 24px;
  }
  .flag__tag {
    width: 100%;
  }
  .flag__meta {
    width: auto;
    flex: 1 1 200px;
  }
  .flag__title {
    flex: 1 1 100%;
  }
}
</style>

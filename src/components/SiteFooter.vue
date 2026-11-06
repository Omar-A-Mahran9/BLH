<script setup>
import { useI18n } from '@/i18n'
import BaseButton from './BaseButton.vue'
import logoWhite from '@/assets/images/logo-white.png'

const { t } = useI18n()
const anchors = ['#about', '#practices', '#services', '#partner', '#events']
</script>

<template>
  <footer class="footer bg-green-deep">
    <div class="container footer__inner">
      <div class="footer__top">
        <a href="#top">
          <img :src="logoWhite" :alt="t.alt.logo" width="156" height="60" class="footer__logo" />
        </a>
        <nav class="footer__links">
          <BaseButton
            v-for="(label, i) in t.nav.links"
            :key="label"
            :href="anchors[i]"
            variant="flat-white"
            size="sm"
          >
            {{ label }}
          </BaseButton>
        </nav>
      </div>
      <div class="footer__bottom t-caption c-white">
        <p class="footer__copy">{{ t.footer.copyright }}</p>
        <p class="footer__partner">{{ t.footer.partner }}</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  border-top: 1px solid var(--blh-off-white);
}
.footer__inner {
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding-top: 56px;
  padding-bottom: 40px;
}
.footer__top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
}
.footer__logo {
  width: 156px;
  height: 60px;
  object-fit: contain;
}
.footer__links {
  display: flex;
  align-items: center;
  gap: 16px;
}
.footer__bottom {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 24px;
  padding-top: 20px;
  border-top: 1px solid var(--blh-sage);
}
.footer__copy {
  flex: 1 0 0;
  min-width: 1px;
}
[dir='rtl'] .footer__copy {
  flex: none;
}
.footer__partner {
  white-space: nowrap;
}

@media (max-width: 1024px) {
  .footer__top {
    flex-direction: column;
    align-items: flex-start;
  }
  .footer__links {
    flex-wrap: wrap;
    gap: 4px;
    margin-inline-start: -16px;
  }
}

@media (max-width: 640px) {
  .footer__bottom {
    flex-direction: column;
    gap: 8px;
  }
}
</style>

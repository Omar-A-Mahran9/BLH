<script setup>
import { useI18n } from '@/i18n'
import dot from '@/assets/icons/dot-brand.svg'

const { t } = useI18n()
</script>

<template>
  <section class="brand bg-green-deep">
    <div class="container brand__inner">
      <template v-for="(word, i) in t.brandLine" :key="word">
        <img v-if="i > 0" :src="dot" alt="" aria-hidden="true" class="brand__dot" />
        <p class="brand__word">{{ word }}</p>
      </template>
    </div>
  </section>
</template>

<style scoped>
.brand__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-block: 48px;
}
.brand__dot {
  flex-shrink: 0;
}
.brand__word {
  color: var(--blh-white);
  font-weight: 800;
  font-size: 32px;
  line-height: 46px;
  letter-spacing: -0.8px;
  white-space: nowrap;
}
[dir='rtl'] .brand__word {
  font-weight: 700;
  font-size: 28px;
  line-height: 42px;
  letter-spacing: 0;
}

@media (max-width: 640px) {
  .brand__inner {
    padding-block: 32px;
  }
  .brand__word {
    font-size: 20px;
    line-height: 28px;
    letter-spacing: -0.4px;
  }
  [dir='rtl'] .brand__word {
    font-size: 20px;
    line-height: 30px;
  }
}
</style>

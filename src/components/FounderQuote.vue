<script setup>
import { useI18n } from '@/i18n'
import portrait from '@/assets/images/fouad-darwish.png'

const { t } = useI18n()
</script>

<template>
  <section class="founder bg-green-deep">
    <div class="container founder__inner">
      <div class="founder__portrait">
        <img :src="portrait" :alt="t.alt.founder" />
      </div>

      <figure class="founder__quote">
        <p class="founder__mark" aria-hidden="true">{{ t.founder.mark }}</p>
        <blockquote class="founder__text">{{ t.founder.quote }}</blockquote>
        <figcaption class="founder__who">
          <span class="headline-rule headline-rule--sm" />
          <span class="founder__spacer" />
          <span class="t-h3 c-white">{{ t.founder.name }}</span>
          <span class="t-body c-mist">{{ t.founder.role }}</span>
        </figcaption>
      </figure>
    </div>
  </section>
</template>

<style scoped>
.founder__inner {
  display: flex;
  align-items: stretch;
}
.founder__portrait {
  position: relative;
  flex-shrink: 0;
  width: 520px;
  overflow: hidden;
}
/* Figma crop: image is 171.97% of frame height, anchored to the top */
.founder__portrait img {
  position: absolute;
  top: -0.02%;
  left: -0.04%;
  width: 100%;
  height: 171.97%;
  max-width: none;
}

.founder__quote {
  flex: 1 0 0;
  min-width: 1px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 28px;
  padding-block: 80px;
  padding-inline-start: 96px;
}
.founder__mark {
  color: var(--blh-copper);
  font-weight: 800;
  font-size: 120px;
  line-height: 80px;
  letter-spacing: -4.2px;
}
[dir='rtl'] .founder__mark {
  font-weight: 700;
  font-size: 76px;
  line-height: 124px;
  letter-spacing: 0;
}
.founder__text {
  color: var(--blh-white);
  font-weight: 800;
  font-size: 40px;
  line-height: 46px;
  letter-spacing: -1px;
}
[dir='rtl'] .founder__text {
  font-weight: 700;
  font-size: 38px;
  line-height: 56px;
  letter-spacing: 0;
}
.founder__who {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
}
.founder__spacer {
  display: block;
  width: 4px;
  height: 8px;
}

@media (max-width: 1280px) {
  .founder__portrait {
    width: 420px;
  }
  .founder__quote {
    padding-inline-start: 64px;
  }
}

@media (max-width: 1024px) {
  .founder__inner {
    flex-direction: column;
    padding-inline: 0;
  }
  .founder__portrait {
    width: 100%;
    height: 480px;
  }
  .founder__portrait img {
    height: auto;
    min-height: 100%;
    object-fit: cover;
  }
  .founder__quote {
    padding: 56px var(--gutter);
  }
}

@media (max-width: 640px) {
  .founder__portrait {
    height: 380px;
  }
  .founder__mark {
    font-size: 88px;
    line-height: 60px;
  }
  .founder__text {
    font-size: 28px;
    line-height: 34px;
    letter-spacing: -0.6px;
  }
  [dir='rtl'] .founder__text {
    font-size: 26px;
    line-height: 42px;
  }
}
</style>

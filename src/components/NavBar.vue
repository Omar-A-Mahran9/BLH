<script setup>
import { ref } from 'vue'
import { useI18n } from '@/i18n'
import BaseButton from './BaseButton.vue'
import logo from '@/assets/images/logo-full-colour.png'

const { t, toggleLocale } = useI18n()
const open = ref(false)
const anchors = ['#about', '#practices', '#services', '#partner', '#events']
</script>

<template>
  <header class="nav">
    <div class="container nav__inner">
      <a href="#top" class="nav__logo">
        <img :src="logo" :alt="t.alt.logo" width="156" height="60" />
      </a>

      <nav class="nav__links" :class="{ 'is-open': open }">
        <BaseButton
          v-for="(label, i) in t.nav.links"
          :key="label"
          :href="anchors[i]"
          variant="flat"
          size="sm"
          @click="open = false"
        >
          {{ label }}
        </BaseButton>
      </nav>

      <div class="nav__actions">
        <button type="button" class="nav__lang" @click="toggleLocale">
          {{ t.nav.switchLang }}
        </button>
        <BaseButton href="#contact" variant="primary" class="nav__talk">{{ t.nav.talk }}</BaseButton>
        <button
          type="button"
          class="nav__burger"
          :aria-expanded="open"
          aria-label="Menu"
          @click="open = !open"
        >
          <span /><span /><span />
        </button>
      </div>
    </div>
  </header>
</template>

<style scoped>
.nav {
  position: sticky;
  top: 0;
  z-index: 50;
  background: var(--blh-white);
  box-shadow: var(--blh-shadow-card);
}
.nav__inner {
  display: flex;
  align-items: center;
  gap: 40px;
  padding-block: 16px;
}
.nav__logo img {
  width: 156px;
  height: 60px;
  object-fit: contain;
}
.nav__links {
  flex: 1 0 0;
  min-width: 1px;
  display: flex;
  align-items: center;
  gap: 16px;
}
.nav__actions {
  display: flex;
  align-items: center;
  gap: 16px;
}
/* Language switch is always shown in Cairo — it names the *other* language */
.nav__lang {
  padding: 7px 16px;
  border-radius: 8px;
  font-family: var(--font-ar);
  font-weight: 400;
  font-size: 17px;
  line-height: 30px;
  color: var(--blh-green);
  transition: background-color 0.2s ease;
}
[dir='rtl'] .nav__lang {
  padding-block: 5px;
}
.nav__lang:hover {
  background: var(--blh-mist);
}

.nav__burger {
  display: none;
  width: 40px;
  height: 40px;
  border-radius: 8px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
}
.nav__burger span {
  display: block;
  width: 20px;
  height: 2px;
  border-radius: 1px;
  background: var(--blh-green);
}

@media (max-width: 1180px) {
  .nav__inner {
    gap: 24px;
  }
  .nav__links {
    gap: 4px;
  }
}

@media (max-width: 1024px) {
  .nav__inner {
    position: relative;
    justify-content: space-between;
  }
  .nav__burger {
    display: inline-flex;
  }
  .nav__links {
    display: none;
    position: absolute;
    top: 100%;
    inset-inline: 0;
    flex-direction: column;
    align-items: stretch;
    gap: 4px;
    padding: 12px var(--gutter) 20px;
    background: var(--blh-white);
    box-shadow: var(--blh-shadow-card);
  }
  .nav__links.is-open {
    display: flex;
  }
}

@media (max-width: 640px) {
  .nav__inner {
    gap: 8px;
    padding-block: 12px;
  }
  .nav__logo img {
    width: 120px;
    height: 46px;
  }
  .nav__actions {
    gap: 4px;
  }
  .nav__talk {
    display: none;
  }
  .nav__lang {
    padding-inline: 10px;
  }
}
</style>

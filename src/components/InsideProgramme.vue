<script setup>
import { useI18n } from '@/i18n'
import leadersAi from '@/assets/images/leaders-ai-session.png'
import kpiWorkshop from '@/assets/images/kpi-workshop.png'

const { t } = useI18n()
</script>

<template>
  <section id="services" class="inside bg-white">
    <div class="container inside__inner">
      <div class="inside__header">
        <div class="inside__heading">
          <p class="t-eyebrow c-green">{{ t.inside.eyebrow }}</p>
          <h2 class="t-h-section c-green">{{ t.inside.title }}</h2>
        </div>
        <p class="inside__lead t-lead c-charcoal">{{ t.inside.lead }}</p>
      </div>

      <div class="inside__mosaic">
        <img class="inside__photo inside__photo--wide" :src="leadersAi" :alt="t.alt.leadersAi" width="700" height="460" />
        <img class="inside__photo inside__photo--narrow" :src="kpiWorkshop" :alt="t.alt.kpiWorkshop" width="480" height="460" />
      </div>

      <ul class="inside__stats">
        <li v-for="stat in t.inside.stats" :key="stat.text" class="stat">
          <p class="stat__n">
            <span class="t-display c-green">{{ stat.value }}</span>
            <span class="stat__unit t-h3 c-copper">{{ stat.unit }}</span>
          </p>
          <p class="stat__text t-body c-charcoal">{{ stat.text }}</p>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.inside__inner {
  display: flex;
  flex-direction: column;
  gap: 48px;
  padding-block: 48px;
}
.inside__header {
  display: flex;
  align-items: flex-end;
  gap: 40px;
}
.inside__heading {
  flex: 1 0 0;
  min-width: 1px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.inside__lead {
  flex-shrink: 0;
  width: 460px;
}
[dir='rtl'] .inside__lead {
  font-weight: 700;
}

.inside__mosaic {
  display: flex;
  gap: 20px;
}
.inside__photo {
  height: 460px;
  border-radius: 20px;
  object-fit: cover;
  min-width: 0;
}
.inside__photo--wide {
  flex: 1 0 0;
}
.inside__photo--narrow {
  flex-shrink: 0;
  width: 480px;
}

.inside__stats {
  display: grid;
  grid-template-columns: repeat(4, 288px);
  gap: 16px;
  border-top: 1px solid var(--blh-mist);
}
.stat {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding-top: 24px;
}
.stat__n {
  display: flex;
  align-items: baseline;
  gap: 6px;
  white-space: nowrap;
}
.stat__text {
  width: 240px;
  max-width: 100%;
}

@media (max-width: 1280px) {
  .inside__stats {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
  .inside__photo--narrow {
    width: 40%;
  }
}

@media (max-width: 1024px) {
  .inside__header {
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
  }
  .inside__lead {
    width: auto;
  }
  .inside__photo {
    height: 360px;
  }
  .inside__stats {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 640px) {
  .inside__mosaic {
    flex-direction: column;
  }
  .inside__photo,
  .inside__photo--narrow {
    width: 100%;
    height: 260px;
    flex: none;
  }
}
</style>

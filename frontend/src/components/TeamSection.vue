<script setup>
import { useI18n } from '@/i18n'
import wally from '@/assets/images/mohamed-wally.webp'
import atef from '@/assets/images/ahmed-atef.webp'
import maha from '@/assets/images/maha-omran.webp'
import omar from '@/assets/images/omar-mahran.webp'
import ibrahimAhmed from '@/assets/images/ibrahim-ahmed.webp'
import lojaine from '@/assets/images/lojaine-ahmed.webp'

const { t } = useI18n()
const photos = { wally, atef, maha, omar, ibrahimAhmed, lojaine }
</script>

<template>
  <section id="partner" class="team bg-white">
    <div class="container team__inner">
      <div class="team__header">
        <p v-reveal class="t-eyebrow t-eyebrow--medium c-green">{{ t.team.eyebrow }}</p>
        <h2 v-reveal="80" class="team__title t-h-section c-green">{{ t.team.title }}</h2>
        <span v-reveal.line="250" class="headline-rule" />
        <p v-reveal="200" class="team__lead t-lead c-charcoal">{{ t.team.lead }}</p>
      </div>

      <div class="team__leads">
        <article v-for="(person, i) in t.team.leads" :key="person.key" v-reveal="i * 140" class="lead-card">
          <img :src="photos[person.key]" :alt="person.name" width="120" height="120" class="lead-card__photo" loading="lazy" decoding="async" />
          <div class="lead-card__text">
            <span class="headline-rule headline-rule--sm" />
            <h3 class="t-h2 c-green">{{ person.name }}</h3>
            <p class="t-body c-charcoal">{{ person.role }}</p>
          </div>
        </article>
      </div>

      <ul class="team__members">
        <li v-for="(person, i) in t.team.members" :key="person.key" v-reveal="i * 80" class="member">
          <img :src="photos[person.key]" :alt="person.name" width="104" height="104" class="member__photo" loading="lazy" decoding="async" />
          <p class="member__name">{{ person.name }}</p>
          <p class="member__role">{{ person.role }}</p>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.team__inner {
  display: flex;
  flex-direction: column;
  gap: 56px;
  padding-block: 48px;
}
.team__header {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
}
[dir='rtl'] .team__title {
  font-size: 52px;
  line-height: 72px;
}
.team__lead {
  width: 760px;
  max-width: 100%;
}

.team__leads {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 24px;
}
.lead-card {
  display: flex;
  align-items: center;
  gap: 28px;
  padding: 28px;
  border-radius: 20px;
  background: var(--blh-off-white);
}
.lead-card.is-visible:hover {
  translate: 0 -4px;
  box-shadow: var(--blh-shadow-card);
}
.lead-card__photo {
  flex-shrink: 0;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  transition: transform 0.5s var(--ease-out);
}
.lead-card:hover .lead-card__photo {
  transform: scale(1.05);
}
.lead-card__text {
  flex: 1 0 0;
  min-width: 1px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
}

.team__members {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 16px;
}
.member {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  text-align: center;
}
.member__photo {
  width: 104px;
  height: 104px;
  border-radius: 52px;
  object-fit: cover;
  transition:
    transform 0.5s var(--ease-out),
    box-shadow 0.5s var(--ease-out);
}
.member:hover .member__photo {
  transform: translateY(-4px) scale(1.04);
  box-shadow: 0 0 0 4px var(--blh-off-white), 0 0 0 5px var(--blh-sage);
}
.member__name {
  width: 100%;
  color: var(--blh-green);
  font-weight: 600;
  font-size: 16px;
  line-height: 26px;
}
.member__role {
  width: 100%;
  color: var(--blh-gray);
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.84px;
}
[dir='rtl'] .member__name {
  font-weight: 700;
  font-size: 17px;
  line-height: 30px;
}
[dir='rtl'] .member__role {
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0;
}

@media (max-width: 1024px) {
  .team__leads {
    grid-template-columns: minmax(0, 1fr);
  }
  .team__members {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    row-gap: 32px;
  }
  [dir='rtl'] .team__title {
    font-size: 38px;
    line-height: 56px;
  }
}

@media (max-width: 640px) {
  .lead-card {
    gap: 20px;
    padding: 20px;
  }
  .lead-card__photo {
    width: 88px;
    height: 88px;
  }
  .team__members {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  [dir='rtl'] .team__title {
    font-size: 28px;
    line-height: 42px;
  }
}
</style>

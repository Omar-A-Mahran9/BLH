<script setup>
import { computed } from 'vue'
import { useI18n } from '@/i18n'
import arrowWhite from '@/assets/icons/arrow-white.svg'
import arrowGreen from '@/assets/icons/arrow-green.svg'
import arrowCopper from '@/assets/icons/arrow-copper.svg'

const props = defineProps({
  color: {
    type: String,
    default: 'white',
    validator: (v) => ['white', 'green', 'copper'].includes(v),
  },
})

const sources = { white: arrowWhite, green: arrowGreen, copper: arrowCopper }
const src = computed(() => sources[props.color])
const { isRtl } = useI18n()
</script>

<template>
  <!-- Figma "arrow-right-02" / "arrow-left-02": 24×24 frame, glyph inset 26.04% / 13.54% -->
  <span class="arrow" :class="{ 'arrow--left': isRtl }" aria-hidden="true">
    <span class="arrow__box">
      <img :src="src" alt="" class="arrow__glyph" />
    </span>
  </span>
</template>

<style scoped>
.arrow {
  position: relative;
  display: inline-block;
  flex-shrink: 0;
  width: 24px;
  height: 24px;
}
.arrow__box {
  position: absolute;
  inset: 26.04% 13.54%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.arrow__glyph {
  flex: none;
  transform: rotate(-90deg) scaleX(-1);
  transition: translate 0.2s ease;
}
.arrow--left .arrow__glyph {
  transform: rotate(90deg) scaleX(-1);
}
</style>

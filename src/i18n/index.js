import { computed, ref, watchEffect } from 'vue'
import en from './en'
import ar from './ar'

const messages = { en, ar }
const STORAGE_KEY = 'blh-locale'

function initialLocale() {
  const fromUrl = new URLSearchParams(window.location.search).get('lang')
  if (fromUrl === 'en' || fromUrl === 'ar') return fromUrl
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved === 'en' || saved === 'ar') return saved
  } catch {
    /* storage unavailable */
  }
  return 'en'
}

const locale = ref(initialLocale())

watchEffect(() => {
  const isRtl = locale.value === 'ar'
  document.documentElement.lang = locale.value
  document.documentElement.dir = isRtl ? 'rtl' : 'ltr'
  try {
    localStorage.setItem(STORAGE_KEY, locale.value)
  } catch {
    /* storage unavailable */
  }
})

export function useI18n() {
  const t = computed(() => messages[locale.value])
  const isRtl = computed(() => locale.value === 'ar')
  const toggleLocale = () => {
    locale.value = locale.value === 'en' ? 'ar' : 'en'
  }
  return { locale, t, isRtl, toggleLocale }
}

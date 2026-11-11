<script setup>
import { reactive, ref } from 'vue'
import { useI18n } from '@/i18n'

const { t, locale } = useI18n()

const API_URL = `${(import.meta.env.VITE_API_URL || '').replace(/\/$/, '')}/api/inquiries`

const form = reactive({ name: '', phone: '', email: '', message: '', website: '' })
const errors = reactive({})
const status = ref('idle') // idle | sending | sent | error | throttled

function clearErrors() {
  for (const key of Object.keys(errors)) delete errors[key]
}

async function submit() {
  if (status.value === 'sending') return
  clearErrors()
  status.value = 'sending'

  try {
    const res = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({ ...form, locale: locale.value }),
    })

    if (res.ok) {
      Object.assign(form, { name: '', phone: '', email: '', message: '', website: '' })
      status.value = 'sent'
      return
    }
    if (res.status === 422) {
      const body = await res.json()
      for (const field of Object.keys(body.errors || {})) errors[field] = true
      status.value = 'idle'
      return
    }
    status.value = res.status === 429 ? 'throttled' : 'error'
  } catch {
    status.value = 'error'
  }
}
</script>

<template>
  <section id="inquiry" class="inquiry">
    <div class="container inquiry__inner">
      <div class="inquiry__intro">
        <p v-reveal class="t-eyebrow c-copper">{{ t.form.eyebrow }}</p>
        <h2 v-reveal="80" class="t-h-section c-green">{{ t.form.title }}</h2>
        <p v-reveal="160" class="t-body c-gray">{{ t.form.lead }}</p>
      </div>

      <form v-reveal.scale="120" class="inquiry__card" novalidate @submit.prevent="submit">
        <p v-if="status === 'sent'" class="inquiry__notice inquiry__notice--ok" role="status">
          {{ t.form.success }}
        </p>

        <div class="inquiry__row">
          <label class="field">
            <span class="field__label">{{ t.form.name }}</span>
            <input
              v-model.trim="form.name"
              type="text"
              name="name"
              autocomplete="name"
              maxlength="120"
              required
              :aria-invalid="!!errors.name"
            />
            <span v-if="errors.name" class="field__error">{{ t.form.errors.name }}</span>
          </label>

          <label class="field">
            <span class="field__label">{{ t.form.phone }}</span>
            <input
              v-model.trim="form.phone"
              type="tel"
              name="phone"
              dir="ltr"
              autocomplete="tel"
              inputmode="tel"
              maxlength="30"
              required
              :aria-invalid="!!errors.phone"
            />
            <span v-if="errors.phone" class="field__error">{{ t.form.errors.phone }}</span>
          </label>
        </div>

        <label class="field">
          <span class="field__label">{{ t.form.email }}</span>
          <input
            v-model.trim="form.email"
            type="email"
            name="email"
            dir="ltr"
            autocomplete="email"
            maxlength="190"
            required
            :aria-invalid="!!errors.email"
          />
          <span v-if="errors.email" class="field__error">{{ t.form.errors.email }}</span>
        </label>

        <label class="field">
          <span class="field__label">{{ t.form.message }}</span>
          <textarea
            v-model.trim="form.message"
            name="message"
            rows="5"
            maxlength="3000"
            required
            :aria-invalid="!!errors.message"
          ></textarea>
          <span v-if="errors.message" class="field__error">{{ t.form.errors.message }}</span>
        </label>

        <!-- Honeypot for bots; hidden from people and assistive tech -->
        <input
          v-model="form.website"
          class="inquiry__hp"
          type="text"
          name="website"
          tabindex="-1"
          autocomplete="off"
          aria-hidden="true"
        />

        <p v-if="status === 'error' || status === 'throttled'" class="inquiry__notice inquiry__notice--err" role="alert">
          {{ status === 'throttled' ? t.form.throttled : t.form.failed }}
        </p>

        <button class="inquiry__submit" type="submit" :disabled="status === 'sending'">
          {{ status === 'sending' ? t.form.sending : t.form.submit }}
        </button>
      </form>
    </div>
  </section>
</template>

<style scoped>
.inquiry__inner {
  display: grid;
  grid-template-columns: minmax(0, 5fr) minmax(0, 7fr);
  gap: 64px;
  align-items: start;
  padding-block: 48px 96px;
}
.inquiry__intro {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.c-copper {
  color: var(--blh-copper);
}
.c-green {
  color: var(--blh-green-deep);
}
.c-gray {
  color: var(--blh-gray);
}
.inquiry__card {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 40px;
  border-radius: 24px;
  background: var(--blh-white);
  box-shadow: var(--blh-shadow-card);
}
.inquiry__row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}
.field {
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.field__label {
  font-weight: 500;
  font-size: 15px;
  color: var(--blh-charcoal);
}
.field input,
.field textarea {
  width: 100%;
  padding: 10px 14px;
  border: 1px solid #cfd8cc;
  border-radius: 8px;
  background: var(--blh-white);
  color: var(--blh-charcoal);
  font: inherit;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}
[dir='rtl'] .field input[dir='ltr'] {
  text-align: right;
}
.field textarea {
  resize: vertical;
  min-height: 132px;
}
.field input:focus,
.field textarea:focus {
  outline: none;
  border-color: var(--blh-green);
  box-shadow: 0 0 0 3px var(--blh-mist);
}
.field [aria-invalid='true'] {
  border-color: #b42318;
}
.field__error {
  font-size: 13px;
  color: #b42318;
}
.inquiry__hp {
  position: absolute;
  left: -9999px;
  width: 1px;
  height: 1px;
  opacity: 0;
}
.inquiry__notice {
  padding: 12px 16px;
  border-radius: 8px;
  font-size: 15px;
}
.inquiry__notice--ok {
  background: var(--blh-mist);
  color: var(--blh-green-deep);
}
.inquiry__notice--err {
  background: #fdecea;
  color: #b42318;
}
.inquiry__submit {
  align-self: flex-start;
  padding: 10px 24px;
  border: 0;
  border-radius: 8px;
  background: var(--blh-green);
  color: var(--blh-white);
  font: inherit;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s ease;
}
[dir='rtl'] .inquiry__submit {
  font-weight: 700;
}
.inquiry__submit:hover:not(:disabled) {
  background: var(--blh-green-deep);
}
.inquiry__submit:disabled {
  opacity: 0.6;
  cursor: progress;
}

@media (max-width: 1024px) {
  .inquiry__inner {
    grid-template-columns: 1fr;
    gap: 32px;
  }
}
@media (max-width: 640px) {
  .inquiry__card {
    padding: 24px 20px;
  }
  .inquiry__row {
    grid-template-columns: 1fr;
  }
  .inquiry__submit {
    align-self: stretch;
  }
}
</style>

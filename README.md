# BLH — Business Learning House website

Vue 3 + Vite implementation of the Figma file **BLH — Brand Identity → 06 · Website — Landing page**
(English LTR + Arabic RTL).

## Run

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in dist/
```

Open `?lang=ar` or `?lang=en` to force a language; the navbar switch remembers the choice.

## Structure

- `src/styles/main.css` — design tokens (BLH colours, shadow) and typography classes; Arabic overrides live under `[dir='rtl']`.
- `src/i18n/` — `en.js` / `ar.js` hold all copy; `useI18n()` sets `<html dir/lang>`.
- `src/components/` — one component per landing-page section, plus `BaseButton` and `ArrowIcon`.
- `src/assets/` — images and icons exported from Figma. Photos marked "placeholder" in Figma still need real BLH photos.
# BLH

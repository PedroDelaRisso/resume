[Versão em português](README-pt.md)

# Pedro Delavechia Risso — Interactive Resume

A resume built as a web page, bilingual (PT-BR/EN), made with Vue 3, TypeScript, and Tailwind CSS.

**Live:** https://pedrodelarisso.github.io/resume/

## Features

- **Bilingual via routing** — `/pt` and `/en` load the resume in the matching language; the root path (`/`) redirects to the stored or browser-detected preference.
- **Collapsible sections** with a table of contents (sidebar on desktop, chips on mobile) and scrollspy highlighting the visible section.
- **Light/dark mode**, with the preference persisted in `localStorage`.
- **Acrylic card** — the content sits over a background made of the page's own source code, blurred via `backdrop-filter` only behind the card (a "frosted glass" effect).
- Direct links to WhatsApp, LinkedIn, GitHub, and copy-to-clipboard email.

## Stack

- [Vue 3](https://vuejs.org/) (`<script setup>`) + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vite.dev/)
- [Tailwind CSS 4](https://tailwindcss.com/)
- [Vue Router 4](https://router.vuejs.org/)

## Development

```sh
npm install
npm run dev       # development server
npm run build     # typecheck + production build into dist/
npm run preview   # serve the production build locally
```

Content (copy, skills, experience, education) lives in [`src/data/resume.ts`](src/data/resume.ts), split by language.

## Deploy

Automatically published to GitHub Pages via [GitHub Actions](.github/workflows/deploy.yml) on every push to the `main` branch.

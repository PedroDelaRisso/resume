[English version](README.md)

# Pedro Delavechia Risso — Currículo Interativo

Currículo em formato de página web, bilíngue (PT-BR/EN), construído com Vue 3, TypeScript e Tailwind CSS.

**Live:** https://pedrodelarisso.github.io/resume/pt

## Features

- **Bilíngue via rota** — `/pt` e `/en` carregam o currículo no idioma correspondente; a raiz (`/`) redireciona para o idioma salvo ou detectado no navegador.
- **Seções colapsáveis** com índice lateral (sidebar no desktop, chips no mobile) e scrollspy destacando a seção visível.
- **Modo claro/escuro**, com preferência persistida em `localStorage`.
- **Card acrílico** — o conteúdo fica sobre um fundo com a textura do próprio código-fonte, desfocada via `backdrop-filter` só atrás do card (efeito "vidro fosco").
- Links diretos para WhatsApp, LinkedIn, GitHub e cópia de e-mail.

## Stack

- [Vue 3](https://vuejs.org/) (`<script setup>`) + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vite.dev/)
- [Tailwind CSS 4](https://tailwindcss.com/)
- [Vue Router 4](https://router.vuejs.org/)

## Desenvolvimento

```sh
npm install
npm run dev       # servidor de desenvolvimento
npm run build     # typecheck + build de produção em dist/
npm run preview   # serve o build de produção localmente
```

O conteúdo (textos, skills, experiência, formação) fica centralizado em [`src/data/resume.ts`](src/data/resume.ts), separado por idioma.

## Deploy

Publicado automaticamente no GitHub Pages via [GitHub Actions](.github/workflows/deploy.yml) a cada push na branch `main`.

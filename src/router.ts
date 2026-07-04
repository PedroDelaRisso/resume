import { createRouter, createWebHistory } from 'vue-router'
import type { Lang } from './data/resume'
import ResumeView from './views/ResumeView.vue'

function preferredLang(): Lang {
  const stored = localStorage.getItem('resume-lang')
  if (stored === 'pt' || stored === 'en') return stored
  return navigator.language.toLowerCase().startsWith('pt') ? 'pt' : 'en'
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', redirect: () => `/${preferredLang()}` },
    { path: '/:lang(pt|en)', name: 'resume', component: ResumeView, props: true },
    { path: '/:pathMatch(.*)*', redirect: () => `/${preferredLang()}` },
  ],
})

export default router

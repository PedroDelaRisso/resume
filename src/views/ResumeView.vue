<script setup lang="ts">
import { ref, reactive, computed, watchEffect, onMounted, onBeforeUnmount, nextTick } from 'vue'
import { useRouter } from 'vue-router'
import { content, type Lang } from '../data/resume'
import ResumeHeader from '../components/ResumeHeader.vue'
import SkillsGrid from '../components/SkillsGrid.vue'
import ExperienceCard from '../components/ExperienceCard.vue'
import CollapsibleSection from '../components/CollapsibleSection.vue'
import SideNav from '../components/SideNav.vue'
import CodeBackground from '../components/CodeBackground.vue'
import Tooltip from '../components/Tooltip.vue'

const props = defineProps<{ lang: Lang }>()

const router = useRouter()
function setLang(l: Lang) {
  router.replace(`/${l}`)
}

// Procedural film-grain noise as an inline SVG (feTurbulence), so nothing is fetched.
// Confined to the acrylic card so the "frosted glass" grain only shows where the card sits.
const noise =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")"

const dark = ref(
  localStorage.getItem('resume-theme')
    ? localStorage.getItem('resume-theme') === 'dark'
    : window.matchMedia('(prefers-color-scheme: dark)').matches,
)

const sidebarCollapsed = ref(localStorage.getItem('resume-sidebar-collapsed') === 'true')
watchEffect(() => {
  localStorage.setItem('resume-sidebar-collapsed', String(sidebarCollapsed.value))
})

const t = computed(() => content[props.lang])

const sections = computed(() => [
  { id: 'summary', label: t.value.summaryHeading },
  { id: 'skills', label: t.value.skillsHeading },
  { id: 'experience', label: t.value.experienceHeading },
  { id: 'education', label: t.value.educationHeading },
])

const open = reactive<Record<string, boolean>>({
  summary: true,
  skills: true,
  experience: true,
  education: true,
})

const allOpen = computed(() => sections.value.every((s) => open[s.id]))

function toggleAll() {
  const target = !allOpen.value
  for (const s of sections.value) open[s.id] = target
}

const activeId = ref('summary')

function navigate(id: string) {
  open[id] = true
  nextTick(() => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  })
}

let observer: IntersectionObserver | undefined
onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (e.isIntersecting) activeId.value = e.target.id
      }
    },
    { rootMargin: '-15% 0px -75% 0px', threshold: 0 },
  )
  for (const s of sections.value) {
    const el = document.getElementById(s.id)
    if (el) observer.observe(el)
  }
})
onBeforeUnmount(() => observer?.disconnect())

watchEffect(() => {
  localStorage.setItem('resume-lang', props.lang)
  document.documentElement.lang = props.lang === 'pt' ? 'pt-BR' : 'en'
})

watchEffect(() => {
  localStorage.setItem('resume-theme', dark.value ? 'dark' : 'light')
  document.documentElement.classList.toggle('dark', dark.value)
})
</script>

<template>
  <div class="relative min-h-screen bg-slate-50 text-slate-700 transition-colors dark:bg-slate-950 dark:text-slate-300">
    <CodeBackground />

    <div class="relative z-10 mx-auto flex max-w-5xl gap-8 px-4 py-8 sm:px-6 sm:py-12">
      <!-- desktop sidebar -->
      <aside class="no-print hidden shrink-0 lg:block appear" style="animation-delay: 0ms">
        <div class="sticky top-12">
          <div
            class="overflow-hidden transition-[width] duration-300"
            :class="sidebarCollapsed ? 'w-9' : 'w-52'"
          >
            <div class="w-52">
              <Tooltip :text="sidebarCollapsed ? t.labels.expandSidebar : t.labels.collapseSidebar" position="right">
                <button
                  type="button"
                  class="mb-3 flex items-center justify-center rounded-lg border border-slate-200 bg-white p-1.5 text-slate-400 transition-colors hover:text-teal-600 dark:border-slate-700 dark:bg-slate-900 dark:hover:text-teal-400"
                  :aria-label="sidebarCollapsed ? t.labels.expandSidebar : t.labels.collapseSidebar"
                  :aria-expanded="!sidebarCollapsed"
                  @click="sidebarCollapsed = !sidebarCollapsed"
                >
                  <svg
                    class="size-4 shrink-0 transition-transform duration-300"
                    :class="sidebarCollapsed ? 'rotate-180' : ''"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    aria-hidden="true"
                  >
                    <path d="m15 18-6-6 6-6" />
                  </svg>
                </button>
              </Tooltip>

              <SideNav
                :collapsed="sidebarCollapsed"
                :sections="sections"
                :active-id="activeId"
                :open="open"
                :contents-label="t.labels.contents"
                :all-open="allOpen"
                :toggle-all-label="allOpen ? t.labels.collapseAll : t.labels.expandAll"
                :expand-sidebar-label="t.labels.expandSidebar"
                @navigate="navigate"
                @toggle-all="toggleAll"
                @toggle-collapse="sidebarCollapsed = false"
              />
            </div>
          </div>
        </div>
      </aside>

      <main class="min-w-0 flex-1">
        <!-- acrylic card: the resume "paper". backdrop-blur + grain are confined to this element,
             so the code texture behind it reads as frosted glass while the rest of the page stays crisp. -->
        <div
          class="relative isolate mt-6 overflow-hidden rounded-3xl border border-white/30 bg-white/10 shadow-xl shadow-slate-900/5 backdrop-blur-sm appear print:border-slate-200 print:bg-white print:shadow-none print:backdrop-blur-none dark:border-slate-700/30 dark:bg-slate-900/10 dark:shadow-black/30"
          style="animation-delay: 100ms"
        >
          <div
            class="pointer-events-none absolute inset-0 opacity-[0.05] mix-blend-overlay print:hidden dark:opacity-[0.08]"
            :style="{ backgroundImage: noise, backgroundSize: '160px 160px' }"
          />

          <div class="relative p-6 sm:p-10">
            <ResumeHeader :lang="lang" :dark="dark" :content="t" @update:lang="setLang" @update:dark="dark = $event" />

            <div class="mt-8 space-y-8">
              <CollapsibleSection
                id="summary"
                :title="t.summaryHeading"
                v-model:open="open.summary"
                :expand-label="t.labels.expandSection"
                :collapse-label="t.labels.collapseSection"
                class="appear"
                style="animation-delay: 160ms"
              >
                <p class="leading-relaxed text-slate-600 dark:text-slate-300">
                  {{ t.summary }}
                </p>
              </CollapsibleSection>

              <CollapsibleSection
                id="skills"
                :title="t.skillsHeading"
                v-model:open="open.skills"
                :expand-label="t.labels.expandSection"
                :collapse-label="t.labels.collapseSection"
                class="appear"
                style="animation-delay: 220ms"
              >
                <SkillsGrid :groups="t.skills" />
              </CollapsibleSection>

              <CollapsibleSection
                id="experience"
                :title="t.experienceHeading"
                v-model:open="open.experience"
                :expand-label="t.labels.expandSection"
                :collapse-label="t.labels.collapseSection"
                class="appear"
                style="animation-delay: 280ms"
              >
                <div class="space-y-4">
                  <ExperienceCard v-for="job in t.experience" :key="job.company" :job="job" />
                </div>
              </CollapsibleSection>

              <CollapsibleSection
                id="education"
                :title="t.educationHeading"
                v-model:open="open.education"
                :expand-label="t.labels.expandSection"
                :collapse-label="t.labels.collapseSection"
                class="appear"
                style="animation-delay: 340ms"
              >
                <div class="space-y-4">
                  <article
                    v-for="edu in t.education"
                    :key="edu.institution"
                    class="rounded-xl border border-slate-200 bg-white/70 p-5 shadow-sm backdrop-blur-sm transition-shadow hover:shadow-md sm:p-6 dark:border-slate-700 dark:bg-slate-900/60"
                  >
                    <div class="flex items-start justify-between gap-3">
                      <h3
                        class="min-w-0 bg-gradient-to-r from-teal-700 to-emerald-500 bg-clip-text font-mono text-base font-bold text-transparent sm:text-lg dark:from-teal-400 dark:to-cyan-300"
                      >
                        {{ edu.institution }}
                      </h3>
                      <span
                        class="shrink-0 rounded-full bg-blue-50 px-3 py-0.5 font-mono text-xs font-medium text-blue-800 dark:bg-blue-950 dark:text-blue-300"
                      >
                        {{ edu.period }}
                      </span>
                    </div>
                    <p v-if="edu.degree" class="mt-2 text-sm font-semibold text-slate-800 dark:text-slate-100">
                      {{ edu.degree }}
                    </p>
                    <p v-if="edu.focus" class="mt-1 text-sm italic text-slate-500 dark:text-slate-400">
                      {{ edu.focus }}
                    </p>
                  </article>
                </div>
              </CollapsibleSection>
            </div>
          </div>
        </div>

        <footer
          class="no-print mt-8 text-center font-mono text-xs text-slate-400 dark:text-slate-600 appear"
          style="animation-delay: 400ms"
        >
          Vue 3 · TypeScript · Tailwind CSS
        </footer>
      </main>
    </div>
  </div>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.18s ease, transform 0.18s ease;
}
.fade-enter-from {
  opacity: 0;
  transform: translateY(4px);
}
.fade-leave-to {
  opacity: 0;
  transform: translateY(-4px);
}

@keyframes fade-slide-in {
  from {
    opacity: 0;
    transform: translateY(18px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.appear {
  animation: fade-slide-in 0.7s cubic-bezier(0.16, 1, 0.3, 1) both;
}

@media (prefers-reduced-motion: reduce) {
  .appear {
    animation: none;
  }
}
</style>

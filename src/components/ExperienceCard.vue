<script setup lang="ts">
import type { Experience } from '../data/resume'

defineProps<{ job: Experience }>()
</script>

<template>
  <article
    class="rounded-xl border border-slate-200 bg-white/70 p-5 shadow-sm backdrop-blur-sm transition-shadow hover:shadow-md sm:p-6 dark:border-slate-700 dark:bg-slate-900/60"
  >
    <div class="flex items-start justify-between gap-3">
      <h3
        class="min-w-0 bg-gradient-to-r from-teal-700 to-emerald-500 bg-clip-text font-mono text-base font-bold text-transparent sm:text-lg dark:from-teal-400 dark:to-cyan-300"
      >
        {{ job.company }}
      </h3>
      <span
        class="shrink-0 rounded-full bg-blue-50 px-3 py-0.5 font-mono text-xs font-medium text-blue-800 dark:bg-blue-950 dark:text-blue-300"
      >
        {{ job.period }}
      </span>
    </div>

    <!-- role progression timeline -->
    <ol class="mt-3 space-y-3 border-l-2 border-slate-200 pl-4 dark:border-slate-700">
      <li v-for="(r, i) in job.roles" :key="r.title" class="relative">
        <span
          class="absolute top-1.5 -left-[21px] size-2.5 rounded-full border-2 border-white dark:border-slate-900"
          :class="i === job.roles.length - 1 ? 'bg-teal-600 dark:bg-teal-400' : 'bg-slate-300 dark:bg-slate-600'"
          aria-hidden="true"
        />
        <p
          class="text-sm font-semibold"
          :class="i === job.roles.length - 1 ? 'text-slate-900 dark:text-white' : 'text-slate-600 dark:text-slate-300'"
        >
          {{ r.title }}
        </p>
        <p class="font-mono text-xs text-slate-400 dark:text-slate-500">{{ r.period }}</p>
      </li>
    </ol>

    <ul class="mt-4 space-y-2.5">
      <li
        v-for="(h, i) in job.highlights"
        :key="i"
        class="flex gap-2.5 text-sm leading-relaxed text-slate-600 dark:text-slate-300"
      >
        <span class="mt-1.5 size-1.5 shrink-0 rounded-full bg-teal-500 dark:bg-teal-500" aria-hidden="true" />
        <p>
          <strong class="font-semibold text-slate-800 dark:text-slate-100">{{ h.title }}</strong>
          {{ h.text }}
        </p>
      </li>
    </ul>
  </article>
</template>

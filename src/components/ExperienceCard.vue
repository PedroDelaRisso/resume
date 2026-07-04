<script setup lang="ts">
import type { Experience } from '../data/resume'

defineProps<{ job: Experience }>()
</script>

<template>
  <article
    class="rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-md sm:p-6 dark:border-slate-700 dark:bg-slate-900"
  >
    <div class="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
      <h3 class="font-mono text-base font-bold text-slate-900 sm:text-lg dark:text-white">
        {{ job.role }}
        <span class="text-slate-400 dark:text-slate-500">|</span>
        <span class="text-blue-700 dark:text-sky-400"> {{ job.company }}</span>
      </h3>
      <span
        class="rounded-full bg-emerald-50 px-3 py-0.5 font-mono text-xs font-medium text-emerald-700 dark:bg-emerald-950 dark:text-emerald-400"
      >
        {{ job.period }}
      </span>
    </div>

    <ul class="mt-4 space-y-2.5">
      <li
        v-for="(h, i) in job.highlights"
        :key="i"
        class="flex gap-2.5 text-sm leading-relaxed text-slate-600 dark:text-slate-300"
      >
        <span class="mt-1.5 size-1.5 shrink-0 rounded-full bg-blue-500 dark:bg-sky-500" aria-hidden="true" />
        <p>
          <strong class="font-semibold text-slate-800 dark:text-slate-100">{{ h.title }}</strong>
          {{ h.text }}
        </p>
      </li>
    </ul>
  </article>
</template>

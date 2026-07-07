<script setup lang="ts">
import type { Experience } from '../data/resume'

defineProps<{ job: Experience }>()
</script>

<template>
  <article class="card p-5 hover:shadow-md sm:p-6">
    <div class="flex items-start justify-between gap-3">
      <h3 class="text-gradient min-w-0 text-base sm:text-lg">
        {{ job.company }}
      </h3>
      <span class="badge">
        {{ job.period }}
      </span>
    </div>

    <!-- role progression timeline -->
    <ol class="mt-3 space-y-3 border-l-2 border-border pl-4">
      <li v-for="(r, i) in job.roles" :key="r.title" class="relative">
        <span
          class="absolute top-1.5 -left-[21px] size-2.5 rounded-full border-2 border-surface"
          :class="i === job.roles.length - 1 ? 'bg-accent' : 'bg-faint'"
          aria-hidden="true"
        />
        <p
          class="text-sm font-semibold"
          :class="i === job.roles.length - 1 ? 'text-heading' : 'text-fg'"
        >
          {{ r.title }}
        </p>
        <p class="font-mono text-xs text-faint">{{ r.period }}</p>
      </li>
    </ol>

    <ul class="mt-4 space-y-2.5">
      <li
        v-for="(h, i) in job.highlights"
        :key="i"
        class="flex gap-2.5 text-sm leading-relaxed text-fg"
      >
        <span class="mt-1.5 size-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
        <p>
          <strong class="font-semibold text-strong">{{ h.title }}</strong>
          {{ h.text }}
        </p>
      </li>
    </ul>
  </article>
</template>

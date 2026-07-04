<script setup lang="ts">
import type { SkillGroup } from '../data/resume'

defineProps<{ groups: SkillGroup[] }>()
</script>

<template>
  <div class="grid gap-4 sm:grid-cols-2">
    <div
      v-for="group in groups"
      :key="group.label"
      class="rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition-shadow hover:shadow-md dark:border-slate-700 dark:bg-slate-900"
    >
      <h3 class="mb-3 font-mono text-sm font-bold text-slate-800 dark:text-slate-100">
        {{ group.label }}
      </h3>
      <ul class="flex flex-wrap gap-1.5">
        <li
          v-for="item in group.items"
          :key="item"
          class="rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-800 transition-colors hover:bg-blue-100 dark:bg-slate-800 dark:text-sky-300 dark:hover:bg-slate-700"
        >
          {{ item }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { SkillGroup } from '../data/resume'

defineProps<{ groups: SkillGroup[] }>()
</script>

<template>
  <div class="grid gap-4 sm:grid-cols-2">
    <div v-for="group in groups" :key="group.label" class="card p-4 hover:shadow-md">
      <h3 class="mb-3 font-mono text-sm font-bold text-strong">
        {{ group.label }}
      </h3>
      <ul class="flex flex-wrap gap-1.5">
        <li v-for="item in group.items" :key="item" class="chip">
          {{ item }}
        </li>
      </ul>
    </div>
  </div>
</template>

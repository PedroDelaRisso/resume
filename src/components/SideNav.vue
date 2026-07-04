<script setup lang="ts">
defineProps<{
  sections: { id: string; label: string }[]
  activeId: string
  open: Record<string, boolean>
  orientation?: 'vertical' | 'horizontal'
  contentsLabel: string
  allOpen: boolean
  toggleAllLabel: string
}>()

const emit = defineEmits<{
  navigate: [id: string]
  toggleAll: []
}>()

function pad(i: number) {
  return String(i + 1).padStart(2, '0')
}
</script>

<template>
  <!-- vertical: desktop sidebar -->
  <nav v-if="orientation !== 'horizontal'" aria-label="Sections">
    <div class="mb-3 flex items-center justify-between">
      <p class="font-mono text-xs font-bold tracking-wider text-slate-400 uppercase dark:text-slate-500">
        {{ contentsLabel }}
      </p>
      <button
        type="button"
        class="font-mono text-[10px] text-slate-400 transition-colors hover:text-blue-600 dark:text-slate-500 dark:hover:text-sky-400"
        @click="emit('toggleAll')"
      >
        {{ toggleAllLabel }}
      </button>
    </div>
    <ul class="space-y-0.5 border-l border-slate-200 dark:border-slate-800">
      <li v-for="(s, i) in sections" :key="s.id">
        <button
          type="button"
          class="group -ml-px flex w-full items-center gap-2 border-l-2 py-1.5 pl-3 text-left text-sm transition-colors"
          :class="
            activeId === s.id
              ? 'border-blue-600 font-medium text-blue-700 dark:border-sky-400 dark:text-sky-400'
              : 'border-transparent text-slate-500 hover:border-slate-300 hover:text-slate-800 dark:text-slate-400 dark:hover:border-slate-600 dark:hover:text-slate-200'
          "
          @click="emit('navigate', s.id)"
        >
          <span class="font-mono text-xs text-slate-400 dark:text-slate-600">{{ pad(i) }}</span>
          <span class="truncate">{{ s.label }}</span>
          <span
            v-if="!open[s.id]"
            class="ml-auto font-mono text-[10px] text-slate-300 dark:text-slate-600"
            aria-hidden="true"
          >+</span>
        </button>
      </li>
    </ul>
  </nav>

  <!-- horizontal: mobile chip bar -->
  <nav v-else aria-label="Sections" class="overflow-x-auto">
    <ul class="flex w-max gap-2">
      <li v-for="(s, i) in sections" :key="s.id">
        <button
          type="button"
          class="flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium whitespace-nowrap transition-colors"
          :class="
            activeId === s.id
              ? 'border-blue-600 bg-blue-50 text-blue-700 dark:border-sky-500 dark:bg-slate-800 dark:text-sky-400'
              : 'border-slate-200 bg-white text-slate-500 hover:text-slate-800 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-400 dark:hover:text-slate-200'
          "
          @click="emit('navigate', s.id)"
        >
          <span class="font-mono text-slate-400 dark:text-slate-600">{{ pad(i) }}</span>
          {{ s.label }}
        </button>
      </li>
    </ul>
  </nav>
</template>

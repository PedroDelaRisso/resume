<script setup lang="ts">
import Tooltip from './Tooltip.vue'

defineProps<{
  sections: { id: string; label: string }[]
  activeId: string
  open: Record<string, boolean>
  collapsed?: boolean
  contentsLabel: string
  allOpen: boolean
  toggleAllLabel: string
  expandSidebarLabel: string
}>()

const emit = defineEmits<{
  navigate: [id: string]
  toggleAll: []
  'toggle-collapse': []
}>()

function pad(i: number) {
  return String(i + 1).padStart(2, '0')
}
</script>

<template>
  <nav aria-label="Sections">
    <div class="mb-3 flex h-5 items-center">
      <Transition name="fade" mode="out-in">
        <button
          v-if="collapsed"
          key="collapsed-icon"
          type="button"
          class="flex items-center justify-center text-slate-400 transition-colors hover:text-teal-600 dark:hover:text-teal-400"
          :aria-label="expandSidebarLabel"
          @click="emit('toggle-collapse')"
        >
          <svg class="size-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
            <circle cx="5" cy="12" r="1.75" />
            <circle cx="12" cy="12" r="1.75" />
            <circle cx="19" cy="12" r="1.75" />
          </svg>
        </button>
        <div v-else key="label" class="flex w-full items-center justify-between">
          <p class="font-mono text-xs font-bold tracking-wider text-slate-400 uppercase dark:text-slate-500">
            {{ contentsLabel }}
          </p>
          <button
            type="button"
            class="font-mono text-[10px] text-slate-400 transition-colors hover:text-teal-600 dark:text-slate-500 dark:hover:text-teal-400"
            @click="emit('toggleAll')"
          >
            {{ toggleAllLabel }}
          </button>
        </div>
      </Transition>
    </div>
    <ul class="space-y-0.5 border-l border-slate-200 dark:border-slate-800">
      <li v-for="(s, i) in sections" :key="s.id">
        <Tooltip :text="s.label" position="right">
          <button
            type="button"
            class="group -ml-px flex w-full items-center gap-2 border-l-2 py-1.5 pl-3 text-left text-sm transition-colors"
            :class="
              activeId === s.id
                ? 'border-teal-600 font-medium text-teal-700 dark:border-teal-400 dark:text-teal-400'
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
        </Tooltip>
      </li>
    </ul>
  </nav>
</template>

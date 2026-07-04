<script setup lang="ts">
import Tooltip from './Tooltip.vue'

const props = defineProps<{
  id: string
  title: string
  open: boolean
  expandLabel: string
  collapseLabel: string
}>()

const emit = defineEmits<{ 'update:open': [value: boolean] }>()

function toggle() {
  emit('update:open', !props.open)
}
</script>

<template>
  <section :id="id" class="scroll-mt-6">
    <Tooltip :text="open ? collapseLabel : expandLabel" full>
      <button
        type="button"
        class="group flex w-full items-center gap-3 text-left"
        :aria-expanded="open"
        :aria-controls="`${id}-panel`"
        @click="toggle"
      >
        <span class="font-mono text-xl font-bold text-slate-400 dark:text-slate-600" aria-hidden="true">#</span>
        <h2
          class="bg-gradient-to-r from-teal-700 to-emerald-500 bg-clip-text font-mono text-xl font-bold text-transparent dark:from-teal-400 dark:to-cyan-300"
        >
          {{ title }}
        </h2>
        <span class="h-px flex-1 bg-slate-200 transition-colors group-hover:bg-teal-300 dark:bg-slate-700 dark:group-hover:bg-teal-700" aria-hidden="true" />
        <svg
          class="size-5 shrink-0 text-slate-400 transition-transform duration-300 group-hover:text-teal-600 dark:group-hover:text-teal-400"
          :class="open ? 'rotate-0' : '-rotate-90'"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          aria-hidden="true"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>
    </Tooltip>

    <div
      :id="`${id}-panel`"
      class="grid transition-[grid-template-rows] duration-300 ease-out print:grid-rows-[1fr]"
      :class="open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'"
    >
      <div class="overflow-hidden">
        <div class="pt-4">
          <slot />
        </div>
      </div>
    </div>
  </section>
</template>

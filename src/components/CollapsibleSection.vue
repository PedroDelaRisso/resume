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
        <span class="font-mono text-xl font-bold text-faint" aria-hidden="true">#</span>
        <h2 class="text-gradient text-xl">
          {{ title }}
        </h2>
        <span class="h-px flex-1 bg-border transition-colors group-hover:bg-accent" aria-hidden="true" />
        <svg
          class="size-5 shrink-0 text-faint transition-transform duration-300 group-hover:text-accent"
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

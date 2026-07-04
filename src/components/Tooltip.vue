<script setup lang="ts">
import { computed, reactive, ref } from 'vue'

const props = withDefaults(
  defineProps<{
    text: string
    position?: 'top' | 'bottom' | 'right'
    full?: boolean
  }>(),
  { position: 'top', full: false },
)

const triggerEl = ref<HTMLElement | null>(null)
const visible = ref(false)
const coords = reactive({ top: 0, left: 0 })

// Right edge of the nearest ancestor that horizontally clips its content, or
// Infinity if none. Lets a clipped trigger (e.g. a button in the collapsed
// sidebar, which stays full width but is visually cut off by an overflow-hidden
// wrapper) anchor its tooltip to the visible edge instead of its real, hidden one.
function clippingRight(el: HTMLElement): number {
  let node: HTMLElement | null = el.parentElement
  let right = Infinity
  while (node) {
    const overflowX = getComputedStyle(node).overflowX
    if (overflowX !== 'visible') {
      right = Math.min(right, node.getBoundingClientRect().right)
    }
    node = node.parentElement
  }
  return right
}

function updatePosition() {
  const el = triggerEl.value
  if (!el) return
  const rect = el.getBoundingClientRect()
  const gap = 8
  if (props.position === 'top') {
    coords.top = rect.top - gap
    coords.left = rect.left + rect.width / 2
  } else if (props.position === 'bottom') {
    coords.top = rect.bottom + gap
    coords.left = rect.left + rect.width / 2
  } else {
    coords.top = rect.top + rect.height / 2
    coords.left = Math.min(rect.right, clippingRight(el)) + gap
  }
}

function show() {
  updatePosition()
  visible.value = true
}

function hide() {
  visible.value = false
}

const tooltipStyle = computed(() => {
  const base = { top: `${coords.top}px`, left: `${coords.left}px` }
  if (props.position === 'top') return { ...base, transform: 'translate(-50%, -100%)' }
  if (props.position === 'bottom') return { ...base, transform: 'translate(-50%, 0)' }
  return { ...base, transform: 'translate(0, -50%)' }
})
</script>

<template>
  <span
    ref="triggerEl"
    class="group/tooltip"
    :class="full ? 'flex w-full' : 'inline-flex'"
    @mouseenter="show"
    @mouseleave="hide"
    @focusin="show"
    @focusout="hide"
  >
    <slot />
  </span>
  <Teleport to="body">
    <Transition name="tooltip-fade">
      <span
        v-if="visible"
        role="tooltip"
        class="no-print pointer-events-none fixed z-[100] whitespace-nowrap rounded-md border border-teal-500/30 bg-slate-900 px-2 py-1 font-mono text-[11px] font-medium text-slate-100 shadow-lg dark:border-teal-400/30 dark:bg-slate-800"
        :style="tooltipStyle"
      >
        {{ text }}
      </span>
    </Transition>
  </Teleport>
</template>

<style scoped>
.tooltip-fade-enter-active,
.tooltip-fade-leave-active {
  transition: opacity 0.12s ease;
}
.tooltip-fade-enter-from,
.tooltip-fade-leave-to {
  opacity: 0;
}
</style>

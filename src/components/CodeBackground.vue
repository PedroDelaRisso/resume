<script setup lang="ts">
import { computed } from 'vue'
// The site's own source, rendered as a faint backdrop.
import appSource from '../App.vue?raw'

type Kind = 'plain' | 'keyword' | 'string' | 'comment' | 'tag' | 'number'

const CLASSES: Record<Kind, string> = {
  plain: 'text-slate-500 dark:text-slate-400',
  keyword: 'text-blue-500 dark:text-sky-400',
  string: 'text-emerald-600 dark:text-emerald-400',
  comment: 'text-slate-400 italic dark:text-slate-600',
  tag: 'text-fuchsia-500 dark:text-fuchsia-400',
  number: 'text-orange-500 dark:text-orange-400',
}

const KEYWORDS =
  /\b(?:import|from|export|default|const|let|var|function|return|if|else|new|type|interface|ref|computed|watchEffect|true|false|null|undefined|as|extends|void|async|await)\b/

// Priority-ordered token matcher. Comments and strings come first so that
// keyword-looking text inside them is not recoloured.
const TOKEN =
  /(<!--[\s\S]*?-->|\/\/[^\n]*|\/\*[\s\S]*?\*\/)|('(?:\\.|[^'\\])*'|"(?:\\.|[^"\\])*"|`(?:\\.|[^`\\])*`)|(<\/?[A-Za-z][\w-]*|\/?>)|(\b\d+(?:\.\d+)?\b)/g

const tokens = computed<{ text: string; kind: Kind }[]>(() => {
  const out: { text: string; kind: Kind }[] = []
  let last = 0
  let m: RegExpExecArray | null

  const pushPlain = (text: string) => {
    if (!text) return
    // Highlight keywords within otherwise-plain runs.
    let li = 0
    let km: RegExpExecArray | null
    const kw = new RegExp(KEYWORDS.source, 'g')
    while ((km = kw.exec(text))) {
      if (km.index > li) out.push({ text: text.slice(li, km.index), kind: 'plain' })
      out.push({ text: km[0], kind: 'keyword' })
      li = km.index + km[0].length
    }
    if (li < text.length) out.push({ text: text.slice(li), kind: 'plain' })
  }

  while ((m = TOKEN.exec(appSource))) {
    if (m.index > last) pushPlain(appSource.slice(last, m.index))
    const kind: Kind = m[1] ? 'comment' : m[2] ? 'string' : m[3] ? 'tag' : 'number'
    out.push({ text: m[0], kind })
    last = m.index + m[0].length
  }
  if (last < appSource.length) pushPlain(appSource.slice(last))
  return out
})
</script>

<template>
  <div
    aria-hidden="true"
    class="no-print pointer-events-none fixed inset-0 z-0 select-none overflow-hidden"
  >
    <!-- code texture: crisp on the open page, blurred where the acrylic card sits on top of it -->
    <pre
      class="w-full whitespace-pre-wrap break-all p-4 font-mono text-[11px] leading-[1.35] opacity-[0.09] sm:text-xs dark:opacity-[0.13]"
    ><span
        v-for="(tok, i) in tokens"
        :key="i"
        :class="CLASSES[tok.kind]"
      >{{ tok.text }}</span></pre>

    <!-- fade the code out toward the bottom so it reads as texture -->
    <div
      class="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-slate-50 to-transparent dark:from-slate-950"
    />
  </div>
</template>

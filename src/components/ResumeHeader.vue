<script setup lang="ts">
import { ref } from 'vue'
import { profile, type Lang, type ResumeContent } from '../data/resume'
import Tooltip from './Tooltip.vue'

const props = defineProps<{
  lang: Lang
  dark: boolean
  content: ResumeContent
}>()

const emit = defineEmits<{
  'update:lang': [lang: Lang]
  'update:dark': [dark: boolean]
}>()

const copiedEmail = ref(false)
const copiedPhone = ref(false)

async function copyEmail() {
  await navigator.clipboard.writeText(profile.email)
  copiedEmail.value = true
  setTimeout(() => (copiedEmail.value = false), 1800)
}

async function copyPhone() {
  await navigator.clipboard.writeText(profile.phone)
  copiedPhone.value = true
  setTimeout(() => (copiedPhone.value = false), 1800)
}
</script>

<template>
  <header class="relative">
    <!-- controls -->
    <div class="no-print mb-8 flex items-center justify-end gap-2">
      <div
        class="flex overflow-hidden rounded-lg border border-border text-sm font-medium"
        role="group"
        aria-label="Language"
      >
        <Tooltip v-for="l in (['pt', 'en'] as Lang[])" :key="l" :text="l === 'pt' ? 'Português' : 'English'" position="bottom">
          <button
            class="px-3 py-1.5 font-mono uppercase transition-colors"
            :class="
              props.lang === l
                ? 'bg-gradient-to-r from-accent-from to-accent-to text-white dark:text-slate-950'
                : 'bg-surface text-muted hover:bg-surface-hover'
            "
            @click="emit('update:lang', l)"
          >
            {{ l }}
          </button>
        </Tooltip>
      </div>

      <Tooltip :text="props.dark ? content.labels.switchToLight : content.labels.switchToDark" position="bottom">
        <button
          class="btn-icon"
          :aria-label="props.dark ? 'Light mode' : 'Dark mode'"
          @click="emit('update:dark', !props.dark)"
        >
          {{ props.dark ? '☀️' : '🌙' }}
        </button>
      </Tooltip>

      <Tooltip :text="content.labels.viewRepo" position="bottom">
        <a
          :href="profile.repo"
          target="_blank"
          rel="noopener noreferrer"
          class="btn-icon"
          :aria-label="content.labels.viewRepo"
        >
          <svg class="size-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
          </svg>
        </a>
      </Tooltip>
    </div>

    <!-- identity -->
    <p class="font-mono text-sm text-accent">$ whoami</p>
    <h1 class="mt-1 font-mono text-3xl font-bold text-heading sm:text-4xl">
      {{ profile.name }}
    </h1>
    <Transition name="fade" mode="out-in">
      <p :key="props.lang" class="mt-2 text-lg font-medium text-fg">
        {{ content.title }}
      </p>
    </Transition>

    <!-- contact info: phone, WhatsApp, and email -->
    <div class="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted">
      <span class="inline-flex items-center gap-3">
        <Tooltip text="WhatsApp">
          <a
            :href="`https://wa.me/${profile.phone.replace(/[^\d]/g, '')}`"
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center transition-colors hover:text-green-600 dark:hover:text-green-400"
            aria-label="WhatsApp"
          >
            <svg class="size-4 fill-current text-green-500" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
          </a>
        </Tooltip>
        <Tooltip :text="content.labels.call">
          <a
            :href="`tel:${profile.phone.replace(/[^+\d]/g, '')}`"
            class="inline-flex items-center gap-1.5 transition-colors hover:text-accent"
          >
            <svg class="size-3.5 fill-current" viewBox="0 0 512 512" aria-hidden="true">
              <path d="M160.2 25C152.3 6.1 131.7-3.9 112.1 1.4l-5.5 1.5c-64.6 17.6-119.8 80.2-103.7 156.4 37.1 175 174.8 312.7 349.8 349.8 76.3 16.2 138.8-39.1 156.4-103.7l1.5-5.5c5.4-19.7-4.7-40.3-23.5-48.1l-97.3-40.5c-16.5-6.9-35.6-2.1-47 11.8l-38.6 47.2C233.9 335.4 177.3 277 144.8 205.3L189 169.3c13.9-11.3 18.6-30.4 11.8-47L160.2 25z"/>
            </svg>
            {{ profile.phone }}
          </a>
        </Tooltip>
        <button
          class="no-print rounded-md border border-border px-2 py-0.5 text-xs font-medium transition-colors hover:border-accent hover:text-accent"
          @click="copyPhone"
        >
          {{ copiedPhone ? content.labels.copied : content.labels.copyPhone }}
        </button>
      </span>

      <span class="inline-flex items-center gap-1.5">
        <Tooltip :text="content.labels.sendEmail">
          <a
            :href="`mailto:${profile.email}`"
            class="inline-flex items-center gap-1.5 transition-colors hover:text-accent"
          >
            <svg class="size-3.5 fill-current" viewBox="0 0 512 512" aria-hidden="true">
              <path d="M48 64c-26.5 0-48 21.5-48 48 0 15.1 7.1 29.3 19.2 38.4l208 156c17.1 12.8 40.5 12.8 57.6 0l208-156c12.1-9.1 19.2-23.3 19.2-38.4 0-26.5-21.5-48-48-48L48 64zM0 196L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-188-198.4 148.8c-34.1 25.6-81.1 25.6-115.2 0L0 196z"/>
            </svg>
            {{ profile.email }}
          </a>
        </Tooltip>
        <button
          class="no-print rounded-md border border-border px-2 py-0.5 text-xs font-medium transition-colors hover:border-accent hover:text-accent"
          @click="copyEmail"
        >
          {{ copiedEmail ? content.labels.copied : content.labels.copyEmail }}
        </button>
      </span>
    </div>

    <!-- profile links -->
    <div class="mt-2.5 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted">
      <a
        :href="profile.linkedin"
        target="_blank"
        rel="noopener noreferrer"
        class="inline-flex items-center gap-1.5 transition-colors hover:text-blue-700 dark:hover:text-sky-400"
        aria-label="LinkedIn"
      >
        <svg class="size-4 fill-current text-blue-600 dark:text-sky-500" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>
        </svg>
        LinkedIn
      </a>
      <a
        :href="profile.github"
        target="_blank"
        rel="noopener noreferrer"
        class="inline-flex items-center gap-1.5 transition-colors hover:text-heading"
        aria-label="GitHub"
      >
        <svg class="size-4 fill-current text-fg" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
        </svg>
        GitHub
      </a>
    </div>
  </header>
</template>

<template>
  <div class="w-full flex justify-center pt-1">
    <div class="flex gap-8 flex-wrap justify-center">
      <a
        v-for="social in icons"
        :key="social.name"
        :href="social.href"
        target="_blank"
        rel="noopener"
        :aria-label="social.name"
        class="icon-glass w-10 h-10 flex items-center justify-center text-[var(--color-text100)] dark:text-[var(--color-dtext100)]"
      >
        <Icon :icon="social.icon" class="w-6 h-6" />
      </a>
    </div>
  </div>
</template>

<script setup>
import { useSocialStore } from '@/stores/useSocialStore'
import { Icon } from '@iconify/vue'

const { icons } = useSocialStore()
</script>

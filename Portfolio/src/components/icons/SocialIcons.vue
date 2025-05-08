<template>
  <div class="relative py-8 overflow-hidden bg-gradient-to-b
              from-[var(--color-accent100)] to-[var(--color-accent200)]">

    <div v-for="(c, i) in circles" :key="i" :class="`absolute filter blur-3xl pointer-events-none ${c.classes}`"></div>

    <div class="relative grid grid-cols-4 place-items-center gap-6">
      <a v-for="social in icons" :key="social.name" :href="social.href" target="_blank" rel="noopener"
        :aria-label="social.name" class="icon-glass w-20 h-20 flex items-center justify-center
               text-[var(--color-text100)] dark:text-[var(--color-dtext100)]">
        <i :class="`bi bi-${social.icon} text-3xl`"></i>
      </a>
    </div>
  </div>
</template>

<script setup>
import { useSocialStore } from '@/stores/useSocialStore';
const { icons, circles } = useSocialStore();
</script>

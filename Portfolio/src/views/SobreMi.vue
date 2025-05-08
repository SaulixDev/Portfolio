<template>
  <section >
    <div v-for="(c, i) in circles" :key="i" :class="`absolute filter blur-3xl pointer-events-none ${c.classes}`"></div>

    <div class="relative max-w-4xl mx-auto

             rounded-lg p-8
             transition-colors">
      <div class="text-center space-y-6">
        <h1 class="text-4xl font-bold text-text100 dark:text-dtext100">
          Sobre Mí
        </h1>
        <p class="text-lg text-text100 dark:text-dtext100
                 text-legible mx-auto max-w-2xl">
          Soy un desarrollador enfocado en IA…
        </p>

        <div class="w-full max-w-md mx-auto">
          <SocialIcons />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import SocialIcons from '@/components/icons/SocialIcons.vue'
import { useSocialStore } from '@/stores/useSocialStore'

const { circles } = useSocialStore()
</script>

<style scoped>
.text-legible {
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.6);
}
</style>

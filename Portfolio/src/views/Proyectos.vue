<template>
  <section class="relative p-8 overflow-hidden">
    <div v-for="(c, i) in circles" :key="i" :class="`absolute filter blur-3xl pointer-events-none ${c.classes}`"></div>

    <div class="relative  rounded-lg p-8 transition-colors">
      <h2 class="text-2xl font-semibold mb-4 text-text100 dark:text-dtext100">
        Proyectos Destacados
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div class="p-4 rounded-lg shadow
                    bg-bg100 dark:bg-dbg100
                    border border-primary100 dark:border-dprimary100
                    transition-colors">
          <h3 class="text-lg font-medium mb-2 text-primary100 dark:text-dprimary100">
            Proyecto A
          </h3>
          <p class="text-text200 dark:text-dtext200">
            Descripción breve...
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useSocialStore } from '@/stores/useSocialStore';
const { circles } = useSocialStore();
</script>

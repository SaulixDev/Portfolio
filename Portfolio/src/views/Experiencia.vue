<template>
  <section class="relative p-8 overflow-hidden">
    <div v-for="(c, i) in circles" :key="i" :class="`absolute filter blur-3xl pointer-events-none ${c.classes}`"></div>

    <div class="relativerounded-lg p-8 transition-colors">
      <h2 class="text-2xl font-semibold mb-4 text-text100 dark:text-dtext100">
        Experiencia Laboral
      </h2>
      <ul class="space-y-4">
        <li class="p-4 rounded-lg shadow
                   bg-bg100 dark:bg-dbg100
                   border border-primary200 dark:border-dprimary200
                   transition-colors">
          <h3 class="text-xl font-medium text-primary100 dark:text-dprimary100">
            Empresa XYZ
          </h3>
          <p class="text-text200 dark:text-dtext200">
            Desarrollador Front-End (2022–2024)
          </p>
          <p class="text-text200 dark:text-dtext200">
            Descripción breve de responsabilidades y logros.
          </p>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup>
import { useSocialStore } from '@/stores/useSocialStore';
const { circles } = useSocialStore();
</script>

<template>
  <div class="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-300 relative">
    <nav class="relative bg-white dark:bg-gray-800 px-6 py-4">
      <div class="flex justify-center space-x-4">
        <router-link to="/" exact-active-class="!text-[var(--color-dprimary200)]"
          class="text-gray-700 dark:text-gray-200 hover:underline">
          Sobre mí
        </router-link>
        <router-link to="/experiencia" exact-active-class="!text-[var(--color-dprimary200)]"
          class="text-gray-700 dark:text-gray-200 hover:underline">
          Experiencia
        </router-link>
        <router-link to="/proyectos" exact-active-class="!text-[var(--color-dprimary200)]"
          class="text-gray-700 dark:text-gray-200 hover:underline">
          Proyectos
        </router-link>
      </div>
      <button @click="toggleDark" class="absolute top-1/2 right-6 transform -translate-y-1/2 p-2 rounded bg-transparent
               hover:bg-gray-100/20 dark:hover:bg-gray-700/20 transition-colors z-40" aria-label="Toggle dark mode">
        {{ isDark ? '☀️' : '🌙' }}
      </button>
    </nav>

    <router-view />
    <button v-show="showScroll" @click="scrollToTop" class="fixed bottom-6 right-6 p-3 rounded-full bg-transparent text-gray-700 dark:text-gray-200
         shadow-lg hover:shadow-xl transition-opacity duration-300 focus:outline-none z-50" aria-label="Volver arriba">
      ↑
    </button>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue';

const isDark = ref(false);

onMounted(() => {
  const stored = localStorage.getItem('theme');
  isDark.value = stored
    ? stored === 'dark'
    : window.matchMedia('(prefers-color-scheme: dark)').matches;
  document.documentElement.classList.toggle('dark', isDark.value);
});

watch(isDark, (val) => {
  document.documentElement.classList.toggle('dark', val);
  localStorage.setItem('theme', val ? 'dark' : 'light');
});

function toggleDark() {
  isDark.value = !isDark.value;
}

const showScroll = ref(false);

const handleScroll = () => {
  showScroll.value = window.scrollY > 50;
};

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
button[aria-label="Volver arriba"] {
  opacity: 0.8;
}

button[aria-label="Volver arriba"]:hover {
  opacity: 1;
}
</style>

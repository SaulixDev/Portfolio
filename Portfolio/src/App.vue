<template>
  <div class="min-h-screen transition-colors duration-300 relative">
    <router-view />

    <button
      v-show="showScroll"
      @click="scrollToTop"
      class="fixed bottom-6 right-6 p-3 rounded-full bg-transparent text-gray-700 dark:text-gray-200 shadow-lg hover:shadow-xl transition-opacity duration-300 focus:outline-none z-50"
      aria-label="Volver arriba"
    >
      ↑
    </button>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue'
const isDark = ref(false)

onMounted(() => {
  const stored = localStorage.getItem('theme')
  isDark.value = stored
    ? stored === 'dark'
    : window.matchMedia('(prefers-color-scheme: dark)').matches
  document.documentElement.classList.toggle('dark', isDark.value)
})

const showScroll = ref(false)

const handleScroll = () => {
  showScroll.value = window.scrollY > 50
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
button[aria-label='Volver arriba'] {
  opacity: 0.8;
}

button[aria-label='Volver arriba']:hover {
  opacity: 1;
}
</style>

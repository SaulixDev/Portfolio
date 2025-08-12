<template>
  <section
    class="relative overflow-hidden min-h-screen bg-gradient-to-b from-gray-100 to-blue-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300"
  >
    <header class="sticky top-0 z-40 px-6 py-3 flex justify-end gap-4 backdrop-blur-sm">
      <button
        @click="toggleLang"
        class="p-2 rounded hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
        aria-label="Cambiar idioma"
      >
        {{ locale === 'es' ? '🇪🇸' : '🇬🇧' }}
      </button>

      <button
        @click="toggleDark"
        class="p-2 rounded hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
        aria-label="Toggle dark mode"
      >
        {{ isDark ? '☀️' : '🌙' }}
      </button>
    </header>
    <div
      v-for="(c, i) in circles"
      :key="i"
      :class="`absolute filter blur-3xl pointer-events-none ${c.classes}`"
    ></div>

    <div class="relative max-w-4xl mx-auto rounded-lg p-8 transition-colors">
      <div class="space-y-6">
        <h1 class="text-center text-4xl font-bold text-text100 dark:text-dtext100">
          {{ t('welcome') }}
        </h1>
        <p class="text-center text-2xl font-bold text-text100 dark:text-dtext100">
          {{ t('welcomeSubtext') }}
        </p>

        <div
          class="overflow-hidden rounded-full w-60 h-60 mx-auto ring-8 ring-sky-100/40 dark:ring-0 shadow-[0_20px_50px_-12px_rgba(56,189,248,0.45)] dark:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.7)]"
        >
          <img
            src="@/assets/images/saul.png"
            alt="Saúl"
            class="w-full h-full object-cover transform translate-y-2 transition-transform duration-500 scale-110 md:scale-100 md:hover:scale-110 animate-zoom-in md:animate-none"
          />
        </div>
        <SocialIcons />
        <div>
          <h2 class="text-lg text-text100 dark:text-dtext100 mx-auto max-w-2xl">{{ t('h2') }}</h2>
          <p class="text-text100 dark:text-dtext100 mx-auto max-w-2xl">
            {{ t('pd') }}
          </p>
        </div>
        <div class="flex justify-center mt-6">
          <div class="bg-[#f5f5f7]/60 dark:bg-gray-950/70 rounded-full p-1 flex shadow-inner">
            <button
              @click="activeTab = 'reclutadores'"
              :class="[
                'flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 font-semibold',
                activeTab === 'reclutadores'
                  ? 'bg-white shadow text-red-500'
                  : 'text-gray-400 hover:text-gray-600',
              ]"
            >
              <span>🔥</span>
              <span>{{ t('recruiters') }}</span>
            </button>
            <button
              @click="activeTab = 'contactar'"
              :class="[
                'flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 font-semibold',
                activeTab === 'contactar'
                  ? 'bg-white shadow text-green-500'
                  : 'text-gray-400 hover:text-gray-600',
              ]"
            >
              <span>✔</span>
              <span>{{ t('recursos') }}</span>
            </button>
          </div>
        </div>

        <div v-if="activeTab === 'reclutadores'" class="mt-6">
          <div class="grid grid-cols-2 gap-4">
            <div
              v-for="(card, index) in cards"
              :key="index"
              class="bg-white/60 dark:bg-white/5 rounded-2xl shadow-md p-4 flex flex-col items-center text-center transition-all duration-300 cursor-pointer hover:shadow-lg"
              :class="{ 'col-span-2': expandedCardIndex === index }"
              @click="handleCardClick(card, index)"
            >
              <div
                class="w-12 h-12 rounded-full flex items-center justify-center mb-2"
                :class="card.bg"
              >
                <component :is="card.icon" class="w-6 h-6" :class="card.color" />
              </div>
              <p class="font-semibold text-text100 dark:text-dtext100">{{ card.title }}</p>
              <transition name="fade">
                <div v-if="expandedCardIndex === index" class="mt-4 w-full text-left space-y-4">
                  <p class="text-sm text-gray-600 dark:text-gray-300 whitespace-pre-line">
                    {{ card.content }}
                  </p>
                  <div v-if="card.type === 'projects'" class="space-y-3">
                    <div
                      v-for="(proj, i) in card.projects"
                      :key="i"
                      class="flex bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition"
                    >
                      <a
                        :href="proj.link"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="flex w-full"
                      >
                        <img
                          :src="proj.image"
                          alt="preview"
                          class="w-28 h-28 object-cover object-centerrounded-l-xl"
                        />
                        <div class="p-3 flex flex-col justify-center">
                          <h4 class="font-semibold text-text100 dark:text-dtext100 text-sm">
                            {{ proj.title }}
                          </h4>
                          <p class="text-xs text-gray-500 dark:text-gray-400 line-clamp-2">
                            {{ proj.description }}
                          </p>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div v-else-if="card.type === 'tech'" class="space-y-3">
                    <div class="flex space-x-2">
                      <button
                        @click.stop="selectedTech = 'frontend'"
                        :class="[
                          'px-4 py-1 rounded-full text-sm font-semibold transition',
                          selectedTech === 'frontend'
                            ? 'bg-primary100 text-white shadow'
                            : 'bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300',
                        ]"
                      >
                        Frontend
                      </button>
                      <button
                        @click.stop="selectedTech = 'backend'"
                        :class="[
                          'px-4 py-1 rounded-full text-sm font-semibold transition',
                          selectedTech === 'backend'
                            ? 'bg-primary100 text-white shadow'
                            : 'bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300',
                        ]"
                      >
                        Backend
                      </button>
                      <button
                        @click.stop="selectedTech = 'bbdd'"
                        :class="[
                          'px-4 py-1 rounded-full text-sm font-semibold transition',
                          selectedTech === 'bbdd'
                            ? 'bg-primary100 text-white shadow'
                            : 'bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300',
                        ]"
                      >
                        BBDD
                      </button>
                    </div>
                    <div
                      v-if="selectedTech === 'frontend'"
                      class="text-sm text-gray-600 dark:text-gray-300 space-y-2"
                    >
                      <ul class="grid grid-cols-2 gap-x-4 gap-y-2">
                        <li
                          v-for="(icon, name) in {
                            HTML: techIcons.html,
                            JS: techIcons.javascript,
                            'Vue.js': techIcons.vue,
                            CSS: techIcons.css,
                            'Tailwind CSS': techIcons.tailwind,
                            Pinia: techIcons.pinia,
                            Router: techIcons.router,
                            Vite: techIcons.vite,
                            React: techIcons.react,
                            Git: techIcons.git,
                          }"
                          :key="name"
                          class="flex items-center gap-2"
                        >
                          <Icon :icon="icon" class="w-5 h-5" />
                          <span>{{ name }}</span>
                        </li>
                      </ul>
                    </div>

                    <div
                      v-else-if="selectedTech === 'backend'"
                      class="text-sm text-gray-600 dark:text-gray-300 space-y-2"
                    >
                      <ul class="grid grid-cols-2 gap-x-4 gap-y-2">
                        <li
                          v-for="(icon, name) in {
                            Java: techIcons.java,
                            Kotlin: techIcons.kotlin,
                            'C#': techIcons.csharp,
                            'Node.js': techIcons.nodejs,
                            GitHub: techIcons.github,
                            Docker: techIcons.docker,
                            Railway: techIcons.railway,
                            Python: techIcons.python,
                            APIs: techIcons.api,
                            Postman: techIcons.postman,
                          }"
                          :key="name"
                          class="flex items-center gap-2"
                        >
                          <Icon :icon="icon" class="w-5 h-5" />
                          <span>{{ name }}</span>
                        </li>
                      </ul>
                    </div>

                    <div
                      v-else-if="selectedTech === 'bbdd'"
                      class="text-sm text-gray-600 dark:text-gray-300 space-y-2"
                    >
                      <ul class="grid grid-cols-2 gap-x-4 gap-y-2">
                        <li
                          v-for="(icon, name) in {
                            MySQL: techIcons.mysql,
                            PostgreSQL: techIcons.postgres,
                            MongoDB: techIcons.mongo,
                            SQLite: techIcons.sqlite,
                            'Firebase Realtime DB': techIcons.firebase,
                          }"
                          :key="name"
                          class="flex items-center gap-2"
                        >
                          <Icon :icon="icon" class="w-5 h-5" />
                          <span>{{ name }}</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div
                    v-else-if="card.type === 'contact'"
                    class="text-sm text-gray-600 dark:text-gray-300 space-y-4 text-center"
                  >
                    <a
                      href="mailto:saulojedaalonso@gmail.com"
                      class="inline-block bg-primary100 text-white dark:text-gray-900 font-semibold px-6 py-3 rounded-full shadow-md hover:scale-105 transition-transform"
                    >
                    </a>
                  </div>
                </div>
              </transition>
            </div>
          </div>
        </div>
        <div v-else class="grid grid-cols-2 gap-4 mt-6">
          <div
            v-for="(card, index) in resources"
            :key="index"
            class="bg-white/60 dark:bg-white/5 rounded-2xl shadow-md p-4 flex flex-col items-center text-center transition-all duration-300 cursor-pointer hover:shadow-lg"
            :class="{
              'col-span-2 flex justify-center': index === 2,
              'col-span-1': index !== 2,
            }"
            @click="handleResourceClick(card, index)"
          >
            <div
              class="w-12 h-12 rounded-full flex items-center justify-center mb-2"
              :class="card.bg"
            >
              <component :is="card.icon" class="w-6 h-6" :class="card.color" />
            </div>

            <p class="font-semibold text-text100 dark:text-dtext100">
              {{ card.title }}
            </p>

            <transition name="fade">
              <div
                v-if="card.type === 'wip' && expandedResourceIndex === index"
                class="mt-4 w-full text-left"
              >
                <ul class="space-y-2 mx-auto w-full max-w-[360px]">
                  <li
                    v-for="(it, i) in card.items"
                    :key="i"
                    class="flex items-center w-full max-w-[360px] mx-auto"
                  >
                    <div :style="{ paddingLeft: '15%' }" class="flex items-center gap-2 mr-auto">
                      <Icon :icon="wipIcons[it.key]" class="w-5 h-5" />
                      <span class="text-gray-700 dark:text-gray-300">{{ it.name }}</span>
                    </div>

                    <div :style="{ paddingRight: '15%' }">
                      <Icon
                        :icon="
                          it.status === 'done' ? 'mdi:check-circle' : 'mdi:clock-time-four-outline'
                        "
                        :class="it.status === 'done' ? 'text-green-500' : 'text-amber-500'"
                        class="w-5 h-5"
                      />
                    </div>
                  </li>
                </ul>
              </div>
            </transition>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, watch } from 'vue'
import { useSocialStore } from '@/stores/useSocialStore'
import SocialIcons from '@/components/icons/SocialIcons.vue'
import { Icon } from '@iconify/vue'
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()
const { sectionIcons, resourcesIcons, circles, techIcons, wipIcons } = useSocialStore()
const activeTab = ref('reclutadores')
const selectedTech = ref('frontend')
const expandedCardIndex = ref(null)
const expandedResourceIndex = ref(null)
const isDark = ref(false)

onMounted(() => {
  const stored = localStorage.getItem('theme')
  isDark.value = stored
    ? stored === 'dark'
    : window.matchMedia('(prefers-color-scheme: dark)').matches
  document.documentElement.classList.toggle('dark', isDark.value)
})

watch(isDark, (val) => {
  document.documentElement.classList.toggle('dark', val)
  localStorage.setItem('theme', val ? 'dark' : 'light')
})

const toggleDark = () => (isDark.value = !isDark.value)

const toggleLang = () => {
  locale.value = locale.value === 'es' ? 'en' : 'es'
}
const resources = computed(() => [
  {
    type: 'extensions',
    title: t('resExtensionsTitle'),
    icon: resourcesIcons.extensions,
    color: 'text-indigo-500',
    bg: 'bg-indigo-100',
    link: 'https://github.com/SaulixDev/Extensiones/blob/main/Visual%20Extentions.txt',
  },
  {
    type: 'repo',
    title: t('resRepoTitle'),
    icon: resourcesIcons.repo,
    color: 'text-green-500',
    bg: 'bg-green-100',
    link: 'https://github.com/SaulixDev/Tools/blob/main/Herramientas.txt',
  },
  {
    type: 'wip',
    title: t('resWipTitle'),
    icon: resourcesIcons.wip,
    color: 'text-amber-500',
    bg: 'bg-amber-100',
    items: [
      { key: 'kotlin', name: 'Kotlin', status: 'done' },
      { key: 'python', name: 'Python', status: 'wip' },
      { key: 'react', name: 'React', status: 'wip' },
      { key: 'spring', name: 'Spring', status: 'wip' },
      { key: 'typescript', name: 'TypeScript', status: 'wip' },
      { key: 'nestjs', name: 'NestJS', status: 'wip' },
      { key: 'graphql', name: 'GraphQL', status: 'wip' },
    ],
  },
])
function handleResourceClick(card, index) {
  if (card.link) {
    window.open(card.link, '_blank')
    return
  }
  expandedResourceIndex.value = expandedResourceIndex.value === index ? null : index
}

const cards = computed(() => [
  {
    type: 'about',
    title: t('s1'),
    icon: sectionIcons.about,
    content: t('c1'),
    color: 'text-blue-400',
    bg: 'bg-blue-100',
    expanded: false,
  },
  {
    type: 'projects',
    title: t('s2'),
    icon: sectionIcons.projects,
    content: t('c2'),
    color: 'text-yellow-500',
    bg: 'bg-yellow-100',
    expanded: false,
    projects: [
      {
        type: 'project',
        title: t('tpr1'),
        description: t('pr1'),
        image: new URL('@/assets/images/edukami.png', import.meta.url).href,
        link: 'https://www.edukami.ai/es',
      },
      {
        type: 'project',
        title: t('tpr2'),
        description: t('pr2'),
        image: new URL('@/assets/images/pokedrex.png', import.meta.url).href,
        link: 'https://github.com/AlvaroYeS/Pokedrez',
      },
      {
        type: 'project',
        title: t('tpr3'),
        description: t('pr3'),
        image: new URL('@/assets/images/restauranteReservas.png', import.meta.url).href,
        link: 'https://benevolent-strudel-522079.netlify.app',
      },
      {
        type: 'project',
        title: t('tpr4'),
        description: t('pr4'),
        image: new URL('@/assets/images/frontEndProyect.png', import.meta.url).href,
        link: 'https://saulixdev.github.io/FrontEdnStore',
      },
      {
        type: 'project',
        title: t('tpr5'),
        description: t('pr5'),
        image: new URL('@/assets/images/resposivePage.png', import.meta.url).href,
        link: 'https://saulixdev.github.io/pruea',
      },
    ],
  },
  {
    type: 'tech',
    title: t('s3'),
    icon: sectionIcons.tech,
    content: '',
    color: 'text-green-500',
    bg: 'bg-green-100',
    expanded: false,
  },
  {
    type: 'contact',
    title: t('s4'),
    icon: sectionIcons.contact,
    content: '',
    color: 'text-purple-500',
    bg: 'bg-purple-100',
    expanded: false,
    link: 'mailto:saulojedaalonso@gmail.com',
  },
])

const handleCardClick = (card, index) => {
  if (card.link) {
    window.open(card.link, '_blank')
    return
  }
  expandedCardIndex.value = expandedCardIndex.value === index ? null : index
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>

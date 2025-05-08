import './assets/main.css'

import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import es from './locales/es.json'
import en from './locales/en.json'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

const i18n = createI18n({
  locale: 'es',             // idioma por defecto
  fallbackLocale: 'en',     // si falta una clave en 'es', recurre a 'en'
  messages: { es, en },
  legacy: false,            // Composition API
})

app.use(createPinia())
app.use(router)

app.mount('#app')

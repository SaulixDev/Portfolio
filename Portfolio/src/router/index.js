import { createRouter, createWebHistory } from 'vue-router'
import SobreMi from '../views/SobreMi.vue'

const routes = [{ path: '/', name: 'SobreMi', component: SobreMi }]
export default createRouter({
  history: createWebHistory(),
  routes,
})

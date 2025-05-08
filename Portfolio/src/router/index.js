import { createRouter, createWebHistory } from 'vue-router'
import SobreMi from '../views/SobreMi.vue'
import Experiencia from '../views/Experiencia.vue'
import Proyectos from '../views/Proyectos.vue'

const routes = [
  { path: '/', name: 'SobreMi', component: SobreMi },
  { path: '/experiencia', name: 'Experiencia', component: Experiencia },
  { path: '/proyectos', name: 'Proyectos', component: Proyectos },
]

export default createRouter({
  history: createWebHistory(),
  routes,
})

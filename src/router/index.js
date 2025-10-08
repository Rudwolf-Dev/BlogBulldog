import { createRouter, createWebHistory } from 'vue-router'
import home from '@/components/home.vue'
import info from '@/components/info.vue'
import deportes from '@/components/deportes.vue'
import actExt from '@/components/actExt.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: home },
    { path: '/info', component: info },
    { path: '/actExt', component: actExt },
    { path: '/deportes', component: deportes }
  ],
})

export default router

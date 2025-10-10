import { createRouter, createWebHistory } from 'vue-router'
import home from '@/components/home.vue'
import info from '@/components/info.vue'
import deportes from '@/components/deportes.vue'
import actExt from '@/components/actExt.vue'
import videoJuegos from '@/components/videoJuegos.vue'
import holaSlenderman from '@/components/holaSlenderman.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: home },
    { path: '/info', component: info },
    { path: '/actExt', component: actExt },
    { path: '/equiposRep', component: deportes },
    { path: '/videoJuegos', component: videoJuegos },
    { path: '/casiTodos', component: holaSlenderman }
  ],
})

export default router

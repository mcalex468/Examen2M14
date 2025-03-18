import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/aigua',
      name: 'about',
      component: () => import('../views/aiguaView.vue'),
    },
    {
      path: '/llistaCompra',
      name: 'llistaCompra',
      component: () => import('../views/llistaCompraView.vue')
    }
  ],
})

export default router

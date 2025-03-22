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
      component: () => import('../views/Aigua/aiguaView.vue'),
      props: true,
    },
    {
      path: '/aigua/:nom',
      name: 'aigua',
      component: () => import('../views/Aigua/aiguaDetallView.vue'),
      props: true,
    },
    {
      path: '/llistaCompra',
      name: 'llistaCompra',
      component: () => import('../views/llistaCompraView.vue')
    },
    {
      path: '/pokemons',
      name: 'pokemons',
      component: () => import('../views/Pokemon/pokemonView.vue')
    },
    {
      path: '/pokemons/:name',
      name: 'pokemonDetail',
      component: () => import('../views/Pokemon/pokemonDetailView.vue'),
      props: true
    }
  ]
});

export default router

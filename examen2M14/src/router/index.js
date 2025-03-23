import { createRouter, createWebHistory } from 'vue-router'
//import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    /*
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },*/
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
      path: '/pokemons',
      name: 'pokemons',
      component: () => import('../views/Pokemon/pokemonView.vue')
    },
    {
      path: '/pokemons/:name',
      name: 'pokemonDetail',
      component: () => import('../views/Pokemon/pokemonDetailView.vue'),
      props: true
    },
    {
      path: '/llistaCompra',
      name: 'llistaCompra',
      component: () => import('../views/LlistaCompraView.vue')
    },
    {
      path: '/usuaris',
      name: 'usuaris',
      component: () => import('../views/usuarisLlista.vue')
    },
    {
      path: '/contador',
      name: 'contador',
      component: () => import('../views/ContadorBoton.vue')
    },
    {
      path: '/lista',
      name: 'lista',
      component: () => import('../views/ListaTareas(ProvideInject)/listaTareas.vue')
    },
    {
      path: '/posts',
      name: 'posts',
      component: () => import('../views/Posts/PostsView.vue'),
      props: true
    },
    {
      path: '/posts/:id',
      name: 'postsId',
      component: () => import('../views/Posts/PostIdView.vue'),
      props: true
    },
    {
      path: '/posts/user/:userId',
      name: 'postsUserId',
      component: () => import('../views/Posts/PostsUsersView.vue'),
      props: true
    },
  ]
});

export default router

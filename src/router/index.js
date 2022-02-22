import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/tienda',
    name: 'Tienda',
    component: () => import('../views/Tienda.vue')
  },
  {
    path: '/comprar',
    name: 'Comprar',
    component: () => import('../views/Comprar.vue')
  },
  {
    path: '/detalles/:id',
    name: 'Detalles',
    component: () => import('../views/Detalles.vue')
  },
  {
    path: '/buscar/producto/:q',
    name: 'Buscar',
    component: () => import('../views/Search.vue')
  },
  {
    path: '*',
    name: '404',
    component: () => import('../views/404.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

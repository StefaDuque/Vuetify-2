import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import InicioP from '../views/Inicio.vue'
import ContactView from '../views/ContactView.vue'
import HelpView from '../views/HelpView.vue'
import InfoView from '../views/InfoView.vue'
import WhoView from '../views/WhoView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/inicio',
    name: 'inicio',
    component: InicioP
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView
  },
  {
    path: '/help',
    name: 'help',
    component: HelpView
  },
  {
    path: '/info',
    name: 'info',
    component: InfoView
  },
  {
    path: '/who',
    name: 'who',
    component: WhoView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

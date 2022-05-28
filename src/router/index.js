import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'Minhas Transações',
    component: HomeView
  }  
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

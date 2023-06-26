import { createRouter, createWebHistory } from 'vue-router'
import Admin from '../views/Admin.vue'
import Home from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/admin',
    name: 'admin',
    component: Admin

  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router

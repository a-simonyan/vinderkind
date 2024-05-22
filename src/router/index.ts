import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CartView from '../views/CartView.vue'
import PageLayout from '@/layouts/PageLayout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: PageLayout,
      children: [
        {
          path: '',
          component: CartView
        }
      ]
    }
  ]
})

export default router

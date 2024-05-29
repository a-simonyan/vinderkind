import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CartView from '../views/CartView.vue'
import PageLayout from '@/layouts/PageLayout.vue'
import IssuesView from '@/views/IssuesView.vue'
import AccessoriesView from '@/views/AccessoriesView.vue'
import SignUpView from '@/views/SignUpView.vue'
import ContactView from '@/views/ContactView.vue'
import SignInView from '@/views/SignInView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: PageLayout,
      children: [
        {
          path: '/',
          component: HomeView
        },
        {
          path: '/cart',
          component: CartView
        },
        {
          path: '/issues',
          component: IssuesView
        },
        {
          path: '/accessories',
          component: AccessoriesView
        },
        {
          path: '/sign-up',
          component: SignUpView
        },
        {
          path: '/sign-in',
          component: SignInView
        },
        {
          path: '/contact',
          component: ContactView
        }
      ]
    }
  ]
})

export default router

import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CartView from '../views/CartView.vue'
import PageLayout from '@/layouts/PageLayout.vue'
import IssuesView from '@/views/IssuesView.vue'
import AccessoriesView from '@/views/AccessoriesView.vue'
import SignUpView from '@/views/SignUpView.vue'
import ContactView from '@/views/ContactView.vue'
import SignInView from '@/views/SignInView.vue'
import OrderConfirmationView from '@/views/OrderConfirmationView.vue'
import SubscriptionConfirmationView from '@/views/SubscriptionConfirmationView.vue'
import CheckoutView from '@/views/CheckoutView.vue'
import AboutView from '@/views/AboutView.vue'
import OneTimeCode from '@/components/sign-in/OneTimeCode.vue'

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
          path: '/order-confirmation',
          component: OrderConfirmationView
        },
        {
          path: '/contact',
          component: ContactView
        },
        {
          path: '/subscription-confirmation',
          component: SubscriptionConfirmationView
        },
        {
          path: '/checkout',
          component: CheckoutView
        },
        {
          path: '/about',
          component: AboutView
        },
        { path: '/get-code', 
          component: OneTimeCode, 
          name: 'GetCode' 
        }
      ]
    }
  ]
})

export default router

import { createRouter, createWebHistory } from 'vue-router'
import Layout from '../layout/Layout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Layout,
      children: [
        {
          path: '',
          name: 'home',
          redirect: '/bounce'
        },
        {
          path: '/reveal-text',
          name: 'reveal-text',
          component: () => import('../views/text/RevealText.vue')
        },
        {
          path: '/bounce',
          name: 'bounce',
          component: () => import('../views/basic/BounceView.vue')
        },
        {
          path: '/slider',
          name: 'slider',
          component: () => import('../views/advanced/SliderView.vue')
        }
      ]
    }
  ],
})

export default router

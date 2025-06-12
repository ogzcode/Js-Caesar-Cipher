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
          redirect: '/reveal-text'
        },
        {
          path: '/reveal-text',
          name: 'reveal-text',
          component: () => import('../views/text/RevealText.vue')
        }
      ]
    }
  ],
})

export default router

import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Login from '@/views/login/index.vue'
import Dashboard from '../views/dashboard/index.vue'
import Layout from '../layout/index.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    component: Login
  },
  {
    path: '/',
    component: Layout,
    redirect:'index',
    children: [
      {
        path: 'index',
        name: 'Dashboard',
        component: Dashboard
      },
      {
        path: '/product',
        name: 'Product',
        component: ()=> import('../views/product/index.vue'),
      }]

  },

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

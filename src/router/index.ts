import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Dashboard from '@/views/Dashboard.vue'
import Heroes from '@/views/Heroes.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'dashboard',
    component: Dashboard
  },
  {
    path: '/heroes',
    name: 'heroes',
    component: Heroes
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

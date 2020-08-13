import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/2-2',
    name: 'axios请求方法',
    component: () => import('../views/2-2.vue')
  },
  {
    path: '/2-3',
    name: 'axios并发请求',
    component: () => import('../views/2-3.vue')
  },
  {
    path: '/3-1',
    name: 'axios创建实例',
    component: () => import('../views/3-1.vue')
  },
  {
    path: '/3-4',
    name: 'axios错误请求',
    component: () => import('../views/3-4.vue')
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

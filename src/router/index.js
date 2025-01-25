import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ContactView from '@/views/ContactView.vue'
import AboutView from '../views/AboutView.vue'
import LoginView from '@/views/LoginView.vue'
import DashboardView from '@/views/DashboardView.vue'
import useAuth from '@/store/auth.js'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: DashboardView,
    meta: {
      requiredAuth: false
    }
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  const auth = useAuth()
  const isAuth = auth.token
  if(to.meta.requiredAuth && isAuth == null) {
    next('/')
  } else {
    next()
  }
})

export default router

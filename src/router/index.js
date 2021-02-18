import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import viewList from '../views/viewList.vue'
import About from '../views/About.vue'

const routes = [
  {
    path: '/', name: 'Home', component: Home,
    children: [
      {path: '', component: viewList},
      {path: 'viewList', component: viewList},
    ]
  },
  {
    path: '/about', name: 'About', component: About
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

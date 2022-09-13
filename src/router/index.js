import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('../views/FrontView.vue'),
    children: [
      {
        path: '',
        component: () => import('../views/front/IndexPage.vue')
      },
      {
        path: '/searchResults',
        component: () => import('../views/front/SearchResults.vue')
      },
      {
        path: '/recipesContent',
        component: () => import('../views/front/recipesContent.vue')
      },
      {
        path: '/myOrder',
        component: () => import('../views/front/MyOrder.vue')
      },
      {
        path: '/comparison',
        component: () => import('../views/front/ComparisonView.vue')
      }
    ]
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
  history: createWebHashHistory(),
  routes,
  linkActiveClass: 'active'
})

export default router

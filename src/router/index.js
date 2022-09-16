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
        path: '/recipesContent/:id',
        component: () => import('../views/front/recipesContent.vue')
      },
      {
        path: '/myOrder',
        component: () => import('../views/front/MyOrder.vue')
      },
      {
        path: '/comparison',
        component: () => import('../views/front/ComparisonView.vue')
      },
      {
        path: '/readInstructions',
        component: () => import('../views/front/ReadInstructions.vue')
      },
      {
        path: '/about',
        component: () => import('../views/front/AboutView.vue')
      },
      {
        path: '/foodAndSupplies',
        component: () => import('../views/front/FoodAndSupplies.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  linkActiveClass: 'active',
  scrollBehavior (to, from, savedPosition) {
    return {
      top: 0
    }
  }
})

export default router

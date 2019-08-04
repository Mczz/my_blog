import Vue from 'vue'
import Router from 'vue-router'
import defaultPage from './default.vue'
import Index from '@/pages/index.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '*',
      name: 'defaultPage',
      redirect:'/index',
      component: defaultPage,
      children:[
        {
          path: '/index',
          name: 'index',
          component:Index
        },
        {
          path: '/aboutme',
          name: 'aboutme',
          component: () => import( './pages/aboutme.vue')
        },
        {
          path: '/lmsg',
          name: 'lmsg',
          component: () => import( './pages/lmsg.vue')
        }
      ]
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
})

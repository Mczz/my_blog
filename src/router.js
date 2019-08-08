import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    
        {
          path: '*',
          name: 'default',
          redirect:'/index',
        },

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
        },
        {
          path: '/allblog',
          name: 'allblog',
          component: () => import( './pages/allblog.vue')
        },
        {
          path: '/blogdetail',
          name: 'blogdetail',
          component: () => import( './pages/blogdetail.vue')
        },
        {
          path: '/tagblog',
          name: 'tagblog',
          component: () => import( './pages/tagblog.vue')
        },
        // {
        //   path: '/alllmsg',
        //   name: 'alllmsg',
        //   component: () => import( './pages/alllmsg.vue')
        // },
        // {
        //   path: '/articleComment',
        //   name: 'articleComment',
        //   component: () => import( './pages/articleComment.vue')
        // }
    //   ]
    // }
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

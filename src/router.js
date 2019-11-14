import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  // linkExactActiveClass:'active',
  linkActiveClass: "active",
  mode: 'history',
  //base: '/end/',
  routes: [{
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import( /* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: "/weather",
      name: "about",
      component: () => import("./views/weather")
    },
    {
      path: "/article",
      name: "article",
      component: () => import("./views/article"),
    },
    {
      path: "/article/:id",
      component: () => import("./views/article_detail")
    },
    {
      path: "/memorial",
      component: () => import("./views/memorial")
    },
    {
      path: "/memorial/edit",
      component: () => import("./views/edit")
    },
    {
      path: "/news",
      component: () => import("./views/news")
    },
    {
      path: "/admin",
      component: () => import("./views/admin")
      /*       children: [{
              mode: "history",
              path: "add_article",
              component: () => import("./views/add_article")
            }] */
    },
    {
      path: "/admin/add_article",
      component: () => import("./views/add_article")
    }
  ]
})
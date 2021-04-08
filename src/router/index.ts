import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import Layout from '../components/Layout/index.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/upload',
    name: 'Upload',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Layout,
    redirect: '/upload/index',
    children: [
      {
        path: 'index',
        name: 'UploadIndex',
        component: () => import(/* webpackChunkName: "about" */ '../views/Upload.vue')
      },
      {
        path: 'list',
        name: 'FileList',
        component: () => import(/* webpackChunkName: "about" */ '../views/FileList.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

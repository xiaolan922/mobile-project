import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  { 
   path: '/',
   component: ()=>import('@/views/layout') ,
   redirect: '/home',
   children: [
    {
      path: '/home',
      component: ()=>import('@/views/home')
    },
    {
      path: '/question',
      component: ()=>import('@/views/question')
    },
    {
      path: '/user',
      component: ()=>import('@/views/user')
    },
    {
      path: '/video',
      component: ()=>import('@/views/video')
    },
   ]
  },
  {
    path: '/user/profile',
    component: ()=> import('@/views/user/profile.vue')
  },
  {
    path: '/user/chat',
    component: ()=> import('@/views/user/chat.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: ()=> import('@/views/user/login.vue')
  },
  {
    path: '/article', name: 'article', component: ()=>import('@/views/article')
  },
  {
    path: '/serach',
    component: ()=> import('@/views/search')
  },
  {
    path: '/search/result',
    component: ()=> import('@/views/search/result.vue')
  }
 
]

const router = new VueRouter({
  routes
})

export default router

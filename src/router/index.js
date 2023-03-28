import { createRouter, createWebHistory } from 'vue-router'

import Home from '../components/Home.vue';
import Login from '../components/Login.vue';
import CreateUser from '../components/user/CreateUser.vue';
import CreateLawyer from '../components/lawyer/CreateLawyer.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: Home },
    { path: '/login', component: Login },
    { path: '/add/user', component: CreateUser},
    { path: '/add/lawyer', component: CreateLawyer}

  ]
})

export default router

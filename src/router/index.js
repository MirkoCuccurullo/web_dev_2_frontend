import { createRouter, createWebHistory } from 'vue-router'

import Home from '../components/Home.vue';
import Login from '../components/Login.vue';
import CreateUser from '../components/user/CreateUser.vue';
import CreateLawyer from '../components/lawyer/CreateLawyer.vue';
import CreateAppointment from '../components/appointment/CreateAppointment.vue';
import ManageAppointments from '../components/appointment/ManageAppointments.vue';
import EditAppointment from '../components/appointment/EditAppointment.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: Home },
    { path: '/login', component: Login },
    { path: '/add/user', component: CreateUser},
    { path: '/add/lawyer', component: CreateLawyer},
    { path: '/create/appointment', component: CreateAppointment},
    { path: '/manage', component: ManageAppointments},
    { path: '/editAppointment/:id', component: EditAppointment, props: true }

  ]
})

export default router

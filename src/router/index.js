import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/HomeView.vue'
const Contact = () => import('../views/ContactView.vue')

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/contact', name: 'contact', component: Contact },
  ],
})

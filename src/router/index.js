import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Foods from '../views/Foods.vue'
import Contact from '../views/Contact.vue'
import Keranjang from '../views/Keranjang.vue'
import DetilProduct from '../views/DetilProduct.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/foods',
    name: 'Foods',
    component:Foods
  },
  {
    path: '/contact',
    name: 'Contact',
    component:Contact
  },
  {
    path: '/keranjang',
    name: 'Keranjang',
    component:Keranjang
  },
  {
    path: '/detilproduct/:id',
    name: 'DetilProduct',
    component:DetilProduct
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }

]

const router = new VueRouter({
  routes
})

export default router

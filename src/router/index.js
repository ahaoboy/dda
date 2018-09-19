import Vue from 'vue'
import Router from 'vue-router'
import DDA from '../components/DDA'
import Bresenham from '../components/Bresenham'
import Display from '../components/Display'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/display',
      name: 'display',
      component: Display,
      children: []
    },
    {
      path: '/DDA',
      name: 'DDA',
      component: DDA,
    },
    {
      path: '/Bresenham',
      name: 'Bresenham',
      component: Bresenham,
    },
    {
      path: '/*',
      redirect: '/display'
    }
  ]
})

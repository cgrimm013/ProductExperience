import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import WeekDisplay from '@/components/WeekDisplay'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/weeks/:range',
      name: 'WeekDisplay',
      component: WeekDisplay
    }
  ]
})

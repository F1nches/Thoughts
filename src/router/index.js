import Vue from 'vue'
import Router from 'vue-router'

import Landing from '@/views/landing/landing'
import Signup from '@/views/signup/signup'
import Profile from '@/views/profile'
import ProfileHome from '@/views/profilehome/profilehome'
import ThoughtDeposit from '@/views/thoughtdeposit/thoughtdeposit'
import ThoughtSwipe from '@/views/thoughtswipe/thoughtswipe'
import ThoughtWallet from '@/views/thoughtwallet/thoughtwallet'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Landing',
      component: Landing
    },
    {
      path: '/register',
      name: 'Signup',
      component: Signup
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile,
      children: [
        {
          path: '/',
          name: 'ProfileHome',
          component: ProfileHome
        },
        {
          path: 'deposit',
          name: 'ThoughtDeposit',
          component: ThoughtDeposit
        },
        {
          path: 'swipe',
          name: 'ThoughtSwipe',
          component: ThoughtSwipe
        },
        {
          path: 'wallet',
          name: 'ThoughtWallet',
          component: ThoughtWallet
        }
      ]
    }
  ]
})

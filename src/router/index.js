import Vue from 'vue'
import Router from 'vue-router'


import Profile from '@/views/profile'
import ThoughtDeposit from '@/views/thoughtdeposit/thoughtdeposit'
import ThoughtSwipe from '@/views/thoughtswipe/thoughtswipe'
import ThoughtWallet from '@/views/thoughtwallet/thoughtwallet'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile,
      children: [
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

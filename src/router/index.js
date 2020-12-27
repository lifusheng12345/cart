import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import index from '@/components/index'
import search from '@/components/search'
import goods from '@/components/goods'
import lunbotu from '@/components/lunbotu'
import cart from '@/components/shoppingCart'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/index',
      name: 'index',
      component: index
    },
    {
      path: '/search',
      name: 'search',
      component: search
    },
    {
      path: '/goods',
      name: 'goods',
      component: goods
    },
    {
      path: '/lunbotu',
      name: 'lunbotu',
      component: lunbotu
    },
    {
      path: '/cart',
      name: 'cart',
      component: cart
    },
  ]
})

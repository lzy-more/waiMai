/* eslint-disable standard/object-curly-even-spacing */
/*
 * @Author: your name
 * @Date: 2020-06-11 13:39:32
 * @LastEditTime: 2020-06-19 15:58:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \gshop-client_blank\src\router\index.js
 */

import Vue from 'vue'
import VueRouter from 'vue-router'
import Msite from '../pages/Msite/Msite.vue'
import Search from '../pages/Search/Search.vue'
import Order from '../pages/Order/Order.vue'
import Profile from '../pages/Profile/Profile.vue'
import Login from '../pages/Login/Login.vue'
import shop from '../pages/shop/shop.vue'
import ShopGoods from '../pages/shop/ShopGoods/ShopGoods.vue'
import ShopInfo from '../pages/shop/ShopInfo/ShopInfo.vue'
import ShopRatings from '../pages/shop/ShopRatings/ShopRatings.vue'

Vue.use(VueRouter)
// meta:元数据
const router = new VueRouter({
  routes: [
    { path: '/', redirect: '/msite' },
    { path: '/msite', component: Msite, meta: { showFooter: true } },
    { path: '/search', component: Search, meta: { showFooter: true } },
    { path: '/order', component: Order, meta: { showFooter: true } },
    { path: '/profile', component: Profile, meta: { showFooter: true } },
    { path: '/login', component: Login },
    {
      path: '/shop',
      component: shop,
      children: [
        { path: '/shopGoods', component: ShopGoods },
        { path: '/shopInfo', component: ShopInfo },
        { path: '/shopRatings', component: ShopRatings },
        { path: '', redirect: '/shopGoods' }
      ]
    }
  ]
})

// 挂载路由导航守卫
// router.beforeEach((to, from, next) => {
//   // to 将要访问的路径
//   // from 代表从那个路径跳转而来
//   // next 是一个函数，放行
//   //    next() 放行     next('/login) 强制跳转

//   // 如果用户访问的是登录页面，则直接放行
//   if (to.path === '/login') {
//     next()
//   } else {
//     // 从 sessionStorage 中获取 保存的 token
//     const tokenStr = window.sessionStorage.getItem('userId')
//     // 如果没有token，强制跳转到登录页面，如果有，则直接放行
//     if (!tokenStr) {
//       next('/login')
//     } else {
//       next()
//     }
//   }
// })
export default router

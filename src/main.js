/*
 * @Author: your name
 * @Date: 2020-06-08 15:21:34
 * @LastEditTime: 2020-06-23 10:13:22
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \gshop-client_blank\src\main.js
 */ 
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
Vue.config.productionTip = false
import store from './store'
import { Button } from 'mint-ui';
import './mock/mockServer'
import VueLazyload from 'vue-lazyload' 
import loading from './common/img/timg.gif'
 Vue.use(VueLazyload, { loading })
Vue.component(Button.name, Button);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router,
  store
})

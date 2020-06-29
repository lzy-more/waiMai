/*
 * @Author: your name
 * @Date: 2020-06-12 15:47:03
 * @LastEditTime: 2020-06-12 15:51:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \gshop-client_blank\src\store\index.js
 */

import Vue from "vue";
import Vuex from "vuex";
import state from "./state";
import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";
Vue.use(Vuex);
export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
});

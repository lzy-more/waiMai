/*
 * @Author: your name
 * @Date: 2020-06-12 15:47:19
 * @LastEditTime: 2020-06-23 08:58:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \gshop-client_blank\src\store\mutations.js
 */
import Vue from "vue";
import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPS,
  RECEIVE_USERINFO,
  RESET_USERINFO,
  RECEIVE_GOODS,
  RECEIVE_RATINGS,
  RECEIVE_INFO,
  INCREMENT_FOOD_COUNT,
  DECREMENT_FOOD_COUNT,
  CLEAR_CART,
  RECEIVE_SEARCH_SHOPS
} from "./mutation-types";
export default {
  [RECEIVE_ADDRESS](state, { address }) {
    state.address = address;
  },
  [RECEIVE_CATEGORYS](state, { categorys }) {
    state.categorys = categorys;
  },
  [RECEIVE_SHOPS](state, { shops }) {
    state.shops = shops;
  },
  [RECEIVE_USERINFO](state, { userInfo }) {
    state.userInfo = userInfo;
  },
  [RESET_USERINFO](state) {
    state.userInfo = {};
  },
  [RECEIVE_GOODS](state, { goods }) {
    state.goods = goods;
  },
  [RECEIVE_INFO](state, { info }) {
    state.info = info;
  },
  [RECEIVE_RATINGS](state, { ratings }) {
    state.ratings = ratings;
  },

  [INCREMENT_FOOD_COUNT](state, { food }) {
    if (!food.count) {
      // 第一次增加时, 没有 count //
      food.count = 1;
      // 添加 count 属性, 并指定为 1
      // 问题: 新添加的属性没有数据劫持==>数据绑定==>更新了数据但界面不变
      Vue.delete(food, "count");// 解决set修改了数据 没有及时的更新视图
      Vue.set(food, "count", 1);

      state.cartFoods.push(food)
      // 给有数据绑定的对象添加指定属性名和值的属性(有绑定)
      state.shopCart.push(food); // 添加到购物车
    } else {
      //有 count
      food.count++;

    }
  },
  [DECREMENT_FOOD_COUNT](state, { food }) {
    if (food.count) {
      // count 有值才减 1
      food.count--;
      if (food.count === 0) {
        // 如果数量减为 0, 从购物车中移除
        // state.shopCart.splice(state.shopCart.indexOf(food), 1);
        state.cartFoods.splice(state.cartFoods.indexOf(food), 1)
      }
    }
  },
  [CLEAR_CART] (state){
   // 将所有 food 的 count 置为 0
    state.cartFoods.forEach(food => food.count = 0) 
    // 将购物车重置为空数组
     state.cartFoods = []
  },
  [RECEIVE_SEARCH_SHOPS](state, {searchShops}) { state.searchShops = searchShops },
};

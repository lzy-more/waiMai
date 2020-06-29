/*
 * @Author: your name
 * @Date: 2020-06-12 15:47:26
 * @LastEditTime: 2020-06-23 09:14:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \gshop-client_blank\src\store\actions.js
 */

import {
  reqAddress,
  reqCategorys,
  reqShops,
  reqUser,
  reqLogout,
  reqShopInfo,
  reqShopRatings,
  reqShopGoods,
  reqSearchGoods,
} from "../api";
import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SEARCH_SHOPS,
  CLEAR_CART,
  RECEIVE_SHOPS,
  RECEIVE_USERINFO,
  RESET_USERINFO,
  RECEIVE_GOODS,
  RECEIVE_RATINGS,
  RECEIVE_INFO,
  INCREMENT_FOOD_COUNT,
  DECREMENT_FOOD_COUNT,
} from "./mutation-types";
export default {
  // 异步获取地址
  async getAddress({ commit, state }) {
    const geohash = state.latitude + "," + state.longitude;
    const result = await reqAddress(geohash);
    commit(RECEIVE_ADDRESS, { address: result.data });
  },
  // 异步获取分类列表
  async getCategorys({ commit }) {
    const result = await reqCategorys();
    commit(RECEIVE_CATEGORYS, { categorys: result.data });
  },
  // 异步获取商家列表
  async getShops({ commit, state }) {
    const { latitude, longitude } = state;
    const result = await reqShops({ latitude, longitude });
    commit(RECEIVE_SHOPS, { shops: result.data });
  },
  // 同步获取个人信息 同步和异步的区别在于 现在有没有这个 如果已经有了  就是同步 否则相反
  recordUser({ commit }, userInfo) {
    commit(RECEIVE_USERINFO, { userInfo });
  },
  // 异步获取用户信息
  async getUserInfo({ commit }) {
    const result = await reqUser();
    if (result.code === 0) {
      const userInfo = result.data;
      const userId = userInfo._id;
      window.sessionStorage.setItem("userId", userId);
      commit(RECEIVE_USERINFO, { userInfo });
    }
  },
  // 异步退出
  async logout({ commit }) {
    const result = await reqLogout();
    commit(RESET_USERINFO);
  },
  // 异步获取goods
  async getGoods({ commit }) {
    const result = await reqShopGoods();
    commit(RECEIVE_GOODS, { goods: result.data });
  },
  // 异步获取商家信息
  async getShopInfo({ commit }, cb) {
    const result = await reqShopInfo();
    if (result.code === 0) {
      const info = result.data;
      info.score = 3.5;
      commit(RECEIVE_INFO, { info });
      cb && cb();
    }
  },
  // 异步获取商家商品列表
  async getShopGoods({ commit }, cb) {
    const result = await reqShopGoods();
    if (result.code === 0) {
      const goods = result.data;
      commit(RECEIVE_GOODS, { goods });
      // 如果组件中传递了接收消息的回调函数, 数据更新后, 调用回调通知调用的组件
      cb && cb();
    }
  },
  // 异步获取商家评价列表
  async getShopRatings({ commit }, cb) {
    const result = await reqShopRatings();
    if (result.code === 0) {
      const ratings = result.data;
      commit(RECEIVE_RATINGS, { ratings });
      // 数据更新 通知组件
      cb && cb();
    }
  },
  // 同步更新food中的count数量
  updateFoodCount({ commit }, { isAdd, food }) {
    if (isAdd) {
      // 增加
      commit(INCREMENT_FOOD_COUNT, { food });
    } else {
      // 减少
      commit(DECREMENT_FOOD_COUNT, { food });
    }
  },
  // 同步清空购物车食物列表
  clearCart({ commit }) {
    commit(CLEAR_CART);
  },
  // 异步获取搜索的商家列表
  async searchShop({ commit, state }, keyword) {
    const { latitude, longitude } = state;
    const result = await reqSearchGoods(latitude + "," + longitude, keyword);
    commit(RECEIVE_SEARCH_SHOPS, { searchShops: result.data });
  },
};

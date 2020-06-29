/*
 * @Author: your name
 * @Date: 2020-06-12 15:47:55
 * @LastEditTime: 2020-06-22 15:45:05
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \gshop-client_blank\src\store\getters.js
 */

export default {
  totalCount(state) {
    return state.cartFoods.reduce((preTotal, food) => preTotal + food.count, 0);
  },
  totalPrice(state) {
    return state.cartFoods.reduce(
      (preTotal, food) => preTotal + food.count * food.price,
      0
    );
  },
  positiveSize(state) {
    return state.ratings.reduce(
      (preTotal, rating) => preTotal + (rating.rateType === 0 ? 1 : 0),
      0
    );
  },
};

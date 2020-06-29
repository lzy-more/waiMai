/*
 * @Author: your name
 * @Date: 2020-06-12 13:53:39
 * @LastEditTime: 2020-06-23 09:24:55
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \gshop-client_blank\src\api\index.js
 */
/* 与后台交互模块 */

import ajax from './ajax'
const BASE_URL = ''
// [1、根据经纬度获取位置详情](#1根据经纬度获取位置详情)<br/>
export const reqAddress = geohash => ajax(BASE_URL + '/api/position/' + geohash)
// [2、获取食品分类列表](#2获取食品分类列表)<br/>
export const reqCategorys = () => ajax(BASE_URL + '/api/index_category')
// [3、根据经纬度获取商铺列表](#3根据经纬度获取商铺列表)<br/>
export const reqShops = ({latitude, longitude}) => ajax(BASE_URL + '/api/shops', {latitude, longitude})

/** * 账号密码登录 */
export const reqPwdLogin = (name, pwd, captcha) => ajax(BASE_URL + '/api/login_pwd', { name, pwd, captcha }, 'POST')
/** * 获取短信验证码 */
export const reqSendCode = phone => ajax(BASE_URL + '/api/sendcode', {phone})
/** * 手机号验证码登录 */
export const reqSmsLogin = (phone, code) => ajax(BASE_URL + '/api/login_sms', {phone, code}, 'POST')
/** * 获取用户信息(根据会话) */
export const reqUser = () => ajax(BASE_URL + '/api/userinfo')
// 退出
export const reqLogout = () => ajax(BASE_URL + '/api/logout')

/*** 获取商家信息 */
 export const reqShopInfo = () => ajax('/info') 
 /*** 获取商家评价数组 */
  export const reqShopRatings = () => ajax('/ratings') 
  /*** 获取商家商品数组 */ 
  export const reqShopGoods = () => ajax('/goods')
  /*** 根据关键字搜索相关商家数组 */ 
  export const reqSearchGoods = (geohash, keyword) => ajax('/api/search_shops', {geohash, keyword})

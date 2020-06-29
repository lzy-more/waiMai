<!--
 * @Author: your name
 * @Date: 2020-06-11 13:29:53
 * @LastEditTime: 2020-06-16 10:13:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \gshop-client_blank\src\pages\Msite\Msite.vue
-->

<template>
  <div>
    <section class="msite">
      <!--首页头部-->

      <HeaderTop :title="address.name">
        <router-link
          slot="search"
          to="/search"
          class="header_search"
        >
          <i class="iconfont">搜</i>
        </router-link>
        <router-link
          slot="login"
          :to="userInfo._id?'/userInfo':'/login'"
          class="header_login"
        >
          <span class="header_login_text" v-if="!userInfo._id">登录|注册</span>
          <span class="header_login_text" v-else><img src="./images/shop/2.jpg" alt="" style="width:30px;"></span>
        </router-link>
      </HeaderTop>
      <!--首页导航-->
      <nav class="msite_nav border-1px">
        <div
          class="swiper-container"
          v-if="categorysArr.length>0"
        >
          <div class="swiper-wrapper">
            <div
              class="swiper-slide"
              v-for="(cs, index) in categorysArr"
              :key="index"
            >
              <a
                href="javascript:"
                class="link_to_food"
                v-for="(c, index2) in cs"
                :key="index2"
              >
                <div class="food_container"> <img :src="imgBaseUrl+c.image_url"> </div>
                <span>{{c.title}}</span>
              </a> </div>
          </div>
          <div class="swiper-pagination"></div>
        </div> <img
          src="./images/msite_back.svg"
          v-else
        >
      </nav>

      <ShopList></ShopList>

    </section>
  </div>
</template>
<script>
// eslint-disable-next-line no-unused-vars
import Swiper from 'swiper'
import 'swiper/css/swiper.min.css'
import HeaderTop from '../../components/HeaderTop/HeaderTop.vue'
import ShopList from '../../components/ShopList/ShopList.vue'
import { mapState } from 'vuex'
export default {
  name: 'msite',
  components: { HeaderTop, ShopList },
  mounted () {
    // 创建一个swiper
    new Swiper('.swiper-container', {
      loop: true,
      pagination: {
        el: '.swiper-pagination'
      }
    })
  },
  data () {
    return {
      imgBaseUrl: 'https://fuss10.elemecdn.com'
    }
  },
  
    watch: {
      categorys (value) {
        //界面更新,就创建swiper settimeout有点像
        this.$nextTick(() => {//一旦完成界面更新,立即调用
          new Swiper('.swiper-container', {
            pagination: { el: '.swiper-pagination' },
            loop: true
          })
        })
      }
    
  },
  computed: {
    ...mapState(['address', 'categorys', 'userInfo']),
    categorysArr () {
      const max = 8
      const arr = []
      const { categorys } = this
      let smallArr = []
      categorys.forEach((c, index) => {
        if (smallArr.length === 0) {
          arr.push(smallArr)
        }
        smallArr.push(c)
        if (smallArr.length === max) {
          smallArr = []
        }
      })
      return arr
    }
  },
  mounted () {
    this.$store.dispatch('getCategorys')
    this.$store.dispatch('getShops')
  }
}
</script>
<style lang="less">
* {
  margin: 0;
  padding: 0;
  // overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
section .header {
  background-color: #02a774;
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
  width: 100%;
  height: 45px;
}
section .header .header_search {
  position: absolute;
  left: 15px;
  top: 50%;
  transform: translateY(-50%);
  width: 10%;
  height: 50%;
}
section .header .header_search .iconfont {
  font-size: 22px;
  color: #fff;
}
section .header .header_title {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 30%;
  color: #fff;
  font-size: 22px;
  text-align: center;
}
section.msite {
  width: 100%;
}
section.msite .header {
  background-color: #02a774;
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
  width: 100%;
  height: 45px;
}
section.msite .header .header_search {
  position: absolute;
  left: 15px;
  top: 50%;
  transform: translateY(-50%);
  width: 10%;
  height: 50%;
}
section.msite .header .header_search .icon-sousuo {
  font-size: 25px;
  color: #fff;
}
section.msite .header .header_title {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50%;
  color: #fff;
  text-align: center;
  margin-left: -5%;
}
section.msite .header .header_title .header_title_text {
  font-size: 20px;
  color: #fff;
  display: block;
}
section.msite .header .header_login {
  font-size: 14px;
  color: #fff;
  position: absolute;
  right: 15px;
  top: 50%;
  transform: translateY(-50%);
}
section.msite .header .header_login .header_login_text {
  color: #fff;
}
section.msite .msite_nav {
  position: relative;
  margin-top: 45px;
  height: 200px;
  background: #fff;
}
section.msite .msite_nav::before {
  content: "";
  position: absolute;
  z-index: 200;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 1px;
  background-color: #e4e4e4;
  transform: scaleY(0.5);
}
section.msite .msite_nav .swiper-container {
  width: 100%;
  height: 100%;
}
section.msite .msite_nav .swiper-container .swiper-wrapper {
  width: 100%;
  height: 100%;
}
section.msite .msite_nav .swiper-container .swiper-wrapper .swiper-slide {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
}
section.msite
  .msite_nav
  .swiper-container
  .swiper-wrapper
  .swiper-slide
  .link_to_food {
  width: 25%;
}
section.msite
  .msite_nav
  .swiper-container
  .swiper-wrapper
  .swiper-slide
  .link_to_food
  .food_container {
  display: block;
  width: 100%;
  text-align: center;
  padding-bottom: 10px;
  font-size: 0;
}
section.msite
  .msite_nav
  .swiper-container
  .swiper-wrapper
  .swiper-slide
  .link_to_food
  .food_container
  img {
  display: inline-block;
  width: 50px;
  height: 50px;
}
section.msite
  .msite_nav
  .swiper-container
  .swiper-wrapper
  .swiper-slide
  .link_to_food
  span {
  display: block;
  width: 100%;
  text-align: center;
  font-size: 13px;
  color: #666;
}
section.msite
  .msite_nav
  .swiper-container
  .swiper-pagination
  > span.swiper-pagination-bullet-active {
  background: #02a774;
}
section.msite .msite_shop_list {
  position: relative;
  margin-top: 10px;
  background: #fff;
}
section.msite .msite_shop_list::before {
  content: "";
  position: absolute;
  z-index: 200;
  left: 0;
  top: 0;
  width: 100%;
  height: 1px;
  background-color: #e4e4e4;
}
section.msite .msite_shop_list .shop_header {
  padding: 10px 10px 0;
}
section.msite .msite_shop_list .shop_header .shop_icon {
  margin-left: 5px;
  color: #999;
}
section.msite .msite_shop_list .shop_header .shop_header_title {
  color: #999;
  font-size: 14px;
  line-height: 20px;
}
section.msite .msite_shop_list .shop_container {
  margin-bottom: 50px;
}
section.msite .msite_shop_list .shop_container .shop_list .shop_li {
  position: relative;
  width: 100%;
  list-style: none;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
section.msite .msite_shop_list .shop_container .shop_list .shop_li::before {
  content: "";
  position: absolute;
  z-index: 200;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 1px;
  background-color: #f1f1f1;
  transform: scaleY(0.5);
}
section.msite .msite_shop_list .shop_container .shop_list .shop_li > a {
  *zoom: 1;
  display: block;
  box-sizing: border-box;
  padding: 15px 8px;
  width: 100%;
}
section.msite .msite_shop_list .shop_container .shop_list .shop_li > a::after {
  content: "";
  display: block;
  clear: both;
}
section.msite
  .msite_shop_list
  .shop_container
  .shop_list
  .shop_li
  > a
  .shop_left {
  float: left;
  box-sizing: border-box;
  width: 23%;
  height: 75px;
  padding-right: 10px;
}
section.msite
  .msite_shop_list
  .shop_container
  .shop_list
  .shop_li
  > a
  .shop_left
  .shop_img {
  display: block;
  width: 100%;
  height: 100%;
}
section.msite
  .msite_shop_list
  .shop_container
  .shop_list
  .shop_li
  > a
  .shop_right {
  float: right;
  width: 77%;
}
section.msite
  .msite_shop_list
  .shop_container
  .shop_list
  .shop_li
  > a
  .shop_right
  .shop_detail_header {
  *zoom: 1;
  width: 100%;
}
section.msite
  .msite_shop_list
  .shop_container
  .shop_list
  .shop_li
  > a
  .shop_right
  .shop_detail_header::after {
  content: "";
  display: block;
  clear: both;
}
section.msite
  .msite_shop_list
  .shop_container
  .shop_list
  .shop_li
  > a
  .shop_right
  .shop_detail_header
  .shop_title {
  float: left;
  width: 200px;
  color: #333;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
}
section.msite
  .msite_shop_list
  .shop_container
  .shop_list
  .shop_li
  > a
  .shop_right
  .shop_detail_header
  .shop_title::before {
  content: "品牌";
  display: inline-block;
  font-size: 11px;
  line-height: 11px;
  color: #333;
  background-color: #ffd930;
  padding: 2px 2px;
  border-radius: 2px;
  margin-right: 5px;
}
section.msite
  .msite_shop_list
  .shop_container
  .shop_list
  .shop_li
  > a
  .shop_right
  .shop_detail_header
  .shop_detail_ul {
  float: right;
  margin-top: 3px;
}
section.msite
  .msite_shop_list
  .shop_container
  .shop_list
  .shop_li
  > a
  .shop_right
  .shop_detail_header
  .shop_detail_ul
  .supports {
  float: left;
  font-size: 10px;
  color: #999;
  border: 1px solid #f1f1f1;
  padding: 0 2px;
  border-radius: 2px;
}
section.msite
  .msite_shop_list
  .shop_container
  .shop_list
  .shop_li
  > a
  .shop_right
  .shop_rating_order {
  *zoom: 1;
  width: 100%;
  margin-top: 18px;
  margin-bottom: 8px;
}
section.msite
  .msite_shop_list
  .shop_container
  .shop_list
  .shop_li
  > a
  .shop_right
  .shop_rating_order::after {
  content: "";
  display: block;
  clear: both;
}
section.msite
  .msite_shop_list
  .shop_container
  .shop_list
  .shop_li
  > a
  .shop_right
  .shop_rating_order
  .shop_rating_order_left {
  float: left;
  color: #ff9a0d;
}
section.msite
  .msite_shop_list
  .shop_container
  .shop_list
  .shop_li
  > a
  .shop_right
  .shop_rating_order
  .shop_rating_order_left
  .star {
  float: left;
  font-size: 0;
}
section.msite
  .msite_shop_list
  .shop_container
  .shop_list
  .shop_li
  > a
  .shop_right
  .shop_rating_order
  .shop_rating_order_left
  .star
  .star-item {
  display: inline-block;
  background-repeat: no-repeat;
}
section.msite
  .msite_shop_list
  .shop_container
  .shop_list
  .shop_li
  > a
  .shop_right
  .shop_rating_order
  .shop_rating_order_left
  .star.star-48
  .star-item {
  width: 20px;
  height: 20px;
  margin-right: 22px;
  background-size: 20px 20px;
}
section.msite
  .msite_shop_list
  .shop_container
  .shop_list
  .shop_li
  > a
  .shop_right
  .shop_rating_order
  .shop_rating_order_left
  .star.star-48
  .star-item:last-child {
  margin-right: 0;
}
section.msite
  .msite_shop_list
  .shop_container
  .shop_list
  .shop_li
  > a
  .shop_right
  .shop_rating_order
  .shop_rating_order_left
  .star.star-48
  .star-item.on {
  background-image: url("./images/stars/star48_on@2x.png");
}
@media (-webkit-min-device-pixel-ratio: 3), (min-device-pixel-ratio: 3) {
  section.msite
    .msite_shop_list
    .shop_container
    .shop_list
    .shop_li
    > a
    .shop_right
    .shop_rating_order
    .shop_rating_order_left
    .star.star-48
    .star-item.on {
    background-image: url("./images/stars/star48_on@3x.png");
  }
}
section.msite
  .msite_shop_list
  .shop_container
  .shop_list
  .shop_li
  > a
  .shop_right
  .shop_rating_order
  .shop_rating_order_left
  .star.star-48
  .star-item.half {
  background-image: url("./images/stars/star48_half@2x.png");
}
@media (-webkit-min-device-pixel-ratio: 3), (min-device-pixel-ratio: 3) {
  section.msite
    .msite_shop_list
    .shop_container
    .shop_list
    .shop_li
    > a
    .shop_right
    .shop_rating_order
    .shop_rating_order_left
    .star.star-48
    .star-item.half {
    background-image: url("./images/stars/star48_half@3x.png");
  }
}
section.msite
  .msite_shop_list
  .shop_container
  .shop_list
  .shop_li
  > a
  .shop_right
  .shop_rating_order
  .shop_rating_order_left
  .star.star-48
  .star-item.off {
  background-image: url("./images/stars/star48_off@2x.png");
}
@media (-webkit-min-device-pixel-ratio: 3), (min-device-pixel-ratio: 3) {
  section.msite
    .msite_shop_list
    .shop_container
    .shop_list
    .shop_li
    > a
    .shop_right
    .shop_rating_order
    .shop_rating_order_left
    .star.star-48
    .star-item.off {
    background-image: url("./images/stars/star48_off@3x.png");
  }
}
section.msite
  .msite_shop_list
  .shop_container
  .shop_list
  .shop_li
  > a
  .shop_right
  .shop_rating_order
  .shop_rating_order_left
  .star.star-36
  .star-item {
  width: 15px;
  height: 15px;
  margin-right: 6px;
  background-size: 15px 15px;
}
section.msite
  .msite_shop_list
  .shop_container
  .shop_list
  .shop_li
  > a
  .shop_right
  .shop_rating_order
  .shop_rating_order_left
  .star.star-36
  .star-item:last-child {
  margin-right: 0;
}
section.msite
  .msite_shop_list
  .shop_container
  .shop_list
  .shop_li
  > a
  .shop_right
  .shop_rating_order
  .shop_rating_order_left
  .star.star-36
  .star-item.on {
  background-image: url("./images/stars/star36_on@2x.png");
}
@media (-webkit-min-device-pixel-ratio: 3), (min-device-pixel-ratio: 3) {
  section.msite
    .msite_shop_list
    .shop_container
    .shop_list
    .shop_li
    > a
    .shop_right
    .shop_rating_order
    .shop_rating_order_left
    .star.star-36
    .star-item.on {
    background-image: url("./images/stars/star36_on@3x.png");
  }
}
section.msite
  .msite_shop_list
  .shop_container
  .shop_list
  .shop_li
  > a
  .shop_right
  .shop_rating_order
  .shop_rating_order_left
  .star.star-36
  .star-item.half {
  background-image: url("./images/stars/star36_half@2x.png");
}
@media (-webkit-min-device-pixel-ratio: 3), (min-device-pixel-ratio: 3) {
  section.msite
    .msite_shop_list
    .shop_container
    .shop_list
    .shop_li
    > a
    .shop_right
    .shop_rating_order
    .shop_rating_order_left
    .star.star-36
    .star-item.half {
    background-image: url("./images/stars/star36_half@3x.png");
  }
}
section.msite
  .msite_shop_list
  .shop_container
  .shop_list
  .shop_li
  > a
  .shop_right
  .shop_rating_order
  .shop_rating_order_left
  .star.star-36
  .star-item.off {
  background-image: url("./images/stars/star36_off@2x.png");
}
@media (-webkit-min-device-pixel-ratio: 3), (min-device-pixel-ratio: 3) {
  section.msite
    .msite_shop_list
    .shop_container
    .shop_list
    .shop_li
    > a
    .shop_right
    .shop_rating_order
    .shop_rating_order_left
    .star.star-36
    .star-item.off {
    background-image: url("./images/stars/star36_off@3x.png");
  }
}
section.msite
  .msite_shop_list
  .shop_container
  .shop_list
  .shop_li
  > a
  .shop_right
  .shop_rating_order
  .shop_rating_order_left
  .star.star-24
  .star-item {
  width: 10px;
  height: 10px;
  margin-right: 3px;
  background-size: 10px 10px;
}
section.msite
  .msite_shop_list
  .shop_container
  .shop_list
  .shop_li
  > a
  .shop_right
  .shop_rating_order
  .shop_rating_order_left
  .star.star-24
  .star-item:last-child {
  margin-right: 0;
}
section.msite
  .msite_shop_list
  .shop_container
  .shop_list
  .shop_li
  > a
  .shop_right
  .shop_rating_order
  .shop_rating_order_left
  .star.star-24
  .star-item.on {
  background-image: url("./images/stars/star24_on@2x.png");
}
@media (-webkit-min-device-pixel-ratio: 3), (min-device-pixel-ratio: 3) {
  section.msite
    .msite_shop_list
    .shop_container
    .shop_list
    .shop_li
    > a
    .shop_right
    .shop_rating_order
    .shop_rating_order_left
    .star.star-24
    .star-item.on {
    background-image: url("./images/stars/star24_on@3x.png");
  }
}
section.msite
  .msite_shop_list
  .shop_container
  .shop_list
  .shop_li
  > a
  .shop_right
  .shop_rating_order
  .shop_rating_order_left
  .star.star-24
  .star-item.half {
  background-image: url("./images/stars/star24_half@2x.png");
}
@media (-webkit-min-device-pixel-ratio: 3), (min-device-pixel-ratio: 3) {
  section.msite
    .msite_shop_list
    .shop_container
    .shop_list
    .shop_li
    > a
    .shop_right
    .shop_rating_order
    .shop_rating_order_left
    .star.star-24
    .star-item.half {
    background-image: url("./images/stars/star24_half@3x.png");
  }
}
section.msite
  .msite_shop_list
  .shop_container
  .shop_list
  .shop_li
  > a
  .shop_right
  .shop_rating_order
  .shop_rating_order_left
  .star.star-24
  .star-item.off {
  background-image: url("./images/stars/star24_off@2x.png");
}
@media (-webkit-min-device-pixel-ratio: 3), (min-device-pixel-ratio: 3) {
  section.msite
    .msite_shop_list
    .shop_container
    .shop_list
    .shop_li
    > a
    .shop_right
    .shop_rating_order
    .shop_rating_order_left
    .star.star-24
    .star-item.off {
    background-image: url("./images/stars/star24_off@3x.png");
  }
}
section.msite
  .msite_shop_list
  .shop_container
  .shop_list
  .shop_li
  > a
  .shop_right
  .shop_rating_order
  .shop_rating_order_left
  .rating_section {
  float: left;
  font-size: 10px;
  color: #ff6000;
  margin-left: 4px;
}
section.msite
  .msite_shop_list
  .shop_container
  .shop_list
  .shop_li
  > a
  .shop_right
  .shop_rating_order
  .shop_rating_order_left
  .order_section {
  float: left;
  font-size: 10px;
  color: #666;
  transform: scale(0.8);
}
section.msite
  .msite_shop_list
  .shop_container
  .shop_list
  .shop_li
  > a
  .shop_right
  .shop_rating_order
  .shop_rating_order_right {
  float: right;
  font-size: 0;
}
section.msite
  .msite_shop_list
  .shop_container
  .shop_list
  .shop_li
  > a
  .shop_right
  .shop_rating_order
  .shop_rating_order_right
  .delivery_style {
  transform-origin: 35px 0;
  transform: scale(0.7);
  display: inline-block;
  font-size: 12px;
  padding: 1px;
  border-radius: 2px;
}
section.msite
  .msite_shop_list
  .shop_container
  .shop_list
  .shop_li
  > a
  .shop_right
  .shop_rating_order
  .shop_rating_order_right
  .delivery_left {
  color: #fff;
  margin-right: -10px;
  background-color: #02a774;
  border: 1px solid #02a774;
}
section.msite
  .msite_shop_list
  .shop_container
  .shop_list
  .shop_li
  > a
  .shop_right
  .shop_rating_order
  .shop_rating_order_right
  .delivery_right {
  color: #02a774;
  border: 1px solid #02a774;
}
section.msite
  .msite_shop_list
  .shop_container
  .shop_list
  .shop_li
  > a
  .shop_right
  .shop_distance {
  *zoom: 1;
  width: 100%;
  font-size: 12px;
}
section.msite
  .msite_shop_list
  .shop_container
  .shop_list
  .shop_li
  > a
  .shop_right
  .shop_distance::after {
  content: "";
  display: block;
  clear: both;
}
section.msite
  .msite_shop_list
  .shop_container
  .shop_list
  .shop_li
  > a
  .shop_right
  .shop_distance
  .shop_delivery_msg {
  float: left;
  transform-origin: 0;
  transform: scale(0.9);
  color: #666;
}
section.msite
  .msite_shop_list
  .shop_container
  .shop_list
  .shop_li
  > a
  .shop_right
  .shop_distance
  .segmentation {
  color: #ccc;
}
</style>

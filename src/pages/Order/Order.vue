<!--
 * @Author: your name
 * @Date: 2020-06-11 13:30:32
 * @LastEditTime: 2020-06-12 09:12:02
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \gshop-client_blank\src\pages\Order\Order.vue
-->

<template>
  <div>
    <section class="order">
      <HeaderTop title="订单列表"></HeaderTop>
      <section class="order_no_login">
        <img src="./order/person.png">
        <h3>登录后查看外卖订单</h3> <button>立即登陆</button>
      </section>
    </section>
  </div>
</template>
<script>
import HeaderTop from '../../components/HeaderTop/HeaderTop.vue'
export default {
  components: { HeaderTop }
}
</script>
<style lang="less">
// div{width:200px;height:200px;}

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
section.order {
  width: 100%;
}
section.order .order_no_login {
  padding-top: 140px;
  width: 60%;
  margin: 0 auto;
  text-align: center;
}
section.order .order_no_login > img {
  display: block;
  width: 100%;
  height: 30%;
}
section.order .order_no_login > h3 {
  padding: 10px 0;
  font-size: 17px;
  color: #6a6a6a;
}
section.order .order_no_login > button {
  display: inline-block;
  background: #02a774;
  font-size: 14px;
  color: #fff;
  border: 0;
  outline: none;
  border-radius: 5px;
  padding: 10px 20px;
}
</style>

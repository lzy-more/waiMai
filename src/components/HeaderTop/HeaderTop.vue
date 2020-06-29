<!--
 * @Author: your name
 * @Date: 2020-06-11 16:53:36
 * @LastEditTime: 2020-06-13 09:38:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \gshop-client_blank\src\components\HeaderTop\HeaderTop.vue
-->

<template>
  <div>

    <header class="header">
      <slot name="search"></slot>
      <a class="header_title"> <span class="header_title_text ellipsis">{{title}}</span> </a>
      <slot name="login"></slot>
    </header>

  </div>
</template>
<script>

export default {
  props: {
    title: {
      type: String
    }
  },
}
</script>
<style lang="less">
 .header {
  background-color: #02a774;
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
  width: 100%;
  height: 45px;
}
 .header .header_search {
  position: absolute;
  left: 15px;
  top: 50%;
  transform: translateY(-50%);
  width: 10%;
  height: 50%;
}
.header .header_search .iconfont {
  font-size: 22px;
  color: #fff;
}
 .header .header_title {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 30%;
  color: #fff;
  font-size: 22px;
  text-align: center;
}

 .header {
  background-color: #02a774;
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
  width: 100%;
  height: 45px;
}
 .header .header_search {
  position: absolute;
  left: 15px;
  top: 50%;
  transform: translateY(-50%);
  width: 10%;
  height: 50%;
}
 .header .header_search .icon-sousuo {
  font-size: 25px;
  color: #fff;
}
 .header .header_title {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50%;
  color: #fff;
  text-align: center;
  margin-left: -5%;
}
 .header .header_title .header_title_text {
  font-size: 20px;
  color: #fff;
  display: block;
}
 .header .header_login {
  font-size: 14px;
  color: #fff;
  position: absolute;
  right: 15px;
  top: 50%;
  transform: translateY(-50%);
}
 .header .header_login .header_login_text {
  color: #fff;
}
</style>

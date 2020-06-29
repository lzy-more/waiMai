<!--
 * @Author: your name
 * @Date: 2020-06-11 13:29:08
 * @LastEditTime: 2020-06-11 15:31:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \gshop-client_blank\src\components\FooterGuide\FooterGuide.vue
-->

<template>
  <div>
    <footer class="footer_guide border-1px">
      <div
        class="guide_item"
        @click="goto('/msite')"
        :class="{on: isCurrent('/msite')}"
      > <span class="item_icon"> <i class="iconfont icon-waimai"></i> </span> <span>首页</span> </div>
      <div
        class="guide_item"
        @click="goto('/search')"
        :class="{on: isCurrent('/search')}"
      > <span class="item_icon"> <i class="iconfont icon-search"></i> </span> <span>搜索</span> </div>
      <div
        class="guide_item"
        @click="goto('/order')"
        :class="{on: isCurrent('/order')}"
      > <span class="item_icon"> <i class="iconfont icon-dingdan"></i> </span> <span>订单</span> </div>
      <div
        class="guide_item"
        @click="goto('/profile')"
        :class="{on: isCurrent('/profile')}"
      > <span class="item_icon"> <i class="iconfont icon-geren"></i> </span> <span>我的</span> </div>
    </footer>
  </div>
</template>
<script>
export default {
  data () {
    return {}
  },
  methods: {
    goto (path) {
      this.$router.replace(path)
    },
    isCurrent (path) {
      // console.log(this.$route.path)
      return this.$route.path === path
    }
  }
}
</script>
<style lang="less">
// div{width:200px;height:200px;}

.footer_guide {
  position: relative;
  position: fixed;
  z-index: 100;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #fff;
  width: 100%;
  height: 50px;
  display: flex;
}
.guide_item {
  text-decoration: none;
  background-color: pink;
}
.footer_guide::before {
  content: "";
  position: absolute;
  z-index: 200;
  left: 0;
  top: 0;
  width: 100%;
  height: 1px;
  background-color: #e4e4e4;
}
.footer_guide .guide_item {
  display: flex;
  flex: 1;
  text-align: center;
  flex-direction: column;
  align-items: center;
  margin: 5px;
  height:50px;
  color: #999;
}
.footer_guide .guide_item.on {
  color: #02a774;
}

.footer_guide .guide_item span .iconfont {
  font-size: 22px;
}
</style>

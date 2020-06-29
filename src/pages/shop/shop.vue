<!--
 * @Author: your name
 * @Date: 2020-06-16 14:43:03
 * @LastEditTime: 2020-06-18 13:28:46
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \gshop-client_blank\src\pages\shop\ShopGoods\shop.vue
--> 
<template>
  <div>
    <ShopHeader />
    <div class="tab">
      <div class="tab-item">
        <router-link to="/shopGoods">点餐</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/shopRatings">评价</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/shopInfo">商家</router-link>
      </div>
    </div>

    <router-view />
  </div>
</template>
<script>
import ShopHeader from "../../components/ShopHeader/ShopHeader.vue";
import { mapActions } from "vuex";
export default {
  components: { ShopHeader },
  data() {
    return {};
  },
  computed: {
    
  },
  mounted() {
     this.getShopGoods()
     this.getShopInfo()
  },
  methods: {
    ...mapActions(['getShopGoods','getShopInfo'])
  },
};
</script>
<style lang="less">
.tab {
  height: 40px;
  line-height: 40px;
  display: flex;
  background-color: coral;

  .tab-item {
    flex: 1;
    text-align: center;
    a {
      text-decoration: none;
      color: black;
      font-size: 18px;
      display: inline-block;
      width: 100%;
      height: 100%;

      &.router-link-active {
        color: green;
        border-bottom: 1px solid green;
      }
    }
  }
}
</style>
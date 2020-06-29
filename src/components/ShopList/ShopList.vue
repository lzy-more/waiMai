<!--
 * @Author: your name
 * @Date: 2020-06-12 09:30:59
 * @LastEditTime: 2020-06-16 14:55:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \gshop-client_blank\src\components\ShopList\ShopList.vue
-->
<template>
    <div>
           <!--首页附近商家-->
      <div class="msite_shop_list">
        <div class="shop_header">
          <i class="iconfont icon-xuanxiang"></i>
          <span class="shop_header_title">附近商家</span>
        </div>
        <div class="shop_container" style="overflow:scroll">
          <ul class="shop_list">
            <li class="shop_li border-1px" v-for="(item, index) in shops" :key="index" @click="$router.push('/shop')">
              <a>
                <div class="shop_left">
                  <img
                    class="shop_img"
                    src="./images/shop/1.jpg"
                  >
                </div>
                <div class="shop_right">
                  <section class="shop_detail_header">
                    <h4 class="shop_title ellipsis">{{item.name}}</h4>
                    <ul class="shop_detail_ul">
                    <li class="supports" v-for="item in item.supports" :key="item.id">{{item.icon_name}}</li>
                    </ul>
                  </section>
                  <section class="shop_rating_order">
                    <section class="shop_rating_order_left">
                     <Star :score="item.rating" :size="24"></Star>
                      <div class="rating_section">
                       {{item.rating}}
                      </div>
                      <div class="order_section">
                        月售{{item.recent_order_num}}单
                      </div>
                    </section>
                    <section class="shop_rating_order_right">
                      <span class="delivery_style delivery_right">{{item.delivery_mode.text}}</span>
                    </section>
                  </section>
                  <section class="shop_distance">
                    <p class="shop_delivery_msg">
                      <span>¥{{item.float_minimum_order_amount}}起送</span>
                      <span class="segmentation">/</span>
                      <span>配送费约¥{{item.piecewise_agent_fee.tips}}</span>
                    </p>
                  </section>
                </div>
              </a>
            </li>

          </ul>
        </div>
      </div>
    </div>
</template>
<script>
import {mapActions, mapState} from 'vuex'
import Star from '../Star/Star.vue'
export default {
  components:{Star},
  data () {
    return {

    }
  },
  created () {
    this.getShops()
  },
  computed: {
    ...mapState(['shops'])
  },
  methods: {
    ...mapActions(['getShops'])
  }
}
</script>
<style lang="less">

</style>

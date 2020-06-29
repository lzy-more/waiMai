<!--
 * @Author: your name
 * @Date: 2020-06-19 15:34:07
 * @LastEditTime: 2020-06-22 09:58:26
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \gshop-client_blank\src\components\CartControl\CartControl.vue
--> 
<template>
  <div>
    <div class="cartcontrol">
      <transition name="move">
        <div
          class="iconfont icon-remove_circle_outline"
          v-if="food.count"
          @click.stop="updateFoodCount(false)"
        ></div>
      </transition>

      <div
        class="cart-count"
        v-if="food.count"
      >{{food.count}}</div>

      <transition>
        <div
          class="iconfont icon-add_circle"
          @click.stop="updateFoodCount(true)"
        ></div>
      </transition>

    </div>
  </div>
</template>
<script>
export default {
  props: ["food"],
  data() {
    return {};
  },
 
  created() {
    // console.log('====================================');
    // console.log(this.food);
    // console.log('====================================');
  },
  methods: {
    // 更新 food 的 count
    updateFoodCount(isAdd) {
      const { food } = this;
      // 通知 action 更新
      this.$store.dispatch("updateFoodCount", { food, isAdd });
      console.log("====================================");
      console.log(this.food);
      console.log("====================================");
    }
  }
};
</script>
<style lang="stylus" rel="stylesheet/stylus">
@import '../../common/stylus/mixins.styl';

.cartcontrol {
  font-size: 0;

  .cart-decrease {
    display: inline-block;
    padding: 6px;
    line-height: 24px;
    font-size: 24px;
    color: rgb(0, 160, 220);
  }

  .icon-remove_circle_outline {
    display: inline-block;
    padding: 6px;
    line-height: 24px;
    font-size: 24px;
    color: $green;

    &.move-enter-active, &.move-leave-active {
      transition: all 0.3s;
    }

    &.move-enter, &.move-leave-to {
      opacity: 0;
      transform: translateX(15px) rotate(180deg);
    }
  }

  .cart-count {
    display: inline-block;
    vertical-align: top;
    width: 12px;
    padding-top: 6px;
    line-height: 24px;
    text-align: center;
    font-size: 10px;
    color: rgb(147, 153, 159);
  }

  .icon-add_circle {
    display: inline-block;
    padding: 6px;
    line-height: 24px;
    font-size: 24px;
    color: $green;
  }
}
</style>

<!--
 * @Author: your name
 * @Date: 2020-06-08 15:21:34
 * @LastEditTime: 2020-06-16 13:38:26
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \gshop-client_blank\src\App.vue
-->

<template>
  <div id="app">
<router-view></router-view>
<FooterGuide v-show="$route.meta.showFooter"></FooterGuide>
  </div>
</template>

<script>

import FooterGuide from './components/FooterGuide/FooterGuide.vue'
import {mapActions} from 'vuex'
export default {
  components: {FooterGuide},
  data () {
    return {

    }
  },
  mounted () {
this.getAddress()
this.getUserInfo()
// console.log(this.$store.state);

  },
  methods: {
    ...mapActions(['getAddress', 'getUserInfo'])
  },
}
</script>

<style lang="less">
// div{width:200px;height:200px;}
@media only screen and (-webkit-device-pixel-ratio: 2) {
  .border-1px::before {
    transform: scaleY(0.5);
  }
}
@media only screen and (-webkit-device-pixel-ratio: 3) {
  .border-1px::before {
    transform: scaleY(0.333333);
  }
}

#app {
  width: 100%;
  height: 100%;
  background: #f5f5f5;
  position: relative;
}
</style>

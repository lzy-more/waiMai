<!--
 * @Author: your name
 * @Date: 2020-06-13 20:48:22
 * @LastEditTime: 2020-06-13 21:30:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \gshop-client_blank\src\components\Star\Star.vue
-->
<template>
  <div
    class="star"
    :class="'star-'+size"
  >
    <span
      class="star-item"
      v-for="(sc, index) in starClasses"
      :key="index"
      :class="sc"
    ></span>

  </div>
</template>
<script>
export default {

  props: {
    size: Number,
    score: Number
  },
  computed: {
    starClasses () {
      const {score, size} = this
      // console.log(score,size);
      const sArr = []

      const fullStar = Math.floor(score)
      for (let i = 0; i < fullStar; i++) {
        sArr.push('on')
      }
      if (score * 10 - fullStar * 10 >= 5) {
        sArr.push('half')
      }
      if (sArr.length < 5) {
        sArr.push('off')
      }

      return sArr
    }
  }

}
</script>
<style lang="less">
.star {
  float: left;
  font-size: 0;
}
.star .star-item {
  display: inline-block;
  background-repeat: no-repeat;
}
.star.star-48 .star-item {
  width: 20px;
  height: 20px;
  margin-right: 22px;
  background-size: 20px 20px;
}
.star.star-48 .star-item:last-child {
  margin-right: 0;
}
.star.star-48 .star-item.on {
  background-image: url("./stars/star48_on@2x.png");
}
@media (-webkit-min-device-pixel-ratio: 3), (min-device-pixel-ratio: 3) {
  .star.star-48 .star-item.on {
    background-image: url("./stars/star48_on@3x.png");
  }
}
.star.star-48 .star-item.half {
  background-image: url("./stars/star48_half@2x.png");
}
@media (-webkit-min-device-pixel-ratio: 3), (min-device-pixel-ratio: 3) {
  .star.star-48 .star-item.half {
    background-image: url("./stars/star48_half@3x.png");
  }
}
.star.star-48 .star-item.off {
  background-image: url("./stars/star48_off@2x.png");
}
@media (-webkit-min-device-pixel-ratio: 3), (min-device-pixel-ratio: 3) {
  .star.star-48 .star-item.off {
    background-image: url("./stars/star48_off@3x.png");
  }
}
.star.star-36 .star-item {
  width: 15px;
  height: 15px;
  margin-right: 6px;
  background-size: 15px 15px;
}
.star.star-36 .star-item:last-child {
  margin-right: 0;
}
.star.star-36 .star-item.on {
  background-image: url("./stars/star36_on@2x.png");
}
@media (-webkit-min-device-pixel-ratio: 3), (min-device-pixel-ratio: 3) {
  .star.star-36 .star-item.on {
    background-image: url("./stars/star36_on@3x.png");
  }
}
.star.star-36 .star-item.half {
  background-image: url("./stars/star36_half@2x.png");
}
@media (-webkit-min-device-pixel-ratio: 3), (min-device-pixel-ratio: 3) {
  .star.star-36 .star-item.half {
    background-image: url("./stars/star36_half@3x.png");
  }
}
.star.star-36 .star-item.off {
  background-image: url("./stars/star36_off@2x.png");
}
@media (-webkit-min-device-pixel-ratio: 3), (min-device-pixel-ratio: 3) {
  .star.star-36 .star-item.off {
    background-image: url("./stars/star36_off@3x.png");
  }
}
.star.star-24 .star-item {
  width: 10px;
  height: 10px;
  margin-right: 3px;
  background-size: 10px 10px;
}
.star.star-24 .star-item:last-child {
  margin-right: 0;
}
.star.star-24 .star-item.on {
  background-image: url("./stars/star24_on@2x.png");
}
@media (-webkit-min-device-pixel-ratio: 3), (min-device-pixel-ratio: 3) {
  .star.star-24 .star-item.on {
    background-image: url("./stars/star24_on@3x.png");
  }
}
.star.star-24 .star-item.half {
  background-image: url("./stars/star24_half@2x.png");
}
@media (-webkit-min-device-pixel-ratio: 3), (min-device-pixel-ratio: 3) {
  .star.star-24 .star-item.half {
    background-image: url("./stars/star24_half@3x.png");
  }
}
.star.star-24 .star-item.off {
  background-image: url("./stars/star24_off@2x.png");
}
@media (-webkit-min-device-pixel-ratio: 3), (min-device-pixel-ratio: 3) {
  .star.star-24 .star-item.off {
    background-image: url("./stars/star24_off@3x.png");
  }
}
</style>

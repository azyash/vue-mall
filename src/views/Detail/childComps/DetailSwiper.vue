<template>
  <swiper>
    <swiper-item v-for="item in topImages" :key="item.index" class="swiper-item">
      <img :src="item" alt="">
    </swiper-item>
  </swiper>
</template>

<script>
import { Swiper, SwiperItem } from 'components/common/swiper'

export default {
  props: {
    topImages: {
      type: Array,
      default () {
        return []
      }
    }
  },
  components: {
    Swiper,
    SwiperItem
  },
  created () {  //methods和data已经初始化,常用于操作数据，发起ajax请求
  },

}
</script>

<style scoped>
.swiper-item {
  height: 300px;
  overflow: hidden;
}
</style>
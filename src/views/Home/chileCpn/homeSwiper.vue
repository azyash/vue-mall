<template>
  <div v-if="banner.length">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item,index) in banner" :key="index">
          <img :src="item.image" alt="">
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>

<script>
import Swiper from 'swiper'
export default {
  props: {
    banner: {
      type: Array,
      value: []
    }
  },
  methods: {
    initSwiper () {
      setTimeout(() => {
        this.mySwiper = new Swiper('.swiper-container', {
          direction: 'horizontal',
          autoplay: {
            delay: 500,
            disableOnInteraction: false
          },
          observeParents: true,
          loop: true,
          pagination: {
            el: '.swiper-pagination',
          },
        });
      }, 300)
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.initSwiper()
    })
  },
}
</script>

<style scoped>
.swiper-slide {
  width: 100%;
}
.swiper-slide img {
  width: 100%;
}
.swiper-container {
  --swiper-theme-color: #ff5777;
}
</style>
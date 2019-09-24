<template>
  <div v-if="active" ref="swiper">
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
  data () {
    return {
      active: false
    }
  },
  props: {
    banner: {
      type: Array,
      value: []
    }
  },
  methods: {
    initSwiper () {
      var timeout = setTimeout(() => {
        var mySwiper = new Swiper('.swiper-container', {
          direction: 'horizontal',
          autoplay: {
            delay: 500,
            disableOnInteraction: false
          },
          observer: true,
          observeParents: true,
          loop: true,
          pagination: {
            el: '.swiper-pagination',
          },
        });
      }, 300)
    }
  },
  deactivated () {
    this.active = false
  },
  activated () {
    this.$nextTick(() => {
      this.initSwiper()
      this.active = true
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
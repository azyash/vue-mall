<template>
  <swiper>
    <swiper-item v-for="item in banners" :key='item.index'>
      <a :href="item.link">
        <img :src="item.image" alt="" @load="imageLoad">
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
import { Swiper, SwiperItem } from 'components/common/swiper'
export default {
  data () {
    return {
      isload: false
    }
  },
  props: {
    banners: {
      type: Array,
      default () {
        return []
      }
    }
  },
  components: {
    Swiper, SwiperItem
  },
  methods: {
    imageLoad () {
      if (!this.isload) {
        this.$emit('swiperImageLoad')
        this.isload = true
      }
    }
  },
}
</script>

<style scoped>
</style>
<template>
  <div id="home">
    <nav-bar class="home-navbar">
      <div slot="center">购物街</div>
    </nav-bar>
    <home-swiper :banners='banners' />
    <RecommendView :recommends='recommends' />
  </div>
</template>

<script> 
import NavBar from 'components/common/navbar/NavBar'
import HomeSwiper from './childComps/HomeSwiper'
import RecommendView from './childComps/RecommendView'

import { getHomeMultidata } from 'network/home'


export default {
  name: 'Home',
  data () {
    return {
      banners: [],
      recommends: [],
    }
  },
  components: {
    NavBar,
    HomeSwiper,
    RecommendView
  },
  created () {
    getHomeMultidata().then(res => {
      this.banners = res.data.banner.list;
      this.recommends = res.data.recommend.list;
    })
  }
}
</script>

<style scoped>
.home-navbar {
  color: white;
  background-color: var(--color-tint);
}
</style>
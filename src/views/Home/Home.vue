<template>
  <div id="home">
    <nav-bar class="home-navbar">
      <div slot="center">购物街</div>
    </nav-bar>
    <tab-control :titles="['流行','新款','精选']" @tabclick='tabclick' ref="TabControl1" v-show="isTabFixed" />
    <scroll class="scroll" ref="scroll" :probe-type="3" @scroll="contentScroll" :pull-up-load="true" @pullingUp="pullingUp">
      <home-swiper :banners='banners' @swiperImageLoad="swiperImageLoad" />
      <recommend-view :recommends='recommends' />
      <feature-view />
      <tab-control :titles="['流行','新款','精选']" @tabclick='tabclick' ref="TabControl2" />
      <goods-list :goods="showGoods" />
    </scroll>

    <back-top @click.native="backClick" v-show="isShowBackTop" />
  </div>
</template>

<script> 
import NavBar from 'components/common/navbar/NavBar'
import Scroll from 'components/common/scroll/Scroll'
import BackTop from 'components/common/backtop/BackTop'
import TabControl from 'components/content/TabControl/TabControl'
import GoodsList from 'components/content/Goods/GoodsList'

import HomeSwiper from './childComps/HomeSwiper'
import RecommendView from './childComps/RecommendView'
import FeatureView from './childComps/FeatureView'

import { getHomeMultidata, getHomeGoods } from 'network/home'
import { debounce } from 'common/utils'


export default {
  name: 'Home',
  data () {
    return {
      orderHight: null,
      banners: [],
      recommends: [],
      goods: {
        'pop': { page: 0, list: [] },
        'new': { page: 0, list: [] },
        'sell': { page: 0, list: [] },
      },
      currentTtpe: 'pop',
      isShowBackTop: false,
      tabOffsetTop: 0,
      isTabFixed: false
    }
  },
  components: {
    NavBar,
    Scroll,
    BackTop,
    TabControl,
    GoodsList,
    HomeSwiper,
    RecommendView,
    FeatureView
  },
  created () {
    this.getHomeMultidata()
    // 请求商品数据
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')

    //监听图片加载完成

    this.$bus.$on('itemImageLoad', () => {
      debounce(this.$refs.scroll.scroll.refresh(), 250)
    })
  },
  methods: {


    /**
     * 事件监听相关
     */

    tabclick (index) {
      switch (index) {
        case 0:
          this.currentTtpe = 'pop'
          break
        case 1:
          this.currentTtpe = 'new'
          break
        case 2:
          this.currentTtpe = 'sell'
          break
      }
      this.$refs.TabControl1.currentIndex = index
      this.$refs.TabControl2.currentIndex = index
    },
    backClick () {
      this.$refs.scroll.scroll.scrollTo(0, 0, 500)
    },
    contentScroll (prosition) {
      this.isShowBackTop = (-prosition.y) > 900

      this.isTabFixed = (-prosition.y) > this.tabOffsetTop
    },
    pullingUp () {
      this.getHomeGoods(this.currentTtpe)
    },
    swiperImageLoad () {
      this.tabOffsetTop = this.$refs.TabControl2.$el.offsetTop
    },
    /**
     * 网络请求相关
     */
    getHomeMultidata () {
      getHomeMultidata().then(res => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      })
    },
    getHomeGoods (type) {
      const page = this.goods[type].page + 1
      getHomeGoods(type, 1).then(res => {
        this.goods[type].list.push(...res.data.list)
        this.goods[type].page += 1
        this.$refs.scroll.scroll.finishPullUp()
      })
    }
  },
  computed: {
    showGoods () {
      return this.goods[this.currentTtpe].list
    },
  },
}
</script>

<style scoped>
#home {
  height: 100vh;
  position: relative;
}
.home-navbar {
  color: white;
  background-color: var(--color-tint);
  width: 100%;
  display: flex;
  height: 44px;
  line-height: 44px;
}
.scroll {
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 49px;
}
</style>
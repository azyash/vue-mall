<template>
  <div id="detail">
    <detailNavBar @titleClick="titleClick" ref="navBar"></detailNavBar>
    <scroll class="scroll" ref="scroll" @scroll="contentScroll" :probe-type="3">
      <detailSwiper :top-images="topImages"></detailSwiper>
      <detailBaseInfo :goods="goods" />
      <detailShopInfo :shop="shop" />
      <detailGoodsInfo :detail-info="detailInfo" @imageLoad="imageLoad" />
      <detailParamInfo ref="params" :param-info="paramInfo" />
      <detailCommentInfo ref="comment" :comment-info="commentInfo" />
      <goods-list ref="recommend" :goods="recommend" />
    </scroll>
    <detail-bottom-bar @addToCart="addToCart" />
    <back-top @click.native="backClick" v-show="isShowBackTop" />
  </div>
</template>

<script>
import { getDetail, getRecommend, Goods, Shop, GoodsParam } from 'network/detail'
import { debounce } from 'common/utils'

import Scroll from 'components/common/scroll/Scroll';
import BackTop from 'components/common/backtop/BackTop'
import GoodsList from 'components/content/Goods/GoodsList';

import DetailNavBar from './childComps/DetailNavBar'
import DetailSwiper from './childComps/DetailSwiper'
import DetailBaseInfo from './childComps/DetailBaseInfo'
import DetailShopInfo from './childComps/DetailShopInfo'
import DetailGoodsInfo from './childComps/DetailGoodsInfo'
import DetailParamInfo from './childComps/DetailParamInfo'
import DetailCommentInfo from './childComps/DetailCommentInfo'
import DetailBottomBar from './childComps/DetailBottomBar'

export default {
  name: 'Detail',
  data () {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
      paramInfo: {},
      commentInfo: {},
      recommend: [],
      themeTopYs: [],
      getthemeTopYs: null,
      isTitleClick: true,
      isShowBackTop: false,
    }
  },
  components: {
    Scroll,
    GoodsList,
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo,
    DetailBottomBar,
    BackTop
  },
  created () {  //methods和data已经初始化,常用于操作数据，发起ajax请求
    this.iid = this.$route.params.iid

    getDetail(this.iid).then(res => {
      const data = res.result;
      this.topImages = data.itemInfo.topImages

      this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)
      this.shop = new Shop(data.shopInfo)
      this.detailInfo = data.detailInfo
      this.paramInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule)
      if (data.rate.cRate !== 0) {
        this.commentInfo = data.rate.list[0]
      }

      this.getthemeTopYs = () => {
        this.themeTopYs.push(0)
        this.themeTopYs.push(this.$refs.params.$el.offsetTop)
        this.themeTopYs.push(this.$refs.comment.$el.offsetTop)
        this.themeTopYs.push(this.$refs.recommend.$el.offsetTop)
        this.themeTopYs.push(Number.MAX_VALUE)
      }
    })

    getRecommend().then(res => {
      this.recommend = res.data.list
    })
  },
  mounted () {

  },
  methods: {
    imageLoad () {
      this.$refs.scroll.scroll.refresh()
      this.getthemeTopYs()
    },
    titleClick (index) {
      this.isTitleClick = false
      this.$refs.scroll.scroll.scrollTo(0, -(this.themeTopYs[index] + 1), 200)
      setTimeout(() => {
        this.isTitleClick = true
      }, 200);
    },
    contentScroll (position) {
      let positionY = -position.y
      if (this.isTitleClick) {
        for (let i = 0; i < this.themeTopYs.length - 1; i++) {
          if (i < this.themeTopYs.length - 1 && positionY > this.themeTopYs[i] && positionY < this.themeTopYs[i + 1]) {
            this.$refs.navBar.currentindex = i
          }
        }
      }
      this.isShowBackTop = (-position.y) > 900
    },
    backClick () {
      this.$refs.scroll.scroll.scrollTo(0, 0, 500)
    },
    addToCart () {
      const product = {}
      product.image = this.topImages[0]
      product.title = this.goods.title
      product.desc = this.goods.desc
      product.price = this.goods.realPrice
      product.iid = this.iid

      this.$store.commit('addCart', product)
    }
  },
}
</script>

<style scoped>
#detail {
  height: 100vh;
  position: relative;
  z-index: 999;
  background: #fff;
}
.scroll {
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 0px;
}
</style>
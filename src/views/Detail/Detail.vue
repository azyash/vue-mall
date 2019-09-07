<template>
  <div id="detail">
    <detail-nav-bar></detail-nav-bar>
    <scroll class="scroll" ref="scroll">
      <detail-swiper :top-images="topImages"></detail-swiper>
      <detail-base-info :goods="goods" />
      <detail-shop-info :shop="shop" />
      <detail-goods-info :detail-info="detailInfo" @imageLoad="imageLoad" />
      <detail-param-info :paramInfo="paramInfo" />
    </scroll>
  </div>
</template>

<script>
import { getDetail, Goods, Shop, GoodsParam } from 'network/detail'

import Scroll from 'components/common/scroll/Scroll';

import DetailNavBar from './childComps/DetailNavBar'
import DetailSwiper from './childComps/DetailSwiper'
import DetailBaseInfo from './childComps/DetailBaseInfo'
import DetailShopInfo from './childComps/DetailShopInfo'
import DetailGoodsInfo from './childComps/DetailGoodsInfo'
import DetailParamInfo from './childComps/DetailParamInfo'

export default {
  name: 'Detail',
  data () {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
      paramInfo: {}
    }
  },
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    Scroll,
    DetailGoodsInfo,
    DetailParamInfo,
  },
  created () {  //methods和data已经初始化,常用于操作数据，发起ajax请求
    this.iid = this.$route.params.iid

    getDetail(this.iid).then(res => {
      const data = res.result;
      this.topImages = data.itemInfo.topImages
      console.log(res);

      this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)
      this.shop = new Shop(data.shopInfo)
      this.detailInfo = data.detailInfo
      this.paramInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule)
    })
  },
  methods: {
    imageLoad () {
      this.$refs.scroll.scroll.refresh()
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
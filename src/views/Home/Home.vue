<template>
  <div id="home">
    <navBar>
      <div slot="center" class="navBar">购物车</div>
    </navBar>

    <scroll class="content">
      <div>
        <homeSwiper :banner="banner"></homeSwiper>
        <recommendView></recommendView>
        <recommend :recommendData="recommendData"></recommend>
        <tabChange :title="['精选','新品','折扣']"></tabChange>
        <goods :goods="showGoodsList"></goods>
      </div>
    </scroll>
  </div>
</template>

<script>
import homeSwiper from './chileCpn/homeSwiper'
import recommend from './chileCpn/recommend'
import recommendView from './chileCpn/recommendView'
import navBar from 'components/common/navBar/navBar'
import scroll from 'components/common/scroll/scroll'
import goods from 'components/common/goods/goods'
import tabChange from 'components/common/tabChange/tabChange'
import { getHomeMultidata, getHomeData } from 'network/home'

export default {
  name: "",
  components: {
    homeSwiper,
    navBar,
    recommend,
    scroll,
    recommendView,
    tabChange,
    goods
  },
  props: {},
  data () {
    return {
      banner: [],
      recommendData: [],
      goodsList: {
        'pop': { page: 1, list: [] },
        'new': { page: 1, list: [] },
        'sell': { page: 1, list: [] }
      },
    }
  },
  watch: {},
  computed: {
    showGoodsList () {
      return this.goodsList['pop'].list
    }
  },
  methods: {
    /**
  * 网络请求方法
  */
    getMultidata () {
      getHomeMultidata().then(res => {
        this.banner = res.data.data.banner.list
        this.recommendData = res.data.data.recommend.list
      })
    },
    getHomeProducts (type) {
      getHomeData(type, this.goodsList[type].page).then(res => {
        const goodsList = res.data.data.list;
        this.goodsList[type].list.push(...goodsList)
        this.goodsList[type].page += 1
      })
    }
  },
  created () {
    this.getMultidata()
    this.getHomeProducts('pop')
    this.getHomeProducts('new')
    this.getHomeProducts('sell')
  },
  mounted () {

  },
}
</script>

<style scoped>
#home {
  height: 100%;
}
.navBar {
  background-color: var(--color-tint);
  font-weight: 700;
  color: #fff;
  display: flex;
  justify-content: center;
}
.content {
  overflow: hidden;
  position: absolute;
  top: 5vh;
  bottom: 50px;
  left: 0;
  right: 0;
}
</style>
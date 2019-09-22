<template>
  <div>
    <navBar>
      <div slot="center" class="navBar">购物车</div>
    </navBar>
    <homeSwiper :banner="banner"></homeSwiper>
    <recommendView></recommendView>
    <recommend :recommendData="recommendData"></recommend>
  </div>
</template>

<script>
import homeSwiper from './chileCpn/homeSwiper'
import recommend from './chileCpn/recommend'
import recommendView from './chileCpn/recommendView'
import navBar from 'components/common/navBar/navBar'
import { getHomeMultidata } from 'network/home'

export default {
  name: "",
  components: {
    homeSwiper,
    navBar,
    recommend,
    recommendView
  },
  props: {},
  data () {
    return {
      banner: [],
      recommendData: []
    }
  },
  watch: {},
  computed: {},
  methods: {
    /**
  * 网络请求统一封装
  */
    getMultidata () {
      getHomeMultidata().then(res => {
        console.log(res)
        this.banner = res.data.data.banner.list
        this.recommendData = res.data.data.recommend.list
        console.log(this.recommend)
      })
    }
  },
  created () {
    this.getMultidata()
  },
  mounted () {

  },




}
</script>

<style scoped>
.navBar {
  background-color: var(--color-tint);
  font-weight: 700;
  color: #fff;
  display: flex;
  justify-content: center;
}
</style>
<template>
  <div>
    <homeSwiper :banner="banner"></homeSwiper>
  </div>
</template>

<script>
import homeSwiper from './chileCpn/homeSwiper/homeSwiper'
import { getHomeMultidata } from 'network/home'

export default {
  name: "",
  components: {
    homeSwiper
  },
  props: {},
  data () {
    return {
      banner: []
    }
  },
  watch: {},
  computed: {},
  methods: {},
  created () {
    getHomeMultidata().then(res => {
      console.log(res)
      this.banner = res.data.data.banner.list
    })
  },
  mounted () { }
}
</script>

<style scoped>
</style>
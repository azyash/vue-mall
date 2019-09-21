<template>
  <div>
    home
  </div>
</template>

<script>
import { getHomeMultidata } from 'network/home'

export default {
  name: "",
  components: {},
  props: {},
  data () {
    return {
    }
  },
  watch: {},
  computed: {},
  methods: {},
  created () {
    getHomeMultidata().then(res => {
      console.log(res)
    })
  },
  mounted () { }
}
</script>

<style scoped>
</style>
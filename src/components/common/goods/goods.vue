<template>
  <div class="goods">
    <goodsList v-for="(item,index) in goods" :key="index" :goodsList="item"></goodsList>
  </div>
</template>

<script>
import goodsList from './goodsList'

export default {
  name: "",
  components: { goodsList },
  props: {
    goods: {
      type: Array,
      value: []
    }
  },
  data () {
    return {
    }
  },
  watch: {},
  computed: {},
  methods: {},
  created () { },
  mounted () {
    console.log(this.goods)
  }
}
</script>

<style scoped>
.goods {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
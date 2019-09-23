<template>
  <div class="recommend">
    <div v-for="(item,index) in recommendData" :key="index" class="recommendItem">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <h2>{{item.title}}</h2>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  components: {},
  props: {
    recommendData: {
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
  mounted () { }
}
</script>

<style scoped>
.recommend {
  display: flex;
  flex-grow: 1;
  width: 100vw;
  overflow: hidden;
  justify-content: space-between;
}
.recommendItem {
  flex: 1;
}
.recommendItem img {
  width: 24vw;
}
.recommendItem h2 {
  text-align: center;
  font-size: 4vw;
}
</style>
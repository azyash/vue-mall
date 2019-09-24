<template>
  <div class="tabChange">
    <div v-for="(item,index) in title" :key="index">
      <p>
        {{item}}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  components: {},
  props: {
    title: {
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
  created () { console.log(this.title) },
  mounted () { }
}
</script>

<style scoped>
.tabChange {
  display: flex;
  width: 100%;
}
.tabChange > div {
  text-align: center;
  flex: 1;
}
p {
  display: block;
}
</style>
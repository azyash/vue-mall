<template>
  <div class="goodsList">
    <a href="">
      <div>
        <img :src="goodsList.show.img">
      </div>
      <div class="title">
        <slot name="title">{{goodsList.title}}</slot>
      </div>
      <div>
        <slot name="orgPrice"></slot>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  name: "",
  components: {},
  props: {
    goodsList: {
      type: Object,
      value: {}
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
  }
}
</script>

<style scoped>
.goodsList {
  width: 48%;
  padding: 2px;
}
img {
  width: 100%;
}
.title {
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
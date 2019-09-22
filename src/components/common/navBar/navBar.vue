<template>
  <div class="navBar">
    <div>
      <slot name="left"></slot>
    </div>
    <div>
      <slot name="center"></slot>
    </div>
    <div>
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
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
  created () { },
  mounted () { }
}
</script>

<style scoped>
.navBar {
  display: flex;
  height: 5vh;
  line-height: 5vh;
  text-align: center;
}
.navBar > div:nth-child(1) .navBar > div:nth-child(3) {
  width: 60px;
}
.navBar > div:nth-child(2) {
  flex: 1;
}
</style>
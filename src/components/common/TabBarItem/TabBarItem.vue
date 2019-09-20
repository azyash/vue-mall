<template>
  <div class="TabBarItem" @click="ItemClick">
    <div class="icon">
      <slot v-if="!isShow" name="icon"></slot>
      <slot v-else name="active"></slot>
    </div>
    <div :class="{'active':isShow,'text':true}">
      <slot name="text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  components: {

  },
  props: {
    link: {
      type: String
    }
  },
  computed: {
    isShow () {
      return this.$route.path.indexOf(this.link) !== -1
    }
  },
  methods: {
    ItemClick () {
      this.$router.replace(this.link)
    }
  }
}
</script>

<style scoped>
.TabBarItem {
  flex: 1;
  text-align: center;
}
.icon img {
  width: 20px;
  height: 20px;
}
.text {
  font-size: 14px;
}
.active {
  color: red;
}
</style>
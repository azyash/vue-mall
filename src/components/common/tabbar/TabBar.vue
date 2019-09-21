<template>
  <div class="tabBar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "TabBar"
}
</script>

<style scoped>
.tabBar {
  display: flex;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: #eee;
  padding: 6px 0;
}
</style>
<template>
  <div class="nav-bar">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.left,
.right {
  width: 60px;
}
.center {
  font-size: 22px;
  text-align: center;
  flex: 1;
}
</style>>
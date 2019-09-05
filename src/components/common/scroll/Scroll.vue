<template>
  <div class="wrapper" ref="scroll">
    <div class="centent">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll';
export default {
  props: {
    probeType: {
      type: Number,
      default: 0
    },
    pullUpLoad: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      scroll: null
    }
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.scroll, {
      click: true,
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad,
    })

    this.scroll.on('scroll', (position) => {
      this.$emit('scroll', position)
    })

    this.scroll.on('pullingUp', () => {
      this.$emit('pullingUp')
    })
  }
}
</script>

<style scoped>
</style>
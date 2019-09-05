<template>
  <div class="tab-control">
    <div v-for="(item,index) in titles" :key="item.index" class="tab-control-item" :class="{active:index===currentIndex}" @click="itemClick(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      currentIndex: 0,
    }
  },
  props: {
    titles: {
      type: Array,
      default () {
        return []
      }
    }
  },
  methods: {
    itemClick (index) {
      this.currentIndex = index
      this.$emit('tabclick', index)
    }
  },
}
</script>

<style>
.tab-control {
  z-index: 999;
  display: flex;
  text-align: center;
  height: 40px;
  line-height: 40px;
  font-size: 14px;
  position: sticky;
  top: 40px;
  background: white;
}
.tab-control-item {
  flex: 1;
}

.active {
  color: var(--color-high-text);
}
.active span {
  border-bottom: 3px solid var(--color-tint);
  padding: 5px;
}
</style>
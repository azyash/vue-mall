<template>
  <div class="goods-list">
    <goods-list-item v-for="item in goods" :key="item.index" :goodsItem="item" />
  </div>
</template>

<script>
import GoodsListItem from './GoodsListItem'

export default {
  props: {
    goods: {
      type: Array,
      default () {
        return []
      }
    }
  },
  components: {
    GoodsListItem
  }
}
</script>

<style>
.goods-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 49px;
}
</style>
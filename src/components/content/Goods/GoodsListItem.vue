<template>
  <div class="goods-list-item" @click="itemClick">
    <img :src="showImage" alt="" @load="imageLoad">
    <div class="goods-info">
      <p>{{goodsItem.title}}</p>
      <span class="price">{{goodsItem.price}}</span>
      <span class="cfav">{{goodsItem.cfav}}</span>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    goodsItem: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  computed: {
    showImage () {
      return this.goodsItem.image || this.goodsItem.show.img
    }
  },
  methods: {
    imageLoad () {
      this.$bus.$emit('itemImageLoad')
    },
    itemClick () {
      this.$router.push('/detail/' + this.goodsItem.iid)
    }
  },

}
</script>

<style scoped>
.goods-list-item {
  padding: 1%;
  padding-bottom: 40px;
  position: relative;
  width: 49%;
}
.goods-list-item img {
  width: 100%;
  border-radius: 5px;
}
.goods-info {
  text-align: center;
  font-size: 12px;
  position: absolute;
  bottom: 5px;
  left: 0;
  right: 0;
}
.goods-info p {
  width: 100%;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  margin-bottom: 3px;
}
.goods-info .price {
  color: var(--color-high-text);
  margin-right: 20px;
}
.goods-info .cfav::after {
  content: "";
  position: absolute;
  left: -15px;
  top: -1px;
  width: 14px;
  height: 14px;
  background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
}
.goods-info .cfav {
  position: relative;
}
</style>
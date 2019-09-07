<template>
  <div>
    <nav-bar>
      <div slot="left" class="left" @click="back">
        <img src="~assets/img/common/back.svg" alt="">
      </div>
      <div slot="center" class='title'>
        <div v-for="(item,index) in titles" :key="item.index" class='title-item' :class="{active:index===currentindex}" @click="titleClick(index)">
          {{item}}
        </div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue'
export default {
  data () {
    return {
      titles: ['商品', '参数', '评论', '推荐'],
      currentindex: 0,
    }
  },
  components: {
    NavBar
  },
  methods: {
    titleClick (index) {
      this.currentindex = index
    },
    back () {
      this.$router.back()
    }
  },
}
</script>

<style scoped>
.left {
  position: relative;
  height: 100%;
}
.left img {
  position: absolute;
  top: 50%;
  left: 10px;
  margin-top: -11px;
}
.title {
  height: 44px;
  display: flex;
  font-size: 13px;
  line-height: 44px;
}
.title-item {
  flex: 1;
}
.active {
  color: var(--color-high-text);
}
</style>
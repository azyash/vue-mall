<template>
  <Tab-bar>
    <Tab-bar-item path='/home'>
      <img slot="item-icon" src="~@/assets\img\tabbar\home.svg" alt="">
      <img slot="item-active" src="~@/assets\img\tabbar\home_active.svg" alt="">
      <div slot="item-text">首页</div>
    </Tab-bar-item>
    <Tab-bar-item path='/category'>
      <img slot="item-icon" src="~@/assets\img\tabbar\category.svg" alt="">
      <img slot="item-active" src="~@/assets\img\tabbar\category_active.svg" alt="">
      <div slot="item-text">分类</div>
    </Tab-bar-item>
    <Tab-bar-item path='/cart'>
      <img slot="item-icon" src="~@/assets\img\tabbar\shopcart.svg" alt="">
      <img slot="item-active" src="~@/assets\img\tabbar\shopcart_active.svg" alt="">
      <div slot="item-text">购物车</div>
    </Tab-bar-item>
    <Tab-bar-item path='/profile'>
      <img slot="item-icon" src="~@/assets\img\tabbar\profile.svg" alt="">
      <img slot="item-active" src="~@/assets\img\tabbar\profile_active.svg" alt="">
      <div slot="item-text">我的</div>
    </Tab-bar-item>
  </Tab-bar>
</template>

<script>
import TabBar from '../common/tabbar/TabBar'
import TabBarItem from '../common/tabbar/TabBarItem'

export default {
  components: {
    TabBar,
    TabBarItem
  }
}
</script>

<style>
</style>
<template>
  <TabBar>
    <TabBarItem link="/home">
      <img slot="icon" src="~assets/img/tabbar/home.svg" />
      <img slot="active" src="~assets/img/tabbar/home_active.svg" />
      <p slot="text">首页</p>
    </TabBarItem>
    <TabBarItem link="/category">
      <img slot="icon" src="~assets/img/tabbar/category.svg" />
      <img slot="active" src="~assets/img/tabbar/category_active.svg" />
      <p slot="text">分类</p>
    </TabBarItem>
    <TabBarItem link="/cart">
      <img slot="icon" src="~assets/img/tabbar/cart.svg" />
      <img slot="active" src="~assets/img/tabbar/cart_active.svg" />
      <p slot="text">购物车</p>
    </TabBarItem>
    <TabBarItem link="/profile">
      <img slot="icon" src="~assets/img/tabbar/profile.svg" />
      <img slot="active" src="~assets/img/tabbar/profile_active.svg" />
      <p slot="text">我的</p>
    </TabBarItem>
  </TabBar>
</template>

<script>
import TabBar from 'components/common/TabBar/TabBar'
import TabBarItem from 'components/common/TabBarItem/TabBarItem'
export default {
  name: "",
  components: {
    TabBarItem,
    TabBar
  }
}
</script>

<style scoped>
</style>
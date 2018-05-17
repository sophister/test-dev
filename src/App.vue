<template>
  <div id="app">
    <el-menu :default-active="this.$route.name" class="el-menu-demo" mode="horizontal" @select="handleMenuClick">
      <el-menu-item index="LostList">捡到物品列表</el-menu-item>
      <el-menu-item index="PublishLost">发布捡到物品</el-menu-item>
      <el-menu-item index="RewardList">悬赏列表</el-menu-item>
      <el-menu-item index="PublishReward">发布悬赏</el-menu-item>
      <el-menu-item index="MyList">我发布的</el-menu-item>
    </el-menu>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',

  created(){
    if (typeof webExtensionWallet === 'undefined') {
      alert('请安装并且登录钱包');
    }
  },

  methods: {

    handleMenuClick(key, keyPath){
      console.log('menu click: ', key, keyPath);
      this.$router.push({
        name: key
      });
    }
  }
};
</script>

<style lang="scss">
  @import './assets/css/reset.css';
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>

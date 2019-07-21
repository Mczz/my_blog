<template>
  <el-container>
    <el-header>
      <div class="nav">
        <h1 class="logo">张明超博客</h1>
        <ul>
          <router-link tag="li" to="/">网站首页</router-link>
          <router-link tag="li" to="/a">关于我</router-link>
          <router-link tag="li" to="/a">地图</router-link>
          <router-link tag="li" to="/a">关于</router-link>
          <router-link tag="li" to="/a">留言</router-link>
        </ul>
        <div class="search-bar">
          <el-input v-model="input" placeholder="搜索点什么"></el-input>
          <div class="search">
            <i class="el-icon-search" />
          </div>
        </div>
      </div>
    </el-header>
    <el-main>
      <router-view class="view"></router-view>
      
    </el-main>
    <el-footer>
      <p>
        Design by
        <a href="#" target="_blank">张明超个人博客</a>
        <a href="#">京ICP备11002373号-1</a>
      </p>
    </el-footer>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      input: ""
    };
  }
};
</script>
<style lang="scss">
@import "@/assets/css/default.scss";
</style>

<template>
  <div id="app">
    <el-container>
      <el-header>
        <!-- 导航区域 -->
        <header>
          <div class="nav">
            <h1 class="logo">张明超个人博客</h1>
            <ul>
              <router-link tag="li" to="/index">网站首页</router-link>
              <router-link tag="li" to="/aboutme">关于我</router-link>
              <router-link tag="li" to="/allblog/">文章列表</router-link>
              <router-link tag="li" to="/lmsg">留言</router-link>
            </ul>
            <div class="search-bar">
              <el-input v-model="input" placeholder="搜索点什么"></el-input>
              <div class="search">
                <i class="el-icon-search" @click="handleClick" />
              </div>
            </div>
          </div>
        </header>
      </el-header>
      <el-main>
        <router-view class="view"></router-view>
      </el-main>
      <!-- 底部区域 -->
      <el-footer>
        <div class="endnav">
          <p>
            <b>站点声明：</b>
          </p>
          <p>1、本站所有内容，个人可以使用，但是未经许可不得用于任何商业目的。</p>
          <p>
            2、所有文章未经授权禁止转载、摘编、复制或建立镜像，如有违反，追究法律责任。举报邮箱：
            <a href="#" target="_blank">469090292@qq.com</a>
          </p>
          <p>
            Copyright ©
            <a href="http://angmc.online" target="_blank">angmc.online</a> All Rights Reserved. 备案号：
            <a
              href="http://beian.miit.gov.cn/"
              target="_blank"
            >京ICP备19023307号-1</a>
          </p>
        </div>
      </el-footer>
    </el-container>
  </div>
</template>



<script>

export default {
  data() {
    return {
      input: "",
      timer:null
    };
  },
  methods: {
    //搜索方法
    handleClick() {
      // 防抖
      clearTimeout(this.timer);
      this.timer = setTimeout(() =>{
        if (this.input != undefined && this.input != "") {
          this.$router.push(`/allblog/${this.input}`);
        } else {
          this.$message("请输入搜索内容");
        }
      }, 300);
    }
  }
};
</script>
<style lang="scss">
@import "@/assets/css/reset.scss";
@import "@/assets/css/default.scss";
</style>

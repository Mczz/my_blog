<template>
  <div class="index-content">
    <el-row class="picbox" :gutter="20">
      <el-col :span="16">
        <el-carousel trigger="click" height="450px">
          <el-carousel-item v-for="item in 4" :key="item">
            <h3 class="small">{{ item }}</h3>
          </el-carousel-item>
        </el-carousel>
      </el-col>
      <el-col :span="8" class="top-pics">
        <div class="top-pic">
          <img
            src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1080760116,732088640&fm=27&gp=0.jpg"
            alt
          />
        </div>
        <div class="top-pic">
          <img
            src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1718395925,3485808025&fm=27&gp=0.jpg"
            alt
          />
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="20" class="content">
      <el-col :span="16">1</el-col>
      <el-col :span="8">
        <div class="zhuanti">
          <h2 class="zhuanti-title">特别推荐</h2>
          <ul class="list">
            <li>x</li>
            <li>x</li>
            <li>x</li>
          </ul>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import "@/assets/css/index.scss";
</style>
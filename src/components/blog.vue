<template>
  <div class="blogs">
    <h3 class="blogtitle">
      <a href="/life/10.html" target="_blank">{{blog.title}}</a>
    </h3>
    <div v-if='blog.img' class="blogpic">
      <a :href="blog.href">
      <img :src="blog.img" alt="">
      </a>
    </div>
    
    <p class="blogtext">{{ blog.text}}</p>
    <div class="bloginfo">
      <ul>
        <li class="author"></li>
        <li class="lmname">
          <a href="/life/" target="_blank">{{blog.tag}}</a>
        </li>
        <li class="timer">{{ blog.ctime}}</li>
        <li class="view">
          <span>{{ blog.view }}</span>已阅读
        </li>
        <li class="like">{{blog.like}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props:['blog'],
  
};
</script>

<style lang='scss' scoped>
@import "@/assets/css/blog.scss";
</style>
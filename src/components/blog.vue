<template>
  <div class="blogs">
    <h3 class="blogtitle" @click="openBlogById(blog.id)">{{blog.title}}</h3>
    <div v-if="blog.img" class="blogpic" @click="openBlogById(blog.id)">
      <a :href="blog.href">
        <img :src="blog.img" alt />
      </a>
    </div>

    <p class="blogtext" v-html="delHtmlTag(blog.content)"></p>
    <div class="bloginfo">
      <ul>
        <li class="author"></li>
        <li class="lmname" @click="openTags(blog.tagId)">{{ blog.tagname}}</li>
        <li class="timer">{{ dateParse(blog.ctime)}}</li>
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
  props: ["blog"],
  methods: {
    openBlogById(id) {
      this.$router.push(`/blogdetail/${id}`);
    },
    openTags(id) {
      this.$router.push(`/tagblog/${id}`);
    },
    dateParse(time) {
      var date = new Date(time * 1000);
      var Y = date.getFullYear() + "-";
      var M =
        (date.getMonth() + 1 < 10
          ? "0" + (date.getMonth() + 1)
          : date.getMonth() + 1) + "-";
      var D = date.getDate() + " ";
      return Y + M + D;
    },
    delHtmlTag(str) {
      str.replace(/<[^>]+>/g, "");
      return str.replace(/\&nbsp;/g, "");
    }
  }
};
</script>

<style lang='scss' scoped>
@import "@/assets/css/blog.scss";
</style>
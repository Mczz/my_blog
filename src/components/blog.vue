<template>
  <div class="blogs">
    <h3 class="blogtitle" @click="openBlogById(blog.id)">
      {{blog.title}}
    </h3>
    <div v-if="blog.img" class="blogpic"  @click="openBlogById(blog.id)">
      <a :href="blog.href">
        <img :src="blog.img" alt />
      </a>
    </div>

    <p class="blogtext">{{ blog.text}}</p>
    <div class="bloginfo">
      <ul>
        <li class="author"></li>
        <li class="lmname" @click="openTags(blog.tagId,blog.tagName)">
          {{blog.tag}}
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
  props: ["blog"],
  methods: {
    openBlogById(id) {
      this.$store.dispatch("getArticleDetail", id);
      this.$router.push({ name: "blogdetail" });
    },
    openTags(id,tagName){
      this.$store.dispatch("getTagBlog", id);
      this.$router.push({ name: "tagblog",params:{tagName}})
    }
  }
};
</script>

<style lang='scss' scoped>
@import "@/assets/css/blog.scss";
</style>
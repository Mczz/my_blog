<template>
  <div class="blogdetail">
    <el-row class="title">
      <span class="n1">文章详情</span>
      <span class="n2">时间最会骗人，但也能让你明白，这个世界没有什么不能失去的，离去的都是风景，留下的才是人生，走到最后的，就是对的人。</span>
    </el-row>
    <el-row :gutter="40">
      <el-col :span="16" class="articlebox">
        <div class="article">
          <h3 class="blogtitle">{{articleDetail.title}}</h3>
          <div class="bloginfo">
            <ul>
              <li class="author"></li>
              <li class="lmname">
                <a href="/life/" target="_blank">{{articleDetail.tag}}</a>
              </li>
              <li class="timer">{{ articleDetail.ctime}}</li>
              <li class="view">
                <span>{{ articleDetail.view }}</span>已阅读
              </li>
              <li class="like">{{articleDetail.like}}</li>
            </ul>
          </div>

          <p class="blogtext">{{ articleDetail.text}}</p>
        </div>

        <div class="share">
          <p class="diggit">很赞哦！</p>
        </div>
        <div class="pl">
          <h2>文章评论</h2>

          <p class="saying">
            <span>
              共有
              6条评论
            </span>来说两句吧...
          </p>
          <p class="yname">
            <span>姓名:</span>
            <input
              name="username"
              type="text"
              class="inputText"
              id="username"
              value
              size="16"
              placeholder="不超过10个字符"
            />
          </p>

          <textarea name="lytext" cols="60" rows="12" id="lytext" placeholder="不超过50个字"></textarea>
          <button class="submit">提交</button>
        </div>
      </el-col>
      <el-col :span="8">
        <zhuanti title="推荐文章">
          <recommend />
        </zhuanti>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import zhuanti from "@/components/zhuanti.vue";
import recommend from "@/components/recommend.vue";
import { mapState } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState(["articleDetail"])
  },
  components: {
    zhuanti,
    recommend
  }
};
</script>

<style lang='scss'>
@import "@/assets/css/blogdetail.scss";
</style>
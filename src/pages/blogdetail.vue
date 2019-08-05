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
              <li
                class="lmname"
                @click="openTags(articleDetail.tagId,articleDetail.tag)"
              >{{articleDetail.tag}}</li>
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
          <el-button class="diggit" :plain="true" @click="thumbsUp">很赞哦！</el-button>
        </div>
        <div class="pl">
          <h2>文章评论</h2>

          <p class="saying">
            <span>
              共有
              {{articleDetail.comment}}条评论
            </span>来说两句吧...
          </p>
          <p class="yname">
            <span>姓名:</span>
            <input class="inputText" size="16" placeholder="不超过16个字符" v-model="commentName" />
          </p>

          <textarea cols="60" rows="12" placeholder="不超过50个字" v-model="commentContent"></textarea>
          <button class="submit" @click="commentBlog(articleDetail.id)">提交</button>
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
import axios from "axios";
import { mapState } from "vuex";
export default {
  data() {
    return {
      commentName: "",
      commentContent: ""
    };
  },
  computed: mapState({
    articleDetail: state => state.articleDetail
  }),
  methods: {
    openTags(id, tagName) {
      this.$store.dispatch("getTagBlog", id);
      this.$router.push({ name: "tagblog", params: { tagName } });
    },
    thumbsUp(id) {
      axios.get("/api/thumbup", id).then(function(response) {
        if (response.data.data.status == "success") {
          this.$message({
            message: "感谢您的支持!",
            type: "success"
          });
          this.articleDetail.like = response.data.data.like;
        } else {
          this.$message("出了一点点小错误，请稍后再试");
        }
      });
    },
    commentBlog(id) {
      if (this.commentName.length > 0 && this.commentContent.length > 0) {
        axios
          .post("/api/setarticlecomment", {
            params: {
              id:id,
              data: { name: this.commentName, content: this.commentContent }
            }
          })
          .then(function(response) {
            if (response.data.status == "success") {
              this.$message({
                message: "提交成功",
                type: "success"
              });
            }else{
              this.$message('出了一点点小错误，请稍后再试');
            }
          });
      } else {
        this.$message.error("姓名与内容不能为空");
      }
    }
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
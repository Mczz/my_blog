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
                @click="openTags(articleDetail.tagId)"
              >{{articleDetail.tagname}}</li>
              <li class="timer">{{ dateParse(articleDetail.ctime)}}</li>
              <li class="view">
                <span>{{ articleDetail.view }}</span>已阅读
              </li>
              <li class="like">{{articleDetail.like}}</li>
            </ul>
          </div>

          <p class="blogtext" v-html="articleDetail.content"></p>
        </div>

        <div class="share">
          <el-button class="diggit" :plain="true" @click="thumbsUp(articleDetail.id)">很赞哦！</el-button>
        </div>
        <div class="pl">
          <h2>文章评论</h2>

          <p class="saying">
            <span>
              共有
              {{commentList.length}}条评论
            </span>来说两句吧...
          </p>
          <p class="fb" v-for="(item,index) in commentList" :key="item.id + index">
            <ul>
              <p class="fbtime" >
                <span>
                  发表于&nbsp;{{dateParseSec(item.ctime)}}
                  <i class="reply" @click="replyFunc(item.id,item.username)">回复</i>
                </span>
                {{item.username}}:&nbsp;{{item.options}}
              </p>
              <p class="fbinfo">{{item.comments}}</p>
            </ul>
          </p>
          <p class="yname" >
            <span>姓名:</span>
            <input class="inputText" placeholder="不超过16个字符" v-model="commentName" />
            <input type="hidden" v-model="reply" />
            <input type="hidden" v-model="replyname" />
          </p>
          <p class="yname">
            <span>邮箱:</span>
            <input class="inputText" placeholder="不超过50个字符" v-model="commentEmail" />
          </p>

          <textarea cols="60" rows="12" placeholder="不超过50个字" v-model="commentContent"></textarea>
          <p class="yname">
            <span>验证码:</span>
            <input class="inputText" placeholder="请输入验证码" v-model="mycode" ref='send_comment'/>
            <span v-html="vcode" @click="changeCode()"></span>
          </p>
          <button class="submit" @click="commentBlog(articleDetail.id)" >提交</button>
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

export default {
  created() {

    this.id = this.$route.params.id;

    axios.get("/api/queryRandomCode").then(data => {
      this.vcode = data.data.data;
      this.rightCode = data.data.text;
    });
    axios
      .get("/api/getblogbyid", {
        params: {
          id: this.id
        }
      })
      .then(res => {
        this.articleDetail = res.data.data.article;
      });
    axios.get('/api/queryCommentsByBlogId',{
        params: {
          blog_id: this.id
        }
      }).then((res) => {
        this.commentList = res.data.data;
        for (var i=0;i<this.commentList.length;i++){
          if(this.commentList[i].parent > -1){
            this.commentList[i].options = '回复@' + this.commentList[i].parent_name
          }
        }
      })
  },
  data() {
    return {
      commentName: "",
      commentContent: "",
      commentEmail: "",
      rightCode: "",
      commentList: [],
      vcode: "",
      mycode: "",
      id: 1,
      articleDetail: {
      },
      reply: "-1",
      replyname: "0"
    };
  },
 

  methods: {
    openTags(id) {
      this.$store.dispatch("getTagBlog", id);
      this.$router.push({ name: "tagblog", params: { id } });
    },
    thumbsUp(id) {
      axios.get(`/api/thumbup?id=${id}`).then(response => {
        if (response.data.status == "success") {
          this.$message({
            message: "感谢您的支持!",
            type: "success"
          });
        } else {
          this.$message("出了一点点小错误，请稍后再试");
        }
      });
    },
     replyFunc:function(commentId,username){
        this.reply = commentId;
        this.replyname = username;
        let anchor = this.$refs.send_comment;
        scrollTo(0,anchor.offsetTop)
      }
    ,
    changeCode() {
      axios.get("/api/queryRandomCode").then(data => {
        this.vcode = data.data.data;
        this.rightCode = data.data.text;
      });
    },
    commentBlog(id) {
      if (this.rightCode != this.mycode) {
        this.$message.error("验证码不正确");
        return;
      }
      if (this.commentName.length > 0 && this.commentContent.length > 0) {
        axios
          .get(
            "/api/addcomment" +
              `?id=${id}&parent=${this.reply}&parent_name=${this.replyname}&name=${this.commentName}&email=${this.commentEmail}&content=${this.commentContent}`
          )
          .then((response) => {
            if (response.data.status == "success") {
              this.$message({
                message: "提交成功",
                type: "success"
              });
              this.replyname ='0';
              this.reply = '-1';
            } else {
              this.$message("出了一点点小错误，请稍后再试");
            }
          });
      } else {
        this.$message.error("姓名与内容不能为空");
      }
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
    dateParseSec(time){
        var date = new Date(time*1000);
        var Y = date.getFullYear() + '-';
        var M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
        var D  = (date.getDate() < 10 ? '0'+ date.getDate(): date.getDate()) + ' ';
        var h  = date.getHours() + ':';
        var m  = (date.getMinutes()< 10 ? '0'+ date.getMinutes(): date.getMinutes()) + ':';
        var s  = (date.getSeconds()< 10 ? '0'+ date.getSeconds(): date.getSeconds());
        return Y+M+D+h+m+s;
    }
  },
  components: {
    zhuanti,
    recommend,
  }
};
</script>

<style lang='scss'>
@import "@/assets/css/blogdetail.scss";
</style>
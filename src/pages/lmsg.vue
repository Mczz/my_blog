<template>
  <div class="lmsg">
    <el-row class="title">
      <span class="n1">留言</span>
      <span class="n2">时间最会骗人，但也能让你明白，这个世界没有什么不能失去的，离去的都是风景，留下的才是人生，走到最后的，就是对的人。</span>
    </el-row>
    <el-row :gutter="40">
      <el-col class="liuyanbox" :span="16">
        <div class="pl"> 
          <p class="fb" v-for="(item,index) in commentList" :key="item.id + index">
            <ul>
              <p class="fbtime" >
                <span>
                  发表于&nbsp;{{dateParse(item.ctime)}}
                  <i class="reply" @click="replyFunc(item.id,item.username)">回复</i>
                </span>
                {{item.username}}:&nbsp;{{item.options}}
              </p>
              <p class="fbinfo">{{item.comments}}</p>
            </ul>
          </p>
          <p class="saying">
            <span>
              共有
              {{commentList.length}}条留言
            </span>来说两句吧...
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
          <button class="submit" @click="commentBlog()" >提交</button>
        </div>
      </el-col>
      <el-col :span="8">
        <zhuanti ref="fixed" title="关注我 么么哒">
          <guanzhu />
        </zhuanti>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import zhuanti from "@/components/zhuanti.vue";
import guanzhu from "@/components/guanzhu.vue";
import axios from "axios";

export default {
  created(){
    axios.get("/api/queryRandomCode").then(data => {
      this.vcode = data.data.data;
      this.rightCode = data.data.text;
    });
    axios
      .get("/api/getblogbyid", {
        params: {
          id: -1
        }
      })
      .then(res => {
        this.articleDetail = res.data.data.article;
      });
    axios.get('/api/queryCommentsByBlogId',{
        params: {
          blog_id: -1
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
  components: {
    zhuanti,
    guanzhu,
  },
  data(){
    return{
      commentName: "",
      commentContent: "",
      commentEmail: "",
      rightCode: "",
      commentList: [{
        id:0,
        username:'xxx',
        comments:'sss',
        parent:"2",
        ctime:11111111111
      }],
      vcode: "",
      mycode: "",
      reply: "-1",
      replyname: "0"
    }
  },
  methods: {
    handleScroll() {
      var scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      if (scrollTop >= 70) {
        var top = scrollTop - 70;
        this.$refs.fixed.$el.style.marginTop = 20 + top + "px";
      } else {
        this.$refs.fixed.$el.style.marginTop = "20px";
      }
    },
  
    changeCode() {
      axios.get("/api/queryRandomCode").then(data => {
        this.vcode = data.data.data;
        this.rightCode = data.data.text;
      });
    },
     replyFunc:function(commentId,username){
        this.reply = commentId;
        this.replyname = username;
        let anchor = this.$refs.send_comment;
        scrollTo(0,anchor.offsetTop)
      },

    commentBlog() {
      if (this.rightCode != this.mycode) {
        this.$message.error("验证码不正确");
        return;
      }
      if (this.commentName.length > 0 && this.commentContent.length > 0) {
        axios.get(
            "/api/addcomment" +
              `?id=-1&parent=${this.reply}&parent_name=${this.replyname}&name=${this.commentName}&email=${this.commentEmail}&content=${this.commentContent}`
          ).then((response) => {
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
    mounted() {
      window.addEventListener("scroll", this.handleScroll);
    },
    destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
    }
  }
};
</script>

<style lang='scss'>
@import "@/assets/css/lmsg.scss";
</style>
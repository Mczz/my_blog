<template>
  <div class="lmsg">
    <el-row class="title">
      <span class="n1">{{tagBlogList[0].tagname}}</span>
      <span class="n2">时间最会骗人，但也能让你明白，这个世界没有什么不能失去的，离去的都是风景，留下的才是人生，走到最后的，就是对的人。</span>
    </el-row>
    <el-row :gutter="40">
      <el-col class="liuyanbox" :span="16">
        <blog v-for="item in tagBlogList" :key="item.id" :blog="item" />
        <el-pagination background layout="prev, pager, next" :total="tagBlogList.length"
          @current-change="handleCurrentChange"></el-pagination>
      </el-col>
      <el-col :span="8">
        <zhuanti title="特别推荐">
          <special />
        </zhuanti>
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
import blog from "@/components/blog.vue";
import special from "@/components/special.vue";
import {mapState} from "vuex";

export default {
  components: {
    zhuanti,
    guanzhu,
    special,
    blog
  },
  created(){
     //在页面加载时读取localStorage里的状态信息
    localStorage.getItem("userMsg") && this.$store.replaceState(Object.assign(this.$store.state,JSON.parse(localStorage.getItem("userMsg"))));
    
    //在页面刷新时将vuex里的信息保存到localStorage里
    window.addEventListener("beforeunload",()=>{
        localStorage.setItem("userMsg",JSON.stringify(this.$store.state))
    })
    this.id = this.$route.params.blogid ||this.$store.state.tagBlogList[0].tagId;
  },
  data() {
    return {
      id:1
    };
  },
  computed:{
    ...mapState(['tagBlogList'])
  },
  methods: {
    handleScroll() {
      var scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      if (scrollTop >= 940) {
        var top = scrollTop - 940;
        this.$refs.fixed.$el.style.marginTop = 90 + top + "px";
      } else {
        this.$refs.fixed.$el.style.marginTop = "20px";
      }
    }
  },
  handleCurrentChange(page) {
      var self = this;
      //切换页面
      axios
        .get("/api/gettagblog", {
          params: {
            id:this.id,
            page: page
          }
        })
        .then(function(response) {
          self.tagBlogList = response.data.data.tagBlogList;
        });
    },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  }
};
</script>

<style lang='scss'>
@import "@/assets/css/lmsg.scss";
</style>
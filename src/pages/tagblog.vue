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
import axios from 'axios';

export default {
  components: {
    zhuanti,
    guanzhu,
    special,
    blog
  },
  created(){
    this.id = this.$route.params.id;

    axios.get('/api/gettagblog',{
      params: {
        id: this.id,
        page:1
      }
    }).then(response => {
      this.tagBlogList = response.data.data.tagBlogList;
    })

  },
  data() {
    return {
      id:1,
      tagBlogList:[{
      title: "服务器尚未备案完成",
      content:
        "由于服务器尚未备案完成，数据库数据无法建立，故无法加载页面数据，暂时只有本地数据，还请谅解",
      ctime: 1552222222,
      view: 7,
      like: 1,
      img:
        "http://img1.imgtn.bdimg.com/it/u=1931157584,2026440929&fm=26&gp=0.jpg",
      id: 1,
      tagname:"测试"
    }]
    };
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
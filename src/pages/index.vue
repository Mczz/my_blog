<template>
  <div class="index-content">
    <el-row class="picbox" :gutter="20">
      <el-col :span="16">
        <el-carousel trigger="click" height="450px">
          <el-carousel-item v-for="(item,index) in sliderlist" :key="index">
            <img :src="item.img" @click="openBlogById(item.id)" />
          </el-carousel-item>
        </el-carousel>
      </el-col>
      <el-col :span="8" class="top-pics">
        <div
          class="top-pic"
          v-for="(item,index) in twolist"
          :key="index"
          @click="openBlogById(item.id)"
        >
          <i>
            <img :src="item.img" />
          </i>
          <p>{{ item.title }}</p>
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="20" class="content">
      <el-col :span="16">
        <blog v-for="item in blogList" :key="item.id" :blog="item" />
        <el-pagination
          background
          layout="prev, pager, next"
          :total="total"
          @current-change="handleCurrentChange"
        ></el-pagination>
      </el-col>
      <el-col :span="8">
        <zhuanti title="标签云">
          <ul>
            <tag
              v-for="(item,index) in tags"
              :key="index"
              :taginfo="item"
              :style="{backgroundColor:randomColor()}"
            />
          </ul>
        </zhuanti>
        <zhuanti title="推荐文章">
          <recommend />
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
import recommend from "@/components/recommend.vue";
import tag from "@/components/tag.vue";
import guanzhu from "@/components/guanzhu.vue";
import blog from "@/components/blog.vue";
import axios from "axios";

export default {
  created() {
    //获取轮播图
    var self = this;
    axios.get("/api/getslider").then(function(response) {
      self.sliderlist = response.data.data.sliderlist;
    });
    //获取右侧两图
    axios.get("/api/gettwoblog").then(function(response) {
      self.twolist = response.data.data.twolist;
    });
    //获取标签云
    axios.get("/api/gettags").then(function(response) {
      self.tags = response.data.data.tagList;
    });
    //获取博客
    axios
      .get("/api/getblogs", {
        params: {
          page: 1
        }
      })
      .then(function(response) {
        self.blogList = response.data.data.blogList;
      });
    //获取总数
    axios.get("/api/getblogtotal").then(function(response) {
      self.total = response.data.data.total;
    });
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  data() {
    return {
      sliderlist: [],
      blogList: [],
      tags: [],
      total: 2,
      twolist:[
        {
          title: "由于服务器尚未备案完成，数据库数据无法建立，故无法加载页面数据，暂时只有本数据，还请谅解",
          text:
            "四年的时间，学习专业课程，临近毕业恨不能找个简单轻松的工作远离编程，可是微薄的工资跟专业相比，找个专业的工作工资能高好几倍。好不容易找到个跟专业符合的工作，五年...",
          ctime: "2018-07-15",
          tag: "慢生活",
          view: 7,
          like: 1,
          img:
            "http://img1.imgtn.bdimg.com/it/u=1931157584,2026440929&fm=26&gp=0.jpg",
          id: 1,
          tagId:1
        },{
          title: "由于服务器尚未备案完成，故无法加载页面数据，还请谅解",
          text:
            "四年的时间，学习专业课程，临近毕业恨不能找个简单轻松的工作远离编程，可是微薄的工资跟专业相比，找个专业的工作工资能高好几倍。好不容易找到个跟专业符合的工作，五年...",
          ctime: "2018-07-15",
          tag: "慢生活",
          view: 7,
          like: 1,
          img:
            "http://img1.imgtn.bdimg.com/it/u=1931157584,2026440929&fm=26&gp=0.jpg",
          id: 1,
          tagId:2
        }
      ]
    };
  },
  computed: {
    randomColor() {
      return function() {
        var red = Math.random() * 205 + 50;
        var blue = Math.random() * 155 + 100;
        var green = Math.random() * 255;
        return `rgb(${red},${green},${blue}`;
      };
    }
  },
  methods: {
    openBlogById(id) {
      this.$router.push(`/blogdetail/${id}`);
    },
    //我的信息固定方法
    handleScroll() {
      var scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      if (scrollTop >= 1200) {
        var top = scrollTop - 1200;
        this.$refs.fixed.$el.style.marginTop = top + "px";
      } else {
        this.$refs.fixed.$el.style.marginTop = "20px";
      }
    },
    handleCurrentChange(page) {
      var self = this;
      //切换页面
      axios
        .get("/api/getblogs", {
          params: {
            page: page
          }
        })
        .then(function(response) {
          self.blogList = response.data.data.blogList;
        });
    }
  },
  components: {
    zhuanti,
    recommend,
    tag,
    guanzhu,
    blog
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  }
};
</script>

<style lang="scss">
@import "@/assets/css/index.scss";
</style>
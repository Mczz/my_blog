<template>
  <div class="index-content">
    <el-row class="picbox" :gutter="20">
      <el-col :span="16">
        <el-carousel trigger="click" height="450px">
          <el-carousel-item v-for="(item,index) in imglist" :key="index">
            <img :src="item" alt />
          </el-carousel-item>
        </el-carousel>
      </el-col>
      <el-col :span="8" class="top-pics">
        <div class="top-pic">
          <a href="#">
            <i>
              <img
                src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1563980539,1672265910&fm=27&gp=0.jpg"
              />
            </i>
            <p>做一个安静的男子</p>
          </a>
        </div>
        <div class="top-pic">
          <a href="#">
            <i>
              <img
                src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1080760116,732088640&fm=27&gp=0.jpg"
              />
            </i>
            <p>做一个安静的男子</p>
          </a>
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="20" class="content">
      <el-col :span="16">
        <blog v-for="(item,index) in blogList" :key="index" :blog="item" />
      </el-col>
      <el-col :span="8">
        <zhuanti title="特别推荐">
          <special />
        </zhuanti>
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

        <zhuanti class="fixed" title="关注我 么么哒">
          <guanzhu />
        </zhuanti>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import zhuanti from "@/components/zhuanti.vue";
import special from "@/components/special.vue";
import recommend from "@/components/recommend.vue";
import tag from "@/components/tag.vue";
import guanzhu from "@/components/guanzhu.vue";
import blog from "@/components/blog.vue";
import axios from 'axios'

export default {
  created() {
    axios({
      method:'get',
      url:'/getBlogList',
    }).then((res)=>{
      alert(res);
    })
  },
  data() {
    return {
      imglist: [
        require("@/assets/images/banner00.jpg"),
        require("@/assets/images/banner01.jpg"),
        require("@/assets/images/banner02.jpg")
      ],
      blogList: [
        {
          title: "程序员职业生涯该如何发展？",
          text:
            "四年的时间，学习专业课程，临近毕业恨不能找个简单轻松的工作远离编程，可是微薄的工资跟专业相比，找个专业的工作工资能高好几倍。好不容易找到个跟专业符合的工作，五年...",
          ctime: "2018-07-15",
          href: "#",
          tag: "慢生活",
          view: 7,
          like: 1,
          img:
            "http://www.yangqq.com/d/file/news/s/2013-07-09/82ad18fca433c2a102319063a17cfc8f.jpg"
        },
        {
          title: "程序员职业生涯该如何发展？",
          text:
            "四年的时间，学习专业课程，临近毕业恨不能找个简单轻松的工作远离编程，可是微薄的工资跟专业相比，找个专业的工作工资能高好几倍。好不容易找到个跟专业符合的工作，五年...",
          ctime: "2018-07-15",
          href: "#",
          tag: "慢生活",
          view: 7,
          like: 1,
          id: 1
        }
      ],
      tags: [
        { tagname: "博客", href: "#" },
        { tagname: "博w客", href: "#" },
        { tagname: "博das客", href: "#" },
        { tagname: "博客", href: "#" },
        { tagname: "博asd客", href: "#" },
        { tagname: "博客", href: "#" }
      ],
      
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
  components: {
    zhuanti,
    special,
    recommend,
    tag,
    guanzhu,
    blog
  }
};
</script>

<style lang="scss">
@import "@/assets/css/index.scss";
// .fixed{
//   position: fixed;
//   top:0px;
//   width: 377px;
// }
</style>
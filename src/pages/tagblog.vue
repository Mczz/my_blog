<template>
  <div class="lmsg">
    <el-row class="title">
      <span class="n1">{{}}</span>
      <span class="n2">时间最会骗人，但也能让你明白，这个世界没有什么不能失去的，离去的都是风景，留下的才是人生，走到最后的，就是对的人。</span>
    </el-row>
    <el-row :gutter="40">
      <el-col class="liuyanbox" :span="16">
        <blog v-for="(item,index) in blogList" :key="index" :blog="item" />
        <el-pagination background layout="prev, pager, next" :total="1000"></el-pagination>
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

export default {
  components: {
    zhuanti,
    guanzhu,
    special,
    blog
  },
  created(){
    this.tagid = this.$route.params.tagid
  },
  data() {
    return {
      blogList: [
        {
          title: "程序员职业生涯该如何发展？",
          text:
            "四年的时间，学习专业课程，临近毕业恨不能找个简单轻松的工作远离编程，可啊实打实大师的撒打算的爱思大声道爱思爱思大叔的阿萨德爱思大叔大事发生法规啊是微薄的工资跟专业相比，找个专业的工作工资能高好几倍。好不容易找到个跟专业符合的工作，五年...",
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
            "四年的时间，学习专业课程，临近毕业恨啊实打实的撒大叔大叔的撒大叔大叔大叔的撒大叔的阿萨德爱思爱思的阿萨达是大叔的 的点点滴滴多多多多多多多多多多多多多多多多多多多多多多撒阿萨德大多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多 萨顶顶多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多多撒不能找个简单轻松的工作远离编程，可是微薄的工资跟专业相比，找个专业的工作工资能高好几倍。好不容易找到个跟专业符合的工作，五年...",
          ctime: "2018-07-15",
          href: "#",
          tag: "慢生活",
          view: 7,
          like: 1,
          id: 1
        },
        {
          title: "程序员职业生涯该如何发展？",
          text:
            "四年的时间，学习专业课程，临近毕业恨不能找个简单轻松的工作远离编程，可啊实打实大师的撒打算的爱思大声道爱思爱思大叔的阿萨德爱思大叔大事发生法规啊是微薄的工资跟专业相比，找个专业的工作工资能高好几倍。好不容易找到个跟专业符合的工作，五年...",
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
            "四年的时间，学习专业课程，临近毕业恨不能找个简单轻松的工作远离编程，可啊实打实大师的撒打算的爱思大声道爱思爱思大叔的阿萨德爱思大叔大事发生法规啊是微薄的工资跟专业相比，找个专业的工作工资能高好几倍。好不容易找到个跟专业符合的工作，五年...",
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
            "四年的时间，学习专业课程，临近毕业恨不能找个简单轻松的工作远离编程，可啊实打实大师的撒打算的爱思大声道爱思爱思大叔的阿萨德爱思大叔大事发生法规啊是微薄的工资跟专业相比，找个专业的工作工资能高好几倍。好不容易找到个跟专业符合的工作，五年...",
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
            "四年的时间，学习专业课程，临近毕业恨不能找个简单轻松的工作远离编程，可啊实打实大师的撒打算的爱思大声道爱思爱思大叔的阿萨德爱思大叔大事发生法规啊是微薄的工资跟专业相比，找个专业的工作工资能高好几倍。好不容易找到个跟专业符合的工作，五年...",
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
            "四年的时间，学习专业课程，临近毕业恨不能找个简单轻松的工作远离编程，可啊实打实大师的撒打算的爱思大声道爱思爱思大叔的阿萨德爱思大叔大事发生法规啊是微薄的工资跟专业相比，找个专业的工作工资能高好几倍。好不容易找到个跟专业符合的工作，五年...",
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
            "四年的时间，学习专业课程，临近毕业恨不能找个简单轻松的工作远离编程，可啊实打实大师的撒打算的爱思大声道爱思爱思大叔的阿萨德爱思大叔大事发生法规啊是微薄的工资跟专业相比，找个专业的工作工资能高好几倍。好不容易找到个跟专业符合的工作，五年...",
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
            "四年的时间，学习专业课程，临近毕业恨不能找个简单轻松的工作远离编程，可啊实打实大师的撒打算的爱思大声道爱思爱思大叔的阿萨德爱思大叔大事发生法规啊是微薄的工资跟专业相比，找个专业的工作工资能高好几倍。好不容易找到个跟专业符合的工作，五年...",
          ctime: "2018-07-15",
          href: "#",
          tag: "慢生活",
          view: 7,
          like: 1,
          img:
            "http://www.yangqq.com/d/file/news/s/2013-07-09/82ad18fca433c2a102319063a17cfc8f.jpg"
        }
      ],
      tagid:{
        
      }
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
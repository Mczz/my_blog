<template>
  <div class="lmsg">
    <el-row class="title">
      <span class="n1"></span>
      <span class="n2">时间最会骗人，但也能让你明白，这个世界没有什么不能失去的，离去的都是风景，留下的才是人生，走到最后的，就是对的人。</span>
    </el-row>
    <el-row :gutter="40">
      <el-col class="liuyanbox" :span="16">
        <duihua />
        <duihua />
        <duihua />
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
import duihua from "@/components/duihua.vue";
export default {
  components: {
    zhuanti,
    guanzhu,
    duihua
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
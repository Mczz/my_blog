<template>
  <ul class="list">
    <li v-for="(item,index) in speciallist" :key="index">
      <i>
        <img :src="item.img" />
      </i>
      <p>
        {{item.title}}
        <span @click="openBlogById(item.id)">
          阅读
        </span>
      </p>
    </li>
  </ul>
</template>

<script>
import axios from "axios";

export default {
  created() {
    //获取特别推荐数据
    var self = this;
    axios.get("/api/getspecialblog").then(function(response) {
      self.speciallist = response.data.data.speciallist;
    });
  },
  data() {
    return {
      speciallist: [{
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
  methods:{
    openBlogById(id) {
      this.$store.dispatch("getArticleDetail", id);
      this.$router.push({ name: "blogdetail" });
    }
    
  }
};
</script>

<style scoped>
li {
  position: relative;
  height: 200px;
  margin-bottom: 20px;
  width: 100%;
  cursor: pointer;

}
li:hover img {
  opacity: 0.8;
}
li:hover span {
  color: #000;
}
li:hover span {
  background: #fff;
  opacity: 0.8;
}
i {
  width: 100%;
  height: 100%;
  background: #000;
  display: block;
}
img {
  width: 100%;
  height: 100%;
  opacity: 0.5;
  transition: all 0.5s ease;
}
p {
  position: absolute;
  top: 30%;
  left: 0;
  right: 0;
  color: #fff;
  text-align: center;
  font-size: 15px;
  overflow: hidden;
  margin-top: 5px;
  padding: 0 40px;
}
span {
  width: 80px;
  margin: 10px auto;
  background: transparent;
  font-size: 12px;
  border: 1px solid #fff;
  border-radius: 40px;
  padding: 4px 0;
  color: #fff;
  display: block;
  clear: both;
  transition: all 0.3s ease;
  cursor: pointer;
}

</style>
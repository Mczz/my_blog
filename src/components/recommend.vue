<template>
  <ul class="list">
    <li v-for="(item,index) in speciallist" :key="index" :class="{tjpic:index == 0,sidenews:index != 0}">
      <i>
        <img :src="item.img" @click="openBlogById(item.id)" />
      </i>
      <p @click="openBlogById(item.id)">{{item.content}}</p>
      <span>{{dateParse(item.ctime)}}</span>
    </li>
  </ul>
</template>

<script>
import axios from "axios";

export default {
  created() {
    //获取推荐数据
    var self = this;
    axios.get("/api/getspecialblog").then(function(response) {
      self.speciallist = response.data.data.speciallist;
    });
  },
  data() {
    return {
      speciallist: [
       {
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
        },{
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
        }
  
      ]
    };
  },
  methods: {
    openBlogById(id) {
        this.$router.push(`/blogdetail/${id}`);
    },
    dateParse(time){
        var date = new Date(time*1000);
        var Y = date.getFullYear() + '-';
        var M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
        var D  = date.getDate() + ' ';
        return Y+M+D;
    }
  }
};
</script>

<style scoped>
.tjpic {
  width: 100%;
  height: 170px;
  background: #000;
  margin-bottom: 20px;
  overflow: hidden;
  display: block;
  clear: both;
  position: relative;
}
.tjpic img {
  width: 100%;
  min-height: 170px;
  transition: all 0.5s ease;
  cursor: pointer;
}
.tjpic p {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 10px 20px;
  font-size: 15px;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: #fff;
  cursor: pointer;
  overflow: hidden;
  background: rgba(0, 0, 0, 0.7);
}


.sidenews {
  margin: 0 0 20px 0;
  overflow: hidden;
}
.sidenews i {
  width: 100px;
  height: 75px;
  overflow: hidden;
  display: block;
  border: #efefef 1px solid;
  float: left;
  margin-right: 10px;
}
.sidenews img {
  width: 100%;
  height: 100%;
  transition: all 0.5s ease;
  cursor: pointer;
}
.sidenews p {
  line-height: 24px;
  font-size: 15px;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  cursor: pointer;
  color: #48494d;
}
.sidenews p a {
  color: #48494d;
  text-decoration: none;
}
li:hover .sidenews p {
  color: #00a7eb;
}
.sidenews span {
  font-size: 12px;
  color: #9a9a9a;
  margin-top: 10px;
  display: block;
}
li:hover img {
  transform: scale(1.1);
}
</style>
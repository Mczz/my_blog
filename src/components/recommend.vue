<template>
  <ul class="list">
    <li v-for="(item,index) in list" :key="index" :class="{tjpic:index == 0,sidenews:index != 0}">
      <i>
        <img :src="item.img" @click="openBlogById(item.id)" />
      </i>
      <p @click="openBlogById(item.id)">{{item.content}}</p>
      <span>{{item.ctime}}</span>
    </li>
  </ul>
</template>

<script>
export default {
  created() {
    //获取推荐数据
  },
  data() {
    return {
      list: [
        {
          img:
            "http://www.yangqq.com/d/file/news/s/2013-07-09/89b36652d1f5ba23172c7ed3dc522d8b.jpg",
          content: "Just One Last Dance",
          href: "#",
          ctime: "[2018-07-15]"
        },
        {
          img:
            "http://www.yangqq.com/d/file/jstt/bj/2018-06-29/3f0b6da48a6fd4e626a021ff7bd0d74f.jpg",
          content: "【匆匆那些年】总结个人博客经历的这四年…",
          href: "#",
          ctime: "[2018-07-15]"
        },
        {
          img:
            "http://www.yangqq.com/d/file/news/s/2013-07-09/89b36652d1f5ba23172c7ed3dc522d8b.jpg",
          content: "Just One Last Dance",
          href: "#",
          ctime: "[2018-07-15]"
        }
      ]
    };
  },
  methods: {
    openBlogById(id) {
      this.$store.dispatch("getArticleDetail", id);
      this.$router.push({ name: "blogdetail" });
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

  overflow: hidden;
  background: rgba(0, 0, 0, 0.7);
}
.tjpic p a {
  color: #fff;
  text-decoration: none;
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
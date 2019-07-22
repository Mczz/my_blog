<template>
  <ul class="list">
    <li v-for="(item,index) in list" :key="index">
      <i>
        <img :src="item.img" />
      </i>
      <p>
        {{item.content}}
        <span>
          <a :href="item.href" :title="item.content" target="_blank">阅读</a>
        </span>
      </p>
    </li>
  </ul>
</template>

<script>
export default {
  created() {
    //获取特别推荐数据
  },
  data() {
    return {
      list: [
        {
          img:
            "http://www.yangqq.com/d/file/news/s/2013-07-09/89b36652d1f5ba23172c7ed3dc522d8b.jpg",
          content: "Just One Last Dance",
          href: "#"
        },
        {
          img:
            "http://www.yangqq.com/d/file/news/s/2013-07-09/89b36652d1f5ba23172c7ed3dc522d8b.jpg",
          content: "Just One Last Dance",
          href: "#"
        },
        {
          img:
            "http://www.yangqq.com/d/file/news/s/2013-07-09/89b36652d1f5ba23172c7ed3dc522d8b.jpg",
          content: "Just One Last Dance",
          href: "#"
        }
      ]
    };
  }
};
</script>

<style scoped>
li {
  position: relative;
  height: 200px;
  margin-bottom: 20px;
  width: 100%;
}
li:hover img {
  opacity: 0.8;
}
li:hover a {
  color: #000;
}
li:hover span {
  background: #fff;
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
}
a {
  color: #ffffff;
  text-decoration: none;
}
</style>
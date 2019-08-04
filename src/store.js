import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    articleDetail: {
      title: "程序员职业生涯该如何发展？",
      text: "四年的时间，学习专业课程，临近毕业恨不能找个简单轻松的工作远离编程，可啊实打实大师的撒打算的爱思大声道爱思爱思大叔的阿萨德爱思大叔大事发生法规啊是微薄的工资跟专业相比，找个专业的工作工资能高好几倍。好不容易找到个跟专业符合的工作，五年...",
      ctime: "2018-07-15",
      href: "#",
      tag: "慢生活",
      view: 7,
      like: 1,
      img: "http://www.yangqq.com/d/file/news/s/2013-07-09/82ad18fca433c2a102319063a17cfc8f.jpg"
    }
  },
  mutations: {
    setArticleDetail(state, data) {
      state.articleDetail = data;
    }
  },
  actions: {
    getArticleDetail(state, id) {
      axios.get('/api/getblogbyid',{
        params: {
          id: id
        }
      }).then(function (response) {
        state.commit('setArticleDetail',response.data.article)
      })
    }
  }
})
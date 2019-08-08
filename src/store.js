import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    blogid:1,
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
  },
  mutations: {
    
    settagblog(state, data) {
      state.tagBlogList = data;
    },
    setBlogId(state, id) {
      state.blogid = id;
    }
  },
  actions: {
    
    getTagBlog(state, id) {
      axios.get('/api/gettagblog',{
        params: {
          id: id,
          page:1
        }
      }).then(function (response) {
        state.commit('settagblog',response.data.data.tagBlogList)
      })
    }
  }
})

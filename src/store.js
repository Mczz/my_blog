import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    articleDetail: {},
    tagBlogList:{}
  },
  mutations: {
    setArticleDetail(state, data) {
      state.articleDetail = data;
    },
    settagblog(state, data) {
      state.tagBlogList = data;
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
    },
    getTagBlog(state, id) {
      axios.get('/api/gettagblog',{
        params: {
          id: id
        }
      }).then(function (response) {
        state.commit('setArticleDetail',response.data.article)
      })
    }
  }
})
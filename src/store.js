import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    article: []
  },
  mutations: {
    ["EDIT_ARTICLE"](state, val) {
      state.article = val
    }
  },
  actions: {

  }
})
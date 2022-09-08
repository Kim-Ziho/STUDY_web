import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    title: "치킨은 맛있다.",
    salt: 30,
  },
  getters: {
  },
  mutations: {
    SET_SALT(state, data) {
      state.salt = data;
    }
  },
  actions: {
  },
  modules: {
  }
})

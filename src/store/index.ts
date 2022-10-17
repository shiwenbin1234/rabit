import { createStore } from 'vuex'

export default createStore({
  state: {
    category:[]
  },
  getters: {
  },
  mutations: {
    saveCategory(state,payload) {
      state.category = payload
    }
  },
  actions: {
  },
  modules: {
  }
})

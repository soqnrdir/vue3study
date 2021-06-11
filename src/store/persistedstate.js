import { createStore } from 'vuex'

import persistedstate from './persistedstate'

export default createStore({
  state () {
    return {
      user: {}
    }
  },
  mutations: {
    user (state, data) {
      state.user = data
    }
  },
  plugins: [
    persistedstate({
      paths: ['users']
    })
  ]
})

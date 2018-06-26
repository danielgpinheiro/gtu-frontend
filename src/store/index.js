import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import { createModule } from 'vuex-toast'
import 'vuex-toast/dist/vuex-toast.css'
import * as actions from './modules/cleanStorage'
import someStore from './modules/someStore'

Vue.use(Vuex)

export default new Vuex.Store({
  actions,
  modules: {
    someStore,
    toast: createModule({
      dismissInterval: 4000
    })
  },
  strict: false,
  plugins: [
    createPersistedState({
      key: 'vuex-gtu'
    })
  ]
})

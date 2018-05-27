import Vue from 'vue'
import Vuex from 'vuex'
import noticias from './modules/noticias'
import organismos from './modules/organismos'

Vue.use(Vuex)

// const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    noticias,
    organismos
  }

})

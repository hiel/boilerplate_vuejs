import Vue from 'vue'
import Vuex from 'vuex'
import modules from './modules'
import '../mixins/common'

Vue.use(Vuex)

export default new Vuex.Store({ modules })

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    baseInfo: {}
}

const mutations = {
    saveBaseInfo(state, payload) {
        state.baseInfo = payload
    }
}


export default new Vuex.Store({
    state,
    mutations,
})
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    baseInfo: {},
    baseUrl: '',
    navIndex: 0,
}

const mutations = {
    saveBaseInfo(state, payload) {
        state.baseInfo = payload
    },
    saveBaseUrl(state, payload) {
        state.baseUrl = payload
    },
    saveNavIndex(state, payload) {
        state.navIndex = payload;
        window.scrollTo(0, 0);
    }
}


export default new Vuex.Store({
    state,
    mutations,
})
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    baseInfo: {},
    navIndex: 0,
}

const mutations = {
    saveBaseInfo(state, payload) {
        state.baseInfo = payload
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
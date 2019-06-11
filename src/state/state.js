import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const state = {
    count: 1
}

const getters = {
    countSum: function(state) {
        return state.count;
    }
}

const mutations = {
    increment(state) {
        state.count++;
    }
}

const actions = {
    showCount: function(context) {
        context.commit("increment");
    }
}

const store = new Vuex.Store({
    state,
    getters,
    mutations,
    actions
});

export default store;
import Vue from 'vue';
import Vuex from 'vuex';
import actions from './actions';
import getters from './getters';
import mutations from './mutations';
import state from './state';
import VuexPersist from 'vuex-persist'

Vue.use(Vuex)

const vuexPersist = new VuexPersist({
  key: 'vuex',
  storage: localStorage,
})

const store = new Vuex.Store({
  actions,
  getters,
  mutations,
  state,
  plugins: [vuexPersist.plugin]
});

export default store;

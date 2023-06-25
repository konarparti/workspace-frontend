import Vue from 'vue';
import Vuex from 'vuex';

import preloader from '@/modules/preloader/store';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    preloader,
  },
  state: () => ({
    openMenu: true,
  }),
  mutations: {
    TOGGLE_MENU: (state) => {
      state.openMenu = !state.openMenu;
    },

    SET_STATUS: (state, value) => {
      state.openMenu = value;
    },
  },

  getters: {
    GET_MENU_STATUS: (state) => state.openMenu,
  },
});

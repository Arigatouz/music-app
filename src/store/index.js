import { createStore } from "vuex";

export default createStore({
  state: {
    authModalShow: false,
  },

  getters: {
    // we did comment this coz we can return mapState instead of mapGetters function coz we dont't perform any operation
    // on the getter it's over kill in this situation
    // authModalShow: (state) => state.authModalShow,
  },

  mutations: {
    toggleAuthModal: (state) => {
      state.authModalShow = !state.authModalShow;
    },
  },

  actions: {},

  modules: {},
});

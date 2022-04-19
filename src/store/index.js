import { createStore } from "vuex";

export default createStore({
  state: {
    authModalShow: false,
  },

  getters: {
    // we did comment this coz we can return mapState instead of mapGetters function coz we dont't perform any operation
    // on the getter it's over kill in this situation
    //! remember getters are like computed property
    //! naming convention is not required in the getter so we could change authModalShow in the getters
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

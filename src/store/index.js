import { createStore } from "vuex";

export default createStore({
  state: {
    authModalShow: false,
    userLoggedIn: false,
  },

  getters: {
    // we did comment this coz we can return mapState instead of mapGetters function coz we dont't perform any operation
    // on the getter it's over kill in this situation
    //! remember getters are like computed property
    //! naming convention is not required in the getter so we could change authModalShow in the getters
    // authModalShow: (state) => state.authModalShow,
  },

  mutations: {
    // toggle the modal to register or login
    toggleAuthModal: (state) => (state.authModalShow = !state.authModalShow),

    // toggle user state if he is logged in
    toggleAuthentication: (state) => (state.userLoggedIn = !state.userLoggedIn),
  },

  actions: {},

  modules: {},
});

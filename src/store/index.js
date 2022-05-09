import { createStore } from "vuex";
import { auth, Users } from "@/include/firebase.js";

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

  actions: {
    async register({ commit }, payload) {
      // firebase adding user
      const userCred = await auth.createUserWithEmailAndPassword(
        payload.email,
        payload.password
      );

      // adding user data to the same mail which register up ⬆️⬆️
      await Users.doc(userCred.user.uid).set({
        name: payload.name,
        email: payload.email,
        age: payload.age,
        password: payload.password,
        country: payload.country,
        favorite_music: payload.favorite_music,
      });
      // toggling the user authentication
      commit("toggleAuthentication");
    },
    init_login({ commit }) {
      const user = auth.currentUser;
      if (user) {
        commit("toggleAuthentication");
      }
    },
  },

  modules: {},
});

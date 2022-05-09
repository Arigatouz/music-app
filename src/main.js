import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import veeValidatePlugin from "@/plugins/formValidation";

import "./assets/tailwind.css";
import "./assets/css/main.css";

// destructuring the auth from the firebase to check the state of the application
import { auth } from "./include/firebase.js";

//! remember to initialize firebase before loading the vue app or you wont be able to track if the user still logged in or not
let application;
auth.onAuthStateChanged(() => {
  if (!application) {
    // creating vue application
    application = createApp(App);
    // allowing the application to use {store - router - veeValidatePlugin}
    application.use(store);
    application.use(router);
    application.use(veeValidatePlugin);

    application.mount("#app");
  }
});

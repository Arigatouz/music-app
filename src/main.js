import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import veeValidatePlugin from "@/plugins/formValidation";

import "./assets/tailwind.css";
import "./assets/css/main.css";

const application = createApp(App);

application.use(store);
application.use(router);
application.use(veeValidatePlugin);

application.mount("#app");

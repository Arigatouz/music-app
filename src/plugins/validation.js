import {
  Field as veeField,
  Form as veeForm,
  defineRule,
  ErrorMessage,
} from "vee-validate";

import {
  required,
  min,
  max,
  email,
  alpha_spaces as alphaSpaces,
} from "@vee-validate/rules";

export default {
  install(app) {
    app.component("veeField", veeField);
    app.component("veeForm", veeForm);
    app.component("errorMessage", ErrorMessage);

    defineRule("required", required);
    defineRule("min", min);
    defineRule("max", max);
    defineRule("email", email);
    defineRule("alphaSpaces", alphaSpaces);
  },
};

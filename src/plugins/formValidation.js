import {
  Field as veeField,
  Form as veeForm,
  defineRule,
  ErrorMessage,
  configure,
} from "vee-validate";

import {
  required,
  min,
  max,
  email,
  alpha_spaces,
  max_value,
  min_value,
  confirmed,
  is_not,
} from "@vee-validate/rules";

export default {
  install(app) {
    app.component("veeField", veeField);
    app.component("veeForm", veeForm);
    app.component("errorMessage", ErrorMessage);

    defineRule("required", required);
    defineRule("tos", required);
    defineRule("min", min);
    defineRule("max", max);
    defineRule("email", email);
    defineRule("alpha_spaces", alpha_spaces);
    defineRule("max_value", max_value);
    defineRule("min_value", min_value);
    defineRule("password_mismatch", confirmed);
    defineRule("excluded", is_not);
    defineRule("excluded_country", is_not);

    configure({
      // bails: false,
      generateMessage: (ctx) => {
        const messages = {
          required: `the field ${ctx.field} is required`,
          min: `the field ${ctx.field} is too short`,
          max: `the field ${ctx.field} is too long `,
          email: `the field ${ctx.field} need to have valid email`,
          alpha_spaces: `the field ${ctx.field} must contain letters and spaces only!`,
          max_value: `the field ${ctx.field} is too heigh`,
          min_value: `the field ${ctx.field} is too low`,
          password_mismatch: `The password you entered don't match`,
          excluded: `You are not allowed to use this value for the field ${ctx.field}.`,
          excluded_country:
            "Due to restrictions, we do not accept users from this location.",
          tos: `you must select the terms of service before continue on registration`,
        };
        const message = messages[ctx.rule.name]
          ? messages[ctx.rule.name]
          : `The field ${ctx.field} is invalid.`;
        return message;
      },
    });
  },
};

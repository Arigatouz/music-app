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
  one_of,
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
    defineRule("special_character", one_of);

    configure({
      bails: false,
      generateMessage: (ctx) => {
        const messages = {
          required: `the field ${ctx.field} is required`,
          min: `The field ${ctx.field} is too short`,
          max: `The field ${ctx.field} is too long `,
          email: `The field ${ctx.field} need to have valid email`,
          alpha_spaces: `The field ${ctx.field} must contain letters and spaces only!`,
          max_value: `The field ${ctx.field} is too heigh`,
          min_value: `The field ${ctx.field} is too low`,
          password_mismatch: `The password you entered don't match`,
          excluded: `You are not allowed to use this value for the field ${ctx.field}.`,
          excluded_country:
            "Due to restrictions, we do not accept users from this location.",
          tos: `you must select the terms of service `,
          special_character:
            "Password needs to have at least one special Character",
        };
        const message = messages[ctx.rule.name]
          ? messages[ctx.rule.name]
          : `The field ${ctx.field} is invalid.`;
        return message;
      },
      validateOnBlur: true, //validation on clicking on the input and then click away
      validateOnModelUpdate: true, // validation if the value changes internally in the v-model directive
      validateOnChange: true, // validate when you change happens in an input
      validateOnInput: false, // validate on every key stroke this is by far the most aggressive in validation
    });
  },
};
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
    defineRule("login_password", required);
    defineRule("login_email", required);
    defineRule("music_type", required);
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
      bails: false,
      generateMessage: (ctx) => {
        const messages = {
          required: `the field ${ctx.field} is required`,
          min: `The field ${ctx.field} is too short`,
          max: `The field ${ctx.field} is too long `,
          email: `The field ${ctx.field} need to have valid email`,
          login_email: `Please enter your email address!`,
          alpha_spaces: `The field ${ctx.field} must contain letters and spaces only!`,
          max_value: `The field ${ctx.field} is too heigh`,
          min_value: `The field ${ctx.field} is too low`,
          password_mismatch: `The password you entered don't match`,
          login_password: "Please Enter your Password",
          excluded: `You are not allowed to use this value for the field ${ctx.field}.`,
          excluded_country:
            "Due to restrictions, we do not accept users from this location.",
          tos: `you must select the terms of service `,
          music_type: "Please Select One music Type of the categories Below!",
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

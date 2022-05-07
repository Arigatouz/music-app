<script>
export default {
  data() {
    return {
      schema: {
        email: "login_email|email",
        password: "login_password",
      },
      login_in_submission: false,
      login_show_alert: false,
      login_alert_message: "Please wait! your account is being created!",
      login_alert_variant: "bg-blue-600",
    };
  },
  methods: {
    logIn(values) {
      this.login_in_submission = true;
      this.login_show_alert = true;
      this.login_alert_message = "Please wait! your account is being created!";
      this.login_alert_variant = "bg-blue-600";

      this.login_alert_message = "account created successfully!";
      this.login_alert_variant = "bg-green-600";
      console.log(values);
    },
  },
};
</script>
<template>
  <div>
    <div
      class="text-center text-white fon-bold p-4 mb-5"
      v-if="login_show_alert"
      :class="login_alert_variant"
    >
      <p>{{ login_alert_message }}</p>
    </div>
    <vee-form :validation-schema="schema" @submit="logIn">
      <!-- Email -->
      <div class="mb-3">
        <label class="inline-block mb-2">Email</label>
        <vee-field
          type="email"
          name="email"
          class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
          placeholder="Enter Email"
        />
        <error-message name="email" class="text-red-600" />
      </div>
      <!-- Password -->
      <div class="mb-3">
        <label class="inline-block mb-2">Password</label>
        <vee-field
          name="password"
          type="password"
          class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
          placeholder="Password"
        />
        <error-message name="password" class="text-red-600" />
      </div>
      <button
        :disabled="login_in_submission"
        type="submit"
        class="block w-full bg-purple-600 text-white py-1.5 px-3 rounded transition hover:bg-purple-700"
      >
        Submit
      </button>
    </vee-form>
  </div>
</template>

<style lang="scss" scoped></style>

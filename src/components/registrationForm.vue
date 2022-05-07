<script>
import { auth, Users } from "@/include/firebase.js";

// showing Error box function
const formAlertErrorBox = (that, error) => {
  that.reg_in_submission = false;
  that.reg_alert_variant = "bg-red-600";
  that.reg_alert_message =
    error || "something went wrong please try again later !";
};

// showing request in process box function
const onSubmission = (that) => {
  that.reg_in_submission = true;
  that.reg_alert_variant = "bg-blue-600";
  that.reg_show_alert = true;
  that.reg_alert_message = "Please wait! your account is being created!";
};

export default {
  data() {
    return {
      userData: {
        country: "USA",
      },
      schema: {
        name: "required|min:4|max:25|alpha_spaces",
        email: "required|email",
        age: "required|min_value:15|max_value:100",
        password: "required|min:6|max:25|alpha_spaces",
        confirm_password: "required|password_mismatch:@password",
        country: "required|excluded_country:Israel",
        favorite_music: "music_type",
        tos: "tos",
      },
      reg_in_submission: false,
      reg_show_alert: false,
      reg_alert_message: "Please wait! your account is being created!",
      reg_alert_variant: "bg-blue-600",
    };
  },
  methods: {
    // register
    async register(values) {
      // showing request in process box function
      onSubmission(this);

      // firebase adding user
      let userCred = null;
      try {
        userCred = await auth.createUserWithEmailAndPassword(
          values.email,
          values.password
        );
      } catch (error) {
        // showing Error box function
        formAlertErrorBox(this, error.message);
        console.log("registration From Error :", error);
        console.log("registration From Error :", error.message);
        return;
      }

      try {
        await Users.add({
          name: values.name,
          email: values.email,
          age: values.age,
          password: values.password,
          country: values.country,
          favorite_music: values.favorite_music,
        });
      } catch (error) {
        // showing Error box function
        formAlertErrorBox(this);
        console.log("registration From Error :", error);
        console.log("registration From Error :", error.message);
        return;
      }
      // toggling the user authentication
      this.$store.commit("toggleAuthentication");

      this.reg_alert_variant = "bg-green-600";
      this.reg_alert_message = "Success. you account has been created!";
      console.log("registration From", userCred);
    },
  },
};
</script>

<template>
  <div>
    <!-- alerting Banner -->
    <div
      class="text-white text-center font-bold p-4 mb-4"
      v-if="reg_show_alert"
      :class="reg_alert_variant"
    >
      <p>{{ reg_alert_message }}</p>
    </div>
    <!-- registration Form -->
    <vee-form
      :validation-schema="schema"
      @submit="register"
      :initial-values="userData"
    >
      <!-- Name -->
      <div class="mb-1">
        <label class="inline-block mb-2">Name</label>
        <vee-field
          type="text"
          name="name"
          class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
          placeholder="Enter Name"
        />
        <error-message name="name" class="text-red-600" />
      </div>
      <!-- Email -->
      <div class="mb-1">
        <label class="inline-block mb-2">Email</label>
        <vee-field
          name="email"
          type="email"
          class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
          placeholder="Enter Email"
        />
        <error-message name="email" class="text-red-600" />
      </div>
      <!-- Age -->
      <div class="mb-1">
        <label class="inline-block mb-2">Age</label>
        <vee-field
          name="age"
          type="number"
          class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
        />
        <error-message name="age" class="text-red-600" />
      </div>
      <!-- Password -->
      <div class="mb-1">
        <label class="inline-block mb-2">Password</label>
        <vee-field name="password" v-slot="{ field, errors }">
          <input
            class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
            type="password"
            placeholder="Password"
            v-bind="field"
          />
          <div class="text-red-600" v-for="error in errors" :key="error">
            <p>{{ error }}</p>
          </div>
        </vee-field>
      </div>
      <!-- Confirm Password -->
      <div class="mb-1">
        <label class="inline-block mb-2">Confirm Password</label>
        <vee-field
          name="confirm_password"
          type="password"
          class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
          placeholder="Confirm Password"
        />
        <error-message name="confirm_password" class="text-red-600" />
      </div>
      <!-- Country -->
      <div class="mb-1">
        <label class="inline-block mb-2">Country</label>
        <vee-field
          as="select"
          name="country"
          class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
        >
          <option value="Egypt">Egypt</option>
          <option value="USA">USA</option>
          <option value="Mexico">Mexico</option>
          <option value="Germany">Germany</option>
          <option value="Israel">Israel</option>
        </vee-field>
        <error-message name="country" class="text-red-600" />
      </div>
      <!-- Favorite Music -->
      <div class="mb1">
        <label class="inline-block mb-2">Favorite Music</label>
        <error-message name="favorite_music" class="text-red-600 block" />
        <vee-field
          as="select"
          name="favorite_music"
          class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
        >
          <option value="Rock">Rock</option>
          <option value="Pop">Pop Music</option>
          <option value="Jazz">Jazz</option>
          <option value="Metal">Metal</option>
          <option value="Romantic">Romantic</option>
        </vee-field>
      </div>
      <!-- TOS Terms Of Services -->
      <div class="mb-3 pl-6 mt-2">
        <vee-field
          name="tos"
          value="1"
          type="checkbox"
          class="w-4 h-4 float-left -ml-6 mt-1 rounded"
        />
        <label class="inline-block">Accept terms of service</label>
        <error-message name="tos" class="text-red-600 block" />
      </div>
      <button
        :disabled="reg_in_submission"
        type="submit"
        class="block w-full bg-purple-600 text-white py-1.5 px-3 rounded transition hover:bg-purple-700"
      >
        Submit
      </button>
    </vee-form>
  </div>
</template>

<style lang="scss" scoped></style>

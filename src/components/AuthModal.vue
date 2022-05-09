<template>
  <!-- Auth Modal -->
  <div
    class="fixed z-10 inset-0 overflow-y-auto"
    id="modal"
    :class="{ hidden: !authModalShow }"
  >
    <div
      class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
    >
      <div class="fixed inset-0 transition-opacity">
        <div class="absolute inset-0 bg-gray-800 opacity-75"></div>
      </div>

      <!-- This element is to trick the browser into centering the modal contents. -->
      <span class="hidden sm:inline-block sm:align-middle sm:h-screen"
        >&#8203;</span
      >
      <div
        class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
      >
        <!-- Add margin if you want to see some of the overlay behind the modal-->
        <div class="py-4 text-left px-6">
          <!--Title-->
          <div class="flex justify-between items-center pb-4">
            <p class="text-2xl font-bold">Your Account</p>
            <!-- Modal Close Button -->
            <div
              class="modal-close cursor-pointer z-50"
              @click.prevent="closeModal"
            >
              <i class="fas fa-times text-3xl"></i>
            </div>
          </div>

          <!-- Tabs -->
          <ul class="flex flex-wrap mb-4">
            <li class="flex-auto text-center">
              <a
                class="block rounded py-3 px-4 transition"
                href="#"
                @click.prevent="tabs = 'login'"
                :class="loginTabStyle"
                >Login</a
              >
            </li>
            <li class="flex-auto text-center ml-1">
              <a
                class="block rounded py-3 px-4 transition"
                href="#"
                @click.prevent="tabs = 'register'"
                :class="registerTabStyle"
                >Register</a
              >
            </li>
          </ul>

          <!-- Login Form -->
          <login-form v-if="tabs === 'login'" />
          <!-- Registration Form -->
          <registrationForm v-else />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import registrationForm from "@/components/registrationForm.vue";
import loginForm from "@/components/LoginForm.vue";
import { mapMutations, mapState } from "vuex";
export default {
  name: "AuthModal",
  components: {
    registrationForm,
    loginForm,
  },
  data() {
    return {
      tabs: "login",
    };
  },

  computed: {
    // authModalShow() {
    //    return { hidden: !this.$store.getters.toggleAuthModal };
    // },
    // we can also use mapGetters instead of the authModalShow computed property up there
    // but we will have to change the :class into {hidden : toggleAuthModal}
    // ...mapGetters(["authModalShow"]),
    // we did comment out the mapGetters coz we don't do any operation on the getter
    // don't forget to destructure it if you ever gonna use mapGetters
    ...mapState(["authModalShow"]),

    loginTabStyle() {
      return {
        "hover:text-white text-white bg-blue-600": this.tabs === "login",
        "hover:text-blue-600  hover:shadow-lg hover:ring-2 ring-indigo-500 ring-inset":
          this.tabs === "register",
      };
    },

    registerTabStyle() {
      return {
        "hover:text-white text-white bg-blue-600": this.tabs === "register",
        "hover:text-blue-600  hover:shadow-lg hover:ring-2 ring-indigo-500 ring-inset":
          this.tabs === "login",
      };
    },
  },
  methods: {
    // we can pass an alias to the map functions but it will take an object instead of an array
    // we don't have any function with the name closeModal but it works as an alias to toggleAuthModal
    ...mapMutations({
      closeModal: "toggleAuthModal",
    }),
    // ...mapMutations(["toggleAuthModal"]),
  },
};
</script>

<template>
  <!-- Header -->
  <header id="header" class="bg-gray-700">
    <nav class="container mx-auto flex justify-start items-center py-5 px-4">
      <!-- App Name -->
      <a class="text-white font-bold uppercase text-2xl mr-4" href="#">Music</a>
      <div class="flex flex-grow items-center">
        <!-- Primary Navigation -->
        <ul class="flex flex-row mt-1">
          <!-- Navigation Links -->
          <template v-if="!userLoggedIn">
            <li>
              <a class="px-2 text-white" href="#" @click.prevent="showModal"
                >Login / Register</a
              >
            </li>
          </template>
          <template v-else>
            <li>
              <a class="px-2 text-white" href="#">Manage</a>
            </li>
            <li>
              <a class="px-2 text-white" href="#" @click.prevent="LogOut"
                >Logout</a
              >
            </li>
          </template>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
import { mapMutations, mapState, mapActions } from "vuex";
export default {
  name: "AppHeder",
  computed: {
    ...mapState(["userLoggedIn"]),
  },
  methods: {
    // showModal() {
    //   this.$store.commit("toggleAuthModal");
    // },
    ...mapMutations({
      showModal: "toggleAuthModal",
    }),
    ...mapActions(["LogOut"]),
  },
};
</script>

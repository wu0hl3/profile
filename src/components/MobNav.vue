<template>
  <div class="bg-gray-600 p-2 top-0 w-full h-14" :class="{ hidden: !toggleNav }"></div>
  <nav
    id="ModileNav"
    class="bg-gray-600 shadow-lg p-2 top-0 z-50 h-14 w-full lg:hidden transition-all"
    :class="{ sticky: !toggleNav, fixed: toggleNav }"
  >
    <button
      id="ToggleNav"
      class="p-2 h-10 flex flex-col justify-between lg:hidden ml-auto top-2 transition right-2 focus:outline-none"
      @click="navHandler"
    >
      <span
        class="border block border-gray-50 w-7 transform transition duration-500"
        :class="{ 'rotate-45': toggleNav, 'translate-y-3': toggleNav }"
      ></span>
      <span
        class="border block border-gray-50 w-7 transition duration-500"
        :class="{ 'opacity-0': toggleNav }"
      ></span>
      <span
        class="border block border-gray-50 w-7 transform transition duration-500"
        :class="{ '-rotate-45': toggleNav, '-translate-y-3': toggleNav }"
      ></span>
    </button>

    <ul
      id="NavListMobile"
      class="w-full h-screen fixed bg-gray-500 top-14 left-0 transition duration-500 z-10"
      :class="{ 'opacity-0': !toggleNav, 'pointer-events-none': !toggleNav }"
    >
      <li class="NavItem">
        <router-link
          to="/"
          class="block text-white text-2xl transition-all duration-500 ease-out text-center p-4"
          @click="navHandler"
          >Home</router-link
        >
      </li>
      <li class="NavItem">
        <router-link
          to="/contact"
          class="block text-white text-2xl transition-all duration-500 ease-out text-center p-4"
          @click="navHandler"
          >Contact</router-link
        >
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'MobNav',
  emits: ['navToggle'],
  data() {
    return {
      toggleNav: false,
    };
  },
  methods: {
    navHandler() {
      this.toggleNav = !this.toggleNav;
    },
  },
  watch: {
    toggleNav(val, oldVal) {
      if (val !== oldVal) {
        this.$emit('navToggle', val);
      }
    },
  },
};
</script>

<style>
</style>
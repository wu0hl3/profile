<template>
  <nav id="Nav" class="bg-gray-600 shadow-lg p-2 sticky top-0 z-50 h-14 w-full hidden lg:block">
    <!--記得拿掉高 -->
    <ul
      id="NavListComputer"
      class="container mx-auto justify-end divide-x divide-gray-400 text-gray-400 flex"
    >
      <li class="NavItem">
        <router-link
          to="/"
          class="block p-2 hover:text-white transition-all duration-500 ease-out px-4 mx-1"
          >Home</router-link
        >
      </li>
      <li class="NavItem">
        <router-link
          to="/contact"
          class="block p-2 hover:text-white transition-all duration-500 ease-out px-4 mx-1"
          >Contact</router-link
        >
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Nav',
};
</script>

<style>
</style>
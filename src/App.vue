<template>
  <header id="Header" class="w-full">
    <banner />
  </header>
  <Nav />
  <MobNav />
  <router-view name="Aside"></router-view>
  <main id="Main" class="w-full lg:flex-1 max-w-screen-xl container" :class="{ 'mt-18': toggle }">
    <router-view />
  </main>
  <Footer :author="author"/>
</template>

<script>
import Banner from '/@/components/Banner.vue';
import Nav from '/@/components/Nav.vue';
import MobNav from './components/MobNav.vue';
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: { Banner, Nav, MobNav ,Footer},
  data() {
    return {
      toggle: false,
      author:'ChiuHui  @2021'
    };
  },
};
</script>

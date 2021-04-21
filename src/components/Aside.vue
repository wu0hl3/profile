<template>
  <aside
    id="Aside"
    class="w-full lg:w-auto bg-gray-50 mb-5 lg:my-5 px-10 lg:mx-10 shadow-lg sticky top-12 lg:top-20 z-10 self-start"
  >
    <ul class="flex justify-evenly lg:flex-col lg:divide-y lg:divide-gray-300">
      <li>
        <a
          href="#Info"
          class="writing-vertical-lr lg:writing-horizontal font-semibold text-gray-600 p-5 block"
          :class="{ 'text-gray-900': active }"
          @click.prevent="anchorHandler"
          >簡介</a
        >
      </li>
      <li>
        <a
          href="#Education"
          class="writing-vertical-lr lg:writing-horizontal font-semibold text-gray-600 p-5 block"
          :class="{ 'text-gray-900': active }"
          >學歷</a
        >
      </li>
      <li>
        <a
          href="#Experience"
          class="writing-vertical-lr lg:writing-horizontal font-semibold text-gray-600 p-5 block"
          :class="{ 'text-gray-900': active }"
          >經歷</a
        >
      </li>
      <li>
        <a
          href="#JobCondition"
          class="writing-vertical-lr lg:writing-horizontal font-semibold text-gray-600 p-5 block"
          :class="{ 'text-gray-900': active }"
          >條件</a
        >
      </li>
      <li>
        <a
          href="#Language"
          class="writing-vertical-lr lg:writing-horizontal font-semibold text-gray-600 p-5 block"
          :class="{ 'text-gray-900': active }"
          >語文</a
        >
      </li>
      <li>
        <a
          href="#Skill"
          class="writing-vertical-lr lg:writing-horizontal font-semibold text-gray-600 p-5 block"
          :class="{ 'text-gray-900': active }"
          >專長</a
        >
      </li>
      <li>
        <a
          href="#Bio"
          class="writing-vertical-lr lg:writing-horizontal font-semibold text-gray-600 p-5 block"
          :class="{ 'text-gray-900': active }"
          >自傳</a
        >
      </li>
    </ul>
  </aside>
</template>

<script>
export default {
  name: 'Aside',
  data() {
    return {
      active: false,
    };
  },
  methods: {
    anchorHandler() {
      console.log(event);
      console.log(event.target);
      console.log(this.$refs.Info);
      let a = document.querySelector('#Info');
      console.log(a);
      // var anchor = document.querySelector('a[href="#dest"]');
      // var target = document.getElementById('dest');
      // anchor.addEventListener('click', function (e) {
      //   if (window.scrollTo) {
      //     e.preventDefault();
      //     window.scrollTo({ behavior: 'smooth', top: target.offsetTop });
      //   }
      // });
    },
  },
  mounted() {
    const a = document.querySelector('#Info');
    console.log(a.offsetTop);
  },
};
</script>

<style>
</style>
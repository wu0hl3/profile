<template>
  <section
    class="bg-gray-50 rounded-md shadow-lg divide-y divide-gray-400 m-5 p-3 lg:p-10 lg:px-20"
  >
    <h3 class="font-bold text-2xl m-3"><slot name="title">i am title</slot></h3>
    <div class="mx-3 py-3"><slot name="content">i am content</slot></div>
  </section>
</template>

<script>
export default {
  name: 'Section',
};
</script>

<style>
</style>
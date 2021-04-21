<template>
  <div class="flex space-x-4 my-1">
    <h4 class="text-lg font-semibold flex-shrink-0">{{ title }}</h4>
    <div class="text-lg">{{ content }}</div>
  </div>
</template>

<script>
export default {
  name: 'OneLine',
  props: ['title', 'content'],
};
</script>

<style>
</style>